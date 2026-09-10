/**
 * MAP 数学自适应测试平台 - 互动逻辑
 * --------------------------------
 * 主要功能：
 *   1. 模式切换（首页/练习/自适应/错题/统计/关于）
 *   2. 练习模式：按领域/难度筛选 + 顺序/打乱
 *   3. 自适应模式：答对升难度，答错降难度 + RIT 估计
 *   4. 错题收集与回顾
 *   5. 学习统计（按领域/难度）
 *   6. localStorage 持久化
 */

// ============== 状态管理 ==============
const STORAGE_KEY = 'map_test_platform_v1';

const State = {
  mode: 'home',
  // 练习模式
  practice: {
    filteredQuestions: [],
    currentIndex: 0,
    correctCount: 0,
    answeredSet: new Set()
  },
  // 自适应模式
  adaptive: {
    currentLevel: 3,         // 初始 Level 3（RIT 210-220）
    questionsAnswered: [],
    currentQuestion: null,
    isActive: false,
    targetQuestions: 15
  },
  // 用户数据
  data: {
    history: [],         // 测试记录
    wrongQuestions: [],  // 错题集
    totalAttempted: 0,
    totalCorrect: 0
  }
};

// ============== 存储 ==============
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      Object.assign(State.data, data);
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
  }
}

function saveState() {
  try {
    const dataToSave = {
      history: State.data.history.slice(-20),
      wrongQuestions: State.data.wrongQuestions.slice(-100),
      totalAttempted: State.data.totalAttempted,
      totalCorrect: State.data.totalCorrect
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  } catch (e) {
    console.warn('Failed to save state:', e);
  }
}

// ============== 工具函数 ==============
function $(selector) { return document.querySelector(selector); }
function $$(selector) { return document.querySelectorAll(selector); }

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function getDomainName(code) {
  return DOMAIN_NAMES[code] || code;
}

// 难度分级 RIT 范围
const LEVEL_RANGES = {
  1: 'RIT 180-195',
  2: 'RIT 195-210',
  3: 'RIT 210-220',
  4: 'RIT 220-230',
  5: 'RIT 230+ (MAP 最高水平)',
  6: 'RIT 240+ (Pre-Calc/高中拓展)'
};

function getLevelRange(level) {
  return LEVEL_RANGES[level] || '?';
}

function getLevelName(level) {
  if (level === 6) return 'Level 6 (Pre-Calc)';
  return `Level ${level}`;
}

function getRITFromLevel(level) {
  // 简化的 RIT 中点估算
  const map = { 1: 187, 2: 202, 3: 215, 4: 225, 5: 235, 6: 245 };
  return map[level] || 215;
}

function nowISO() {
  return new Date().toISOString();
}

function fmtDate(iso) {
  const d = new Date(iso);
  return `${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
}

function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function filterQuestions(domain = 'all', level = 'all', grade = 'all') {
  return QUESTIONS.filter(q => {
    if (domain !== 'all' && q.domain !== domain) return false;
    if (level !== 'all' && String(q.level) !== String(level)) return false;
    if (grade !== 'all' && String(q.grade) !== String(grade)) return false;
    return true;
  });
}

// ============== 模式切换 ==============
function switchMode(mode) {
  State.mode = mode;
  $$('.view').forEach(v => v.classList.remove('active'));
  $$('.nav-btn').forEach(b => b.classList.remove('active'));
  $(`#view-${mode}`).classList.add('active');
  $$(`.nav-btn[data-mode="${mode}"]`).forEach(b => b.classList.add('active'));

  // 触发对应模式初始化
  switch (mode) {
    case 'home': renderHome(); break;
    case 'practice': initPractice(); break;
    case 'adaptive': initAdaptive(); break;
    case 'review': renderReview(); break;
    case 'stats': renderStats(); break;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============== 首页 ==============
function renderHome() {
  const total = QUESTIONS.length;
  const done = State.data.totalAttempted;
  const acc = done > 0 ? Math.round(State.data.totalCorrect / done * 100) : null;
  const lastRit = State.data.history.length > 0
    ? State.data.history[State.data.history.length - 1].rit
    : null;

  $('#stat-total').textContent = total;
  $('#stat-done').textContent = done;
  $('#stat-accuracy').textContent = acc === null ? '—' : `${acc}%`;
  $('#stat-rit').textContent = lastRit === null ? '—' : `${lastRit}`;
}

// ============== 练习模式 ==============
function initPractice() {
  const domain = $('#filter-domain').value;
  const level = $('#filter-level').value;
  const grade = $('#filter-grade') ? $('#filter-grade').value : 'all';
  State.practice.filteredQuestions = filterQuestions(domain, level, grade);
  State.practice.currentIndex = 0;
  State.practice.correctCount = 0;
  State.practice.answeredSet = new Set();
  renderPractice();
}

function renderPractice() {
  const total = State.practice.filteredQuestions.length;
  if (total === 0) {
    $('#practice-question').innerHTML = '<div class="empty-state">没有符合条件的题目。试试其他筛选条件。</div>';
    $('#practice-progress').textContent = '共 0 题';
    return;
  }
  const q = State.practice.filteredQuestions[State.practice.currentIndex];
  renderQuestion(q, 'practice');
  const correctCount = State.practice.answeredSet.size === 0 ? 0
    : Array.from(State.practice.answeredSet).filter(idx => {
      const qq = State.practice.filteredQuestions[idx];
      return qq._correct === true;
    }).length;
  const answered = State.practice.answeredSet.size;
  const acc = answered > 0 ? Math.round(correctCount / answered * 100) : 0;
  $('#practice-progress').textContent = `第 ${State.practice.currentIndex + 1} 题 / 共 ${total} 题`;
  $('#practice-accuracy').textContent = `已答 ${answered} | 正确率 ${acc}%`;
}

function renderQuestion(q, mode) {
  const html = `
    <div class="question-meta">
      <span class="question-badge badge-domain">${getDomainName(q.domain)}</span>
      <span class="question-badge badge-level">${getLevelName(q.level)}</span>
      <span class="question-badge badge-rit">RIT ${getLevelRange(q.level)}</span>
    </div>
    <div class="question-stem">${escapeHtml(q.stem)}</div>
    <div class="options" id="options-list">
      ${q.options.map((opt, i) => `
        <button class="option" data-idx="${i}">
          <span class="option-label">${escapeHtml(opt.label)}</span>
          <span class="option-text">${escapeHtml(opt.text)}</span>
        </button>
      `).join('')}
    </div>
    <div class="question-actions">
      <span class="question-timer" id="question-timer">⏱ 0s</span>
      <button class="submit-btn" id="submit-btn" disabled>提交答案</button>
    </div>
  `;
  $(`#${mode}-question`).innerHTML = html;

  // ===== 教学分析：行为数据采集 =====
  const analytics = {
    qid: q.id,
    startTime: Date.now(),
    endTime: null,
    durationMs: 0,
    firstInteractionMs: null,
    interactions: [],
    hovers: [],
    selections: [],
    finalAnswer: null,
    changedAnswer: false,
    hoverCount: 0,
    changeCount: 0,
  };
  const hoverState = {};

  // 实时更新计时器
  const timerEl = $('#question-timer');
  let timerInterval = setInterval(() => {
    if (!timerEl) return;
    const elapsed = Math.floor((Date.now() - analytics.startTime) / 1000);
    timerEl.textContent = `⏱ ${elapsed}s`;
  }, 1000);

  const recordInteraction = (type, btn) => {
    const idx = parseInt(btn.dataset.idx);
    const label = btn.querySelector('.option-label')?.textContent?.trim() || '';
    const t = Date.now() - analytics.startTime;
    analytics.interactions.push({ type, idx, label, t });
    if (analytics.firstInteractionMs === null) {
      analytics.firstInteractionMs = t;
    }
  };

  // 注：上面 html 字符串中已经对用户可控字段 (q.stem, opt.label, opt.text)
  // 做了 escapeHtml 处理，QA 已校验 < > & " ' 等字符安全。

  let selectedIdx = null;
  // 事件委托：所有交互通过父容器 #options-list 监听
  const optionsContainer = $$('#options-list')[0];
  if (optionsContainer) {
    // 鼠标悬停 (考虑过的选项)
    optionsContainer.onmouseover = (e) => {
      const btn = e.target.closest('.option');
      if (!btn || btn.classList.contains('disabled')) return;
      const idx = parseInt(btn.dataset.idx);
      if (hoverState[idx]) return;
      hoverState[idx] = { startT: Date.now() - analytics.startTime };
      recordInteraction('hover', btn);
      if (!analytics.hovers.includes(idx)) {
        analytics.hovers.push(idx);
        analytics.hoverCount = analytics.hovers.length;
      }
    };
    // 鼠标移开 (累计悬停时长)
    optionsContainer.onmouseout = (e) => {
      const btn = e.target.closest('.option');
      if (!btn) return;
      const idx = parseInt(btn.dataset.idx);
      if (hoverState[idx]) {
        hoverState[idx].endT = Date.now() - analytics.startTime;
        hoverState[idx] = null;
      }
    };
    // 键盘焦点 (Tab 键浏览)
    optionsContainer.onfocusin = (e) => {
      const btn = e.target.closest('.option');
      if (!btn || btn.classList.contains('disabled')) return;
      const idx = parseInt(btn.dataset.idx);
      if (!hoverState[idx]) {
        hoverState[idx] = { startT: Date.now() - analytics.startTime, byKeyboard: true };
        recordInteraction('focus', btn);
        if (!analytics.hovers.includes(idx)) {
          analytics.hovers.push(idx);
          analytics.hoverCount = analytics.hovers.length;
        }
      }
    };
    // 点击选项 (选择 + 改答案检测)
    optionsContainer.onclick = (e) => {
      const btn = e.target.closest('.option');
      if (!btn || btn.classList.contains('disabled')) return;
      $$('#options-list .option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedIdx = parseInt(btn.dataset.idx);
      recordInteraction('select', btn);
      const prevLast = analytics.selections[analytics.selections.length - 1];
      if (prevLast !== undefined && prevLast !== selectedIdx) {
        analytics.changedAnswer = true;
        analytics.changeCount++;
      }
      analytics.selections.push(selectedIdx);
      $('#submit-btn').disabled = false;
    };
  }

  $('#submit-btn').addEventListener('click', () => {
    if (selectedIdx === null) return;
    clearInterval(timerInterval);
    analytics.endTime = Date.now();
    analytics.durationMs = analytics.endTime - analytics.startTime;
    analytics.finalAnswer = selectedIdx;
    submitAnswer(q, selectedIdx, mode, analytics);
  });
}

function submitAnswer(q, selectedIdx, mode, analytics) {
  // 标记选项状态
  const correctIdx = q.answer;
  const isCorrect = selectedIdx === correctIdx;
  const options = $$('#options-list .option');
  options.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === correctIdx) btn.classList.add('correct');
    if (i === selectedIdx && !isCorrect) btn.classList.add('wrong');
  });
  $('#submit-btn').disabled = true;

  // 记录数据
  State.data.totalAttempted++;
  if (isCorrect) State.data.totalCorrect++;

  if (mode === 'practice') {
    q._correct = isCorrect;
    q._analytics = analytics;
    State.practice.answeredSet.add(State.practice.currentIndex);
  } else if (mode === 'adaptive') {
    State.adaptive.questionsAnswered.push({
      qid: q.id,
      level: q.level,
      correct: isCorrect,
      time: nowISO(),
      analytics: analytics || null
    });
  }

  // 累计答过的题目行为数据
  if (!State.data.questionLogs) State.data.questionLogs = [];
  if (analytics) {
    State.data.questionLogs.push({
      mode,
      qid: q.id,
      domain: q.domain,
      level: q.level,
      correct: isCorrect,
      ...analytics
    });
    // 保留最近 500 条避免 localStorage 爆掉
    if (State.data.questionLogs.length > 500) {
      State.data.questionLogs = State.data.questionLogs.slice(-500);
    }
  }

  // 错题收集
  if (!isCorrect) {
    const exists = State.data.wrongQuestions.find(w => w.qid === q.id);
    if (!exists) {
      State.data.wrongQuestions.push({
        qid: q.id,
        domain: q.domain,
        level: q.level,
        stem: q.stem,
        userAnswer: selectedIdx,
        correctAnswer: correctIdx,
        time: nowISO()
      });
    } else {
      // 更新最近一次错题
      exists.userAnswer = selectedIdx;
      exists.time = nowISO();
    }
  } else {
    // 答对后从错题中移除（如果存在）
    const idx = State.data.wrongQuestions.findIndex(w => w.qid === q.id);
    if (idx > -1) State.data.wrongQuestions.splice(idx, 1);
  }

  saveState();
  showFeedback(q, selectedIdx, correctIdx, isCorrect, mode);
}

function showFeedback(q, userIdx, correctIdx, isCorrect, mode) {
  const title = isCorrect ? '✓ 答对了！' : '✗ 答错了';
  const body = `
    <div class="${isCorrect ? 'feedback-correct' : 'feedback-wrong'}">
      <div class="feedback-icon">${isCorrect ? '🎉' : '💡'}</div>
      <div>
        <div class="feedback-title">${title}</div>
        <div>${isCorrect ? '恭喜你，继续保持！' : '别灰心，看完讲解再做一次'}</div>
      </div>
    </div>
    <div class="explanation">
      <h4>📘 详细讲解</h4>
      ${q.explanation}
    </div>
    <p style="margin-top: 12px; color: var(--color-text-muted); font-size: 13px;">
      <strong>领域：</strong>${getDomainName(q.domain)} · 
      <strong>难度：</strong>${getLevelName(q.level)} (RIT ${q.rit}) ·
      <strong>正确答案：</strong>${escapeHtml(q.options[correctIdx].label)}. ${escapeHtml(q.options[correctIdx].text)}
    </p>
  `;
  $('#modal-title').textContent = isCorrect ? '✅ 答题正确' : '❌ 答题错误';
  $('#modal-body').innerHTML = body;
  $('#modal-next').textContent = mode === 'adaptive' && State.adaptive.questionsAnswered.length >= State.adaptive.targetQuestions
    ? '查看结果'
    : '下一题 →';
  $('#modal-overlay').classList.add('active');
}

function nextQuestion() {
  $('#modal-overlay').classList.remove('active');
  if (State.mode === 'practice') {
    State.practice.currentIndex++;
    if (State.practice.currentIndex >= State.practice.filteredQuestions.length) {
      State.practice.currentIndex = 0;
      showModal('练习完成！', `<p>你已完成所有 ${State.practice.filteredQuestions.length} 道题。</p><p>继续：</p><ul><li>点击"下一题"重新开始</li><li>切换筛选条件</li><li>进入"自适应测试"评估水平</li></ul>`);
    }
    renderPractice();
  } else if (State.mode === 'adaptive') {
    if (State.adaptive.questionsAnswered.length >= State.adaptive.targetQuestions) {
      finishAdaptive();
    } else {
      // 自适应出下一题
      const nextQ = pickAdaptiveQuestion();
      if (!nextQ) {
        finishAdaptive();
        return;
      }
      State.adaptive.currentQuestion = nextQ;
      renderQuestion(nextQ, 'adaptive');
      updateAdaptiveStatus();
    }
  }
}

function showModal(title, bodyHtml) {
  $('#modal-title').textContent = title;
  $('#modal-body').innerHTML = bodyHtml;
  $('#modal-next').textContent = '知道了';
  $('#modal-overlay').classList.add('active');
}

// ============== 自适应模式 ==============
function initAdaptive() {
  State.adaptive = {
    currentLevel: 3,
    questionsAnswered: [],
    currentQuestion: null,
    isActive: true,
    targetQuestions: 15
  };
  const firstQ = pickAdaptiveQuestion();
  if (!firstQ) {
    showModal('题库不足', '<p>当前筛选条件下没有足够题目，请扩大范围或切换到练习模式。</p>');
    return;
  }
  State.adaptive.currentQuestion = firstQ;
  renderQuestion(firstQ, 'adaptive');
  updateAdaptiveStatus();
}

function pickAdaptiveQuestion() {
  // 在当前 Level 范围 ±1 内选题，避免重复
  // 自适应模式不上 Level 6 (Pre-Calc/高等数学)，那些题只在练习模式可做
  const answeredIds = new Set(State.adaptive.questionsAnswered.map(a => a.qid));
  const candidates = QUESTIONS.filter(q => {
    if (answeredIds.has(q.id)) return false;
    if (q.level >= 6) return false;  // 排除 Level 6 (Pre-Calc)
    return Math.abs(q.level - State.adaptive.currentLevel) <= 1;
  });
  if (candidates.length === 0) {
    // 扩大范围
    return QUESTIONS.find(q => !answeredIds.has(q.id) && q.level < 6) || null;
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function updateAdaptiveStatus() {
  const answered = State.adaptive.questionsAnswered.length;
  const correct = State.adaptive.questionsAnswered.filter(a => a.correct).length;
  const acc = answered > 0 ? Math.round(correct / answered * 100) : 0;
  const estRIT = estimateRIT();
  $('#adaptive-count').textContent = `${answered}/${State.adaptive.targetQuestions}`;
  $('#adaptive-level').textContent = getLevelName(State.adaptive.currentLevel);
  $('#adaptive-acc').textContent = answered > 0 ? `${acc}%` : '—';
  $('#adaptive-rit').textContent = estRIT ? `${estRIT}` : '—';
}

function estimateRIT() {
  if (State.adaptive.questionsAnswered.length < 3) return null;
  // 用最近 5 题的正确率估算
  const recent = State.adaptive.questionsAnswered.slice(-5);
  const avgLevel = recent.reduce((sum, a) => sum + a.level, 0) / recent.length;
  const recentCorrect = recent.filter(a => a.correct).length;
  // 简化估算：当前 Level 中点 ± 调整
  const baseRIT = getRITFromLevel(Math.round(avgLevel));
  const adjust = (recentCorrect / recent.length - 0.5) * 10;
  return Math.round(baseRIT + adjust);
}

function adaptiveAdjust(isCorrect) {
  if (isCorrect) {
    State.adaptive.currentLevel = Math.min(5, State.adaptive.currentLevel + 1);
  } else {
    State.adaptive.currentLevel = Math.max(1, State.adaptive.currentLevel - 1);
  }
}

function finishAdaptive() {
  State.adaptive.isActive = false;
  const total = State.adaptive.questionsAnswered.length;
  const correct = State.adaptive.questionsAnswered.filter(a => a.correct).length;
  const acc = Math.round(correct / total * 100);
  const rit = estimateRIT() || 0;
  const level = Math.max(1, Math.min(5, Math.round((rit - 180) / 13 + 1)));

  // 记录历史
  State.data.history.push({
    time: nowISO(),
    total: total,
    correct: correct,
    acc: acc,
    rit: rit,
    level: level
  });

  saveState();

  // 按领域统计
  const domainStats = {};
  State.adaptive.questionsAnswered.forEach(a => {
    const q = QUESTIONS.find(qq => qq.id === a.qid);
    if (!q) return;
    if (!domainStats[q.domain]) domainStats[q.domain] = { total: 0, correct: 0 };
    domainStats[q.domain].total++;
    if (a.correct) domainStats[q.domain].correct++;
  });

  const body = `
    <div class="stats-section" style="margin-bottom: 16px;">
      <h3>📊 你的测试结果</h3>
      <div class="hero-stats" style="margin-top: 12px;">
        <div class="stat">
          <div class="stat-num">${total}</div>
          <div class="stat-label">总题数</div>
        </div>
        <div class="stat">
          <div class="stat-num">${correct}</div>
          <div class="stat-label">答对</div>
        </div>
        <div class="stat">
          <div class="stat-num">${acc}%</div>
          <div class="stat-label">正确率</div>
        </div>
        <div class="stat">
          <div class="stat-num" style="color: var(--color-success);">${rit}</div>
          <div class="stat-label">估计 RIT</div>
        </div>
      </div>
    </div>

    <div class="stats-section" style="margin-bottom: 16px;">
      <h3>🎯 水平定位</h3>
      <p>你的估计 RIT 分数为 <strong style="font-size: 24px; color: var(--color-primary);">${rit}</strong>，
      对应 <strong>${getLevelName(level)}（${getLevelRange(level)}）</strong>。</p>
      <p style="margin-top: 8px;">${interpretRIT(rit)}</p>
    </div>

    <div class="stats-section" style="margin-bottom: 16px;">
      <h3>📚 按领域表现</h3>
      ${Object.keys(domainStats).length > 0 ? Object.keys(domainStats).map(d => {
        const s = domainStats[d];
        const a = Math.round(s.correct / s.total * 100);
        return `
          <div class="bar-row">
            <div class="bar-label">${getDomainName(d)}</div>
            <div class="bar-track">
              <div class="bar-fill" style="width: ${a}%; background: ${a >= 80 ? 'var(--color-success)' : a >= 60 ? 'var(--color-warning)' : 'var(--color-error)'};"></div>
            </div>
            <div class="bar-value">${s.correct}/${s.total} (${a}%)</div>
          </div>
        `;
      }).join('') : '<p>无数据</p>'}
    </div>

    <div class="stats-section">
      <h3>💡 后续建议</h3>
      <ul style="padding-left: 20px;">
        ${rit >= 230 ? '<li>表现优秀！建议挑战 6-7 年级难度或开始准备 AMC 8。</li>' : ''}
        ${rit >= 215 && rit < 230 ? '<li>表现良好！可以开始接触 AMC 8 题型，目标 18+ 分。</li>' : ''}
        ${rit >= 200 && rit < 215 ? '<li>中等水平。建议强化薄弱领域，参考本测试结果中正确率较低的部分。</li>' : ''}
        ${rit < 200 ? '<li>基础阶段。建议先巩固沪教版 4-5 年级数学，练习袋鼠/SASMO 等入门赛事。</li>' : ''}
        <li>查看"错题回顾"复习做错的题。</li>
        <li>点击"再做一次"可重新评估。</li>
      </ul>
    </div>

    <div class="stats-section">
      <h3>⏱ 做题行为分析</h3>
      ${renderBehaviorAnalytics()}
    </div>
  `;
  $('#result-body').innerHTML = body;
  $('#result-overlay').classList.add('active');
}

// 渲染做题行为分析
function renderBehaviorAnalytics() {
  const logs = (State.data.questionLogs || []).filter(l => l.mode === 'adaptive');
  if (logs.length === 0) {
    return '<p style="color: var(--color-text-secondary);">本次测试未记录到行为数据。</p>';
  }

  // 1. 平均思考时间
  const avgTotal = logs.reduce((s, l) => s + (l.durationMs || 0), 0) / logs.length;
  const avgFirstInteraction = logs.filter(l => l.firstInteractionMs !== null)
    .reduce((s, l) => s + l.firstInteractionMs, 0) / Math.max(1, logs.filter(l => l.firstInteractionMs !== null).length);
  const avgHover = logs.filter(l => l.hovers && l.hovers.length > 0)
    .reduce((s, l) => s + l.hovers.length, 0) / Math.max(1, logs.filter(l => l.hovers && l.hovers.length > 0).length);
  const changeRate = logs.filter(l => l.changedAnswer).length / logs.length * 100;

  // 2. 思考时间 vs 正确率
  const correctLogs = logs.filter(l => l.correct);
  const wrongLogs = logs.filter(l => !l.correct);
  const avgTimeCorrect = correctLogs.length > 0 ? correctLogs.reduce((s, l) => s + l.durationMs, 0) / correctLogs.length : 0;
  const avgTimeWrong = wrongLogs.length > 0 ? wrongLogs.reduce((s, l) => s + l.durationMs, 0) / wrongLogs.length : 0;

  // 3. 犹豫过的"干扰项" - 答错的题里被考虑过但没选的正确选项
  const waveringQuestions = logs.filter(l => l.changedAnswer).map(l => ({
    qid: l.qid,
    hovers: l.hovers,
    selections: l.selections,
    final: l.finalAnswer,
    correct: l.correct,
    durationMs: l.durationMs,
    changeCount: l.changeCount,
  }));

  return `
    <div class="behavior-summary">
      <div class="behavior-row">
        <span class="behavior-label">⏱ 平均总时长</span>
        <span class="behavior-value">${(avgTotal/1000).toFixed(1)}s</span>
      </div>
      <div class="behavior-row">
        <span class="behavior-label">🧠 首次操作决策时间</span>
        <span class="behavior-value">${(avgFirstInteraction/1000).toFixed(1)}s</span>
      </div>
      <div class="behavior-row">
        <span class="behavior-label">👆 平均考虑选项数</span>
        <span class="behavior-value">${avgHover.toFixed(1)} 个</span>
      </div>
      <div class="behavior-row">
        <span class="behavior-label">🔄 改答案率</span>
        <span class="behavior-value">${changeRate.toFixed(0)}%</span>
      </div>
      <div class="behavior-row">
        <span class="behavior-label">✅ 答对平均时长</span>
        <span class="behavior-value">${(avgTimeCorrect/1000).toFixed(1)}s</span>
      </div>
      <div class="behavior-row">
        <span class="behavior-label">❌ 答错平均时长</span>
        <span class="behavior-value">${(avgTimeWrong/1000).toFixed(1)}s</span>
      </div>
    </div>
    ${waveringQuestions.length > 0 ? `
      <div style="margin-top: 12px;">
        <h4 style="font-size: 14px; color: var(--color-text-secondary); margin-bottom: 8px;">🔄 犹豫/改答案的题 (${waveringQuestions.length} 道)</h4>
        <div style="font-size: 13px; color: var(--color-text-secondary); line-height: 1.6;">
          ${waveringQuestions.slice(0, 5).map(w => {
            const labels = w.selections.map(idx => String.fromCharCode(65 + idx));
            return `<div>· 题 ${w.qid}: 选过 <b>${labels.join(' → ')}</b>，${w.changeCount} 次改答案，用时 ${(w.durationMs/1000).toFixed(1)}s</div>`;
          }).join('')}
        </div>
      </div>
    ` : ''}
  `;
}

function interpretRIT(rit) {
  if (rit >= 230) return '你的水平已达到或超过 6 年级 90 百分位，可挑战 AMC 8 较高目标。';
  if (rit >= 220) return '6 年级中等水平，已经超过 80 百分位的同学。';
  if (rit >= 210) return '5-6 年级衔接水平，对应 MAP 校内评估的"on grade level"或更高。';
  if (rit >= 200) return '5 年级中等水平，已达到 50 百分位。建议强化分数、小数、几何领域。';
  if (rit >= 190) return '4-5 年级基础，建议巩固位值、整数运算、基础几何。';
  return '基础阶段，建议系统学习沪教版 4 年级数学。';
}

// ============== 错题回顾 ==============
function renderReview() {
  const list = $('#review-list');
  if (State.data.wrongQuestions.length === 0) {
    list.innerHTML = '';
    $('#review-empty').style.display = 'block';
    return;
  }
  $('#review-empty').style.display = 'none';
  list.innerHTML = State.data.wrongQuestions.slice(-30).reverse().map(w => {
    const q = QUESTIONS.find(qq => qq.id === w.qid);
    if (!q) return '';
    return `
      <div class="review-item">
        <div class="review-item-header">
          <div class="review-item-meta">
            <span class="question-badge badge-domain">${getDomainName(w.domain)}</span>
            <span class="question-badge badge-level">${getLevelName(w.level)}</span>
          </div>
          <div class="review-item-date">${fmtDate(w.time)}</div>
        </div>
        <div class="review-item-stem">${escapeHtml(q.stem)}</div>
        <div class="review-item-answer">
          你的答案：<span style="color: var(--color-error);">${escapeHtml(q.options[w.userAnswer]?.label) || '?'}. ${escapeHtml(q.options[w.userAnswer]?.text) || '无'}</span>
        </div>
        <div class="review-item-answer">
          正确答案：<span style="color: var(--color-success);">${escapeHtml(q.options[w.correctAnswer]?.label) || '?'}. ${escapeHtml(q.options[w.correctAnswer]?.text) || '无'}</span>
        </div>
        <button class="secondary-btn" onclick="reviewExplain('${w.qid}')" style="margin-top: 8px;">查看讲解</button>
      </div>
    `;
  }).join('');
}

function reviewExplain(qid) {
  const q = QUESTIONS.find(qq => qq.id === qid);
  if (!q) return;
  $('#modal-title').textContent = '📘 错题讲解';
  $('#modal-body').innerHTML = `
    <div class="question-stem" style="margin-bottom: 12px;">${escapeHtml(q.stem)}</div>
    <div class="explanation">
      <h4>答案</h4>
      <p>${escapeHtml(q.options[q.answer].label)}. ${escapeHtml(q.options[q.answer].text)}</p>
      <h4 style="margin-top: 12px;">📘 详细讲解</h4>
      ${q.explanation}
    </div>
  `;
  $('#modal-next').textContent = '关闭';
  $('#modal-overlay').classList.add('active');
}
window.reviewExplain = reviewExplain;

// ============== 学习统计 ==============
function renderStats() {
  // 按领域正确率
  const domainStats = {};
  QUESTIONS.forEach(q => {
    if (!domainStats[q.domain]) domainStats[q.domain] = { total: 0, correct: 0 };
  });
  // 简化：基于错题集反推
  State.data.wrongQuestions.forEach(w => {
    if (domainStats[w.domain]) domainStats[w.domain].total++;
  });
  // 这里简化处理：基于已答题目数
  const totalAttempted = State.data.totalAttempted;
  const totalCorrect = State.data.totalCorrect;
  const overallAcc = totalAttempted > 0 ? Math.round(totalCorrect / totalAttempted * 100) : 0;

  $('#domain-chart').innerHTML = `
    <p style="font-size: 13px; color: var(--color-text-muted); margin-bottom: 12px;">
      综合正确率：${overallAcc}% （${totalCorrect}/${totalAttempted}）
    </p>
    ${Object.keys(domainStats).map(d => {
      // 简化：用错题数反推每领域正确率
      const wrongInDomain = State.data.wrongQuestions.filter(w => w.domain === d).length;
      // 这里没有 per-domain 总数，只能显示错题数
      return `
        <div class="bar-row">
          <div class="bar-label">${getDomainName(d)}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${Math.min(100, wrongInDomain * 20)}%; background: var(--color-error);"></div>
          </div>
          <div class="bar-value">${wrongInDomain} 个错题</div>
        </div>
      `;
    }).join('')}
  `;

  // 按 RIT 难度
  const levelStats = {};
  for (let i = 1; i <= 5; i++) levelStats[i] = 0;
  State.data.wrongQuestions.forEach(w => {
    if (levelStats[w.level] !== undefined) levelStats[w.level]++;
  });
  $('#level-chart').innerHTML = `
    ${Object.keys(levelStats).map(l => `
      <div class="bar-row">
        <div class="bar-label">${getLevelName(l)} (RIT ${getLevelRange(l)})</div>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${Math.min(100, levelStats[l] * 20)}%; background: var(--color-error);"></div>
        </div>
        <div class="bar-value">${levelStats[l]} 个错题</div>
      </div>
    `).join('')}
  `;

  // 历史记录
  const history = State.data.history.slice(-10).reverse();
  $('#history-list').innerHTML = history.length > 0 ? history.map(h => `
    <div class="history-row">
      <span class="history-date">${fmtDate(h.time)}</span>
      <span class="history-acc">${h.correct}/${h.total} (${h.acc}%)</span>
      <span class="history-rit">RIT ${h.rit}</span>
    </div>
  `).join('') : '<p style="color: var(--color-text-muted);">还没有测试记录。开始"自适应测试"以记录结果。</p>';
}

// ============== 事件绑定 ==============
function bindEvents() {
  // 顶部导航
  $$('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn.dataset.mode));
  });

  // 模式卡片
  $$('.mode-card').forEach(card => {
    card.addEventListener('click', () => switchMode(card.dataset.mode));
  });

  // 练习模式筛选
  $('#filter-domain').addEventListener('change', initPractice);
  $('#filter-level').addEventListener('change', initPractice);
  var gradeEl = document.getElementById('filter-grade');
  if (gradeEl) gradeEl.addEventListener('change', initPractice);
  $('#practice-shuffle').addEventListener('click', () => {
    State.practice.filteredQuestions = shuffle(State.practice.filteredQuestions);
    State.practice.currentIndex = 0;
    State.practice.answeredSet = new Set();
    renderPractice();
  });

  // 练习模式导航
  $('#practice-prev').addEventListener('click', () => {
    if (State.practice.currentIndex > 0) {
      State.practice.currentIndex--;
      renderPractice();
    }
  });
  $('#practice-next').addEventListener('click', () => {
    if (State.practice.currentIndex < State.practice.filteredQuestions.length - 1) {
      State.practice.currentIndex++;
      renderPractice();
    } else {
      showModal('已是最后一题', '<p>可以：</p><ul><li>点击"上一题"返回</li><li>切换筛选条件</li><li>开始"自适应测试"评估整体水平</li></ul>');
    }
  });
  $('#practice-skip').addEventListener('click', () => {
    $('#practice-next').click();
  });
  $('#practice-mark').addEventListener('click', () => {
    const q = State.practice.filteredQuestions[State.practice.currentIndex];
    const existingIdx = State.data.wrongQuestions.findIndex(w => w.qid === q.id);
    if (existingIdx > -1) {
      State.data.wrongQuestions.splice(existingIdx, 1);
      showModal('已取消收藏', `<p>题目 ${q.id} 已从错题集移除。</p>`);
    } else {
      State.data.wrongQuestions.push({
        qid: q.id,
        domain: q.domain,
        level: q.level,
        stem: q.stem,
        userAnswer: -1,
        correctAnswer: q.answer,
        time: nowISO(),
        marked: true
      });
      showModal('已收藏', `<p>题目 ${q.id} 已加入错题集，可在"错题回顾"中查看。</p>`);
    }
    saveState();
  });

  // 弹窗
  $('#modal-close').addEventListener('click', () => {
    $('#modal-overlay').classList.remove('active');
  });
  $('#modal-next').addEventListener('click', () => {
    if (State.mode === 'practice') {
      // 答对后自动下一题，答错也下一题
      // 先关闭弹窗（修复点击下一题不消失的 bug）
      $('#modal-overlay').classList.remove('active');
      State.practice.currentIndex++;
      if (State.practice.currentIndex >= State.practice.filteredQuestions.length) {
        State.practice.currentIndex = 0;
        showModal('练习完成！', '<p>你已完成当前筛选下的所有题目。</p><p>可以切换筛选条件继续，或进入"自适应测试"评估水平。</p>');
        return;
      }
      renderPractice();
    } else if (State.mode === 'adaptive') {
      // 自适应调整
      // 先关闭弹窗
      $('#modal-overlay').classList.remove('active');
      const lastQ = State.adaptive.questionsAnswered[State.adaptive.questionsAnswered.length - 1];
      if (lastQ) adaptiveAdjust(lastQ.correct);
      if (State.adaptive.questionsAnswered.length >= State.adaptive.targetQuestions) {
        finishAdaptive();
      } else {
        nextQuestion();
      }
    } else if (State.mode === 'review') {
      $('#modal-overlay').classList.remove('active');
    } else {
      $('#modal-overlay').classList.remove('active');
    }
  });

  // 结果弹窗
  $('#result-close').addEventListener('click', () => {
    $('#result-overlay').classList.remove('active');
  });
  $('#result-restart').addEventListener('click', () => {
    $('#result-overlay').classList.remove('active');
    initAdaptive();
  });
  $('#result-detail').addEventListener('click', () => {
    $('#result-overlay').classList.remove('active');
    switchMode('stats');
  });

  // 清空数据
  $('#stats-clear').addEventListener('click', () => {
    if (confirm('确定清空所有学习数据吗？此操作不可恢复。')) {
      State.data = {
        history: [],
        wrongQuestions: [],
        totalAttempted: 0,
        totalCorrect: 0
      };
      saveState();
      renderStats();
      renderHome();
      alert('已清空所有学习数据。');
    }
  });

  // 点击弹窗外部关闭
  var modalEl = document.getElementById('modal-overlay');
  modalEl.addEventListener('click', function(e) {
    if (e.target === modalEl) modalEl.classList.remove('active');
  });
  var resultEl = document.getElementById('result-overlay');
  resultEl.addEventListener('click', function(e) {
    if (e.target === resultEl) resultEl.classList.remove('active');
  });
}

// ============== 初始化 ==============
function init() {
  console.log('[MAP v2] init() called');
  try {
    if (typeof QUESTIONS === 'undefined' || !Array.isArray(QUESTIONS) || QUESTIONS.length === 0) {
      throw new Error('题库未加载（QUESTIONS 是空数组或未定义）。可能 questions.js 加载失败，请检查网络或刷新页面。');
    }
    loadState();
    bindEvents();
    renderHome();
    console.log('[MAP v2] ✓ 初始化成功，题库总数：', QUESTIONS.length);
    console.log('[MAP v2] 状态：', State.data);
  } catch (e) {
    console.error('[MAP v2] ✗ 初始化失败：', e);
    // 显示用户可见的错误信息
    const statTotal = document.getElementById('stat-total');
    if (statTotal) statTotal.textContent = '!';
    const statDone = document.getElementById('stat-done');
    if (statDone) statDone.textContent = '!';
    // 在 hero 区域显示错误
    const hero = document.querySelector('.hero');
    if (hero) {
      const errBox = document.createElement('div');
      errBox.style.cssText = 'background: #fee; border: 2px solid #c00; color: #900; padding: 16px; margin: 16px 0; border-radius: 8px; font-size: 14px;';
      errBox.innerHTML = '<strong>⚠ 题库加载失败</strong><br/>' + e.message + '<br/><br/><strong>解决方法：</strong><br/>1. 按 <kbd>Ctrl+Shift+R</kbd> (Windows) 或 <kbd>Cmd+Shift+R</kbd> (Mac) 强制刷新<br/>2. 打开浏览器开发者工具 (F12) → Console 查看详细错误<br/>3. 检查网络连接，确保 questions.js 能正常加载';
      hero.appendChild(errBox);
    }
  }
}

// DOM ready - 用 load 而非 DOMContentLoaded，确保 questions.js 加载完
// (questions.js 有 700KB+，DOMContentLoaded 触发时可能还没下载完)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    // 再等所有资源 (含 questions.js) 加载完成
    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init);
    }
  });
} else if (document.readyState === 'complete') {
  init();
} else {
  init();
}
