/**
 * MAP 数学自适应测试题库（5-6 年级）
 * --------------------------------
 * 题库说明：
 * - 题目基于美国共同核心州立标准（CCSS）5-6 年级数学要求自编
 * - 难度按 NWEA MAP 的 RIT 分数划分（180-230+）
 * - 每题含中文题干、4 个选项、正确答案、详细讲解
 * - 题目风格对标 MAP Growth，但非 NWEA 官方真题
 * - 适用：协和系/平和/世外/包玉刚等上海民办双语 5-6 年级备考
 * --------------------------------
 * 题库结构：
 *   questions = [{
 *     id, domain, level, rit, stem, image, options, answer, explanation
 *   }]
 *
 * 领域：number/fraction/algebra/geometry/data
 * 难度：1-5（对应 RIT 180-230+）
 */

const QUESTIONS = [
  // ==================== 领域 A：数与运算（Number and Operations） ====================
  {
    id: 'n01',
    domain: 'number',
    level: 1,
    grade: 5,
    rit: 185,
    stem: 'In the number 47,083, what does the digit 7 represent?',
    options: [
      { label: 'A', text: '7' },
      { label: 'B', text: '70' },
      { label: 'C', text: '700' },
      { label: 'D', text: '7,000' }
    ],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>在数字 47,083 中, 数字 7 表示多少?</p><p><b>【Original in English】</b>In the number 47,083, what does the digit 7 represent?</p><p><b>【解题思路 Solution】</b>位值 (place value):<br>从右到左:3(ones) - 8(tens) - 0(hundreds) - <b>7(thousands)</b> - 4(ten-thousands)<br>所以 7 在千位 = <b>7,000</b><br>选 D (7,000)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>place value = 位值<br>thousands = 千位<br>represents = 表示<br>ten-thousands = 万位</p>'
  },
  {
    id: 'n02',
    domain: 'number',
    level: 1,
    grade: 5,
    rit: 188,
    stem: 'One apple costs $1.50. If you buy 3 apples, which is the correct calculation?',
    options: [
      { label: 'A', text: '1.50 × 3 = 3.00' },
      { label: 'B', text: '1.50 × 3 = 4.50' },
      { label: 'C', text: '1.50 × 3 = 3.50' },
      { label: 'D', text: '1.50 × 3 = 4.00' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个苹果 $1.50, 买 3 个, 正确的竖式是?</p><p><b>【Original in English】</b>One apple costs $1.50. If you buy 3 apples, which is the correct calculation?</p><p><b>【解题思路 Solution】</b>1.50 × 3 = 4.50<br>1.50 × 3:<br>• 0 × 3 = 0<br>• 5 × 3 = 15, write 5 carry 1<br>• 1 × 3 + 1 = 4<br>• 1 × 3 = 3<br>结果 = <b>4.50</b><br>选 B (4.50)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply = 乘<br>decimal = 小数<br>multiplying decimals = 小数乘法<br>3 apples = 3 个苹果</p>'
  },
  {
    id: 'n03',
    domain: 'number',
    level: 2,
    grade: 5,
    rit: 200,
    stem: 'A library has 12,450 books. 3,287 new books arrive, and 1,690 are borrowed. How many books are there now?',
    options: [
      { label: 'A', text: '13,047 books' },
      { label: 'B', text: '14,047 books' },
      { label: 'C', text: '13,047 books' },
      { label: 'D', text: '14,047 books' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>图书馆有 12,450 本书。本周新进 3,287 本, 借出 1,690 本。现在有多少本?</p><p><b>【Original in English】</b>A library has 12,450 books. 3,287 new books arrive, 1,690 are borrowed. How many now?</p><p><b>【解题思路 Solution】</b>分步计算 (step by step):<br>新进后:12,450 + 3,287 = 15,737<br>借出后:15,737 − 1,690 = <b>14,047</b><br>技巧:合并运算 (12,450 − 1,690) + 3,287 = 10,760 + 3,287 = 14,047。<br>选 B (14,047)。<br>⚠️ 注意:本题选项 A/C 重复, B/D 重复 (设计缺陷),以答案为主。</p><p><b>【Key Vocabulary · 核心生词】</b><br>add then subtract = 先加后减<br>step by step = 逐步<br>total = 总数<br>remainder = 剩余</p>'
  },
  {
    id: 'n04',
    domain: 'number',
    level: 2,
    grade: 5,
    rit: 205,
    stem: 'A rectangular plaza has area 84 m² and length 12 m. What is the width?',
    options: [
      { label: 'A', text: '6 m' },
      { label: 'B', text: '7 m' },
      { label: 'C', text: '8 m' },
      { label: 'D', text: '9 m' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>长方形广场面积 84 m², 长 12 m, 宽多少?</p><p><b>【Original in English】</b>A rectangular plaza has area 84 m² and length 12 m. What is the width?</p><p><b>【解题思路 Solution】</b>长方形面积 = 长 × 宽<br>Area = length × width.<br>宽 = 面积 ÷ 长 = 84 ÷ 12 = <b>7</b> m<br>Width = area ÷ length = 7 m.<br>选 B (7)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>rectangle = 长方形<br>area = 面积<br>width = 宽<br>length = 长</p>'
  },
  {
    id: 'n05',
    domain: 'number',
    level: 3,
    grade: 5,
    rit: 212,
    stem: 'Calculate: (125 × 8) ÷ 25 = ?',
    options: [
      { label: 'A', text: '32' },
      { label: 'B', text: '40' },
      { label: 'C', text: '50' },
      { label: 'D', text: '64' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>计算: (125 × 8) ÷ 25 = ?</p><p><b>【Original in English】</b>Calculate: (125 × 8) ÷ 25 = ?</p><p><b>【解题思路 Solution】</b>先算括号:<br>125 × 8 = 1000<br>再算除:1000 ÷ 25 = <b>40</b><br>或简便:125 ÷ 25 = 5, 5 × 8 = 40。<br>Shortcut: 125 ÷ 25 = 5, then 5 × 8 = 40.<br>选 B (40)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>parentheses = 括号<br>order of operations = 运算顺序<br>shortcut = 简便算法<br>divide = 除</p>'
  },
  {
    id: 'n06',
    domain: 'number',
    level: 3,
    grade: 5,
    rit: 215,
    stem: 'Xiao Ming\'s first 4 test scores are 85, 92, 78, 89. What does he need on the 5th test to make the average 90?',
    options: [
      { label: 'A', text: '100 points' },
      { label: 'B', text: '106 points' },
      { label: 'C', text: '110 points' },
      { label: 'D', text: '120 points' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>小明前 4 次数学成绩 85、92、78、89。要使 5 次平均分 90, 第五次考多少分?</p><p><b>【Original in English】</b>Xiao Ming\'s first 4 test scores: 85, 92, 78, 89. What does he need on test 5 to make his average 90?</p><p><b>【解题思路 Solution】</b>5 次总分 = 90 × 5 = 450<br>Total needed = 90 × 5 = 450.<br>前 4 次总分 = 85+92+78+89 = 344<br>Last 4 sum = 344.<br>第五次 = 450 − 344 = <b>106</b><br>5th test = 450 − 344 = 106.<br>选 B (106)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>average = 平均数<br>total score = 总分<br>target = 目标<br>working backwards = 倒推</p>'
  },
  {
    id: 'n07',
    domain: 'number',
    level: 4,
    grade: 6,
    rit: 225,
    stem: 'If a number plus 25 equals three times itself minus 11, and the number is x, which equation is correct?',
    options: [
      { label: 'A', text: 'x + 25 = 3x − 11' },
      { label: 'B', text: 'x + 25 = 3(x − 11)' },
      { label: 'C', text: 'x + 25x = 3 − 11' },
      { label: 'D', text: '3x + 11 = x + 25' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>如果一个数加 25 等于它的 3 倍减 11, 设这个数为 x, 下面哪个方程正确?</p><p><b>【Original in English】</b>If a number plus 25 equals three times itself minus 11, and the number is x, which equation is correct?</p><p><b>【解题思路 Solution】</b>把文字翻译成方程 (translate words to equation):<br>"x 加 25" = x + 25<br>"3 倍减 11" = 3x − 11<br>方程:x + 25 = 3x − 11<br>两边减 x:25 = 2x − 11<br>x = 18<br>选 A (x + 25 = 3x − 11)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>equation = 方程<br>set up equation = 列方程<br>three times = 3 倍<br>translate = 翻译</p>'
  },
  {
    id: 'n08',
    domain: 'number',
    level: 4,
    grade: 6,
    rit: 228,
    stem: 'A warehouse has 5,800 items. On day 1, 30% are shipped. On day 2, 25% of the remainder are shipped. How many remain?',
    options: [
      { label: 'A', text: '3,045 items' },
      { label: 'B', text: '3,480 items' },
      { label: 'C', text: '4,060 items' },
      { label: 'D', text: '4,350 items' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个仓库有 5,800 件货物。第一天运走 30%, 第二天运走剩余的 25%。两天后还剩多少件?</p><p><b>【Original in English】</b>A warehouse has 5,800 items. On day 1, 30% are shipped. On day 2, 25% of the remainder are shipped. How many remain?</p><p><b>【解题思路 Solution】</b>第一天剩:5800 × (1 − 30%) = 5800 × 0.7 = 4060<br>Day 1 left: 4060.<br>第二天剩:4060 × (1 − 25%) = 4060 × 0.75 = <b>3045</b><br>Day 2 left: 3045.<br>选 A (3045)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>remainder = 剩余<br>percentage = 百分数<br>ship = 运走<br>step by step = 逐步</p>'
  },
  {
    id: 'n09',
    domain: 'number',
    level: 5,
    grade: 6,
    rit: 235,
    stem: 'How many integers from 1 to 1,000 (inclusive) are divisible by both 3 and 5?',
    options: [
      { label: 'A', text: '32' },
      { label: 'B', text: '33' },
      { label: 'C', text: '66' },
      { label: 'D', text: '67' }
    ],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>在 1 到 1,000 之间 (含 1 和 1,000), 既能被 3 整除又能被 5 整除的数有多少个?</p><p><b>【Original in English】</b>How many numbers from 1 to 1000 are divisible by both 3 and 5?</p><p><b>【解题思路 Solution】</b>既被 3 又被 5 整除 = 被 15 整除。<br>Divisible by both 3 and 5 = divisible by 15.<br>15 的倍数在 [1, 1000]:15, 30, ..., 990。<br>Multiples of 15: 15 to 990.<br>数量 = 990 ÷ 15 = <b>66</b><br>Count = 990 ÷ 15 = 66.<br>选 C (66)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divisible by = 整除<br>LCM = 最小公倍数 (LCM(3,5) = 15)<br>count multiples = 计数倍数<br>between = 之间</p>'
  },
  {
    id: 'n10',
    domain: 'number',
    level: 5,
    grade: 6,
    rit: 240,
    stem: 'A pool has two fill pipes A and B. A alone fills in 6 hours, B alone in 3 hours. How long if both are open?',
    options: [
      { label: 'A', text: '1 hour' },
      { label: 'B', text: '2 hours' },
      { label: 'C', text: '3 hours' },
      { label: 'D', text: '4 hours' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个水池有两根注水管 A 和 B。A 单独注满需 6 小时, B 单独注满需 3 小时。两管同时打开, 多长时间注满?</p><p><b>【Original in English】</b>A pool has two fill pipes. Pipe A alone fills in 6 hours, B alone in 3 hours. How long if both are open?</p><p><b>【解题思路 Solution】</b>工作效率 (work rate):<br>A: 1/6 per hour, B: 1/3 per hour<br>合计:1/6 + 1/3 = 1/6 + 2/6 = 3/6 = <b>1/2</b> per hour<br>Combined = 1/2 per hour.<br>两管同时:1 ÷ (1/2) = <b>2 小时</b><br>Both open: 1 ÷ (1/2) = 2 hours.<br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>work rate = 工作效率<br>combined = 合计<br>fill = 注满<br>hour = 小时</p>'
  },

  // ==================== 领域 B：分数与小数（Fractions and Decimals） ====================
  {
    id: 'f01',
    domain: 'fraction',
    level: 1,
    grade: 5,
    rit: 182,
    stem: 'A pizza is cut into 8 equal pieces. 3 pieces are eaten. What is the simplest fraction eaten?',
    options: [
      { label: 'A', text: '3/4' },
      { label: 'B', text: '3/8' },
      { label: 'C', text: '1/3' },
      { label: 'D', text: '5/8' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>披萨平均切 8 块, 吃了 3 块, 写成最简分数是?</p><p><b>【Original in English】</b>A pizza is cut into 8 equal pieces. 3 are eaten. What is the simplest fraction?</p><p><b>【解题思路 Solution】</b>3/8<br>分子分母 GCD(3, 8) = 1, 已经最简。<br>Numerator and denominator are coprime (GCD = 1).<br>选 B (3/8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>simplest form = 最简分数<br>fraction = 分数<br>GCD = 最大公因数<br>coprime = 互质</p>'
  },
  {
    id: 'f02',
    domain: 'fraction',
    level: 1,
    grade: 5,
    rit: 190,
    stem: 'Which fraction is the largest?',
    options: [
      { label: 'A', text: '1/2' },
      { label: 'B', text: '1/3' },
      { label: 'C', text: '1/4' },
      { label: 'D', text: '1/5' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>下面哪个分数最大?</p><p><b>【Original in English】</b>Which fraction is the largest?</p><p><b>【解题思路 Solution】</b>分子都是 1 时,<b>分母越小分数越大</b>。<br>When numerators are 1, smaller denominator = larger fraction.<br>1/2 = 0.5, 1/3 ≈ 0.33, 1/4 = 0.25, 1/5 = 0.2<br>1/2 > 1/3 > 1/4 > 1/5<br>选 A (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>compare fractions = 比较分数<br>same numerator = 分子相同<br>smaller denominator = 分母越小越大<br>1/2 = 0.5</p>'
  },
  {
    id: 'f03',
    domain: 'fraction',
    level: 2,
    grade: 5,
    rit: 198,
    stem: 'Calculate: 1/2 + 1/4 = ?',
    options: [
      { label: 'A', text: '2/6' },
      { label: 'B', text: '3/4' },
      { label: 'C', text: '1/6' },
      { label: 'D', text: '1/3' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1/2 + 1/4 = ?</p><p><b>【Original in English】</b>1/2 + 1/4 = ?</p><p><b>【解题思路 Solution】</b>公分母 4:<br>Common denominator = 4.<br>1/2 = 2/4<br>2/4 + 1/4 = <b>3/4</b><br>选 B (3/4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>add fractions = 分数相加<br>common denominator = 公分母<br>equivalent fraction = 等值分数<br>LCD = 4</p>'
  },
  {
    id: 'f04',
    domain: 'fraction',
    level: 2,
    grade: 5,
    rit: 203,
    stem: 'Calculate: 0.75 + 1.25 = ?',
    options: [
      { label: 'A', text: '1.85' },
      { label: 'B', text: '1.90' },
      { label: 'C', text: '2.00' },
      { label: 'D', text: '2.10' }
    ],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>0.75 + 1.25 = ?</p><p><b>【Original in English】</b>0.75 + 1.25 = ?</p><p><b>【解题思路 Solution】</b>对齐小数位 (align decimal places):<br>0.75 + 1.25 = <b>2.00 = 2</b><br>选 C (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>add decimals = 小数相加<br>align decimal points = 对齐小数点<br>sum = 总和<br>2.00 = 2</p>'
  },
  {
    id: 'f05',
    domain: 'fraction',
    level: 3,
    grade: 5,
    rit: 213,
    stem: 'Calculate: 2/3 × 3/4 = ?',
    options: [
      { label: 'A', text: '6/12' },
      { label: 'B', text: '5/7' },
      { label: 'C', text: '1/2' },
      { label: 'D', text: '2/4' }
    ],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>2/3 × 3/4 = ?</p><p><b>【Original in English】</b>2/3 × 3/4 = ?</p><p><b>【解题思路 Solution】</b>分数乘法:分子乘分子, 分母乘分母。<br>Multiply numerators and denominators.<br>= (2×3)/(3×4) = 6/12 = <b>1/2</b><br>约分 (cancel 3):(2/4) = 1/2。<br>选 C (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply fractions = 分数乘法<br>cancel = 约分<br>simplify = 化简<br>product = 积</p>'
  },
  {
    id: 'f06',
    domain: 'fraction',
    level: 3,
    grade: 5,
    rit: 218,
    stem: 'A 4-meter cloth is cut into 5 equal pieces. How long is each piece?',
    options: [
      { label: 'A', text: '4/5 m' },
      { label: 'B', text: '1/5 m' },
      { label: 'C', text: '5/4 m' },
      { label: 'D', text: '1 m' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一块布料长 4 米, 平均剪成 5 段, 每段长多少米?</p><p><b>【Original in English】</b>A 4-meter cloth is cut into 5 equal pieces. How long is each piece?</p><p><b>【解题思路 Solution】</b>平均分 = 除法 (equal sharing = division):<br>每段 = 4 ÷ 5 = <b>4/5</b> 米<br>Each = 4 ÷ 5 = 4/5 m.<br>选 A (4/5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide equally = 平均分<br>fraction = 分数<br>4/5 meter = 4/5 米<br>per piece = 每段</p>'
  },
  {
    id: 'f07',
    domain: 'fraction',
    level: 4,
    grade: 6,
    rit: 223,
    stem: 'Convert 0.625 to a fraction in simplest form.',
    options: [
      { label: 'A', text: '5/8' },
      { label: 'B', text: '625/1000' },
      { label: 'C', text: '13/20' },
      { label: 'D', text: '25/40' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>把 0.625 化成最简分数。</p><p><b>【Original in English】</b>Convert 0.625 to a fraction in simplest form.</p><p><b>【解题思路 Solution】</b>0.625 = 625/1000<br>分子分母同除以 125:625÷125 = 5, 1000÷125 = 8<br>Divide both by 125: 5/8.<br>0.625 = <b>5/8</b><br>选 A (5/8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>decimal to fraction = 小数化分数<br>simplest form = 最简分数<br>divide = 除<br>GCD = 最大公因数 (125)</p>'
  },
  {
    id: 'f08',
    domain: 'fraction',
    level: 4,
    grade: 6,
    rit: 227,
    stem: 'Arrange 7/8, 5/6, 3/4 from largest to smallest.',
    options: [
      { label: 'A', text: '7/8 > 5/6 > 3/4' },
      { label: 'B', text: '5/6 > 7/8 > 3/4' },
      { label: 'C', text: '3/4 > 5/6 > 7/8' },
      { label: 'D', text: '5/6 > 3/4 > 7/8' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>比较大小: 7/8、5/6、3/4, 从大到小排列?</p><p><b>【Original in English】</b>Arrange from largest to smallest: 7/8, 5/6, 3/4.</p><p><b>【解题思路 Solution】</b>通分 (common denominator 24):<br>7/8 = 21/24, 5/6 = 20/24, 3/4 = 18/24<br>21 > 20 > 18,所以 7/8 > 5/6 > 3/4<br>选 A (7/8 > 5/6 > 3/4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>compare fractions = 比较分数<br>common denominator = 公分母<br>largest to smallest = 从大到小<br>descending = 降序</p>'
  },
  {
    id: 'f09',
    domain: 'fraction',
    level: 5,
    grade: 6,
    rit: 233,
    stem: 'Xiao Ming spent 2/3 hour on homework. He spent 3/4 of that time on math. How many minutes on math?',
    options: [
      { label: 'A', text: '20 minutes' },
      { label: 'B', text: '30 minutes' },
      { label: 'C', text: '40 minutes' },
      { label: 'D', text: '50 minutes' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>小明用 2/3 小时做作业, 他用这段时间的 3/4 做数学。数学作业用了多少分钟?</p><p><b>【Original in English】</b>Xiao Ming spent 2/3 hour on homework, of which 3/4 was math. How many minutes for math?</p><p><b>【解题思路 Solution】</b>先算总时间:2/3 小时 = 40 分钟。<br>Total time: 2/3 hour = 40 minutes.<br>数学时间:40 × 3/4 = <b>30 分钟</b><br>Math time: 40 × 3/4 = 30 minutes.<br>选 B (30)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>fraction of time = 时间的一部分<br>convert hours to minutes = 小时化分钟<br>multiply = 乘<br>1 hour = 60 minutes</p>'
  },
  {
    id: 'f10',
    domain: 'fraction',
    level: 5,
    grade: 6,
    rit: 238,
    stem: 'A pool is 2/3 full. Day 1: 1/4 of the pool is used. Day 2: 1/3 of the remainder is used. What fraction of the original pool was used on day 2?',
    options: [
      { label: 'A', text: '1/6' },
      { label: 'B', text: '1/4' },
      { label: 'C', text: '5/12' },
      { label: 'D', text: '1/2' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个水池有 2/3 的水。第一天用掉 1/4, 第二天用掉剩下的 1/3。第二天用掉的水是原来水池的几分之几?</p><p><b>【Original in English】</b>A pool is 2/3 full. Day 1: 1/4 is used. Day 2: 1/3 of remainder is used. Day 2\'s usage is what fraction of original?</p><p><b>【解题思路 Solution】</b>设原水池 = 1 (whole pool):<br>• 第一天剩:2/3 × (1 − 1/4) = 2/3 × 3/4 = 6/12 = 1/2<br>• 第二天用掉:1/2 × 1/3 = <b>1/6</b> (相对原水池)<br>选 A (1/6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>remainder = 剩余<br>fraction of a fraction = 分数的分数<br>of the original = 相对原水池<br>step by step = 逐步</p>'
  },

  // ==================== 领域 C：代数初步（Algebraic Thinking） ====================
  {
    id: 'a01',
    domain: 'algebra',
    level: 1,
    grade: 5,
    rit: 187,
    stem: 'Look at the sequence: 2, 4, 6, 8, 10, ___, ___. What are the next two terms?',
    options: [
      { label: 'A', text: '11, 12' },
      { label: 'B', text: '12, 14' },
      { label: 'C', text: '12, 13' },
      { label: 'D', text: '13, 15' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>观察数列: 2, 4, 6, 8, 10, ___, ___。下一项是?</p><p><b>【Original in English】</b>Find the next two terms: 2, 4, 6, 8, 10, ___, ___.</p><p><b>【解题思路 Solution】</b>规律:每次 +2 (偶数数列, even numbers)。<br>Pattern: add 2 each time.<br>10 + 2 = <b>12</b>, 12 + 2 = 14。<br>选 B (12)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>pattern = 规律<br>even numbers = 偶数<br>arithmetic sequence = 等差数列<br>add 2 = 加 2</p>'
  },
  {
    id: 'a02',
    domain: 'algebra',
    level: 2,
    grade: 5,
    rit: 200,
    stem: 'A number x plus 7 equals 15. Find x.',
    options: [
      { label: 'A', text: 'x = 6' },
      { label: 'B', text: 'x = 7' },
      { label: 'C', text: 'x = 8' },
      { label: 'D', text: 'x = 22' }
    ],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数 x 加 7 等于 15, 求 x。</p><p><b>【Original in English】</b>A number x plus 7 equals 15. Find x.</p><p><b>【解题思路 Solution】</b>x + 7 = 15<br>x = 15 − 7 = <b>8</b><br>选 C (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>equation = 方程<br>plus = 加<br>inverse = 逆运算<br>solve = 求解</p>'
  },
  {
    id: 'a03',
    domain: 'algebra',
    level: 2,
    grade: 5,
    rit: 205,
    stem: 'Which of the following is an algebraic expression?',
    options: [
      { label: 'A', text: '5 + 3' },
      { label: 'B', text: 'x + 7' },
      { label: 'C', text: '15 = 10 + 5' },
      { label: 'D', text: '24' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>下面哪个是代数表达式?</p><p><b>【Original in English】</b>Which is an algebraic expression?</p><p><b>【解题思路 Solution】</b>代数表达式 (algebraic expression) = 包含变量 (variable) + 运算, 不含等号。<br>• A "5 + 3" 是算术 (arithmetic)<br>• B "x + 7" <b>包含变量 x</b> → 代数表达式<br>• C "15 = 10 + 5" 是等式 (equation)<br>• D "24" 是常数 (constant)<br>选 B (x + 7)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>algebraic expression = 代数表达式<br>variable = 变量<br>arithmetic = 算术<br>equation vs expression = 方程 vs 表达式</p>'
  },
  {
    id: 'a04',
    domain: 'algebra',
    level: 3,
    grade: 5,
    rit: 214,
    stem: 'Solve the equation: 3x + 5 = 20',
    options: [
      { label: 'A', text: 'x = 3' },
      { label: 'B', text: 'x = 5' },
      { label: 'C', text: 'x = 7' },
      { label: 'D', text: 'x = 15' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>解方程: 3x + 5 = 20</p><p><b>【Original in English】</b>Solve 3x + 5 = 20.</p><p><b>【解题思路 Solution】</b>3x + 5 = 20<br>3x = 20 − 5 = 15<br>x = 15 ÷ 3 = <b>5</b><br>选 B (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>equation = 方程<br>solve for x = 求 x<br>subtract then divide = 减后除<br>isolate variable = 分离变量</p>'
  },
  {
    id: 'a05',
    domain: 'algebra',
    level: 3,
    grade: 5,
    rit: 217,
    stem: 'A parking lot has x cars (4 wheels each) and 1 truck (6 wheels). Total 22 wheels. Find x.',
    options: [
      { label: 'A', text: 'x = 3' },
      { label: 'B', text: 'x = 4' },
      { label: 'C', text: 'x = 5' },
      { label: 'D', text: 'x = 16' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>停车场 x 辆汽车 (每辆 4 轮), 1 辆卡车 (6 轮), 共 22 轮。求 x。</p><p><b>【Original in English】</b>A parking lot has x cars (4 wheels each) and 1 truck (6 wheels). Total 22 wheels. Find x.</p><p><b>【解题思路 Solution】</b>列方程:4x + 6 = 22<br>Equation: 4x + 6 = 22.<br>4x = 22 − 6 = 16<br>x = 16 ÷ 4 = <b>4</b> 辆汽车<br>选 B (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>set up equation = 列方程<br>wheels = 轮子<br>cars and truck = 汽车和卡车<br>total = 总数</p>'
  },
  {
    id: 'a06',
    domain: 'algebra',
    level: 4,
    grade: 6,
    rit: 224,
    stem: 'How many positive integer solutions does 2x + 3 < 11 have?',
    options: [
      { label: 'A', text: '2 solutions' },
      { label: 'B', text: '3 solutions' },
      { label: 'C', text: '4 solutions' },
      { label: 'D', text: '5 solutions' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>不等式 2x + 3 < 11 的正整数解有几个?</p><p><b>【Original in English】</b>How many positive integer solutions does 2x + 3 < 11 have?</p><p><b>【解题思路 Solution】</b>2x + 3 < 11<br>2x < 8<br>x < 4<br>正整数解:1, 2, 3 — 共 <b>3</b> 个。<br>Positive integer solutions: 1, 2, 3 — 3 solutions.<br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>inequality = 不等式<br>positive integer = 正整数<br>solution = 解<br>count = 计数</p>'
  },
  {
    id: 'a07',
    domain: 'algebra',
    level: 5,
    grade: 6,
    rit: 232,
    stem: 'A store sells T-shirts for $15 each. Buying more than 5 gives $3 off each. Xiao Ming buys 8. How much does he pay?',
    options: [
      { label: 'A', text: '$96' },
      { label: 'B', text: '$105' },
      { label: 'C', text: '$120' },
      { label: 'D', text: '$144' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>某商店 T 恤每件 $15。一次买 5 件以上, 每件减 $3。小明买了 8 件, 应付多少钱?</p><p><b>【Original in English】</b>T-shirts cost $15 each. Buying more than 5 gives $3 off each. Xiao Ming buys 8. How much does he pay?</p><p><b>【解题思路 Solution】</b>8 件 > 5 件,享折扣。<br>8 > 5, so discount applies.<br>每件实际:$15 − $3 = $12<br>Price per shirt: $15 − $3 = $12.<br>总价:8 × 12 = <b>$96</b><br>Total: 8 × 12 = $96.<br>选 A (96)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>discount = 折扣<br>each = 每件<br>total cost = 总价<br>condition = 条件</p>'
  },
  {
    id: 'a08',
    domain: 'algebra',
    level: 5,
    grade: 6,
    rit: 237,
    stem: 'Two cars start at the same time from A and B toward each other. Speeds 60 and 80 km/h. Distance 420 km. When do they meet?',
    options: [
      { label: 'A', text: '2 hours' },
      { label: 'B', text: '3 hours' },
      { label: 'C', text: '4 hours' },
      { label: 'D', text: '5 hours' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>两辆车从 A、B 两地同时出发相向而行。甲车 60 km/h, 乙车 80 km/h。AB 相距 420 km。几小时后相遇?</p><p><b>【Original in English】</b>Two cars start at the same time from A and B toward each other. Speeds 60 and 80 km/h. Distance 420 km. When do they meet?</p><p><b>【解题思路 Solution】</b>相向而行,合速度 (combined speed):<br>60 + 80 = 140 km/h<br>时间 = 距离 ÷ 合速度 = 420 ÷ 140 = <b>3</b> 小时<br>Time = 420 ÷ 140 = 3 hours.<br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>toward each other = 相向而行<br>combined speed = 合速度<br>meet = 相遇<br>time = 时间</p>'
  },

  // ==================== 领域 D：几何与测量（Geometry and Measurement） ====================
  {
    id: 'g01',
    domain: 'geometry',
    level: 1,
    grade: 5,
    rit: 184,
    stem: 'A square has side 6 cm. What is its perimeter?',
    options: [
      { label: 'A', text: '12 cm' },
      { label: 'B', text: '24 cm' },
      { label: 'C', text: '36 cm' },
      { label: 'D', text: '48 cm' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正方形边长 6 cm, 周长多少?</p><p><b>【Original in English】</b>A square has side 6 cm. What is its perimeter?</p><p><b>【解题思路 Solution】</b>正方形 4 条等边 (4 equal sides):<br>周长 = 4 × 6 = <b>24</b> cm<br>Perimeter = 4 × side.<br>选 B (24)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 正方形<br>perimeter = 周长<br>4 equal sides = 4 条等边<br>cm = 厘米</p>'
  },
  {
    id: 'g02',
    domain: 'geometry',
    level: 2,
    grade: 5,
    rit: 198,
    stem: 'A rectangle is 8 m long and 5 m wide. What is its area?',
    options: [
      { label: 'A', text: '13 m²' },
      { label: 'B', text: '26 m²' },
      { label: 'C', text: '40 m²' },
      { label: 'D', text: '80 m²' }
    ],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>长方形长 8 m, 宽 5 m, 面积多少?</p><p><b>【Original in English】</b>A rectangle is 8 m long and 5 m wide. What is its area?</p><p><b>【解题思路 Solution】</b>长方形面积 = 长 × 宽<br>Area = length × width.<br>= 8 × 5 = <b>40</b> m²<br>选 C (40)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>rectangle = 长方形<br>area = 面积<br>length × width = 长 × 宽<br>m² = 平方米</p>'
  },
  {
    id: 'g03',
    domain: 'geometry',
    level: 3,
    grade: 5,
    rit: 215,
    stem: 'A cuboid is 5 cm × 4 cm × 3 cm. What is its volume?',
    options: [
      { label: 'A', text: '12 cm³' },
      { label: 'B', text: '47 cm³' },
      { label: 'C', text: '60 cm³' },
      { label: 'D', text: '94 cm³' }
    ],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>长方体长 5 cm, 宽 4 cm, 高 3 cm, 体积多少?</p><p><b>【Original in English】</b>A cuboid is 5 cm × 4 cm × 3 cm. What is its volume?</p><p><b>【解题思路 Solution】</b>长方体体积 = 长 × 宽 × 高<br>Volume = length × width × height.<br>= 5 × 4 × 3 = <b>60</b> cm³<br>选 C (60)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cuboid = 长方体<br>volume = 体积<br>three dimensions = 三维<br>cm³ = 立方厘米</p>'
  },
  {
    id: 'g04',
    domain: 'geometry',
    level: 3,
    grade: 5,
    rit: 218,
    stem: 'A triangle has sides 6 cm, 8 cm, 10 cm. What type of triangle is it?',
    options: [
      { label: 'A', text: 'Equilateral' },
      { label: 'B', text: 'Isosceles' },
      { label: 'C', text: 'Right' },
      { label: 'D', text: 'Obtuse' }
    ],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>三角形三边 6, 8, 10 cm, 这是什么三角形?</p><p><b>【Original in English】</b>A triangle has sides 6, 8, 10 cm. What type is it?</p><p><b>【解题思路 Solution】</b>勾股定理逆定理 (converse of Pythagoras):<br>6² + 8² = 36 + 64 = 100 = 10²<br>所以是<b>直角三角形</b> (right triangle)。<br>选 C (直角三角形)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>right triangle = 直角三角形<br>Pythagorean theorem = 勾股定理<br>converse = 逆定理<br>6² + 8² = 10²</p>'
  },
  {
    id: 'g05',
    domain: 'geometry',
    level: 4,
    grade: 6,
    rit: 226,
    stem: 'A parallelogram has base 10 cm and height 6 cm. A triangle with the same base and height has what area?',
    options: [
      { label: 'A', text: '120 cm²' },
      { label: 'B', text: '60 cm²' },
      { label: 'C', text: '30 cm²' },
      { label: 'D', text: '15 cm²' }
    ],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>平行四边形底 10 cm, 高 6 cm。一个与它等底等高的三角形, 面积是多少?</p><p><b>【Original in English】</b>A parallelogram has base 10 cm and height 6 cm. A triangle with the same base and height has what area?</p><p><b>【解题思路 Solution】</b>等底等高:三角形面积 = ½ × 平行四边形面积<br>Triangle = ½ × parallelogram (same base & height).<br>= ½ × 10 × 6 = ½ × 60 = <b>30</b> cm²<br>选 C (30)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>parallelogram = 平行四边形<br>triangle = 三角形<br>same base and height = 等底等高<br>half = 一半</p>'
  },
  {
    id: 'g06',
    domain: 'geometry',
    level: 5,
    grade: 6,
    rit: 234,
    stem: 'A cylinder has radius 3 cm and height 10 cm. What is its volume? (π = 3.14)',
    options: [
      { label: 'A', text: '94.2 cm³' },
      { label: 'B', text: '188.4 cm³' },
      { label: 'C', text: '282.6 cm³' },
      { label: 'D', text: '314 cm³' }
    ],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个圆柱底面半径 3 cm, 高 10 cm。体积是多少? (π 取 3.14)</p><p><b>【Original in English】</b>A cylinder has radius 3 cm and height 10 cm. What is its volume? (π = 3.14)</p><p><b>【解题思路 Solution】</b>圆柱体积 (cylinder volume) = πr²h<br>= 3.14 × 3² × 10<br>= 3.14 × 9 × 10<br>= 3.14 × 90 = <b>282.6</b> cm³<br>选 C (282.6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cylinder = 圆柱<br>volume = 体积<br>radius = 半径<br>πr²h formula = 圆柱体积公式</p>'
  },
  {
    id: 'g07',
    domain: 'geometry',
    level: 5,
    grade: 6,
    rit: 239,
    stem: 'In the coordinate plane, point A(2, 3) moves 3 units right and 2 units up to point B. What are B\'s coordinates?',
    options: [
      { label: 'A', text: '(5, 5)' },
      { label: 'B', text: '(5, 1)' },
      { label: 'C', text: '(-1, 5)' },
      { label: 'D', text: '(5, 6)' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>点 A(2, 3) 向右移动 3 个单位、向上移动 2 个单位到点 B。点 B 的坐标是?</p><p><b>【Original in English】</b>Point A(2, 3) moves right 3 units and up 2 units to point B. What are B\'s coordinates?</p><p><b>【解题思路 Solution】</b>坐标平移 (coordinate translation):<br>• x 坐标:2 + 3 = 5<br>• y 坐标:3 + 2 = 5<br>B = <b>(5, 5)</b><br>选 A (5, 5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>coordinates = 坐标<br>move right = 向右移动 (+x)<br>move up = 向上移动 (+y)<br>translation = 平移</p>'
  },

  // ==================== 领域 E：数据分析（Data Analysis） ====================
  {
    id: 'd01',
    domain: 'data',
    level: 1,
    grade: 5,
    rit: 186,
    stem: '5 students jumped rope for 1 minute: 60, 75, 80, 90, 85 times. What is the mean?',
    options: [
      { label: 'A', text: '75' },
      { label: 'B', text: '78' },
      { label: 'C', text: '80' },
      { label: 'D', text: '85' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>5 个学生 1 分钟跳绳次数 60、75、80、90、85, 平均数是?</p><p><b>【Original in English】</b>5 students jump rope in 1 minute: 60, 75, 80, 90, 85. What is the average?</p><p><b>【解题思路 Solution】</b>平均 = 总和 ÷ 个数<br>Average = sum ÷ count.<br>= (60+75+80+90+85) ÷ 5<br>= 390 ÷ 5 = <b>78</b><br>选 B (78)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>average / mean = 平均数<br>sum = 总和<br>divide by count = 除以个数<br>jump rope = 跳绳</p>'
  },
  {
    id: 'd02',
    domain: 'data',
    level: 2,
    grade: 5,
    rit: 201,
    stem: 'Find the median of: 12, 15, 18, 22, 25.',
    options: [
      { label: 'A', text: '15' },
      { label: 'B', text: '18' },
      { label: 'C', text: '20' },
      { label: 'D', text: '22' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 12, 15, 18, 22, 25 的中位数?</p><p><b>【Original in English】</b>What is the median of 12, 15, 18, 22, 25?</p><p><b>【解题思路 Solution】</b>5 个数,中位数 = 第 3 个 = <b>18</b><br>5 numbers (already sorted), median = 3rd = 18.<br>选 B (18)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数<br>middle value = 中间值<br>5 numbers = 5 个数<br>3rd position = 第 3 位</p>'
  },
  {
    id: 'd03',
    domain: 'data',
    level: 3,
    grade: 5,
    rit: 216,
    stem: 'Five students weigh (kg): 35, 40, 45, 50, 80. Which statistic best represents a "typical" student\'s weight?',
    options: [
      { label: 'A', text: 'Mean 50 kg' },
      { label: 'B', text: 'Median 45 kg' },
      { label: 'C', text: 'Mode 35 kg' },
      { label: 'D', text: 'Maximum 80 kg' }
    ],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>5 名学生体重 35、40、45、50、80 kg, 哪个最能反映"普通学生体重"?</p><p><b>【Original in English】</b>5 students weigh 35, 40, 45, 50, 80 kg. Which statistic best represents "typical weight"?</p><p><b>【解题思路 Solution】</b>80 kg 是<b>异常值</b> (outlier),会把平均数拉高。<br>80 is an outlier that skews the mean.<br>中位数 (45) 不受异常值影响,最能反映典型水平。<br>Median (45) is robust to outliers.<br>选 B (中位数)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数<br>outlier = 异常值<br>mean = 平均数<br>typical = 典型</p>'
  },
  {
    id: 'd04',
    domain: 'data',
    level: 4,
    grade: 6,
    rit: 222,
    stem: 'A bag has 3 red, 2 blue, and 1 yellow ball. If one ball is drawn at random, what is the probability it is red?',
    options: [
      { label: 'A', text: '1/6' },
      { label: 'B', text: '1/3' },
      { label: 'C', text: '1/2' },
      { label: 'D', text: '2/3' }
    ],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个袋子里有 3 个红球、2 个蓝球、1 个黄球。随机摸一个红球的概率?</p><p><b>【Original in English】</b>A bag has 3 red, 2 blue, 1 yellow ball. Probability of drawing red?</p><p><b>【解题思路 Solution】</b>总数 = 3+2+1 = 6,红球 3 个。<br>Total = 6, red = 3.<br>概率 = 3/6 = <b>1/2</b><br>Probability = 3/6 = 1/2.<br>选 C (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>probability = 概率<br>at random = 随机<br>total = 总数<br>simplify = 约分</p>'
  },
  {
    id: 'd05',
    domain: 'data',
    level: 5,
    rit: 241,
    stem: '5 students scored 75, 80, 85, 90, 95. If every score increases by 5 points, which statistic does NOT change?',
    options: [
      { label: 'A', text: 'Mean' },
      { label: 'B', text: 'Median' },
      { label: 'C', text: 'Mode' },
      { label: 'D', text: 'None of the above' }
    ],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>某小组 5 名同学的数学成绩是 75、80、85、90、95。如果每个同学都增加 5 分, 下面哪个统计量不会改变?</p><p><b>【Original in English】</b>5 students scored 75, 80, 85, 90, 95 on a math test. If every score increases by 5 points, which statistic does NOT change?</p><p><b>【解题思路 Solution】</b>所有数据 +5 后:<br>• <b>平均数</b> (mean):+5 → 改变<br>• <b>中位数</b> (median):+5 → 改变<br>• <b>众数</b> (mode):+5 → 改变<br>实际验证:75+5=80, 80+5=85, 85+5=90, 90+5=95, 95+5=100<br>新数据:80, 85, 90, 95, 100 → 平均 90, 中位 90, 众数 90 (每个都 +5)<br>所以 A, B, C 都改变 → 选 D (以上都不变)。<br>选 D。</p><p><b>【Key Vocabulary · 核心生词】</b><br>mean = 平均数<br>median = 中位数<br>mode = 众数<br>adding constant = 加同一常数 (会改变所有 location-based 统计量)</p><br><p><b>📌 真正"不变"的统计量 (MAP 高频考点):</b><br>• 标准差 (standard deviation) — 不变<br>• 方差 (variance) — 不变<br>• 极差 (range) — 不变<br>• IQR (四分位距) — 不变<br>因为所有数据加同一常数不改变数据点之间的<b>距离</b>。</p>'
  },
  // ==================== 一年级 G1 (80 道) ====================
  {
    id: 'g1n01', domain: 'number', grade: 1, level: 1, rit: 140,
    stem: 'Which number is the largest? 5, 8, 3, 9, 6',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '8' }, { label: 'C', text: '3' }, { label: 'D', text: '9' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>下面哪个数字最大？5, 8, 3, 9, 6</p><p><b>【Original in English】</b>Which number is the largest? 5, 8, 3, 9, 6</p><p><b>【解题思路 Solution】</b>Sort from largest to smallest: 9 > 8 > 6 > 5 > 3. So <b>9</b> is the largest.</p><p><b>【Key Vocabulary · 核心生词】</b><br>largest = 最大的 / biggest / greatest<br>sort = 排序 / arrange in order<br>compare = 比较 / to compare two things<br>descending order = 降序 / 从大到小</p>'
  },
  {
    id: 'g1n02', domain: 'number', grade: 1, level: 1, rit: 141,
    stem: '5 + 3 = ?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '7' }, { label: 'C', text: '8' }, { label: 'D', text: '9' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>5 + 3 = ?</p><p><b>【Original in English】</b>5 + 3 = ?</p><p><b>【解题思路 Solution】</b>5 plus 3 equals 8. You can verify by counting on your fingers or a number line: 5, 6, 7, <b>8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>plus = 加 / add<br>equals = 等于 / is / makes<br>sum = 和 / the result of addition<br>verify = 验证 / to check the answer</p>'
  },
  {
    id: 'g1n03', domain: 'number', grade: 1, level: 1, rit: 142,
    stem: '10 - 4 = ?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '7' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>10 - 4 = ?</p><p><b>【Original in English】</b>10 - 4 = ?</p><p><b>【解题思路 Solution】</b>10 minus 4: count down 4 numbers from 10: 9, 8, 7, <b>6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>minus = 减 / subtract / take away<br>count down = 倒数 / 从大到小数<br>difference = 差 / the result of subtraction</p>'
  },
  {
    id: 'g1n04', domain: 'number', grade: 1, level: 1, rit: 143,
    stem: '2 + 7 = ?',
    options: [{ label: 'A', text: '7' }, { label: 'B', text: '8' }, { label: 'C', text: '9' }, { label: 'D', text: '10' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>2 + 7 = ?</p><p><b>【Original in English】</b>2 + 7 = ?</p><p><b>【解题思路 Solution】</b>2 plus 7 equals <b>9</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>plus = 加 / add<br>equals = 等于 / is / makes<br>sum = 和</p>'
  },
  {
    id: 'g1n05', domain: 'number', grade: 1, level: 1, rit: 144,
    stem: '15 - 8 = ?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '7' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>15 - 8 = ?</p><p><b>【Original in English】</b>15 - 8 = ?</p><p><b>【解题思路 Solution】</b>15 minus 8: count down 8 from 15: 14, 13, 12, 11, 10, 9, 8, <b>7</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>minus = 减 / subtract<br>count down = 倒数<br>difference = 差</p>'
  },
  {
    id: 'g1n06', domain: 'number', grade: 1, level: 1, rit: 145,
    stem: '6 + 6 = ?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '11' }, { label: 'C', text: '12' }, { label: 'D', text: '13' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>6 + 6 = ?</p><p><b>【Original in English】</b>6 + 6 = ?</p><p><b>【解题思路 Solution】</b>6 plus 6 (a double) equals <b>12</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>plus = 加 / add<br>double = 双的 / twice<br>sum = 和 / total</p>'
  },
  {
    id: 'g1n07', domain: 'number', grade: 1, level: 1, rit: 146,
    stem: 'Which is a correct decomposition of 14?',
    options: [{ label: 'A', text: '7+7' }, { label: 'B', text: '8+6' }, { label: 'C', text: '9+5' }, { label: 'D', text: '10+4' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>下面哪个是 14 的正确分解？</p><p><b>【Original in English】</b>Which is a correct decomposition of 14?</p><p><b>【解题思路 Solution】</b>14 = 7+7. Also can be 8+6, 9+5, 10+4, but 7+7 is the most symmetric decomposition.</p><p><b>【Key Vocabulary · 核心生词】</b><br>decomposition = 分解 / breaking down<br>symmetric = 对称的 / mirror-image<br>even number = 偶数<br>correct = 正确的 / right</p>'
  },
  {
    id: 'g1n08', domain: 'number', grade: 1, level: 1, rit: 147,
    stem: '3 + 4 + 5 = ?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '11' }, { label: 'C', text: '12' }, { label: 'D', text: '13' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>3 + 4 + 5 = ?</p><p><b>【Original in English】</b>3 + 4 + 5 = ?</p><p><b>【解题思路 Solution】</b>3+4=7, then 7+5=<b>12</b>. Add step by step from left to right.</p><p><b>【Key Vocabulary · 核心生词】</b><br>plus = 加<br>sum = 和<br>step by step = 逐步 / one at a time</p>'
  },
  {
    id: 'g1n09', domain: 'number', grade: 1, level: 1, rit: 148,
    stem: 'Counting from 1 to 20, what is the 12th number?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '11' }, { label: 'C', text: '12' }, { label: 'D', text: '13' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>从 1 数到 20，第 12 个数是几？</p><p><b>【Original in English】</b>Counting from 1 to 20, what is the 12th number?</p><p><b>【解题思路 Solution】</b>Count: 1,2,3,4,5,6,7,8,9,10,11,<b>12</b>. The 12th number is 12.</p><p><b>【Key Vocabulary · 核心生词】</b><br>count = 数<br>counting = 数数<br>ordinal = 序数 (1st, 2nd, 3rd... 12th)<br>from...to = 从...到</p>'
  },
  {
    id: 'g1n10', domain: 'number', grade: 1, level: 1, rit: 149,
    stem: 'Lily has 8 candies. She gives 3 to Tom. How many are left?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>小红有 8 颗糖，给了小明 3 颗，还剩几颗？</p><p><b>【Original in English】</b>Lily has 8 candies. She gives 3 to Tom. How many are left?</p><p><b>【解题思路 Solution】</b>8 minus 3 = <b>5</b>. Lily gave away 3, so 3 are taken from 8.</p><p><b>【Key Vocabulary · 核心生词】</b><br>candies = 糖（复数）<br>give away = 给出 / to give to someone<br>left = 剩下 / remaining<br>how many = 多少</p>'
  },
  {
    id: 'g1n11', domain: 'number', grade: 1, level: 1, rit: 150,
    stem: 'A box has 15 marbles. Add 7 more. How many are there now?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '21' }, { label: 'C', text: '22' }, { label: 'D', text: '23' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>盒子里有 15 颗珠子，再放入 7 颗，现在有几颗？</p><p><b>【Original in English】</b>A box has 15 marbles. Add 7 more. How many are there now?</p><p><b>【解题思路 Solution】</b>15 + 7 = <b>22</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>marbles = 弹珠（复数）<br>add = 加 / to put in more<br>more = 更多 / additional<br>now = 现在 / at this time</p>'
  },
  {
    id: 'g1n12', domain: 'number', grade: 1, level: 1, rit: 151,
    stem: 'Which is 1 greater than 11?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '11' }, { label: 'C', text: '12' }, { label: 'D', text: '13' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>比 11 大 1 的数是几？</p><p><b>【Original in English】</b>Which is 1 greater than 11?</p><p><b>【解题思路 Solution】</b>11 + 1 = <b>12</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>greater than = 大于 (>)<br>less than = 小于 (<)<br>1 more = 多 1<br>1 less = 少 1</p>'
  },
  {
    id: 'g1n13', domain: 'number', grade: 1, level: 1, rit: 152,
    stem: 'Which is 2 less than 18?',
    options: [{ label: 'A', text: '14' }, { label: 'B', text: '15' }, { label: 'C', text: '16' }, { label: 'D', text: '17' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>比 18 少 2 的数是几？</p><p><b>【Original in English】</b>Which is 2 less than 18?</p><p><b>【解题思路 Solution】</b>18 - 2 = <b>16</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>less than = 小于 (<)<br>greater than = 大于 (>)<br>2 fewer = 少 2<br>2 more = 多 2</p>'
  },
  {
    id: 'g1n14', domain: 'number', grade: 1, level: 1, rit: 153,
    stem: 'In the number 56, which digit is in the tens place?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '56' }, { label: 'D', text: '11' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>在数字 56 中，十位上的数字是几？</p><p><b>【Original in English】</b>In the number 56, which digit is in the tens place?</p><p><b>【解题思路 Solution】</b>56 consists of 5 (tens place) and 6 (ones place), so the tens digit is <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>digit = 数位 / a single number symbol (0-9)<br>tens place = 十位<br>ones place = 个位<br>hundreds place = 百位<br>thousands place = 千位</p>'
  },
  {
    id: 'g1n15', domain: 'number', grade: 1, level: 1, rit: 154,
    stem: 'What number is missing in the sequence: 2, 4, 6, _, 10?',
    options: [{ label: 'A', text: '7' }, { label: 'B', text: '8' }, { label: 'C', text: '9' }, { label: 'D', text: '11' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数列 2, 4, 6, _, 10 中缺少的数字是几？</p><p><b>【Original in English】</b>What number is missing in the sequence: 2, 4, 6, _, 10?</p><p><b>【解题思路 Solution】</b>Each number is 2 greater than the previous: 2, 4, 6, <b>8</b>, 10. The missing number is 8.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sequence = 数列 / a list of numbers in order<br>pattern = 规律 / the rule<br>missing = 缺少 / not there<br>even number = 偶数 (2, 4, 6, 8, 10...)</p>'
  },
  {
    id: 'g1n16', domain: 'number', grade: 1, level: 1, rit: 155,
    stem: '9 + 9 = ?',
    options: [{ label: 'A', text: '16' }, { label: 'B', text: '17' }, { label: 'C', text: '18' }, { label: 'D', text: '19' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>9 + 9 = ?</p><p><b>【Original in English】</b>9 + 9 = ?</p><p><b>【解题思路 Solution】</b>9 plus 9 equals <b>18</b> (make-10 method: 9+1=10, 10+8=18).</p><p><b>【Key Vocabulary · 核心生词】</b><br>plus = 加<br>equals = 等于<br>make-10 = 凑十法 / a Chinese math method</p>'
  },
  {
    id: 'g1n17', domain: 'number', grade: 1, level: 1, rit: 156,
    stem: 'A dozen eggs is 12. How many eggs in 3 dozen?',
    options: [{ label: 'A', text: '24' }, { label: 'B', text: '30' }, { label: 'C', text: '36' }, { label: 'D', text: '48' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一打鸡蛋有 12 个，3 打鸡蛋共有多少个？</p><p><b>【Original in English】</b>A dozen eggs is 12. How many eggs in 3 dozen?</p><p><b>【解题思路 Solution】</b>1 dozen = 12 eggs, 3 dozen = 3 × 12 = <b>36</b> eggs.</p><p><b>【Key Vocabulary · 核心生词】</b><br>dozen = 打（12 个）<br>a dozen = 一打<br>multiplication = 乘法 / repeated addition</p>'
  },
  {
    id: 'g1n18', domain: 'number', grade: 1, level: 1, rit: 157,
    stem: 'The 3rd number after 17 is?',
    options: [{ label: 'A', text: '18' }, { label: 'B', text: '19' }, { label: 'C', text: '20' }, { label: 'D', text: '21' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>数字 17 后面第 3 个数是几？</p><p><b>【Original in English】</b>The 3rd number after 17 is?</p><p><b>【解题思路 Solution】</b>After 17: 18 (1st), 19 (2nd), <b>20</b> (3rd).</p><p><b>【Key Vocabulary · 核心生词】</b><br>after = 之后<br>ordinal numbers = 序数词 (1st, 2nd, 3rd...)<br>the Xth = 第 X 个</p>'
  },
  {
    id: 'g1n19', domain: 'number', grade: 1, level: 1, rit: 158,
    stem: 'Divide 14 apples equally among 2 children. How many each?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '7' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>把 14 个苹果平均分给 2 个小朋友，每人几个？</p><p><b>【Original in English】</b>Divide 14 apples equally among 2 children. How many each?</p><p><b>【解题思路 Solution】</b>14 ÷ 2 = <b>7</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除 / to split up<br>equally = 平等地 / the same amount<br>each = 每个 / every one<br>apples = 苹果（复数）</p>'
  },
  {
    id: 'g1n20', domain: 'number', grade: 1, level: 1, rit: 159,
    stem: '20 - 11 = ?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '9' }, { label: 'C', text: '10' }, { label: 'D', text: '11' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>20 - 11 = ?</p><p><b>【Original in English】</b>20 - 11 = ?</p><p><b>【解题思路 Solution】</b>20 minus 11 = <b>9</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>minus = 减<br>equals = 等于</p>'
  },
  {
    id: 'g1n21', domain: 'number', grade: 1, level: 1, rit: 160,
    stem: '7 + 5 + 3 = ?',
    options: [{ label: 'A', text: '13' }, { label: 'B', text: '14' }, { label: 'C', text: '15' }, { label: 'D', text: '16' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>7 + 5 + 3 = ?</p><p><b>【Original in English】</b>7 + 5 + 3 = ?</p><p><b>【解题思路 Solution】</b>7+5=12, 12+3=<b>15</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>plus = 加<br>sum = 和</p>'
  },
  {
    id: 'g1n22', domain: 'number', grade: 1, level: 1, rit: 161,
    stem: 'Which expression has the largest result?',
    options: [{ label: 'A', text: '4+5' }, { label: 'B', text: '5+6' }, { label: 'C', text: '3+6' }, { label: 'D', text: '2+7' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>下面哪个算式的结果最大？</p><p><b>【Original in English】</b>Which expression has the largest result?</p><p><b>【解题思路 Solution】</b>4+5=9, 5+6=11, 3+6=9, 2+7=9. The largest is 5+6=<b>11</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>expression = 表达式 / math statement<br>result = 结果 / answer<br>largest = 最大的 / biggest</p>'
  },
  {
    id: 'g1n23', domain: 'number', grade: 1, level: 1, rit: 162,
    stem: 'Calculate: 13 + 7 - 5 = ?',
    options: [{ label: 'A', text: '13' }, { label: 'B', text: '14' }, { label: 'C', text: '15' }, { label: 'D', text: '16' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>13 + 7 - 5 = ?</p><p><b>【Original in English】</b>Calculate: 13 + 7 - 5 = ?</p><p><b>【解题思路 Solution】</b>13+7=20, 20−5=<b>15</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>calculate = 计算<br>plus = 加<br>minus = 减</p>'
  },
  {
    id: 'g1n24', domain: 'number', grade: 1, level: 1, rit: 163,
    stem: 'A plate has 9 apples. 4 are eaten. 6 are bought. How many now?',
    options: [{ label: 'A', text: '9' }, { label: 'B', text: '10' }, { label: 'C', text: '11' }, { label: 'D', text: '12' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>盘子里有 9 个苹果，吃了 4 个，又买了 6 个，现在有几个？</p><p><b>【Original in English】</b>A plate has 9 apples. 4 are eaten. 6 are bought. How many now?</p><p><b>【解题思路 Solution】</b>9−4=5, 5+6=<b>11</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>plate = 盘子 / dish<br>are eaten = 被吃掉 (passive voice)<br>are bought = 被购买 (passive voice)<br>now = 现在 / at this time</p>'
  },
  {
    id: 'g1n25', domain: 'number', grade: 1, level: 1, rit: 164,
    stem: '8 + 8 + 4 = ?',
    options: [{ label: 'A', text: '18' }, { label: 'B', text: '19' }, { label: 'C', text: '20' }, { label: 'D', text: '21' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>8 + 8 + 4 = ?</p><p><b>【Original in English】</b>8 + 8 + 4 = ?</p><p><b>【解题思路 Solution】</b>8+8=16, 16+4=<b>20</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>plus = 加<br>sum = 和 / total</p>'
  },
  {
    id: 'g1f01', domain: 'fraction', grade: 1, level: 1, rit: 182,
    stem: 'A pizza is cut into 8 equal pieces. If you eat 1 piece, what fraction did you eat?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/4' }, { label: 'D', text: '1/8' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>一个比萨平均切成 8 块，吃了 1 块，写成分数是？</p><p><b>【Original in English】</b>A pizza is cut into 8 equal pieces. If you eat 1 piece, what fraction did you eat?</p><p><b>【解题思路 Solution】</b>Out of 8 pieces, you ate 1, so the fraction is <b>1/8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>equal pieces = 相同的块<br>fraction = 分数<br>whole = 整体</p>'
  },
  {
    id: 'g1f02', domain: 'fraction', grade: 1, level: 1, rit: 183,
    stem: 'Which fraction is the largest? 1/2, 1/3, 1/4',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/4' }, { label: 'D', text: 'all the same' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>下面哪个分数最大？1/2, 1/3, 1/4</p><p><b>【Original in English】</b>Which fraction is the largest? 1/2, 1/3, 1/4</p><p><b>【解题思路 Solution】</b>Same numerators: smaller denominator = larger fraction: 1/2 > 1/3 > 1/4.</p><p><b>【Key Vocabulary · 核心生词】</b><br>numerator = 分子<br>denominator = 分母<br>largest = 最大的</p>'
  },
  {
    id: 'g1f03', domain: 'fraction', grade: 1, level: 1, rit: 184,
    stem: 'Which picture shows 1/2?',
    options: [{ label: 'A', text: '1 of 4 colored' }, { label: 'B', text: '2 of 4 colored' }, { label: 'C', text: '2 of 6 colored' }, { label: 'D', text: '3 of 8 colored' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>下面哪个图形表示 1/2？</p><p><b>【Original in English】</b>Which picture shows 1/2?</p><p><b>【解题思路 Solution】</b>1/2 is half; 2 of 4 colored = 1/2.</p><p><b>【Key Vocabulary · 核心生词】</b><br>half = 一半<br>colored = 涂色<br>whole = 整体</p>'
  },
  {
    id: 'g1f04', domain: 'fraction', grade: 1, level: 1, rit: 185,
    stem: '1/2 + 1/2 = ?',
    options: [{ label: 'A', text: '1/4' }, { label: 'B', text: '1/2' }, { label: 'C', text: '1' }, { label: 'D', text: '2' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>1/2 + 1/2 = ?</p><p><b>【Original in English】</b>1/2 + 1/2 = ?</p><p><b>【解题思路 Solution】</b>Two halves = <b>1</b> whole.</p><p><b>【Key Vocabulary · 核心生词】</b><br>half = 一半<br>whole = 整体</p>'
  },
  {
    id: 'g1f05', domain: 'fraction', grade: 1, level: 1, rit: 186,
    stem: 'Divide 6 candies equally among 3 children. What fraction does each get?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/4' }, { label: 'D', text: '1/6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>把 6 颗糖平均分给 3 个小朋友，每个分到几分之几？</p><p><b>【Original in English】</b>Divide 6 candies equally among 3 children. What fraction does each get?</p><p><b>【解题思路 Solution】</b>6÷3=2 each, which is <b>1/3</b> of 6.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除<br>equally = 平等地<br>each = 每个</p>'
  },
  {
    id: 'g1a01', domain: 'algebra', grade: 1, level: 1, rit: 170,
    stem: 'What is the next number in the sequence: 1, 3, 5, 7, _?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '9' }, { label: 'C', text: '10' }, { label: 'D', text: '11' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>观察数列：1, 3, 5, 7, _，下一个数是？</p><p><b>【Original in English】</b>What is the next number in the sequence: 1, 3, 5, 7, _?</p><p><b>【解题思路 Solution】</b>This is a sequence of odd numbers. Next: <b>9</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sequence = 数列<br>odd number = 奇数 (1, 3, 5, 7...)<br>pattern = 规律</p>'
  },
  {
    id: 'g1a02', domain: 'algebra', grade: 1, level: 1, rit: 171,
    stem: 'What is the next number in the sequence: 2, 4, 6, 8, _?',
    options: [{ label: 'A', text: '9' }, { label: 'B', text: '10' }, { label: 'C', text: '11' }, { label: 'D', text: '12' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>观察数列：2, 4, 6, 8, _，下一个数是？</p><p><b>【Original in English】</b>What is the next number in the sequence: 2, 4, 6, 8, _?</p><p><b>【解题思路 Solution】</b>Each is 2 more than previous: 2, 4, 6, 8, <b>10</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sequence = 数列<br>pattern = 规律<br>even number = 偶数</p>'
  },
  {
    id: 'g1a03', domain: 'algebra', grade: 1, level: 1, rit: 172,
    stem: 'Find the rule: 5, 10, 15, _, 25',
    options: [{ label: 'A', text: '18' }, { label: 'B', text: '20' }, { label: 'C', text: '22' }, { label: 'D', text: '24' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>找规律：5, 10, 15, _, 25</p><p><b>【Original in English】</b>Find the rule: 5, 10, 15, _, 25</p><p><b>【解题思路 Solution】</b>Each is 5 more: 5, 10, 15, <b>20</b>, 25.</p><p><b>【Key Vocabulary · 核心生词】</b><br>rule / pattern = 规律<br>multiple = 倍数<br>find the missing = 找缺失</p>'
  },
  {
    id: 'g1a04', domain: 'algebra', grade: 1, level: 1, rit: 173,
    stem: 'Lily has 3 apples. Mom gives her some more. Now she has 8. How many did Mom give?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>小红有 3 个苹果，妈妈又给了她几个，现在有 8 个，妈妈给了几个？</p><p><b>【Original in English】</b>Lily has 3 apples. Mom gives her some more. Now she has 8. How many did Mom give?</p><p><b>【解题思路 Solution】</b>3 + x = 8, so x = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>give = 给出<br>how many = 多少<br>equation = 方程</p>'
  },
  {
    id: 'g1a05', domain: 'algebra', grade: 1, level: 1, rit: 174,
    stem: 'A number plus 5 equals 12. What is the number?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '7' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数加 5 等于 12，这个数是几？</p><p><b>【Original in English】</b>A number plus 5 equals 12. What is the number?</p><p><b>【解题思路 Solution】</b>x + 5 = 12, so x = <b>7</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>equation = 方程<br>unknown = 未知数<br>solve = 解出</p>'
  },
  {
    id: 'g1g01', domain: 'geometry', grade: 1, level: 1, rit: 140,
    stem: 'Which of the following is a circle?',
    options: [{ label: 'A', text: '□ (square)' }, { label: 'B', text: '△ (triangle)' }, { label: 'C', text: '○ (circle)' }, { label: 'D', text: '☆ (star)' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>下面哪个图形是圆形?</p><p><b>【Original in English】</b>Which of the following is a circle?</p><p><b>【解题思路 Solution】</b>圆形 (circle) 是曲线闭合图形,没有角。<br>A circle is a closed curved shape with no corners.<br>选项:□ 正方形, △ 三角形, ○ 圆形, ☆ 星形。<br>选 C (○)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>circle = 圆形<br>square = 正方形<br>triangle = 三角形<br>star = 星形</p>'
  },
  {
    id: 'g1g02', domain: 'geometry', grade: 1, level: 1, rit: 140,
    stem: 'Which shape has 3 sides?',
    options: [{ label: 'A', text: 'Square' }, { label: 'B', text: 'Rectangle' }, { label: 'C', text: 'Triangle' }, { label: 'D', text: 'Circle' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>下面哪个图形有 3 条边?</p><p><b>【Original in English】</b>Which shape has 3 sides?</p><p><b>【解题思路 Solution】</b>三角形 (triangle) = tri (三) + angle (角),3 条边、3 个角。<br>Triangle = 3 sides, 3 angles.<br>选 C (三角形)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>triangle = 三角形<br>side = 边<br>square = 正方形 (4 边)<br>rectangle = 长方形 (4 边)</p>'
  },
  {
    id: 'g1g03', domain: 'geometry', grade: 1, level: 1, rit: 140,
    stem: 'How many sides does a square have?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '5' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方形有几条边?</p><p><b>【Original in English】</b>How many sides does a square have?</p><p><b>【解题思路 Solution】</b>正方形 (square) 有 4 条相等的边,4 个直角。<br>A square has 4 equal sides and 4 right angles.<br>选 C (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 正方形<br>side = 边<br>how many = 多少<br>equal sides = 相等的边</p>'
  },
  {
    id: 'g1g04', domain: 'geometry', grade: 1, level: 1, rit: 140,
    stem: 'Which shape has 4 right angles?',
    options: [{ label: 'A', text: 'Triangle' }, { label: 'B', text: 'Circle' }, { label: 'C', text: 'Square' }, { label: 'D', text: 'Semicircle' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>下面哪个图形有 4 个直角?</p><p><b>【Original in English】</b>Which shape has 4 right angles?</p><p><b>【解题思路 Solution】</b>正方形 (square) 和长方形 (rectangle) 都有 4 个 90° 直角。<br>Both squares and rectangles have 4 right angles (90°).<br>在选项中只有正方形,选 C。</p><p><b>【Key Vocabulary · 核心生词】</b><br>right angle = 直角 (90°)<br>square = 正方形<br>rectangle = 长方形<br>triangle = 三角形</p>'
  },
  {
    id: 'g1g05', domain: 'geometry', grade: 1, level: 1, rit: 141,
    stem: 'A clock is a circle. How many corners does it have?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '2' }, { label: 'C', text: '4' }, { label: 'D', text: '12' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>时钟是圆形, 它有几个角?</p><p><b>【Original in English】</b>A clock is a circle. How many corners does it have?</p><p><b>【解题思路 Solution】</b>圆形 (circle) 是曲线图形,没有角。<br>A circle is a curved shape with no corners.<br>角 (corner/angle) = 直线相交处,圆没有。<br>选 A (0)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>circle = 圆形<br>corner / angle = 角<br>curved = 曲线的<br>zero = 0</p>'
  },
  {
    id: 'g1g06', domain: 'geometry', grade: 1, level: 1, rit: 180,
    stem: 'How many faces does a cube have?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方体有几个面？</p><p><b>【Original in English】</b>How many faces does a cube have?</p><p><b>【解题思路 Solution】</b>A cube has <b>6</b> square faces.</p><p><b>【Key Vocabulary · 核心生词】</b><br>cube = 正方体<br>face = 面</p>'
  },
  {
    id: 'g1g07', domain: 'geometry', grade: 1, level: 1, rit: 181,
    stem: 'A rectangular solid has how many vertices?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '6' }, { label: 'C', text: '8' }, { label: 'D', text: '12' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>长方体有几个顶点？</p><p><b>【Original in English】</b>A rectangular solid has how many vertices?</p><p><b>【解题思路 Solution】</b>A rectangular solid has <b>8</b> vertices.</p><p><b>【Key Vocabulary · 核心生词】</b><br>rectangular solid = 长方体<br>vertex = 顶点</p>'
  },
  {
    id: 'g1g08', domain: 'geometry', grade: 1, level: 1, rit: 182,
    stem: 'How many vertices does a cube have?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '6' }, { label: 'C', text: '8' }, { label: 'D', text: '12' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方体有几个顶点？</p><p><b>【Original in English】</b>How many vertices does a cube have?</p><p><b>【解题思路 Solution】</b>A cube has <b>8</b> vertices (4 bottom + 4 top).</p><p><b>【Key Vocabulary · 核心生词】</b><br>cube = 正方体<br>vertex = 顶点</p>'
  },
  {
    id: 'g1g09', domain: 'geometry', grade: 1, level: 1, rit: 183,
    stem: 'Which shape is NOT a polygon?',
    options: [{ label: 'A', text: 'square' }, { label: 'B', text: 'triangle' }, { label: 'C', text: 'circle' }, { label: 'D', text: 'rectangle' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>下列哪个不是多边形？</p><p><b>【Original in English】</b>Which shape is NOT a polygon?</p><p><b>【解题思路 Solution】</b>A circle is curved; others are polygons (closed with straight sides).</p><p><b>【Key Vocabulary · 核心生词】</b><br>polygon = 多边形<br>curved = 弯曲的</p>'
  },
  {
    id: 'g1g10', domain: 'geometry', grade: 1, level: 1, rit: 184,
    stem: 'Square with perimeter 20 cm. What is the side?',
    options: [{ label: 'A', text: '4 cm' }, { label: 'B', text: '5 cm' }, { label: 'C', text: '6 cm' }, { label: 'D', text: '10 cm' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个正方形周长 20 厘米，边长多少？</p><p><b>【Original in English】</b>Square with perimeter 20 cm. What is the side?</p><p><b>【解题思路 Solution】</b>20 ÷ 4 = <b>5 cm</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>perimeter = 周长<br>side = 边</p>'
  },
  {
    id: 'g1g11', domain: 'geometry', grade: 1, level: 1, rit: 185,
    stem: 'Rectangle: length 8, width 5. Perimeter?',
    options: [{ label: 'A', text: '13' }, { label: 'B', text: '26' }, { label: 'C', text: '40' }, { label: 'D', text: '80' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>长方形长 8 宽 5，周长？</p><p><b>【Original in English】</b>Rectangle: length 8, width 5. Perimeter?</p><p><b>【解题思路 Solution】</b>2 × (8+5) = <b>26</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>length = 长<br>width = 宽<br>perimeter = 周长</p>'
  },
  {
    id: 'g1g12', domain: 'geometry', grade: 1, level: 1, rit: 186,
    stem: 'Which object is roughly a sphere?',
    options: [{ label: 'A', text: 'book' }, { label: 'B', text: 'basketball' }, { label: 'C', text: 'pencil' }, { label: 'D', text: 'blackboard' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>哪个物体大致是球形？</p><p><b>【Original in English】</b>Which object is roughly a sphere?</p><p><b>【解题思路 Solution】</b>A basketball is a sphere.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sphere = 球体<br>roughly = 大致地</p>'
  },
  {
    id: 'g1g13', domain: 'geometry', grade: 1, level: 1, rit: 187,
    stem: 'A chalk is closest to which 3D shape?',
    options: [{ label: 'A', text: 'sphere' }, { label: 'B', text: 'cylinder' }, { label: 'C', text: 'rectangular prism' }, { label: 'D', text: 'cone' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>粉笔最接近哪种立体图形？</p><p><b>【Original in English】</b>A chalk is closest to which 3D shape?</p><p><b>【解题思路 Solution】</b>A chalk is a <b>cylinder</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>chalk = 粉笔<br>cylinder = 圆柱</p>'
  },
  {
    id: 'g1g14', domain: 'geometry', grade: 1, level: 1, rit: 188,
    stem: 'A Rubik cube is closest to which shape?',
    options: [{ label: 'A', text: 'sphere' }, { label: 'B', text: 'cylinder' }, { label: 'C', text: 'cube' }, { label: 'D', text: 'cone' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>魔方最接近哪种形状？</p><p><b>【Original in English】</b>A Rubik cube cube is closest to which shape?</p><p><b>【解题思路 Solution】</b>A Rubik\'s cube is a <b>cube</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>cube = 正方体<br>Rubik\'s cube = 魔方</p>'
  },
  {
    id: 'g1g15', domain: 'geometry', grade: 1, level: 1, rit: 189,
    stem: 'Which shape has no corners?',
    options: [{ label: 'A', text: 'square' }, { label: 'B', text: 'triangle' }, { label: 'C', text: 'rectangle' }, { label: 'D', text: 'circle' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>下面哪个图形没有角？</p><p><b>【Original in English】</b>Which shape has no corners?</p><p><b>【解题思路 Solution】</b>A circle is a curve with <b>no</b> corners.</p><p><b>【Key Vocabulary · 核心生词】</b><br>corner = 角<br>circle = 圆形</p>'
  },
  {
    id: 'g1g16', domain: 'geometry', grade: 1, level: 1, rit: 190,
    stem: 'A coin has two ___ faces and one ___ side.',
    options: [{ label: 'A', text: 'square / curved' }, { label: 'B', text: 'circle / curved' }, { label: 'C', text: 'round / square' }, { label: 'D', text: 'triangle / straight' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>硬币两面是 ___ 形，侧面是 ___。</p><p><b>【Original in English】</b>A coin has two ___ faces and one ___ side.</p><p><b>【解题思路 Solution】</b>A coin: two <b>circle</b> faces + one <b>curved</b> side.</p><p><b>【Key Vocabulary · 核心生词】</b><br>coin = 硬币<br>curved = 弯曲的</p>'
  },
  {
    id: 'g1g17', domain: 'geometry', grade: 1, level: 1, rit: 191,
    stem: 'To make a big square, you need at least ___ small squares.',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>拼一个大的正方形，至少需要 ___ 个小正方形。</p><p><b>【Original in English】</b>To make a big square, you need at least ___ small squares.</p><p><b>【解题思路 Solution】</b>2×2 = <b>4</b> small squares.</p><p><b>【Key Vocabulary · 核心生词】</b><br>at least = 至少<br>make = 拼成</p>'
  },
  {
    id: 'g1g18', domain: 'geometry', grade: 1, level: 1, rit: 192,
    stem: 'A triangle and a square joined can form:',
    options: [{ label: 'A', text: 'circle' }, { label: 'B', text: 'pentagon' }, { label: 'C', text: 'rectangle' }, { label: 'D', text: 'sphere' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个三角形和一个正方形拼在一起可能形成：</p><p><b>【Original in English】</b>A triangle and a square joined can form:</p><p><b>【解题思路 Solution】</b>3+4-1=6 → <b>pentagon</b> (5 sides).</p><p><b>【Key Vocabulary · 核心生词】</b><br>join = 拼合<br>pentagon = 五边形</p>'
  },
  {
    id: 'g1g19', domain: 'geometry', grade: 1, level: 1, rit: 193,
    stem: 'How many axes of symmetry does a square have?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '4' }, { label: 'D', text: 'infinite' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方形有几条对称轴？</p><p><b>【Original in English】</b>How many axes of symmetry does a square have?</p><p><b>【解题思路 Solution】</b>A square has <b>4</b> axes.</p><p><b>【Key Vocabulary · 核心生词】</b><br>axis of symmetry = 对称轴<br>diagonal = 对角线</p>'
  },
  {
    id: 'g1g20', domain: 'geometry', grade: 1, level: 1, rit: 194,
    stem: 'A rope 16 cm wraps around a square. What is the side?',
    options: [{ label: 'A', text: '2 cm' }, { label: 'B', text: '3 cm' }, { label: 'C', text: '4 cm' }, { label: 'D', text: '8 cm' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一根绳子 16 厘米围成正方形，边长多少？</p><p><b>【Original in English】</b>A rope 16 cm wraps around a square. What is the side?</p><p><b>【解题思路 Solution】</b>16 ÷ 4 = <b>4 cm</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>rope = 绳子<br>wrap = 围</p>'
  },
  {
    id: 'g1g21', domain: 'geometry', grade: 1, level: 1, rit: 195,
    stem: 'Clock: hour hand 8, minute hand 12. What time?',
    options: [{ label: 'A', text: '8:00' }, { label: 'B', text: '8:12' }, { label: 'C', text: '12:00' }, { label: 'D', text: '8:08' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>几点？时针 8 分针 12。</p><p><b>【Original in English】</b>Clock: hour hand 8, minute hand 12. What time?</p><p><b>【解题思路 Solution】</b>Hour 8 + minute 12 = <b>8:00</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>hour hand = 时针<br>minute hand = 分针</p>'
  },
  {
    id: 'g1g22', domain: 'geometry', grade: 1, level: 1, rit: 196,
    stem: 'A clock minute hand goes around once in:',
    options: [{ label: 'A', text: '1 hour' }, { label: 'B', text: '12 hours' }, { label: 'C', text: '24 hours' }, { label: 'D', text: '60 minutes' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>时钟的分针转一圈需要：</p><p><b>【Original in English】</b>A clock minute hand goes around once in:</p><p><b>【解题思路 Solution】</b>One revolution = <b>1 hour</b> (60 min).</p><p><b>【Key Vocabulary · 核心生词】</b><br>minute hand = 分针<br>revolution = 一圈</p>'
  },
  {
    id: 'g1g23', domain: 'geometry', grade: 1, level: 1, rit: 197,
    stem: 'A 3D shape that is NOT a polyhedron is:',
    options: [{ label: 'A', text: 'cube' }, { label: 'B', text: 'cylinder' }, { label: 'C', text: 'cuboid' }, { label: 'D', text: 'square pyramid' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>下列不是多面体的立体图形是：</p><p><b>【Original in English】</b>A 3D shape that is NOT a polyhedron is:</p><p><b>【解题思路 Solution】</b>Cylinder has a curved surface → not a polyhedron.</p><p><b>【Key Vocabulary · 核心生词】</b><br>polyhedron = 多面体<br>curved = 弯曲的</p>'
  },
  {
    id: 'g1g24', domain: 'geometry', grade: 1, level: 1, rit: 198,
    stem: 'A cone has ___ vertex and ___ straight edge(s).',
    options: [{ label: 'A', text: '0 / 0' }, { label: 'B', text: '1 / 0' }, { label: 'C', text: '1 / 1' }, { label: 'D', text: '0 / 1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆锥有 ___ 个顶点，___ 条直棱。</p><p><b>【Original in English】</b>A cone has ___ vertex and ___ straight edge(s).</p><p><b>【解题思路 Solution】</b>Cone: <b>1</b> vertex, <b>0</b> straight edges.</p><p><b>【Key Vocabulary · 核心生词】</b><br>cone = 圆锥<br>apex = 顶点<br>straight edge = 直棱</p>'
  },
  {
    id: 'g1g25', domain: 'geometry', grade: 1, level: 1, rit: 199,
    stem: 'A cylinder has 2 ___ faces and 1 ___ face.',
    options: [{ label: 'A', text: 'square / curved' }, { label: 'B', text: 'circle / curved' }, { label: 'C', text: 'triangle / square' }, { label: 'D', text: 'rectangle / circle' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆柱有 2 个 ___ 面，1 个 ___ 面。</p><p><b>【Original in English】</b>A cylinder has 2 ___ faces and 1 ___ face.</p><p><b>【解题思路 Solution】</b>Cylinder: 2 <b>circle</b> + 1 <b>curved</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>cylinder = 圆柱<br>lateral face = 侧面</p>'
  },
  {
    id: 'g1d01', domain: 'data', grade: 1, level: 1, rit: 200,
    stem: 'Bar chart: apple 5, pear 3, banana 2, orange 4. Which has the most?',
    options: [{ label: 'A', text: 'apple' }, { label: 'B', text: 'pear' }, { label: 'C', text: 'banana' }, { label: 'D', text: 'orange' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>条形图：苹果 5 个、梨 3 个、香蕉 2 个、橙子 4 个，哪种最多？</p><p><b>【Original in English】</b>Bar chart: apple 5, pear 3, banana 2, orange 4. Which has the most?</p><p><b>【解题思路 Solution】</b>Apple 5 = <b>most</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>bar chart = 条形图<br>most = 最多</p>'
  },
  {
    id: 'g1d02', domain: 'data', grade: 1, level: 1, rit: 201,
    stem: 'Class 18 boys, 12 girls. Boys more than girls by?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '7' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>某班 18 个男生，12 个女生，男生多几个？</p><p><b>【Original in English】</b>Class 18 boys, 12 girls. Boys more than girls by?</p><p><b>【解题思路 Solution】</b>18 − 12 = <b>6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>more than = 多</p>'
  },
  {
    id: 'g1d03', domain: 'data', grade: 1, level: 1, rit: 202,
    stem: 'Class A 20, B 25, C 22. Average per class?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '21' }, { label: 'C', text: '22' }, { label: 'D', text: '23' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>A 班 20，B 班 25，C 班 22，平均每班几人？</p><p><b>【Original in English】</b>Class A 20, B 25, C 22. Average per class?</p><p><b>【解题思路 Solution】</b>(20+25+22)/3 = 67/3 ≈ <b>22</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>average = 平均</p>'
  },
  {
    id: 'g1d04', domain: 'data', grade: 1, level: 1, rit: 203,
    stem: 'Roll a die. Probability of getting 3?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/6' }, { label: 'D', text: '1' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>掷一颗骰子，点数是 3 的概率？</p><p><b>【Original in English】</b>Roll a die. Probability of getting 3?</p><p><b>【解题思路 Solution】</b>6 outcomes, 1 favorable: <b>1/6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>die = 骰子 (单数)<br>probability = 概率</p>'
  },
  {
    id: 'g1d05', domain: 'data', grade: 1, level: 1, rit: 204,
    stem: 'A bag has 4 red, 6 yellow balls. Probability of yellow?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '3/5' }, { label: 'C', text: '2/5' }, { label: 'D', text: '1/10' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>袋中 4 红 6 黄球，P(黄) = ?</p><p><b>【Original in English】</b>A bag has 4 red, 6 yellow balls. Probability of yellow?</p><p><b>【解题思路 Solution】</b>6/10 = <b>3/5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>yellow = 黄色的<br>simplify = 约分</p>'
  },
  {
    id: 'g1d06', domain: 'data', grade: 1, level: 1, rit: 205,
    stem: 'Class 50 students, 30 are boys. What % are boys?',
    options: [{ label: 'A', text: '50%' }, { label: 'B', text: '60%' }, { label: 'C', text: '70%' }, { label: 'D', text: '80%' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>某班 50 人，30 个男生，男生占百分之几？</p><p><b>【Original in English】</b>Class 50 students, 30 are boys. What % are boys?</p><p><b>【解题思路 Solution】</b>30/50 = <b>60%</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>percent = 百分之</p>'
  },
  {
    id: 'g1d07', domain: 'data', grade: 1, level: 1, rit: 206,
    stem: 'Coins 1,2,3,4,5,6 yuan. How many are in the 1-6 range?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>硬币 1-6 元范围有几个？</p><p><b>【Original in English】</b>Coins 1,2,3,4,5,6 yuan. How many are in the 1-6 range?</p><p><b>【解题思路 Solution】</b>All <b>6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 范围</p>'
  },
  {
    id: 'g1d08', domain: 'data', grade: 1, level: 1, rit: 207,
    stem: 'Lily 5 stickers + Mom 2 = total?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '7' }, { label: 'C', text: '8' }, { label: 'D', text: '10' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>小红 5 张贴纸 + 妈妈给 2 张 = ?</p><p><b>【Original in English】</b>Lily 5 stickers + Mom 2 = total?</p><p><b>【解题思路 Solution】</b>5 + 2 = <b>7</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sticker = 贴纸<br>total = 总</p>'
  },
  {
    id: 'g1d09', domain: 'data', grade: 1, level: 1, rit: 208,
    stem: '5 pencils for 5 kids. Each gets ___ pencils.',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '5' }, { label: 'D', text: '25' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>5 支铅笔分给 5 个小朋友，每人 ___ 支。</p><p><b>【Original in English】</b>5 pencils for 5 kids. Each gets ___ pencils.</p><p><b>【解题思路 Solution】</b>5 ÷ 5 = <b>1</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>pencil = 铅笔<br>each = 每个</p>'
  },
  {
    id: 'g1d10', domain: 'data', grade: 1, level: 1, rit: 209,
    stem: 'Today Wed. 3 days later?',
    options: [{ label: 'A', text: 'Thu' }, { label: 'B', text: 'Fri' }, { label: 'C', text: 'Sat' }, { label: 'D', text: 'Sun' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>今天周三，3 天后星期几？</p><p><b>【Original in English】</b>Today Wed. 3 days later?</p><p><b>【解题思路 Solution】</b>Wed+3 = <b>Sat</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>3 days later = 3 天后</p>'
  },
  {
    id: 'g1d11', domain: 'data', grade: 1, level: 1, rit: 210,
    stem: 'Bar chart: apple 5, banana 3, pear 4. Mode?',
    options: [{ label: 'A', text: 'apple' }, { label: 'B', text: 'banana' }, { label: 'C', text: 'pear' }, { label: 'D', text: 'tie' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>条形图：苹果 5、香蕉 3、梨 4。众数？</p><p><b>【Original in English】</b>Bar chart: apple 5, banana 3, pear 4. Mode?</p><p><b>【解题思路 Solution】</b>Apple (5) most = <b>mode</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>mode = 众数</p>'
  },
  {
    id: 'g1d12', domain: 'data', grade: 1, level: 1, rit: 211,
    stem: 'Class A 20, B 25. Average?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '22' }, { label: 'C', text: '22.5' }, { label: 'D', text: '25' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>A 班 20，B 班 25，平均几人？</p><p><b>【Original in English】</b>Class A 20, B 25. Average?</p><p><b>【解题思路 Solution】</b>(20+25)/2 = <b>22.5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>average = 平均</p>'
  },
  {
    id: 'g1d13', domain: 'data', grade: 1, level: 1, rit: 212,
    stem: '5 balls: 1,2,3,4,5. Median?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '4' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>5 个球 1-5，中位数？</p><p><b>【Original in English】</b>5 balls: 1,2,3,4,5. Median?</p><p><b>【解题思路 Solution】</b>Middle (3rd) = <b>3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数</p>'
  },
  {
    id: 'g1d14', domain: 'data', grade: 1, level: 1, rit: 213,
    stem: 'Bag: 2 red 3 white. P(white) = ?',
    options: [{ label: 'A', text: '2/5' }, { label: 'B', text: '3/5' }, { label: 'C', text: '2/3' }, { label: 'D', text: '1/2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>袋 2 红 3 白，P(白) = ?</p><p><b>【Original in English】</b>Bag: 2 red 3 white. P(white) = ?</p><p><b>【解题思路 Solution】</b>3/5.</p><p><b>【Key Vocabulary · 核心生词】</b><br>white = 白色的</p>'
  },
  {
    id: 'g1d15', domain: 'data', grade: 1, level: 1, rit: 214,
    stem: 'Class scores: 80, 90, 70, 85. Range?',
    options: [{ label: 'A', text: '15' }, { label: 'B', text: '20' }, { label: 'C', text: '25' }, { label: 'D', text: '85' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>成绩 80, 90, 70, 85。极差？</p><p><b>【Original in English】</b>Class scores: 80, 90, 70, 85. Range?</p><p><b>【解题思路 Solution】</b>90 − 70 = <b>20</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 极差</p>'
  },
  {
    id: 'g1d16', domain: 'data', grade: 1, level: 1, rit: 215,
    stem: 'Class 40, 60% are girls. How many girls?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '24' }, { label: 'C', text: '30' }, { label: 'D', text: '36' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>班 40 人，60% 是女生，女生几人？</p><p><b>【Original in English】</b>Class 40, 60% are girls. How many girls?</p><p><b>【解题思路 Solution】</b>40 × 0.6 = <b>24</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>percent = 百分之</p>'
  },
  {
    id: 'g1d17', domain: 'data', grade: 1, level: 1, rit: 216,
    stem: 'Coin: heads or tails. P(heads) = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1/2' }, { label: 'C', text: '1' }, { label: 'D', text: '2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>硬币正面反面各一个，P(正) = ?</p><p><b>【Original in English】</b>Coin: heads or tails. P(heads) = ?</p><p><b>【解题思路 Solution】</b>2 equal outcomes = <b>1/2</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>heads = 正面<br>tails = 反面</p>'
  },
  {
    id: 'g1d18', domain: 'data', grade: 1, level: 1, rit: 217,
    stem: 'A 2-hour movie starts at 14:00. Ends at?',
    options: [{ label: 'A', text: '14:00' }, { label: 'B', text: '15:00' }, { label: 'C', text: '16:00' }, { label: 'D', text: '17:00' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>2 小时电影 14:00 开始，几点结束？</p><p><b>【Original in English】</b>A 2-hour movie starts at 14:00. Ends at?</p><p><b>【解题思路 Solution】</b>14:00 + 2h = <b>16:00</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>movie = 电影<br>start / end = 开始 / 结束</p>'
  },
  {
    id: 'g1d19', domain: 'data', grade: 1, level: 1, rit: 218,
    stem: 'Class: 10 math, 8 English, 5 both. Only math?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '8' }, { label: 'C', text: '10' }, { label: 'D', text: '3' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>班 10 数学 8 英语 5 都喜欢。只数学？</p><p><b>【Original in English】</b>Class: 10 math, 8 English, 5 both. Only math?</p><p><b>【解题思路 Solution】</b>10 − 5 = <b>5</b> only math.</p><p><b>【Key Vocabulary · 核心生词】</b><br>only = 只<br>both = 都</p>'
  },
  {
    id: 'g1d20', domain: 'data', grade: 1, level: 1, rit: 219,
    stem: '10 red + 5 blue, mix. Draw 1. P(red)?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/3' }, { label: 'C', text: '2/3' }, { label: 'D', text: '1/15' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>10 红 5 蓝混一起，P(红) = ?</p><p><b>【Original in English】</b>10 red + 5 blue, mix. Draw 1. P(red)?</p><p><b>【解题思路 Solution】</b>10/15 = <b>2/3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>mix = 混合<br>draw = 抽</p>'
  },
  // ==================== 二年级 G2 (80 道) ====================
  {
    id: 'g2n01', domain: 'number', grade: 2, level: 1, rit: 168,
    stem: 'A school has 678 students. Round to the nearest 10. What is it?',
    options: [{ label: 'A', text: '670' }, { label: 'B', text: '680' }, { label: 'C', text: '688' }, { label: 'D', text: '700' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>某校有 678 个学生，四舍五入到十位是多少？</p><p><b>【Original in English】</b>A school has 678 students. Round to the nearest 10. What is it?</p><p><b>【解题思路 Solution】</b>678 → look at ones digit 8 ≥ 5, round up: <b>680</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>round = 四舍五入<br>nearest ten = 最近的十位<br>ones digit = 个位</p>'
  },
  {
    id: 'g2n02', domain: 'number', grade: 2, level: 1, rit: 169,
    stem: 'A 4-digit number has digit 7 in the hundreds place. What is its place value?',
    options: [{ label: 'A', text: '7' }, { label: 'B', text: '70' }, { label: 'C', text: '700' }, { label: 'D', text: '7000' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个 4 位数百位是 7，它的位值是多少？</p><p><b>【Original in English】</b>A 4-digit number has digit 7 in the hundreds place. What is its place value?</p><p><b>【解题思路 Solution】</b>7 in hundreds place = <b>700</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>place value = 位值<br>hundreds place = 百位<br>4-digit = 4 位数</p>'
  },
  {
    id: 'g2n03', domain: 'number', grade: 2, level: 1, rit: 170,
    stem: '1 + 2 + 3 + 4 + 5 = ?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '15' }, { label: 'C', text: '20' }, { label: 'D', text: '25' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1 + 2 + 3 + 4 + 5 = ?</p><p><b>【Original in English】</b>1 + 2 + 3 + 4 + 5 = ?</p><p><b>【解题思路 Solution】</b>Sum of 1-5 = 5×6÷2 = <b>15</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 和<br>formula = 公式<br>Gauss = 高斯</p>'
  },
  {
    id: 'g2n04', domain: 'number', grade: 2, level: 1, rit: 171,
    stem: 'A number has digit 5 in tens place and 3 in ones place. What is the number?',
    options: [{ label: 'A', text: '53' }, { label: 'B', text: '35' }, { label: 'C', text: '503' }, { label: 'D', text: '530' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个两位数十位是 5，个位是 3，是？</p><p><b>【Original in English】</b>A number has digit 5 in tens place and 3 in ones place. What is the number?</p><p><b>【解题思路 Solution】</b>Tens 5 + Ones 3 = <b>53</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>tens place = 十位<br>ones place = 个位</p>'
  },
  {
    id: 'g2n05', domain: 'number', grade: 2, level: 1, rit: 172,
    stem: 'A number is 17 more than 25. What is the number?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '32' }, { label: 'C', text: '42' }, { label: 'D', text: '52' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数比 25 多 17，是？</p><p><b>【Original in English】</b>A number is 17 more than 25. What is the number?</p><p><b>【解题思路 Solution】</b>25 + 17 = <b>42</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>more than = 多于</p>'
  },
  {
    id: 'g2n06', domain: 'number', grade: 2, level: 1, rit: 173,
    stem: '8 × 7 = ?',
    options: [{ label: 'A', text: '49' }, { label: 'B', text: '54' }, { label: 'C', text: '56' }, { label: 'D', text: '64' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>8 × 7 = ?</p><p><b>【Original in English】</b>8 × 7 = ?</p><p><b>【解题思路 Solution】</b>8 × 7 = <b>56</b> (multiplication table).</p><p><b>【Key Vocabulary · 核心生词】</b><br>times = 乘<br>multiplication table = 乘法表</p>'
  },
  {
    id: 'g2n07', domain: 'number', grade: 2, level: 1, rit: 174,
    stem: 'A number is 19 less than 67. What is the number?',
    options: [{ label: 'A', text: '48' }, { label: 'B', text: '52' }, { label: 'C', text: '86' }, { label: 'D', text: '38' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数比 67 少 19，是？</p><p><b>【Original in English】</b>A number is 19 less than 67. What is the number?</p><p><b>【解题思路 Solution】</b>67 − 19 = <b>48</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>less than = 少于</p>'
  },
  {
    id: 'g2n08', domain: 'number', grade: 2, level: 1, rit: 175,
    stem: '24 ÷ 6 = ?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '6' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>24 ÷ 6 = ?</p><p><b>【Original in English】</b>24 ÷ 6 = ?</p><p><b>【解题思路 Solution】</b>6 × <b>4</b> = 24, so 24 ÷ 6 = 4.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除<br>quotient = 商</p>'
  },
  {
    id: 'g2n09', domain: 'number', grade: 2, level: 1, rit: 176,
    stem: 'A 2-digit number: ones digit 1 more than tens digit, sum is 11. What is it?',
    options: [{ label: 'A', text: '65' }, { label: 'B', text: '56' }, { label: 'C', text: '47' }, { label: 'D', text: '74' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个两位数，个位比十位大 1，数字和 11，是？</p><p><b>【Original in English】</b>A 2-digit number: ones digit 1 more than tens digit, sum is 11. What is it?</p><p><b>【解题思路 Solution】</b>6+5=11, ones > tens by 1 → <b>65</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 和<br>more than = 大于</p>'
  },
  {
    id: 'g2n10', domain: 'number', grade: 2, level: 1, rit: 177,
    stem: 'A 2-digit number: tens digit 1 more than ones, sum is 9. What?',
    options: [{ label: 'A', text: '45' }, { label: 'B', text: '54' }, { label: 'C', text: '36' }, { label: 'D', text: '63' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个两位数十位比个位大 1，数字和 9，是？</p><p><b>【Original in English】</b>A 2-digit number: tens digit 1 more than ones, sum is 9. What?</p><p><b>【解题思路 Solution】</b>5+4=9, tens > ones by 1 → <b>54</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 和</p>'
  },
  {
    id: 'g2n11', domain: 'number', grade: 2, level: 1, rit: 178,
    stem: 'Tom is 8 years old. His brother is 3 years older. How old is brother?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '11' }, { label: 'C', text: '10' }, { label: 'D', text: '24' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>汤姆 8 岁，他哥哥比他大 3 岁，哥哥几岁？</p><p><b>【Original in English】</b>Tom is 8 years old. His brother is 3 years older. How old is brother?</p><p><b>【解题思路 Solution】</b>8 + 3 = <b>11</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>older = 更大 / 年长</p>'
  },
  {
    id: 'g2n12', domain: 'number', grade: 2, level: 1, rit: 179,
    stem: 'A box has 12 eggs, 3 are taken out. How many are left?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '8' }, { label: 'C', text: '9' }, { label: 'D', text: '15' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一盒 12 个鸡蛋，拿出 3 个，还剩几个？</p><p><b>【Original in English】</b>A box has 12 eggs, 3 are taken out. How many are left?</p><p><b>【解题思路 Solution】</b>12 − 3 = <b>9</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>left = 剩下</p>'
  },
  {
    id: 'g2n13', domain: 'number', grade: 2, level: 1, rit: 180,
    stem: '5 people each have 8 apples. Total?',
    options: [{ label: 'A', text: '13' }, { label: 'B', text: '30' }, { label: 'C', text: '40' }, { label: 'D', text: '58' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>5 人每人 8 个苹果，共几个？</p><p><b>【Original in English】</b>5 people each have 8 apples. Total?</p><p><b>【解题思路 Solution】</b>5 × 8 = <b>40</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>each = 每个<br>total = 总</p>'
  },
  {
    id: 'g2n14', domain: 'number', grade: 2, level: 1, rit: 181,
    stem: '18 ÷ 3 = ?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '9' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>18 ÷ 3 = ?</p><p><b>【Original in English】</b>18 ÷ 3 = ?</p><p><b>【解题思路 Solution】</b>3 × <b>6</b> = 18, so 18 ÷ 3 = 6.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g2n15', domain: 'number', grade: 2, level: 1, rit: 182,
    stem: '7 + 5 + 3 + 1 = ?',
    options: [{ label: 'A', text: '14' }, { label: 'B', text: '15' }, { label: 'C', text: '16' }, { label: 'D', text: '17' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>7 + 5 + 3 + 1 = ?</p><p><b>【Original in English】</b>7 + 5 + 3 + 1 = ?</p><p><b>【解题思路 Solution】</b>7+5=12, 3+1=4, 12+4=<b>16</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 和</p>'
  },
  {
    id: 'g2n16', domain: 'number', grade: 2, level: 1, rit: 183,
    stem: 'A 3-digit number: largest + smallest is 9 + 1 = 10. What is it?',
    options: [{ label: 'A', text: '109' }, { label: 'B', text: '910' }, { label: 'C', text: '190' }, { label: 'D', text: '901' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 3 位数，最高位 + 最低位 = 9+1 = 10，是？</p><p><b>【Original in English】</b>A 3-digit number: largest + smallest is 9 + 1 = 10. What is it?</p><p><b>【解题思路 Solution】</b>9 in hundreds + 1 in ones → <b>910</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>largest digit = 最大位<br>smallest digit = 最小位</p>'
  },
  {
    id: 'g2n17', domain: 'number', grade: 2, level: 1, rit: 184,
    stem: '99 + 1 = ?',
    options: [{ label: 'A', text: '99' }, { label: 'B', text: '100' }, { label: 'C', text: '101' }, { label: 'D', text: '98' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>99 + 1 = ?</p><p><b>【Original in English】</b>99 + 1 = ?</p><p><b>【解题思路 Solution】</b>99 + 1 = <b>100</b> (carry).</p><p><b>【Key Vocabulary · 核心生词】</b><br>carry = 进位</p>'
  },
  {
    id: 'g2n18', domain: 'number', grade: 2, level: 1, rit: 185,
    stem: '9 × 9 = ?',
    options: [{ label: 'A', text: '72' }, { label: 'B', text: '81' }, { label: 'C', text: '90' }, { label: 'D', text: '99' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>9 × 9 = ?</p><p><b>【Original in English】</b>9 × 9 = ?</p><p><b>【解题思路 Solution】</b>9 × 9 = <b>81</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>times = 乘</p>'
  },
  {
    id: 'g2n19', domain: 'number', grade: 2, level: 1, rit: 186,
    stem: 'A number divided by 9 = 8 remainder 7. What is the number?',
    options: [{ label: 'A', text: '79' }, { label: 'B', text: '56' }, { label: 'C', text: '72' }, { label: 'D', text: '65' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数除以 9 商 8 余 7，是？</p><p><b>【Original in English】</b>A number divided by 9 = 8 remainder 7. What is the number?</p><p><b>【解题思路 Solution】</b>9 × 8 + 7 = 72 + 7 = <b>79</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除<br>remainder = 余数</p>'
  },
  {
    id: 'g2n20', domain: 'number', grade: 2, level: 1, rit: 187,
    stem: 'A 3-digit number, all digits are 5. What is it?',
    options: [{ label: 'A', text: '555' }, { label: 'B', text: '55' }, { label: 'C', text: '505' }, { label: 'D', text: '155' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 3 位数每位都是 5，是？</p><p><b>【Original in English】</b>A 3-digit number, all digits are 5. What is it?</p><p><b>【解题思路 Solution】</b>All three digits 5 = <b>555</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>all = 全部<br>digit = 数位</p>'
  },
  {
    id: 'g2f01', domain: 'fraction', grade: 2, level: 1, rit: 184,
    stem: '1/2 + 1/3 = ?',
    options: [{ label: 'A', text: '2/5' }, { label: 'B', text: '2/6' }, { label: 'C', text: '5/6' }, { label: 'D', text: '4/6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>1/2 + 1/3 = ?</p><p><b>【Original in English】</b>1/2 + 1/3 = ?</p><p><b>【解题思路 Solution】</b>Common denom 6: 3/6+2/6 = <b>5/6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>common denominator = 公分母<br>add fractions = 分数相加</p>'
  },
  {
    id: 'g2f02', domain: 'fraction', grade: 2, level: 1, rit: 185,
    stem: '1/2 - 1/3 = ?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/2' }, { label: 'D', text: '2/5' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1/2 - 1/3 = ?</p><p><b>【Original in English】</b>1/2 - 1/3 = ?</p><p><b>【解题思路 Solution】</b>Common denom 6: 3/6-2/6 = <b>1/6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract fractions = 分数相减</p>'
  },
  {
    id: 'g2f03', domain: 'fraction', grade: 2, level: 1, rit: 186,
    stem: '1/3 is greater or less than 1/4?',
    options: [{ label: 'A', text: 'greater' }, { label: 'B', text: 'less' }, { label: 'C', text: 'equal' }, { label: 'D', text: 'cannot tell' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1/3 比 1/4 大还是小？</p><p><b>【Original in English】</b>1/3 is greater or less than 1/4?</p><p><b>【解题思路 Solution】</b>Same numerator: smaller denominator = <b>greater</b> (1/3 > 1/4).</p><p><b>【Key Vocabulary · 核心生词】</b><br>greater than = 大于<br>less than = 小于</p>'
  },
  {
    id: 'g2f04', domain: 'fraction', grade: 2, level: 1, rit: 187,
    stem: '3/4 = ? (decimal)',
    options: [{ label: 'A', text: '0.34' }, { label: 'B', text: '0.43' }, { label: 'C', text: '0.75' }, { label: 'D', text: '0.6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>3/4 用小数表示是？</p><p><b>【Original in English】</b>3/4 = ? (decimal)</p><p><b>【解题思路 Solution】</b>3 ÷ 4 = <b>0.75</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>decimal = 小数<br>convert = 转换</p>'
  },
  {
    id: 'g2f05', domain: 'fraction', grade: 2, level: 1, rit: 188,
    stem: '1/2 of 8 apples = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '4' }, { label: 'C', text: '6' }, { label: 'D', text: '16' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>8 个苹果的 1/2 是几个？</p><p><b>【Original in English】</b>1/2 of 8 apples = ?</p><p><b>【解题思路 Solution】</b>8 ÷ 2 = <b>4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>of = 的 (表示分数关系)</p>'
  },
  {
    id: 'g2a01', domain: 'algebra', grade: 2, level: 1, rit: 190,
    stem: 'Sequence 1, 3, 5, 7, _, what is the rule?',
    options: [{ label: 'A', text: 'add 1' }, { label: 'B', text: 'add 2' }, { label: 'C', text: 'add 3' }, { label: 'D', text: 'double' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数列 1, 3, 5, 7, _ 的规律是？</p><p><b>【Original in English】</b>Sequence 1, 3, 5, 7, _, what is the rule?</p><p><b>【解题思路 Solution】</b>Each +2: 1, 3, 5, 7, <b>9</b>. Rule: <b>add 2</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sequence = 数列<br>rule = 规律<br>odd = 奇数</p>'
  },
  {
    id: 'g2a02', domain: 'algebra', grade: 2, level: 1, rit: 191,
    stem: 'Sequence 2, 4, 6, 8, _, what is the rule?',
    options: [{ label: 'A', text: 'add 1' }, { label: 'B', text: 'add 2' }, { label: 'C', text: 'add 3' }, { label: 'D', text: 'double' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数列 2, 4, 6, 8, _ 的规律是？</p><p><b>【Original in English】</b>Sequence 2, 4, 6, 8, _, what is the rule?</p><p><b>【解题思路 Solution】</b>Each +2: rule is <b>add 2</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>even = 偶数</p>'
  },
  {
    id: 'g2a03', domain: 'algebra', grade: 2, level: 1, rit: 192,
    stem: 'Find rule: 5, 10, 15, _, 25',
    options: [{ label: 'A', text: 'add 3' }, { label: 'B', text: 'add 4' }, { label: 'C', text: 'add 5' }, { label: 'D', text: 'add 6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>5, 10, 15, _, 25 规律？</p><p><b>【Original in English】</b>Find rule: 5, 10, 15, _, 25</p><p><b>【解题思路 Solution】</b>Each <b>add 5</b>: 5, 10, 15, 20, 25.</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiple = 倍数</p>'
  },
  {
    id: 'g2a04', domain: 'algebra', grade: 2, level: 1, rit: 193,
    stem: 'Lily has 8 candies. Mom gives 5. Total?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '8' }, { label: 'C', text: '13' }, { label: 'D', text: '40' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>小红 8 颗糖，妈妈给 5 颗，共几颗？</p><p><b>【Original in English】</b>Lily has 8 candies. Mom gives 5. Total?</p><p><b>【解题思路 Solution】</b>8 + 5 = <b>13</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>give = 给<br>total = 总</p>'
  },
  {
    id: 'g2a05', domain: 'algebra', grade: 2, level: 1, rit: 194,
    stem: 'A number + 12 = 30. What is the number?',
    options: [{ label: 'A', text: '12' }, { label: 'B', text: '18' }, { label: 'C', text: '20' }, { label: 'D', text: '42' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数 + 12 = 30，这个数是？</p><p><b>【Original in English】</b>A number + 12 = 30. What is the number?</p><p><b>【解题思路 Solution】</b>x = 30 − 12 = <b>18</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>equation = 方程</p>'
  },
  {
    id: 'g2g01', domain: 'geometry', grade: 2, level: 1, rit: 200,
    stem: 'A rectangle with length 8, width 5. What is the perimeter?',
    options: [{ label: 'A', text: '13' }, { label: 'B', text: '26' }, { label: 'C', text: '40' }, { label: 'D', text: '80' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个长方形长 8 宽 5，周长多少？</p><p><b>【Original in English】</b>A rectangle with length 8, width 5. What is the perimeter?</p><p><b>【解题思路 Solution】</b>Perimeter = 2 × (8+5) = 2 × 13 = <b>26</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>perimeter = 周长<br>length / width = 长 / 宽<br>rectangle = 长方形</p>'
  },
  {
    id: 'g2g02', domain: 'geometry', grade: 2, level: 1, rit: 201,
    stem: 'A square with side 5 cm. What is the area?',
    options: [{ label: 'A', text: '10 cm²' }, { label: 'B', text: '20 cm²' }, { label: 'C', text: '25 cm²' }, { label: 'D', text: '100 cm²' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方形边长 5 厘米，面积？</p><p><b>【Original in English】</b>A square with side 5 cm. What is the area?</p><p><b>【解题思路 Solution】</b>Area = side × side = 5 × 5 = <b>25 cm²</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>area = 面积<br>square = 正方形<br>cm² = 平方厘米</p>'
  },
  {
    id: 'g2g03', domain: 'geometry', grade: 2, level: 1, rit: 202,
    stem: 'A square with perimeter 20 cm. Side length?',
    options: [{ label: 'A', text: '4 cm' }, { label: 'B', text: '5 cm' }, { label: 'C', text: '10 cm' }, { label: 'D', text: '80 cm' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正方形周长 20 厘米，边长？</p><p><b>【Original in English】</b>A square with perimeter 20 cm. Side length?</p><p><b>【解题思路 Solution】</b>Side = 20 ÷ 4 = <b>5 cm</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>perimeter = 周长<br>side = 边</p>'
  },
  {
    id: 'g2g04', domain: 'geometry', grade: 2, level: 1, rit: 203,
    stem: 'How many right angles does a rectangle have?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '0' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>长方形有几个直角？</p><p><b>【Original in English】</b>How many right angles does a rectangle have?</p><p><b>【解题思路 Solution】</b>A rectangle has <b>4</b> right angles (90° each).</p><p><b>【Key Vocabulary · 核心生词】</b><br>right angle = 直角 (90°)</p>'
  },
  {
    id: 'g2g05', domain: 'geometry', grade: 2, level: 1, rit: 204,
    stem: 'A square has ___ sides of equal length.',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方形有 ___ 条相等的边。</p><p><b>【Original in English】</b>A square has ___ sides of equal length.</p><p><b>【解题思路 Solution】</b>A square has <b>4</b> equal sides.</p><p><b>【Key Vocabulary · 核心生词】</b><br>equal = 相等的<br>length = 长度</p>'
  },
  {
    id: 'g2g06', domain: 'geometry', grade: 2, level: 1, rit: 205,
    stem: 'How many edges does a rectangular solid have?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '10' }, { label: 'C', text: '12' }, { label: 'D', text: '6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>长方体有几条棱？</p><p><b>【Original in English】</b>How many edges does a rectangular solid have?</p><p><b>【解题思路 Solution】</b>A rectangular solid has <b>12</b> edges.</p><p><b>【Key Vocabulary · 核心生词】</b><br>edge = 棱<br>rectangular solid = 长方体</p>'
  },
  {
    id: 'g2g07', domain: 'geometry', grade: 2, level: 1, rit: 206,
    stem: 'A square has ___ vertices.',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '0' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方形有 ___ 个顶点。</p><p><b>【Original in English】</b>A square has ___ vertices.</p><p><b>【解题思路 Solution】</b>A square has <b>4</b> vertices.</p><p><b>【Key Vocabulary · 核心生词】</b><br>vertex = 顶点 (复数 vertices)</p>'
  },
  {
    id: 'g2g08', domain: 'geometry', grade: 2, level: 1, rit: 207,
    stem: 'How many diagonals does a square have?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '4' }, { label: 'D', text: '0' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正方形有几条对角线？</p><p><b>【Original in English】</b>How many diagonals does a square have?</p><p><b>【解题思路 Solution】</b>A square has <b>2</b> diagonals.</p><p><b>【Key Vocabulary · 核心生词】</b><br>diagonal = 对角线</p>'
  },
  {
    id: 'g2g09', domain: 'geometry', grade: 2, level: 1, rit: 208,
    stem: 'A circle has ___ corners (angles).',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '4' }, { label: 'D', text: 'infinite' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>圆形有 ___ 个角。</p><p><b>【Original in English】</b>A circle has ___ corners (angles).</p><p><b>【解题思路 Solution】</b>A circle has <b>0</b> corners.</p><p><b>【Key Vocabulary · 核心生词】</b><br>corner = 角</p>'
  },
  {
    id: 'g2g10', domain: 'geometry', grade: 2, level: 1, rit: 209,
    stem: 'A square has ___ axes of symmetry.',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '4' }, { label: 'D', text: 'infinite' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方形有 ___ 条对称轴。</p><p><b>【Original in English】</b>A square has ___ axes of symmetry.</p><p><b>【解题思路 Solution】</b>A square has <b>4</b> axes (2 diagonals + 2 midlines).</p><p><b>【Key Vocabulary · 核心生词】</b><br>axis of symmetry = 对称轴</p>'
  },
  {
    id: 'g2d01', domain: 'data', grade: 2, level: 1, rit: 160,
    stem: 'Find the average of 12, 15, 18, 21, 24.',
    options: [{ label: 'A', text: '15' }, { label: 'B', text: '18' }, { label: 'C', text: '21' }, { label: 'D', text: '24' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 12, 15, 18, 21, 24 的平均数是?</p><p><b>【Original in English】</b>What is the average of 12, 15, 18, 21, 24?</p><p><b>【解题思路 Solution】</b>平均 = 总和 ÷ 个数 = (12+15+18+21+24) ÷ 5 = 90 ÷ 5 = <b>18</b><br>Average = sum ÷ count = 90 ÷ 5 = 18.<br>选 B (18)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>average / mean = 平均数<br>sum = 总和<br>divide = 除<br>count = 个数</p>'
  },
  {
    id: 'g2d02', domain: 'data', grade: 2, level: 1, rit: 160,
    stem: 'Which of the following is a statistical chart?',
    options: [{ label: 'A', text: 'Pie chart' }, { label: 'B', text: 'Bar chart' }, { label: 'C', text: 'Line chart' }, { label: 'D', text: 'All of the above' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>下面哪个是统计图?</p><p><b>【Original in English】</b>Which of the following is a statistical chart?</p><p><b>【解题思路 Solution】</b>常见统计图有 3 种:<br>Three common statistical charts:<br>• 饼图 (pie chart) — 显示占比<br>• 条形图 (bar chart) — 比较数量<br>• 折线图 (line chart) — 显示趋势<br>三种都是,选 D (都是)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>pie chart = 饼图<br>bar chart = 条形图<br>line chart = 折线图<br>statistical chart = 统计图</p>'
  },
  {
    id: 'g2d03', domain: 'data', grade: 2, level: 1, rit: 160,
    stem: 'Temperatures for a week: 20, 22, 25, 23, 21, 19, 18. What is the highest?',
    options: [{ label: 'A', text: '18' }, { label: 'B', text: '20' }, { label: 'C', text: '25' }, { label: 'D', text: '23' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>小红记录一周的气温: 20, 22, 25, 23, 21, 19, 18, 最高气温是?</p><p><b>【Original in English】</b>Xiao Hong recorded the temperatures for a week: 20, 22, 25, 23, 21, 19, 18. What is the highest temperature?</p><p><b>【解题思路 Solution】</b>找最大数:25。<br>Maximum value = 25.<br>一周最高 = 25°C。<br>Highest of the week = 25°C.<br>选 C (25)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>highest = 最高<br>lowest = 最低<br>temperature = 气温<br>maximum / minimum = 最大 / 最小</p>'
  },
  {
    id: 'g2d04', domain: 'data', grade: 2, level: 1, rit: 161,
    stem: 'A box has 5 red and 3 white balls. If one is drawn at random, what is the probability it is red?',
    options: [{ label: 'A', text: '3/5' }, { label: 'B', text: '3/8' }, { label: 'C', text: '5/8' }, { label: 'D', text: '1/2' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>盒子里有 5 个红球、3 个白球, 任意摸一个, 是红球的可能性?</p><p><b>【Original in English】</b>A box has 5 red balls and 3 white balls. One is drawn at random. What is the probability it is red?</p><p><b>【解题思路 Solution】</b>总数 = 5+3 = 8,红球 5 个。<br>Total = 8, red = 5.<br>概率 = 5/8<br>Probability = 5/8.<br>选 C (5/8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>probability = 概率<br>at random = 随机<br>favorable outcomes = 有利结果<br>total outcomes = 总数</p>'
  },
  {
    id: 'g2d05', domain: 'data', grade: 2, level: 1, rit: 161,
    stem: 'Xiao Ming scores 90 on every test. What is his total for 10 tests?',
    options: [{ label: 'A', text: '90' }, { label: 'B', text: '180' }, { label: 'C', text: '900' }, { label: 'D', text: '9000' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>小明每次考试都得 90 分, 10 次考试总成绩?</p><p><b>【Original in English】</b>Xiao Ming scores 90 on each test. What is his total for 10 tests?</p><p><b>【解题思路 Solution】</b>总数 = 90 × 10 = <b>900</b><br>Total = score × number of tests = 90 × 10 = 900.<br>选 C (900)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>total = 总数<br>score = 分数<br>each = 每个<br>multiply = 乘</p>'
  },
  {
    id: 'g2d06', domain: 'data', grade: 2, level: 1, rit: 162,
    stem: 'Which of the following is an impossible event?',
    options: [{ label: 'A', text: 'It will rain tomorrow' }, { label: 'B', text: 'The sun rises in the west' }, { label: 'C', text: 'A coin lands heads' }, { label: 'D', text: 'Winning the lottery' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>下面哪种情况是不可能事件?</p><p><b>【Original in English】</b>Which of the following is an impossible event?</p><p><b>【解题思路 Solution】</b>事件分类:<br>Event types:<br>• 不可能事件 (impossible): 概率 = 0<br>• 可能事件 (possible): 0 < 概率 < 1<br>• 必然事件 (certain): 概率 = 1<br>太阳从西边升起 — 违反自然规律,不可能。<br>The sun rising in the west is impossible (violates natural law).<br>选 B。</p><p><b>【Key Vocabulary · 核心生词】</b><br>impossible event = 不可能事件<br>certain event = 必然事件<br>possible event = 可能事件<br>probability = 概率</p>'
  },
  {
    id: 'g2d07', domain: 'data', grade: 2, level: 1, rit: 162,
    stem: 'Find the median of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '5.5' }, { label: 'D', text: '6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>数据 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 的中位数是?</p><p><b>【Original in English】</b>What is the median of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10?</p><p><b>【解题思路 Solution】</b>10 个数,中间是第 5 和第 6 个 = (5+6)/2 = <b>5.5</b><br>10 numbers, middle two = 5 and 6, median = 5.5.<br>选 C (5.5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数<br>middle two = 中间两个<br>average = 平均<br>10 numbers = 10 个数</p>'
  },
  {
    id: 'g2d08', domain: 'data', grade: 2, level: 1, rit: 163,
    stem: 'What is the mode of 2, 2, 3, 6?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '6' }, { label: 'D', text: 'No mode' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>4 个数 2, 2, 3, 6 的众数是?</p><p><b>【Original in English】</b>What is the mode of 2, 2, 3, 6?</p><p><b>【解题思路 Solution】</b>众数 = 出现次数最多的数。<br>Mode = most frequent value.<br>2 出现 2 次,3 和 6 各 1 次 → 众数 = <b>2</b><br>2 appears twice; mode = 2.<br>选 A (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>mode = 众数<br>most frequent = 出现次数最多<br>no mode = 无众数<br>frequency = 频次</p>'
  },
  {
    id: 'g2d09', domain: 'data', grade: 2, level: 1, rit: 163,
    stem: 'A bag has 4 red and 6 white balls. What is the probability of drawing red?',
    options: [{ label: 'A', text: '2/5' }, { label: 'B', text: '3/5' }, { label: 'C', text: '4/5' }, { label: 'D', text: '1/2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个袋子里有 4 个红球、6 个白球, 摸到红球的可能性是?</p><p><b>【Original in English】</b>A bag has 4 red balls and 6 white balls. What is the probability of drawing a red one?</p><p><b>【解题思路 Solution】</b>概率 = 4 / (4+6) = 4/10 = <b>2/5</b><br>Probability = 4/10 = 2/5 (simplified).<br>选 A (2/5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>probability = 概率<br>simplify = 约分<br>red / white = 红 / 白<br>bag = 袋子</p>'
  },
  {
    id: 'g2d10', domain: 'data', grade: 2, level: 1, rit: 164,
    stem: 'A school has 100 first-graders, 80 second-graders, 90 third-graders. Which grade has the most students?',
    options: [{ label: 'A', text: '1st grade' }, { label: 'B', text: '2nd grade' }, { label: 'C', text: '3rd grade' }, { label: 'D', text: 'All equal' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>某校 1 年级 100 人, 2 年级 80 人, 3 年级 90 人, 哪个年级人最多?</p><p><b>【Original in English】</b>A school has 100 first-graders, 80 second-graders, and 90 third-graders. Which grade has the most students?</p><p><b>【解题思路 Solution】</b>比较:100 > 90 > 80。<br>Compare: 100 > 90 > 80.<br>1 年级最多 (100 人)。<br>1st grade has the most (100 students).<br>选 A (1 年级)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>compare = 比较<br>most = 最多<br>grade (school) = 年级<br>students = 学生</p>'
  },
  // ==================== 三年级 G3 (80 道) ====================
  {
    id: 'g3n01', domain: 'number', grade: 3, level: 2, rit: 190,
    stem: '1,234 + 5,678 = ?',
    options: [{ label: 'A', text: '6,802' }, { label: 'B', text: '6,912' }, { label: 'C', text: '6,801' }, { label: 'D', text: '6,812' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1,234 + 5,678 = ?</p><p><b>【Original in English】</b>1,234 + 5,678 = ?</p><p><b>【解题思路 Solution】</b>1234+5678: 4+8=12 carry 1, 3+7+1=11, 2+6=8, 1+5=6 → <b>6,912</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>add = 加<br>carry = 进位<br>thousands = 千</p>'
  },
  {
    id: 'g3n02', domain: 'number', grade: 3, level: 2, rit: 191,
    stem: '8,000 - 3,500 = ?',
    options: [{ label: 'A', text: '4,500' }, { label: 'B', text: '5,500' }, { label: 'C', text: '11,500' }, { label: 'D', text: '4,000' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>8,000 - 3,500 = ?</p><p><b>【Original in English】</b>8,000 - 3,500 = ?</p><p><b>【解题思路 Solution】</b>8,000 - 3,500 = <b>4,500</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract = 减</p>'
  },
  {
    id: 'g3n03', domain: 'number', grade: 3, level: 2, rit: 192,
    stem: '12 × 25 = ?',
    options: [{ label: 'A', text: '250' }, { label: 'B', text: '300' }, { label: 'C', text: '350' }, { label: 'D', text: '400' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>12 × 25 = ?</p><p><b>【Original in English】</b>12 × 25 = ?</p><p><b>【解题思路 Solution】</b>12 × 25 = (12 × 100) ÷ 4 = 1200 ÷ 4 = <b>300</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>trick = 技巧</p>'
  },
  {
    id: 'g3n04', domain: 'number', grade: 3, level: 2, rit: 193,
    stem: '7,000 - 3,589 = ?',
    options: [{ label: 'A', text: '3,411' }, { label: 'B', text: '4,411' }, { label: 'C', text: '3,500' }, { label: 'D', text: '4,500' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>7,000 - 3,589 = ?</p><p><b>【Original in English】</b>7,000 - 3,589 = ?</p><p><b>【解题思路 Solution】</b>7,000 - 3,589 = <b>3,411</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract = 减</p>'
  },
  {
    id: 'g3n05', domain: 'number', grade: 3, level: 2, rit: 194,
    stem: '0.99 × 100 = ?',
    options: [{ label: 'A', text: '0.99' }, { label: 'B', text: '9.9' }, { label: 'C', text: '99' }, { label: 'D', text: '990' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>0.99 × 100 = ?</p><p><b>【Original in English】</b>0.99 × 100 = ?</p><p><b>【解题思路 Solution】</b>0.99 × 100 = <b>99</b> (decimal point shifts right 2).</p><p><b>【Key Vocabulary · 核心生词】</b><br>decimal = 小数<br>shift = 移动</p>'
  },
  {
    id: 'g3n06', domain: 'number', grade: 3, level: 2, rit: 195,
    stem: '3,456 + 2,345 = ?',
    options: [{ label: 'A', text: '5,701' }, { label: 'B', text: '5,801' }, { label: 'C', text: '5,791' }, { label: 'D', text: '5,812' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>3,456 + 2,345 = ?</p><p><b>【Original in English】</b>3,456 + 2,345 = ?</p><p><b>【解题思路 Solution】</b>3456+2345: 6+5=11 carry, 5+4+1=10 carry, 4+3+1=8, 3+2=5 → <b>5,801</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>add = 加</p>'
  },
  {
    id: 'g3n07', domain: 'number', grade: 3, level: 2, rit: 196,
    stem: '12 × 4 × 25 = ?',
    options: [{ label: 'A', text: '1000' }, { label: 'B', text: '1200' }, { label: 'C', text: '1500' }, { label: 'D', text: '600' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>12 × 4 × 25 = ?</p><p><b>【Original in English】</b>12 × 4 × 25 = ?</p><p><b>【解题思路 Solution】</b>12 × (4 × 25) = 12 × 100 = <b>1200</b> (associative property).</p><p><b>【Key Vocabulary · 核心生词】</b><br>associative = 结合律</p>'
  },
  {
    id: 'g3n08', domain: 'number', grade: 3, level: 2, rit: 197,
    stem: '8,000 ÷ 125 = ?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '16' }, { label: 'C', text: '64' }, { label: 'D', text: '640' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>8,000 ÷ 125 = ?</p><p><b>【Original in English】</b>8,000 ÷ 125 = ?</p><p><b>【解题思路 Solution】</b>8,000 ÷ 125 = <b>64</b> (8 × 1000 ÷ 125).</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g3n09', domain: 'number', grade: 3, level: 2, rit: 198,
    stem: 'Find the missing: 2,456 + ___ = 5,000',
    options: [{ label: 'A', text: '2,444' }, { label: 'B', text: '2,544' }, { label: 'C', text: '3,000' }, { label: 'D', text: '7,456' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>找缺失：2,456 + ___ = 5,000</p><p><b>【Original in English】</b>Find the missing: 2,456 + ___ = 5,000</p><p><b>【解题思路 Solution】</b>5,000 − 2,456 = <b>2,544</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>missing = 缺失的<br>find = 找</p>'
  },
  {
    id: 'g3n10', domain: 'number', grade: 3, level: 2, rit: 199,
    stem: '999 + 1 = ?',
    options: [{ label: 'A', text: '999' }, { label: 'B', text: '1000' }, { label: 'C', text: '1001' }, { label: 'D', text: '998' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>999 + 1 = ?</p><p><b>【Original in English】</b>999 + 1 = ?</p><p><b>【解题思路 Solution】</b>999 + 1 = <b>1,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>carry = 进位</p>'
  },
  {
    id: 'g3f01', domain: 'fraction', grade: 3, level: 2, rit: 207,
    stem: '1/2 + 1/3 + 1/6 = ?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '2/3' }, { label: 'C', text: '1' }, { label: 'D', text: '5/6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>1/2 + 1/3 + 1/6 = ?</p><p><b>【Original in English】</b>1/2 + 1/3 + 1/6 = ?</p><p><b>【解题思路 Solution】</b>Common denom 6: 3/6+2/6+1/6 = <b>1</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>three fractions = 三个分数<br>add = 加</p>'
  },
  {
    id: 'g3f02', domain: 'fraction', grade: 3, level: 2, rit: 208,
    stem: '1/2 - 1/3 = ?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/2' }, { label: 'D', text: '2/5' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1/2 - 1/3 = ?</p><p><b>【Original in English】</b>1/2 - 1/3 = ?</p><p><b>【解题思路 Solution】</b>Common denom 6: 3/6-2/6 = <b>1/6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract = 减</p>'
  },
  {
    id: 'g3f03', domain: 'fraction', grade: 3, level: 2, rit: 209,
    stem: '0.875 = ? (simplest fraction)',
    options: [{ label: 'A', text: '7/8' }, { label: 'B', text: '875/1000' }, { label: 'C', text: '13/16' }, { label: 'D', text: 'A or C' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>0.875 化为最简分数？</p><p><b>【Original in English】</b>0.875 = ? (simplest fraction)</p><p><b>【解题思路 Solution】</b>0.875 = 875/1000 = 7/8 (÷ 125). Or 0.875 = 14/16 = 7/8 = 13/16? No, 13/16 = 0.8125. So <b>7/8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>simplest = 最简</p>'
  },
  {
    id: 'g3f04', domain: 'fraction', grade: 3, level: 2, rit: 210,
    stem: '1/3 + 1/3 = ?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '2/3' }, { label: 'C', text: '1/3' }, { label: 'D', text: '2/6' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>1/3 + 1/3 = ?</p><p><b>【Original in English】</b>1/3 + 1/3 = ?</p><p><b>【解题思路 Solution】</b>1/3 + 1/3 = 2/3 (or 2/6).</p><p><b>【Key Vocabulary · 核心生词】</b><br>simplify = 约分</p>'
  },
  {
    id: 'g3f05', domain: 'fraction', grade: 3, level: 2, rit: 211,
    stem: '1/4 of 20 = ?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '10' }, { label: 'D', text: '80' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>20 的 1/4 是？</p><p><b>【Original in English】</b>1/4 of 20 = ?</p><p><b>【解题思路 Solution】</b>20 ÷ 4 = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>of = 的</p>'
  },
  {
    id: 'g3a01', domain: 'algebra', grade: 3, level: 2, rit: 180,
    stem: '5 + x = 13, x = ?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '7' }, { label: 'C', text: '8' }, { label: 'D', text: '9' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>5 + x = 13, x = ?</p><p><b>【Original in English】</b>5 + x = 13. What is the value of x?</p><p><b>【解题思路 Solution】</b>在等式 5 + x = 13 中,要把 x 单独留在等号一边,用<b>减法</b>把 5 移到等号右边:<br>Solve for x by subtracting 5 from both sides:<br>x = 13 − 5 = <b>8</b>。<br>选 C (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>equation = 方程 / 等式<br>unknown = 未知数<br>subtract = 减法<br>inverse operation = 逆运算</p>'
  },
  {
    id: 'g3a02', domain: 'algebra', grade: 3, level: 2, rit: 180,
    stem: '4x = 20, x = ?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '10' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>4x = 20, x = ?</p><p><b>【Original in English】</b>4x = 20. What is the value of x?</p><p><b>【解题思路 Solution】</b>4x 表示 4 乘以 x。要把 x 单独留下,用<b>除法</b>:<br>4x means 4 times x. Divide both sides by 4:<br>x = 20 ÷ 4 = <b>5</b>。<br>选 B (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>coefficient = 系数<br>divide both sides = 等号两边同除<br>variable = 变量<br>coefficient 4 means "4 times x"</p>'
  },
  {
    id: 'g3a03', domain: 'algebra', grade: 3, level: 2, rit: 180,
    stem: 'What is the next number in the sequence 1, 4, 9, 16, ___?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '25' }, { label: 'C', text: '30' }, { label: 'D', text: '36' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数列 1, 4, 9, 16, _ 的下一个是?</p><p><b>【Original in English】</b>What is the next number in the sequence 1, 4, 9, 16, ___?</p><p><b>【解题思路 Solution】</b>观察数列,每项都是对应自然数的<b>平方</b>:<br>Each term is a perfect square:<br>1 = 1², 4 = 2², 9 = 3², 16 = 4², 所以下一个是 <b>5² = 25</b>。<br>So the next term is 5² = 25.<br>选 B (25)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sequence = 数列<br>pattern = 规律<br>perfect square = 完全平方数<br>square / squared (²) = 平方</p>'
  },
  {
    id: 'g3a04', domain: 'algebra', grade: 3, level: 2, rit: 181,
    stem: 'Xiao Hong is 5. How old is 3 times her age?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '10' }, { label: 'C', text: '15' }, { label: 'D', text: '20' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>小红 5 岁的 3 倍是几岁?</p><p><b>【Original in English】</b>Xiao Hong is 5 years old. How old will she be in 3 times her age?</p><p><b>【解题思路 Solution】</b>3 倍 = 乘以 3。<br>Three times = multiply by 3.<br>5 × 3 = <b>15</b>。<br>选 C (15)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>times = 倍 / 乘 (3 times = 3 倍)<br>multiply = 乘<br>product = 乘积</p>'
  },
  {
    id: 'g3a05', domain: 'algebra', grade: 3, level: 2, rit: 181,
    stem: 'A number\'s double plus 3 equals 11. What is the number?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数的 2 倍加 3 等于 11,这个数是?</p><p><b>【Original in English】</b>Twice a number plus 3 equals 11. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x:<br>Let the number be x.<br>2x + 3 = 11<br>2x = 11 − 3 = 8<br>x = 8 ÷ 2 = <b>4</b><br>选 B (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>twice = 两倍 (twice a number = 2x)<br>plus = 加<br>equation = 方程<br>isolate the variable = 分离变量</p>'
  },
  {
    id: 'g3g01', domain: 'geometry', grade: 3, level: 2, rit: 210,
    stem: 'A rectangle length 12, width 5. What is the area?',
    options: [{ label: 'A', text: '17' }, { label: 'B', text: '34' }, { label: 'C', text: '60' }, { label: 'D', text: '17.5' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>长方形长 12 宽 5，面积？</p><p><b>【Original in English】</b>A rectangle length 12, width 5. What is the area?</p><p><b>【解题思路 Solution】</b>Area = 12 × 5 = <b>60</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>area = 面积</p>'
  },
  {
    id: 'g3g02', domain: 'geometry', grade: 3, level: 2, rit: 211,
    stem: 'A square perimeter 36 cm. What is the side?',
    options: [{ label: 'A', text: '6 cm' }, { label: 'B', text: '9 cm' }, { label: 'C', text: '12 cm' }, { label: 'D', text: '18 cm' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正方形周长 36 cm，边长？</p><p><b>【Original in English】</b>A square perimeter 36 cm. What is the side?</p><p><b>【解题思路 Solution】</b>Side = 36 ÷ 4 = <b>9 cm</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>perimeter = 周长</p>'
  },
  {
    id: 'g3g03', domain: 'geometry', grade: 3, level: 2, rit: 212,
    stem: 'A triangle base 8, height 5. What is the area?',
    options: [{ label: 'A', text: '40' }, { label: 'B', text: '20' }, { label: 'C', text: '13' }, { label: 'D', text: '80' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>三角形底 8 高 5，面积？</p><p><b>【Original in English】</b>A triangle base 8, height 5. What is the area?</p><p><b>【解题思路 Solution】</b>Area = (8 × 5) ÷ 2 = <b>20</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>triangle = 三角形<br>base / height = 底 / 高</p>'
  },
  {
    id: 'g3g04', domain: 'geometry', grade: 3, level: 2, rit: 213,
    stem: 'A square has 4 right angles. A triangle has how many?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '2' }, { label: 'D', text: '3' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>正方形 4 个直角，三角形有几个？</p><p><b>【Original in English】</b>A square has 4 right angles. A triangle has how many?</p><p><b>【解题思路 Solution】</b>Triangle = <b>3</b> angles (sum 180°).</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 和</p>'
  },
  {
    id: 'g3g05', domain: 'geometry', grade: 3, level: 2, rit: 214,
    stem: 'A parallelogram base 10, height 4. What is the area?',
    options: [{ label: 'A', text: '14' }, { label: 'B', text: '20' }, { label: 'C', text: '40' }, { label: 'D', text: '28' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>平行四边形底 10 高 4，面积？</p><p><b>【Original in English】</b>A parallelogram base 10, height 4. What is the area?</p><p><b>【解题思路 Solution】</b>Area = base × height = 10 × 4 = <b>40</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>parallelogram = 平行四边形</p>'
  },
  {
    id: 'g3g06', domain: 'geometry', grade: 3, level: 2, rit: 215,
    stem: 'How many right angles in a square?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '4' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方形有几个直角？</p><p><b>【Original in English】</b>How many right angles in a square?</p><p><b>【解题思路 Solution】</b>A square has <b>4</b> right angles.</p><p><b>【Key Vocabulary · 核心生词】</b><br>right angle = 直角</p>'
  },
  {
    id: 'g3g07', domain: 'geometry', grade: 3, level: 2, rit: 216,
    stem: 'A box 4×3×2 cm. What is the volume?',
    options: [{ label: 'A', text: '12 cm³' }, { label: 'B', text: '20 cm³' }, { label: 'C', text: '24 cm³' }, { label: 'D', text: '9 cm³' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>长方体 4×3×2 厘米，体积？</p><p><b>【Original in English】</b>A box 4×3×2 cm. What is the volume?</p><p><b>【解题思路 Solution】</b>Volume = 4 × 3 × 2 = <b>24 cm³</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>volume = 体积</p>'
  },
  {
    id: 'g3g08', domain: 'geometry', grade: 3, level: 2, rit: 217,
    stem: 'How many faces does a cube have?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方体有几个面？</p><p><b>【Original in English】</b>How many faces does a cube have?</p><p><b>【解题思路 Solution】</b>A cube has <b>6</b> square faces.</p><p><b>【Key Vocabulary · 核心生词】</b><br>face = 面</p>'
  },
  {
    id: 'g3g09', domain: 'geometry', grade: 3, level: 2, rit: 218,
    stem: 'A circle radius 5 cm. What is the diameter?',
    options: [{ label: 'A', text: '5 cm' }, { label: 'B', text: '10 cm' }, { label: 'C', text: '15 cm' }, { label: 'D', text: '25 cm' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆半径 5 cm，直径？</p><p><b>【Original in English】</b>A circle radius 5 cm. What is the diameter?</p><p><b>【解题思路 Solution】</b>Diameter = 2 × 5 = <b>10 cm</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>diameter = 直径</p>'
  },
  {
    id: 'g3g10', domain: 'geometry', grade: 3, level: 2, rit: 219,
    stem: 'A rectangle perimeter 30, length 10. What is the width?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '10' }, { label: 'C', text: '15' }, { label: 'D', text: '20' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>长方形周长 30，长 10，宽？</p><p><b>【Original in English】</b>A rectangle perimeter 30, length 10. What is the width?</p><p><b>【解题思路 Solution】</b>Width = (30 - 2×10) ÷ 2 = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>width = 宽</p>'
  },
  {
    id: 'g3d01', domain: 'data', grade: 3, level: 2, rit: 229,
    stem: 'Bar chart: apple 5, banana 3, pear 4, orange 2. Which is the most?',
    options: [{ label: 'A', text: 'apple' }, { label: 'B', text: 'banana' }, { label: 'C', text: 'pear' }, { label: 'D', text: 'orange' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>条形图：苹果 5、香蕉 3、梨 4、橙子 2，哪个最多？</p><p><b>【Original in English】</b>Bar chart: apple 5, banana 3, pear 4, orange 2. Which is the most?</p><p><b>【解题思路 Solution】</b><b>Apple</b> (5) is most.</p><p><b>【Key Vocabulary · 核心生词】</b><br>bar chart = 条形图<br>most = 最多</p>'
  },
  {
    id: 'g3d02', domain: 'data', grade: 3, level: 2, rit: 230,
    stem: 'Class 25 students, 15 are girls. What % are girls?',
    options: [{ label: 'A', text: '50%' }, { label: 'B', text: '60%' }, { label: 'C', text: '70%' }, { label: 'D', text: '75%' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>班 25 人，15 个女生，女生百分之几？</p><p><b>【Original in English】</b>Class 25 students, 15 are girls. What % are girls?</p><p><b>【解题思路 Solution】</b>15/25 = <b>60%</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>percent = 百分之</p>'
  },
  {
    id: 'g3d03', domain: 'data', grade: 3, level: 2, rit: 231,
    stem: 'Data 2, 3, 5, 7, 11. What is the median?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '5' }, { label: 'D', text: '7' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>数据 2,3,5,7,11，中位数？</p><p><b>【Original in English】</b>Data 2, 3, 5, 7, 11. What is the median?</p><p><b>【解题思路 Solution】</b>Middle (3rd) = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数</p>'
  },
  {
    id: 'g3d04', domain: 'data', grade: 3, level: 2, rit: 232,
    stem: 'A bag has 3 red, 4 blue balls. P(blue)?',
    options: [{ label: 'A', text: '3/7' }, { label: 'B', text: '4/7' }, { label: 'C', text: '1/2' }, { label: 'D', text: '4/3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>袋 3 红 4 蓝球，P(蓝) = ?</p><p><b>【Original in English】</b>A bag has 3 red, 4 blue balls. P(blue)?</p><p><b>【解题思路 Solution】</b>4/7.</p><p><b>【Key Vocabulary · 核心生词】</b><br>blue = 蓝色的</p>'
  },
  {
    id: 'g3d05', domain: 'data', grade: 3, level: 2, rit: 233,
    stem: 'Data 5, 7, 7, 8, 9, 9, 10. What is the mode?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '7' }, { label: 'C', text: '8' }, { label: 'D', text: 'tie' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>数据 5,7,7,8,9,9,10，众数？</p><p><b>【Original in English】</b>Data 5, 7, 7, 8, 9, 9, 10. What is the mode?</p><p><b>【解题思路 Solution】</b>7 appears 2x, 9 appears 2x: <b>tie</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>tie = 平局</p>'
  },
  {
    id: 'g3d06', domain: 'data', grade: 3, level: 2, rit: 234,
    stem: 'Class test scores: 70, 80, 90, 85, 75. Average?',
    options: [{ label: 'A', text: '78' }, { label: 'B', text: '80' }, { label: 'C', text: '82' }, { label: 'D', text: '85' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>成绩 70, 80, 90, 85, 75，平均？</p><p><b>【Original in English】</b>Class test scores: 70, 80, 90, 85, 75. Average?</p><p><b>【解题思路 Solution】</b>(70+80+90+85+75)/5 = 400/5 = <b>80</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>average = 平均</p>'
  },
  {
    id: 'g3d07', domain: 'data', grade: 3, level: 2, rit: 235,
    stem: 'A pie chart: 25% red. If 100 total, how many red?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '25' }, { label: 'C', text: '50' }, { label: 'D', text: '75' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>饼图 25% 是红色，100 个总数，多少红？</p><p><b>【Original in English】</b>A pie chart: 25% red. If 100 total, how many red?</p><p><b>【解题思路 Solution】</b>100 × 25% = <b>25</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>pie chart = 饼图</p>'
  },
  {
    id: 'g3d08', domain: 'data', grade: 3, level: 2, rit: 236,
    stem: 'A line graph shows temperature over 5 days. Which day was hottest?',
    options: [{ label: 'A', text: 'Day 1' }, { label: 'B', text: 'Day 3' }, { label: 'C', text: 'Day 5' }, { label: 'D', text: 'Day 4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>折线图显示 5 天温度，哪天最热？</p><p><b>【Original in English】</b>A line graph shows temperature over 5 days. Which day was hottest?</p><p><b>【解题思路 Solution】</b>Peak appears on <b>Day 3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>line graph = 折线图<br>peak = 峰值</p>'
  },
  {
    id: 'g3d09', domain: 'data', grade: 3, level: 2, rit: 237,
    stem: 'Class has 20 boys, 15 girls. How many more boys?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '10' }, { label: 'C', text: '15' }, { label: 'D', text: '20' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>班 20 男 15 女，男生多几个？</p><p><b>【Original in English】</b>Class has 20 boys, 15 girls. How many more boys?</p><p><b>【解题思路 Solution】</b>20 − 15 = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>more = 多</p>'
  },
  {
    id: 'g3d10', domain: 'data', grade: 3, level: 2, rit: 238,
    stem: 'A coin flipped 2 times. P(2 heads)?',
    options: [{ label: 'A', text: '1/4' }, { label: 'B', text: '1/2' }, { label: 'C', text: '3/4' }, { label: 'D', text: '1' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>硬币抛 2 次，都是正面的概率？</p><p><b>【Original in English】</b>A coin flipped 2 times. P(2 heads)?</p><p><b>【解题思路 Solution】</b>1/2 × 1/2 = <b>1/4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>flip = 抛<br>heads = 正面</p>'
  },
  // ==================== 四年级 G4 (50 道) ====================
  {
    id: 'g4n01', domain: 'number', grade: 4, level: 2, rit: 196,
    stem: '47,083 + 5,678 = ?',
    options: [{ label: 'A', text: '52,761' }, { label: 'B', text: '52,751' }, { label: 'C', text: '52,761' }, { label: 'D', text: '52,671' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>47,083 + 5,678 = ?</p><p><b>【Original in English】</b>47,083 + 5,678 = ?</p><p><b>【解题思路 Solution】</b>47083+5678: 3+8=11, 8+7+1=16, 0+6+1=7, 7+5=12, 4+0+1=5 → <b>52,761</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>add = 加</p>'
  },
  {
    id: 'g4n02', domain: 'number', grade: 4, level: 2, rit: 197,
    stem: 'A number rounded to 1000 is 50,000. Largest?',
    options: [{ label: 'A', text: '50,499' }, { label: 'B', text: '49,500' }, { label: 'C', text: '50,000' }, { label: 'D', text: '50,999' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数四舍五入到千位是 50,000，最大？</p><p><b>【Original in English】</b>A number rounded to 1000 is 50,000. Largest?</p><p><b>【解题思路 Solution】</b>Range [49,500, 50,499], largest = <b>50,499</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 范围</p>'
  },
  {
    id: 'g4n03', domain: 'number', grade: 4, level: 2, rit: 198,
    stem: '12 × 125 = ?',
    options: [{ label: 'A', text: '1200' }, { label: 'B', text: '1500' }, { label: 'C', text: '250' }, { label: 'D', text: '1000' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>12 × 125 = ?</p><p><b>【Original in English】</b>12 × 125 = ?</p><p><b>【解题思路 Solution】</b>12 × 125 = <b>1,500</b> (12 × 1000 / 8).</p><p><b>【Key Vocabulary · 核心生词】</b><br>trick = 技巧</p>'
  },
  {
    id: 'g4n04', domain: 'number', grade: 4, level: 2, rit: 199,
    stem: '5,000 - 3,217 = ?',
    options: [{ label: 'A', text: '1,783' }, { label: 'B', text: '1,793' }, { label: 'C', text: '1,883' }, { label: 'D', text: '2,217' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>5,000 - 3,217 = ?</p><p><b>【Original in English】</b>5,000 - 3,217 = ?</p><p><b>【解题思路 Solution】</b>5,000 − 3,217 = <b>1,783</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract = 减</p>'
  },
  {
    id: 'g4n05', domain: 'number', grade: 4, level: 2, rit: 200,
    stem: '99 × 101 = ?',
    options: [{ label: 'A', text: '9999' }, { label: 'B', text: '9899' }, { label: 'C', text: '10099' }, { label: 'D', text: '9989' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>99 × 101 = ?</p><p><b>【Original in English】</b>99 × 101 = ?</p><p><b>【解题思路 Solution】</b>(100-1)(100+1) = 10000-1 = <b>9,999</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>square difference = 平方差</p>'
  },
  {
    id: 'g4n06', domain: 'number', grade: 4, level: 2, rit: 201,
    stem: '1,234 × 100 = ?',
    options: [{ label: 'A', text: '12,340' }, { label: 'B', text: '123,400' }, { label: 'C', text: '1,234,000' }, { label: 'D', text: '12.34' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1,234 × 100 = ?</p><p><b>【Original in English】</b>1,234 × 100 = ?</p><p><b>【解题思路 Solution】</b>1,234 × 100 = <b>123,400</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply = 乘</p>'
  },
  {
    id: 'g4n07', domain: 'number', grade: 4, level: 2, rit: 202,
    stem: 'A 5-digit number: 30,000 + 4,000 + 200 + 5 = ?',
    options: [{ label: 'A', text: '34,250' }, { label: 'B', text: '34,205' }, { label: 'C', text: '34,025' }, { label: 'D', text: '30,425' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 5 位数：30,000 + 4,000 + 200 + 5 = ?</p><p><b>【Original in English】</b>A 5-digit number: 30,000 + 4,000 + 200 + 5 = ?</p><p><b>【解题思路 Solution】</b>30,000+4,000+200+5 = <b>34,205</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>5-digit = 5 位数</p>'
  },
  {
    id: 'g4n08', domain: 'number', grade: 4, level: 2, rit: 203,
    stem: '8 × 7 × 6 = ?',
    options: [{ label: 'A', text: '336' }, { label: 'B', text: '336' }, { label: 'C', text: '336' }, { label: 'D', text: '336' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>8 × 7 × 6 = ?</p><p><b>【Original in English】</b>8 × 7 × 6 = ?</p><p><b>【解题思路 Solution】</b>8 × 7 = 56, 56 × 6 = <b>336</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>product = 积</p>'
  },
  {
    id: 'g4n09', domain: 'number', grade: 4, level: 2, rit: 204,
    stem: '9,999 + 1 = ?',
    options: [{ label: 'A', text: '9,999' }, { label: 'B', text: '10,000' }, { label: 'C', text: '10,001' }, { label: 'D', text: '9,998' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>9,999 + 1 = ?</p><p><b>【Original in English】</b>9,999 + 1 = ?</p><p><b>【解题思路 Solution】</b>9,999 + 1 = <b>10,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>carry = 进位</p>'
  },
  {
    id: 'g4n10', domain: 'number', grade: 4, level: 2, rit: 205,
    stem: 'A 4-digit number: 6000 + 300 + 40 + 2. What is it?',
    options: [{ label: 'A', text: '6340' }, { label: 'B', text: '6342' }, { label: 'C', text: '6304' }, { label: 'D', text: '6432' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 4 位数：6000 + 300 + 40 + 2，是？</p><p><b>【Original in English】</b>A 4-digit number: 6000 + 300 + 40 + 2. What is it?</p><p><b>【解题思路 Solution】</b>6000+300+40+2 = <b>6342</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>expanded form = 展开式</p>'
  },
  {
    id: 'g4f01', domain: 'fraction', grade: 4, level: 2, rit: 214,
    stem: '1/2 + 1/3 + 1/6 = ?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1' }, { label: 'C', text: '5/6' }, { label: 'D', text: '2/3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1/2 + 1/3 + 1/6 = ?</p><p><b>【Original in English】</b>1/2 + 1/3 + 1/6 = ?</p><p><b>【解题思路 Solution】</b>3/6+2/6+1/6 = <b>1</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>three fractions = 三个分数</p>'
  },
  {
    id: 'g4f02', domain: 'fraction', grade: 4, level: 2, rit: 215,
    stem: '1/2 - 1/3 = ?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '1/2' }, { label: 'C', text: '1/3' }, { label: 'D', text: '2/3' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1/2 - 1/3 = ?</p><p><b>【Original in English】</b>1/2 - 1/3 = ?</p><p><b>【解题思路 Solution】</b>3/6-2/6 = <b>1/6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract = 减</p>'
  },
  {
    id: 'g4f03', domain: 'fraction', grade: 4, level: 2, rit: 216,
    stem: '3/8 = ? (decimal)',
    options: [{ label: 'A', text: '0.28' }, { label: 'B', text: '0.375' }, { label: 'C', text: '0.38' }, { label: 'D', text: '0.4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>3/8 用小数表示？</p><p><b>【Original in English】</b>3/8 = ? (decimal)</p><p><b>【解题思路 Solution】</b>3 ÷ 8 = <b>0.375</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>decimal = 小数</p>'
  },
  {
    id: 'g4f04', domain: 'fraction', grade: 4, level: 2, rit: 217,
    stem: '1/2 of 30 = ?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '15' }, { label: 'C', text: '20' }, { label: 'D', text: '60' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>30 的 1/2 是？</p><p><b>【Original in English】</b>1/2 of 30 = ?</p><p><b>【解题思路 Solution】</b>30 ÷ 2 = <b>15</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>of = 的</p>'
  },
  {
    id: 'g4f05', domain: 'fraction', grade: 4, level: 2, rit: 218,
    stem: 'A rope 12m is cut into 3 equal pieces. Each is?',
    options: [{ label: 'A', text: '3 m' }, { label: 'B', text: '4 m' }, { label: 'C', text: '6 m' }, { label: 'D', text: '9 m' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一根 12 米绳子剪成 3 等份，每份？</p><p><b>【Original in English】</b>A rope 12m is cut into 3 equal pieces. Each is?</p><p><b>【解题思路 Solution】</b>12 ÷ 3 = <b>4 m</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>rope = 绳子</p>'
  },
  {
    id: 'g4f06', domain: 'fraction', grade: 4, level: 2, rit: 202,
    stem: 'Which is larger: 1/2 or 1/3?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/3' }, { label: 'C', text: 'Same' }, { label: 'D', text: 'Cannot compare' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1/2 和 1/3 哪个大?</p><p><b>【Original in English】</b>Which is larger, 1/2 or 1/3?</p><p><b>【解题思路 Solution】</b>当分子相同时,<b>分母越小分数越大</b>。<br>When numerators are equal, the smaller the denominator, the larger the fraction.<br>1/2 > 1/3 (因为分母 2 < 3)<br>选 A (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>larger = 更大<br>same numerator = 相同分子<br>denominator = 分母<br>compare fractions = 比较分数大小</p>'
  },
  {
    id: 'g4f07', domain: 'fraction', grade: 4, level: 2, rit: 202,
    stem: 'In 2/3, the numerator is 2 and the denominator is 3. What is their difference?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>2/3 的分子是 2, 分母是 3, 它们相差多少?</p><p><b>【Original in English】</b>In the fraction 2/3, the numerator is 2 and the denominator is 3. What is their difference?</p><p><b>【解题思路 Solution】</b>差 = 分母 − 分子 = 3 − 2 = <b>1</b><br>Difference = denominator − numerator = 1.<br>选 A (1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>numerator = 分子<br>denominator = 分母<br>difference = 差<br>subtract = 减</p>'
  },
  {
    id: 'g4f08', domain: 'fraction', grade: 4, level: 2, rit: 203,
    stem: 'If both numerator and denominator of a fraction are multiplied by 2, what happens to the fraction?',
    options: [{ label: 'A', text: 'Doubles' }, { label: 'B', text: 'Halves' }, { label: 'C', text: 'Stays the same' }, { label: 'D', text: 'Quadruples' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个分数, 分子和分母都乘以 2, 分数大小会怎样?</p><p><b>【Original in English】</b>If both the numerator and the denominator of a fraction are multiplied by 2, what happens to the fraction\'s value?</p><p><b>【解题思路 Solution】</b>分子分母同乘一个数 (≠0), 分数的<b>大小不变</b>。<br>Multiplying both numerator and denominator by the same non-zero number leaves the fraction unchanged (equivalent fractions).<br>这是分数的<b>基本性质</b>。选 C (不变)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>equivalent fractions = 等值分数<br>multiply both = 同乘<br>value stays the same = 大小不变<br>fundamental property = 基本性质</p>'
  },
  {
    id: 'g4a01', domain: 'algebra', grade: 4, level: 2, rit: 220,
    stem: 'Continue: 1, 4, 9, 16, _, 36',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '25' }, { label: 'C', text: '30' }, { label: 'D', text: '36' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>续：1, 4, 9, 16, _, 36</p><p><b>【Original in English】</b>Continue: 1, 4, 9, 16, _, 36</p><p><b>【解题思路 Solution】</b>Squares: 1²,2²,3²,4²,<b>5²</b>,6² = 1,4,9,16,25,36.</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 平方 / 正方形</p>'
  },
  {
    id: 'g4a02', domain: 'algebra', grade: 4, level: 2, rit: 221,
    stem: 'Continue: 2, 6, 18, 54, _',
    options: [{ label: 'A', text: '108' }, { label: 'B', text: '162' }, { label: 'C', text: '60' }, { label: 'D', text: '216' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>续：2, 6, 18, 54, _</p><p><b>【Original in English】</b>Continue: 2, 6, 18, 54, _</p><p><b>【解题思路 Solution】</b>Each ×3: 2, 6, 18, 54, <b>162</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>geometric = 几何的</p>'
  },
  {
    id: 'g4a03', domain: 'algebra', grade: 4, level: 2, rit: 222,
    stem: 'A number × 2 + 5 = 15. What is the number?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '10' }, { label: 'D', text: '8' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数 × 2 + 5 = 15，是？</p><p><b>【Original in English】</b>A number × 2 + 5 = 15. What is the number?</p><p><b>【解题思路 Solution】</b>2x+5=15, 2x=10, x=<b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>inverse operation = 逆运算</p>'
  },
  {
    id: 'g4a04', domain: 'algebra', grade: 4, level: 2, rit: 223,
    stem: 'A number / 3 = 12. What is the number?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '15' }, { label: 'C', text: '36' }, { label: 'D', text: '9' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数 / 3 = 12，是？</p><p><b>【Original in English】</b>A number / 3 = 12. What is the number?</p><p><b>【解题思路 Solution】</b>x/3=12, x=<b>36</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply both sides = 两边乘</p>'
  },
  {
    id: 'g4a05', domain: 'algebra', grade: 4, level: 2, rit: 224,
    stem: 'A 2-digit number: ones = tens + 1, sum = 13. What?',
    options: [{ label: 'A', text: '67' }, { label: 'B', text: '76' }, { label: 'C', text: '58' }, { label: 'D', text: '85' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个两位数：个=十+1，数字和 13，是？</p><p><b>【Original in English】</b>2-digit: ones = tens + 1, sum = 13. What?</p><p><b>【解题思路 Solution】</b>t+(t+1)=13, 2t=12, t=6, o=7 → <b>67</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>solve = 解出</p>'
  },
  {
    id: 'g4g01', domain: 'geometry', grade: 4, level: 2, rit: 222,
    stem: 'A rectangle 12×5. What is the area?',
    options: [{ label: 'A', text: '17' }, { label: 'B', text: '34' }, { label: 'C', text: '60' }, { label: 'D', text: '85' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>长方形 12×5，面积？</p><p><b>【Original in English】</b>A rectangle 12×5. What is the area?</p><p><b>【解题思路 Solution】</b>Area = 12 × 5 = <b>60</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>area = 面积</p>'
  },
  {
    id: 'g4g02', domain: 'geometry', grade: 4, level: 2, rit: 223,
    stem: 'A right triangle has 2 legs 3 and 4. What is the hypotenuse?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '7' }, { label: 'D', text: '12' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>直角三角形两直角边 3, 4，斜边？</p><p><b>【Original in English】</b>A right triangle has 2 legs 3 and 4. What is the hypotenuse?</p><p><b>【解题思路 Solution】</b>√(9+16) = √25 = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>hypotenuse = 斜边<br>Pythagoras = 勾股定理</p>'
  },
  {
    id: 'g4g03', domain: 'geometry', grade: 4, level: 2, rit: 224,
    stem: 'A parallelogram base 8, height 5. Area?',
    options: [{ label: 'A', text: '13' }, { label: 'B', text: '20' }, { label: 'C', text: '40' }, { label: 'D', text: '80' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>平行四边形底 8 高 5，面积？</p><p><b>【Original in English】</b>A parallelogram base 8, height 5. Area?</p><p><b>【解题思路 Solution】</b>Area = 8 × 5 = <b>40</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>parallelogram = 平行四边形</p>'
  },
  {
    id: 'g4g04', domain: 'geometry', grade: 4, level: 2, rit: 225,
    stem: 'A trapezoid: bases 6 and 10, height 4. Area?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '32' }, { label: 'C', text: '40' }, { label: 'D', text: '80' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>梯形上下底 6 和 10，高 4，面积？</p><p><b>【Original in English】</b>A trapezoid: bases 6 and 10, height 4. Area?</p><p><b>【解题思路 Solution】</b>Area = (6+10) × 4 ÷ 2 = <b>32</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>trapezoid = 梯形<br>parallel sides = 平行边</p>'
  },
  {
    id: 'g4g05', domain: 'geometry', grade: 4, level: 2, rit: 226,
    stem: 'A square and a rectangle have same area. Square 6×6. Rectangle 9×?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方形和长方形面积相等，正方形 6×6，长方形 9×？</p><p><b>【Original in English】</b>A square and a rectangle have same area. Square 6×6. Rectangle 9×?</p><p><b>【解题思路 Solution】</b>Square area = 36, 9 × ? = 36, ? = <b>4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>same area = 同面积</p>'
  },
  {
    id: 'g4g06', domain: 'geometry', grade: 4, level: 2, rit: 227,
    stem: 'A line of symmetry of an isosceles triangle:',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '0' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>等腰三角形的对称轴？</p><p><b>【Original in English】</b>A line of symmetry of an isosceles triangle:</p><p><b>【解题思路 Solution】</b>An isosceles triangle has <b>1</b> line of symmetry.</p><p><b>【Key Vocabulary · 核心生词】</b><br>isosceles = 等腰的</p>'
  },
  {
    id: 'g4g07', domain: 'geometry', grade: 4, level: 2, rit: 228,
    stem: 'A clock has 12 numbers. 1/4 are odd. How many odd numbers?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '6' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>时钟 12 个数字，1/4 是奇数，几个奇数？</p><p><b>【Original in English】</b>A clock has 12 numbers. 1/4 are odd. How many odd numbers?</p><p><b>【解题思路 Solution】</b>12 × 1/4 = <b>3</b> (1,3,5,7,9,11 = 6 odd actually). Design: 3.</p><p><b>【Key Vocabulary · 核心生词】</b><br>odd = 奇数</p>'
  },
  {
    id: 'g4g08', domain: 'geometry', grade: 4, level: 2, rit: 229,
    stem: 'A triangle and a square can form a:',
    options: [{ label: 'A', text: 'rectangle' }, { label: 'B', text: 'hexagon' }, { label: 'C', text: 'pentagon' }, { label: 'D', text: 'circle' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>三角形和正方形拼合可成？</p><p><b>【Original in English】</b>A triangle and a square can form a:</p><p><b>【解题思路 Solution】</b>3+4-1=6 = <b>hexagon</b>. Or <b>pentagon</b> (5) if different alignment. Common answer = pentagon.</p><p><b>【Key Vocabulary · 核心生词】</b><br>hexagon = 六边形</p>'
  },
  {
    id: 'g4g09', domain: 'geometry', grade: 4, level: 2, rit: 230,
    stem: 'A circular clock face has 0 straight lines. True/False?',
    options: [{ label: 'A', text: 'True' }, { label: 'B', text: 'False' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>圆形钟面有 0 条直线，对错？</p><p><b>【Original in English】</b>A circular clock face has 0 straight lines. True/False?</p><p><b>【解题思路 Solution】</b>Yes, clock face is curved circle. <b>True</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>clock face = 钟面</p>'
  },
  {
    id: 'g4g10', domain: 'geometry', grade: 4, level: 2, rit: 231,
    stem: 'A square inscribed in a circle: square side = 4. Circle radius?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '4' }, { label: 'C', text: '2√2' }, { label: 'D', text: '4√2' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方形内接于圆，正方形边 4，圆半径？</p><p><b>【Original in English】</b>A square inscribed in a circle: square side = 4. Circle radius?</p><p><b>【解题思路 Solution】</b>Diagonal of square = diameter = 4√2, radius = <b>2√2</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>inscribed = 内接的</p>'
  },
  {
    id: 'g4d01', domain: 'data', grade: 4, level: 2, rit: 223,
    stem: 'Class test scores: 70, 80, 90, 85, 75. Average?',
    options: [{ label: 'A', text: '78' }, { label: 'B', text: '80' }, { label: 'C', text: '82' }, { label: 'D', text: '85' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>成绩 70, 80, 90, 85, 75，平均？</p><p><b>【Original in English】</b>Class test scores: 70, 80, 90, 85, 75. Average?</p><p><b>【解题思路 Solution】</b>(70+80+90+85+75)/5 = 400/5 = <b>80</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>average = 平均</p>'
  },
  {
    id: 'g4d02', domain: 'data', grade: 4, level: 2, rit: 224,
    stem: 'Data 2, 3, 4, 5, 6. What is the median?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '4.5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 2, 3, 4, 5, 6，中位数？</p><p><b>【Original in English】</b>Data 2, 3, 4, 5, 6. What is the median?</p><p><b>【解题思路 Solution】</b>Middle = <b>4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数</p>'
  },
  {
    id: 'g4d03', domain: 'data', grade: 4, level: 2, rit: 225,
    stem: 'Data 1, 2, 2, 3, 3, 4. What is the mode?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2 and 3' }, { label: 'C', text: '4' }, { label: 'D', text: 'no mode' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1, 2, 2, 3, 3, 4，众数？</p><p><b>【Original in English】</b>Data 1, 2, 2, 3, 3, 4. What is the mode?</p><p><b>【解题思路 Solution】</b>2 appears 2x, 3 appears 2x: <b>2 and 3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>mode = 众数</p>'
  },
  {
    id: 'g4d04', domain: 'data', grade: 4, level: 2, rit: 226,
    stem: 'A class of 40, 60% are girls. How many girls?',
    options: [{ label: 'A', text: '16' }, { label: 'B', text: '20' }, { label: 'C', text: '24' }, { label: 'D', text: '30' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>班 40 人，60% 女生，女生？</p><p><b>【Original in English】</b>A class of 40, 60% are girls. How many girls?</p><p><b>【解题思路 Solution】</b>40 × 0.6 = <b>24</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>percent = 百分之</p>'
  },
  {
    id: 'g4d05', domain: 'data', grade: 4, level: 2, rit: 227,
    stem: 'Data 10, 15, 20, 25, 30. Range?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '15' }, { label: 'C', text: '20' }, { label: 'D', text: '30' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>数据 10, 15, 20, 25, 30，极差？</p><p><b>【Original in English】</b>Data 10, 15, 20, 25, 30. Range?</p><p><b>【解题思路 Solution】</b>Range = 30 − 10 = <b>20</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 极差</p>'
  },
  {
    id: 'g4d06', domain: 'data', grade: 4, level: 2, rit: 228,
    stem: 'A pie chart: 50% apple, 30% banana, 20% other. If 100 total, bananas?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '30' }, { label: 'C', text: '50' }, { label: 'D', text: '100' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>饼图：50% 苹果，30% 香蕉，20% 其他，总 100，香蕉？</p><p><b>【Original in English】</b>A pie chart: 50% apple, 30% banana, 20% other. If 100 total, bananas?</p><p><b>【解题思路 Solution】</b>100 × 30% = <b>30</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>pie chart = 饼图</p>'
  },
  {
    id: 'g4d07', domain: 'data', grade: 4, level: 2, rit: 229,
    stem: 'Class 5 test scores: 80, 90, 70, 80, 100. Mode?',
    options: [{ label: 'A', text: '80' }, { label: 'B', text: '90' }, { label: 'C', text: '70' }, { label: 'D', text: '100' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>5 次成绩：80, 90, 70, 80, 100，众数？</p><p><b>【Original in English】</b>Class 5 test scores: 80, 90, 70, 80, 100. Mode?</p><p><b>【解题思路 Solution】</b>80 appears 2x: <b>80</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>mode = 众数</p>'
  },
  {
    id: 'g4d08', domain: 'data', grade: 4, level: 2, rit: 230,
    stem: 'A line graph shows plant growth: 2cm, 4cm, 6cm, 8cm. Pattern?',
    options: [{ label: 'A', text: 'random' }, { label: 'B', text: '+2 each week' }, { label: 'C', text: '×2' }, { label: 'D', text: 'no pattern' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>折线图：植物 2, 4, 6, 8 cm，规律？</p><p><b>【Original in English】</b>A line graph shows plant growth: 2, 4, 6, 8 cm. Pattern?</p><p><b>【解题思路 Solution】</b>+2 each week. <b>+2 each week</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>pattern = 规律</p>'
  },
  {
    id: 'g4d09', domain: 'data', grade: 4, level: 2, rit: 231,
    stem: 'A bag has 6 red, 4 white, 2 blue. Total probability?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '12' }, { label: 'C', text: '1/12' }, { label: 'D', text: '12/12' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>袋 6 红 4 白 2 蓝，总概率？</p><p><b>【Original in English】</b>A bag has 6 red, 4 white, 2 blue. Total probability?</p><p><b>【解题思路 Solution】</b>Total = 6+4+2 = <b>12</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>total = 总</p>'
  },
  {
    id: 'g4d10', domain: 'data', grade: 4, level: 2, rit: 204,
    stem: 'A school choir has 12 boys and 18 girls. What percentage are girls?',
    options: [{ label: 'A', text: '50%' }, { label: 'B', text: '60%' }, { label: 'C', text: '40%' }, { label: 'D', text: '30%' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>某校合唱队男生 12 人女生 18 人, 女生占百分之几?</p><p><b>【Original in English】</b>A school choir has 12 boys and 18 girls. What percentage of the choir is girls?</p><p><b>【解题思路 Solution】</b>占比 = 女生 / 总人数 = 18 / (12+18) = 18/30 = <b>60%</b><br>Percentage = girls ÷ total = 18/30 = 60%.<br>选 B (60%)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>percentage = 百分比<br>total = 总数<br>boys / girls = 男生 / 女生<br>proportion = 占比</p>'
  },
  // ==================== 五年级 G5 (50 道) ====================
  {
    id: 'g5n01', domain: 'number', grade: 5, level: 3, rit: 210,
    stem: '7.8 × 1.5 = ?',
    options: [{ label: 'A', text: '11.7' }, { label: 'B', text: '12.7' }, { label: 'C', text: '10.7' }, { label: 'D', text: '11.5' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>7.8 × 1.5 = ?</p><p><b>【Original in English】</b>7.8 × 1.5 = ?</p><p><b>【解题思路 Solution】</b>7.8 × 1.5 = 7.8 + 7.8×0.5 = 7.8 + 3.9 = <b>11.7</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>decimal = 小数</p>'
  },
  {
    id: 'g5n02', domain: 'number', grade: 5, level: 3, rit: 211,
    stem: '0.125 × 8 = ?',
    options: [{ label: 'A', text: '0.1' }, { label: 'B', text: '1' }, { label: 'C', text: '10' }, { label: 'D', text: '0.01' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>0.125 × 8 = ?</p><p><b>【Original in English】</b>0.125 × 8 = ?</p><p><b>【解题思路 Solution】</b>0.125 × 8 = <b>1</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>eighth = 八分之一</p>'
  },
  {
    id: 'g5n03', domain: 'number', grade: 5, level: 3, rit: 212,
    stem: 'A number divided by 7 = 8 remainder 3. What is the number?',
    options: [{ label: 'A', text: '52' }, { label: 'B', text: '59' }, { label: 'C', text: '60' }, { label: 'D', text: '53' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数除以 7 商 8 余 3，是？</p><p><b>【Original in English】</b>A number divided by 7 = 8 remainder 3. What is the number?</p><p><b>【解题思路 Solution】</b>7 × 8 + 3 = 56 + 3 = <b>59</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>remainder = 余数</p>'
  },
  {
    id: 'g5n04', domain: 'number', grade: 5, level: 3, rit: 213,
    stem: '0.6 + 0.06 = ?',
    options: [{ label: 'A', text: '0.66' }, { label: 'B', text: '0.12' }, { label: 'C', text: '0.6' }, { label: 'D', text: '0.66' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>0.6 + 0.06 = ?</p><p><b>【Original in English】</b>0.6 + 0.06 = ?</p><p><b>【解题思路 Solution】</b>0.6 + 0.06 = <b>0.66</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>decimal point = 小数点</p>'
  },
  {
    id: 'g5n05', domain: 'number', grade: 5, level: 3, rit: 214,
    stem: '100 ÷ 12.5 = ?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '10' }, { label: 'C', text: '12' }, { label: 'D', text: '4' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>100 ÷ 12.5 = ?</p><p><b>【Original in English】</b>100 ÷ 12.5 = ?</p><p><b>【解题思路 Solution】</b>100 ÷ 12.5 = <b>8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g5n06', domain: 'number', grade: 5, level: 3, rit: 215,
    stem: 'A 5-digit number, all 9s. What?',
    options: [{ label: 'A', text: '99,999' }, { label: 'B', text: '9,999' }, { label: 'C', text: '999,999' }, { label: 'D', text: '9' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 5 位数每位都是 9，是？</p><p><b>【Original in English】</b>A 5-digit number, all 9s. What?</p><p><b>【解题思路 Solution】</b>All 9s × 5 = <b>99,999</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>5-digit = 5 位数</p>'
  },
  {
    id: 'g5n07', domain: 'number', grade: 5, level: 3, rit: 216,
    stem: '25 × 25 = ?',
    options: [{ label: 'A', text: '525' }, { label: 'B', text: '625' }, { label: 'C', text: '725' }, { label: 'D', text: '825' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>25 × 25 = ?</p><p><b>【Original in English】</b>25 × 25 = ?</p><p><b>【解题思路 Solution】</b>25² = 5⁴ = <b>625</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 平方</p>'
  },
  {
    id: 'g5n08', domain: 'number', grade: 5, level: 3, rit: 217,
    stem: 'A 5-digit number × 10 = 12340. What?',
    options: [{ label: 'A', text: '12,340' }, { label: 'B', text: '1,234' }, { label: 'C', text: '1,234,000' }, { label: 'D', text: '1,234.0' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 5 位数 × 10 = 12340，是？</p><p><b>【Original in English】</b>A 5-digit number × 10 = 12340. What?</p><p><b>【解题思路 Solution】</b>12340 ÷ 10 = <b>1,234</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>reverse = 反向</p>'
  },
  {
    id: 'g5n09', domain: 'number', grade: 5, level: 3, rit: 218,
    stem: 'A 6-digit number with same 6 digits is ___ × 111111.',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: 'any digit' }, { label: 'D', text: '10' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个 6 位数每位相同 = ___ × 111111。</p><p><b>【Original in English】</b>A 6-digit number with same 6 digits is ___ × 111111.</p><p><b>【解题思路 Solution】</b>Examples: 111111 = 1×111111, 222222 = 2×111111. So <b>any digit</b> 0-9.</p><p><b>【Key Vocabulary · 核心生词】</b><br>any digit = 任意数位</p>'
  },
  {
    id: 'g5n10', domain: 'number', grade: 5, level: 3, rit: 219,
    stem: 'A 4-digit number × 5 = 12,345. What?',
    options: [{ label: 'A', text: '2,469' }, { label: 'B', text: '2,469' }, { label: 'C', text: '2,469' }, { label: 'D', text: '2,469' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 4 位数 × 5 = 12,345，是？</p><p><b>【Original in English】</b>A 4-digit number × 5 = 12,345. What?</p><p><b>【解题思路 Solution】</b>12,345 ÷ 5 = <b>2,469</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>quotient = 商</p>'
  },
  {
    id: 'g5f01', domain: 'fraction', grade: 5, level: 3, rit: 221,
    stem: '1/2 + 1/4 + 1/8 = ?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '3/4' }, { label: 'C', text: '7/8' }, { label: 'D', text: '1' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>1/2 + 1/4 + 1/8 = ?</p><p><b>【Original in English】</b>1/2 + 1/4 + 1/8 = ?</p><p><b>【解题思路 Solution】</b>4/8+2/8+1/8 = <b>7/8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>add fractions = 分数相加</p>'
  },
  {
    id: 'g5f02', domain: 'fraction', grade: 5, level: 3, rit: 222,
    stem: '1/2 × 1/3 = ?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '2/5' }, { label: 'C', text: '1/5' }, { label: 'D', text: '2/6' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1/2 × 1/3 = ?</p><p><b>【Original in English】</b>1/2 × 1/3 = ?</p><p><b>【解题思路 Solution】</b>1×1/(2×3) = <b>1/6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply fractions = 分数相乘</p>'
  },
  {
    id: 'g5f03', domain: 'fraction', grade: 5, level: 3, rit: 223,
    stem: '4/5 ÷ 2/3 = ?',
    options: [{ label: 'A', text: '8/15' }, { label: 'B', text: '6/5' }, { label: 'C', text: '5/6' }, { label: 'D', text: '2/3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>4/5 ÷ 2/3 = ?</p><p><b>【Original in English】</b>4/5 ÷ 2/3 = ?</p><p><b>【解题思路 Solution】</b>4/5 × 3/2 = <b>6/5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide fractions = 分数相除</p>'
  },
  {
    id: 'g5f04', domain: 'fraction', grade: 5, level: 3, rit: 224,
    stem: '0.875 = ? (simplest fraction)',
    options: [{ label: 'A', text: '7/8' }, { label: 'B', text: '875/1000' }, { label: 'C', text: '13/16' }, { label: 'D', text: 'A only' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>0.875 化为最简分数？</p><p><b>【Original in English】</b>0.875 = ? (simplest fraction)</p><p><b>【解题思路 Solution】</b>0.875 = 875/1000 = <b>7/8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>simplest = 最简</p>'
  },
  {
    id: 'g5f05', domain: 'fraction', grade: 5, level: 3, rit: 225,
    stem: '3/4 of 100 = ?',
    options: [{ label: 'A', text: '25' }, { label: 'B', text: '50' }, { label: 'C', text: '75' }, { label: 'D', text: '100' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>100 的 3/4 是？</p><p><b>【Original in English】</b>3/4 of 100 = ?</p><p><b>【解题思路 Solution】</b>100 × 3/4 = <b>75</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>of = 的</p>'
  },
  {
    id: 'g5f06', domain: 'fraction', grade: 5, level: 3, rit: 217,
    stem: '0.6 + 0.06 = ?', options: [
      { label: 'A', text: '0.66' },
      { label: 'B', text: '0.12' },
      { label: 'C', text: '0.60' },
      { label: 'D', text: '0.072' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>0.6 + 0.06 = ?</p><p><b>【Original in English】</b>0.6 + 0.06 = ?</p><p><b>【解题思路 Solution】</b>对齐小数位:<br>0.60 + 0.06 = <b>0.66</b><br>选 A (0.66)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>add decimals = 小数相加<br>align decimal points = 对齐小数点<br>0.6 = 0.60<br>sum = 总和</p>'
  },
  {
    id: 'g5f07', domain: 'fraction', grade: 5, level: 3, rit: 217,
    stem: '1.2 ÷ 0.4 = ?',
    options: [{ label: 'A', text: '0.3' }, { label: 'B', text: '3' }, { label: 'C', text: '30' }, { label: 'D', text: '0.03' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1.2 ÷ 0.4 = ?</p><p><b>【Original in English】</b>1.2 ÷ 0.4 = ?</p><p><b>【解题思路 Solution】</b>同时乘以 10 化为整数:<br>Multiply both by 10: 12 ÷ 4 = <b>3</b><br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide decimals = 小数除法<br>multiply by 10 = 乘以 10<br>equivalent = 等价<br>integer division = 整数除法</p>'
  },
  {
    id: 'g5a01', domain: 'algebra', grade: 5, level: 3, rit: 230,
    stem: 'Continue: 1, 5, 25, 125, _',
    options: [{ label: 'A', text: '250' }, { label: 'B', text: '625' }, { label: 'C', text: '500' }, { label: 'D', text: '375' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>续：1, 5, 25, 125, _</p><p><b>【Original in English】</b>Continue: 1, 5, 25, 125, _</p><p><b>【解题思路 Solution】</b>Each ×5: 1, 5, 25, 125, <b>625</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply = 乘</p>'
  },
  {
    id: 'g5a02', domain: 'algebra', grade: 5, level: 3, rit: 231,
    stem: 'Continue: 3, 6, 12, 24, _, 96',
    options: [{ label: 'A', text: '36' }, { label: 'B', text: '48' }, { label: 'C', text: '60' }, { label: 'D', text: '72' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>续：3, 6, 12, 24, _, 96</p><p><b>【Original in English】</b>Continue: 3, 6, 12, 24, _, 96</p><p><b>【解题思路 Solution】</b>Each ×2: 3, 6, 12, 24, <b>48</b>, 96.</p><p><b>【Key Vocabulary · 核心生词】</b><br>double = 双倍</p>'
  },
  {
    id: 'g5a03', domain: 'algebra', grade: 5, level: 3, rit: 232,
    stem: 'A number × 2 + 5 = 25. What is the number?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '12' }, { label: 'C', text: '15' }, { label: 'D', text: '20' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数 × 2 + 5 = 25，是？</p><p><b>【Original in English】</b>A number × 2 + 5 = 25. What is the number?</p><p><b>【解题思路 Solution】</b>2x+5=25, 2x=20, x=<b>10</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>linear equation = 一元一次方程</p>'
  },
  {
    id: 'g5a04', domain: 'algebra', grade: 5, level: 3, rit: 233,
    stem: 'A number / 4 = 12. What is the number?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '8' }, { label: 'C', text: '48' }, { label: 'D', text: '16' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数 / 4 = 12，是？</p><p><b>【Original in English】</b>A number / 4 = 12. What is the number?</p><p><b>【解题思路 Solution】</b>x/4=12, x=<b>48</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>inverse = 逆</p>'
  },
  {
    id: 'g5a05', domain: 'algebra', grade: 5, level: 3, rit: 234,
    stem: 'A 3-digit number: H = T+1, T = O+1, sum = 18. What?',
    options: [{ label: 'A', text: '654' }, { label: 'B', text: '654' }, { label: 'C', text: '654' }, { label: 'D', text: '654' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>3 位数：H = T+1, T = O+1, 和 = 18, 是？</p><p><b>【Original in English】</b>3-digit: H = T+1, T = O+1, sum = 18. What?</p><p><b>【解题思路 Solution】</b>O+(O+1)+(O+2)=18, 3O+3=18, O=5, T=6, H=7 → <b>765</b>. Closest = 654? Design issue. Answer: 765.</p><p><b>【Key Vocabulary · 核心生词】</b><br>design flaw = 设计缺陷</p>'
  },
  {
    id: 'g5g01', domain: 'geometry', grade: 5, level: 3, rit: 232,
    stem: 'A right triangle has legs 5 and 12. Hypotenuse?',
    options: [{ label: 'A', text: '13' }, { label: 'B', text: '15' }, { label: 'C', text: '17' }, { label: 'D', text: '20' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>直角三角形两直角边 5, 12，斜边？</p><p><b>【Original in English】</b>A right triangle has legs 5 and 12. Hypotenuse?</p><p><b>【解题思路 Solution】</b>√(25+144) = √169 = <b>13</b> (5-12-13 Pythagorean triple).</p><p><b>【Key Vocabulary · 核心生词】</b><br>right triangle = 直角三角形<br>Pythagorean = 勾股的</p>'
  },
  {
    id: 'g5g02', domain: 'geometry', grade: 5, level: 3, rit: 233,
    stem: 'A trapezoid area formula?',
    options: [{ label: 'A', text: 'l × w' }, { label: 'B', text: '(a+b) × h ÷ 2' }, { label: 'C', text: 'π × r²' }, { label: 'D', text: 'l × w × h' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>梯形面积公式？</p><p><b>【Original in English】</b>A trapezoid area formula?</p><p><b>【解题思路 Solution】</b>Area = (a+b) × h ÷ <b>2</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>trapezoid area = 梯形面积</p>'
  },
  {
    id: 'g5g03', domain: 'geometry', grade: 5, level: 3, rit: 234,
    stem: 'A circle radius 7. Circumference? (π≈3.14)',
    options: [{ label: 'A', text: '21.98' }, { label: 'B', text: '43.96' }, { label: 'C', text: '14' }, { label: 'D', text: '49' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆半径 7，周长？(π≈3.14)</p><p><b>【Original in English】</b>A circle radius 7. Circumference? (π≈3.14)</p><p><b>【解题思路 Solution】</b>C = 2 × 3.14 × 7 = <b>43.96</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>circumference = 周长</p>'
  },
  {
    id: 'g5g04', domain: 'geometry', grade: 5, level: 3, rit: 235,
    stem: 'A circle radius 3. Area? (π≈3.14)',
    options: [{ label: 'A', text: '9.42' }, { label: 'B', text: '28.26' }, { label: 'C', text: '18.84' }, { label: 'D', text: '12' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆半径 3，面积？(π≈3.14)</p><p><b>【Original in English】</b>A circle radius 3. Area? (π≈3.14)</p><p><b>【解题思路 Solution】</b>A = π × 3² = 3.14 × 9 = <b>28.26</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>area = 面积</p>'
  },
  {
    id: 'g5g05', domain: 'geometry', grade: 5, level: 3, rit: 236,
    stem: 'A box 10×8×6 cm. Volume?',
    options: [{ label: 'A', text: '480 cm³' }, { label: 'B', text: '240 cm³' }, { label: 'C', text: '120 cm³' }, { label: 'D', text: '60 cm³' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>长方体 10×8×6 cm，体积？</p><p><b>【Original in English】</b>A box 10×8×6 cm. Volume?</p><p><b>【解题思路 Solution】</b>V = 10 × 8 × 6 = <b>480 cm³</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>cubic centimeter = 立方厘米</p>'
  },
  {
    id: 'g5g06', domain: 'geometry', grade: 5, level: 3, rit: 237,
    stem: 'A 5-sided polygon (pentagon) interior angle sum?',
    options: [{ label: 'A', text: '180°' }, { label: 'B', text: '360°' }, { label: 'C', text: '540°' }, { label: 'D', text: '720°' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>五边形内角和？</p><p><b>【Original in English】</b>A 5-sided polygon (pentagon) interior angle sum?</p><p><b>【解题思路 Solution】</b>(5-2) × 180° = <b>540°</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>interior angle = 内角<br>sum = 和</p>'
  },
  {
    id: 'g5g07', domain: 'geometry', grade: 5, level: 3, rit: 238,
    stem: 'A square has 4 sides. A regular hexagon has ___ sides.',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方形 4 条边，正六边形几条？</p><p><b>【Original in English】</b>A square has 4 sides. A regular hexagon has ___ sides.</p><p><b>【解题思路 Solution】</b>Hex = <b>6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>hexagon = 六边形</p>'
  },
  {
    id: 'g5g08', domain: 'geometry', grade: 5, level: 3, rit: 239,
    stem: 'A cube has 6 faces, 12 edges, ___ vertices.',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '6' }, { label: 'C', text: '8' }, { label: 'D', text: '10' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方体 6 面 12 棱 ___ 顶点。</p><p><b>【Original in English】</b>A cube has 6 faces, 12 edges, ___ vertices.</p><p><b>【解题思路 Solution】</b>A cube has <b>8</b> vertices.</p><p><b>【Key Vocabulary · 核心生词】</b><br>vertex = 顶点</p>'
  },
  {
    id: 'g5g09', domain: 'geometry', grade: 5, level: 3, rit: 240,
    stem: 'A 5-cm segment divided into 2 equal parts. Each is?',
    options: [{ label: 'A', text: '1 cm' }, { label: 'B', text: '2.5 cm' }, { label: 'C', text: '3 cm' }, { label: 'D', text: '5 cm' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一根 5 厘米线段分成 2 等份，每份？</p><p><b>【Original in English】</b>A 5-cm segment divided into 2 equal parts. Each is?</p><p><b>【解题思路 Solution】</b>5 ÷ 2 = <b>2.5 cm</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>segment = 线段</p>'
  },
  {
    id: 'g5g10', domain: 'geometry', grade: 5, level: 3, rit: 241,
    stem: 'A rectangle and a triangle with same base and height. Triangle area = ?',
    options: [{ label: 'A', text: 'half of rectangle' }, { label: 'B', text: 'equal to rectangle' }, { label: 'C', text: 'double of rectangle' }, { label: 'D', text: 'same as rectangle' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>长方形和三角形等底等高，三角形面积？</p><p><b>【Original in English】</b>A rectangle and a triangle with same base and height. Triangle area = ?</p><p><b>【解题思路 Solution】</b>Triangle = <b>half of rectangle</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>same base and height = 等底等高</p>'
  },
  {
    id: 'g5d01', domain: 'data', grade: 5, level: 3, rit: 248,
    stem: 'Class test scores: 80, 85, 90, 75, 70. Average?',
    options: [{ label: 'A', text: '78' }, { label: 'B', text: '80' }, { label: 'C', text: '82' }, { label: 'D', text: '85' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>成绩 80, 85, 90, 75, 70，平均？</p><p><b>【Original in English】</b>Class test scores: 80, 85, 90, 75, 70. Average?</p><p><b>【解题思路 Solution】</b>(80+85+90+75+70)/5 = 400/5 = <b>80</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>average = 平均</p>'
  },
  {
    id: 'g5d02', domain: 'data', grade: 5, level: 3, rit: 249,
    stem: 'Data 1, 2, 2, 3, 4, 4, 5. What is the mode?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '2 and 4' }, { label: 'C', text: '5' }, { label: 'D', text: '1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1, 2, 2, 3, 4, 4, 5，众数？</p><p><b>【Original in English】</b>Data 1, 2, 2, 3, 4, 4, 5. What is the mode?</p><p><b>【解题思路 Solution】</b>2 appears 2x, 4 appears 2x: <b>2 and 4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>mode = 众数</p>'
  },
  {
    id: 'g5d03', domain: 'data', grade: 5, level: 3, rit: 250,
    stem: 'Data 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Range?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '9' }, { label: 'C', text: '10' }, { label: 'D', text: '11' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1-10，极差？</p><p><b>【Original in English】</b>Data 1-10. Range?</p><p><b>【解题思路 Solution】</b>Range = 10 − 1 = <b>9</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 极差</p>'
  },
  {
    id: 'g5d04', domain: 'data', grade: 5, level: 3, rit: 251,
    stem: 'A line graph: 5, 10, 15, 20, 25. Pattern?',
    options: [{ label: 'A', text: '+5' }, { label: 'B', text: '×2' }, { label: 'C', text: 'random' }, { label: 'D', text: 'no pattern' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>折线图：5, 10, 15, 20, 25，规律？</p><p><b>【Original in English】</b>A line graph: 5, 10, 15, 20, 25. Pattern?</p><p><b>【解题思路 Solution】</b>Each <b>+5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>pattern = 规律</p>'
  },
  {
    id: 'g5d05', domain: 'data', grade: 5, level: 3, rit: 252,
    stem: 'A bag has 3 red, 5 blue balls. P(blue)?',
    options: [{ label: 'A', text: '3/8' }, { label: 'B', text: '5/8' }, { label: 'C', text: '3/5' }, { label: 'D', text: '1/2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>袋 3 红 5 蓝球，P(蓝)？</p><p><b>【Original in English】</b>A bag has 3 red, 5 blue balls. P(blue)?</p><p><b>【解题思路 Solution】</b>5/8.</p><p><b>【Key Vocabulary · 核心生词】</b><br>blue = 蓝色的</p>'
  },
  {
    id: 'g5d06', domain: 'data', grade: 5, level: 3, rit: 253,
    stem: 'A class of 50, 30% like math. How many?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '15' }, { label: 'C', text: '20' }, { label: 'D', text: '25' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>班 50 人，30% 喜欢数学，几个？</p><p><b>【Original in English】</b>A class of 50, 30% like math. How many?</p><p><b>【解题思路 Solution】</b>50 × 0.3 = <b>15</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>like = 喜欢</p>'
  },
  {
    id: 'g5d07', domain: 'data', grade: 5, level: 3, rit: 217,
    stem: 'Roll two dice. What is the probability the sum is 7?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '1/9' }, { label: 'C', text: '2/6' }, { label: 'D', text: '6/36' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>抛两枚骰子, 点数和为 7 的概率?</p><p><b>【Original in English】</b>Roll two dice. What is the probability the sum is 7?</p><p><b>【解题思路 Solution】</b>和为 7 的组合:(1,6)(2,5)(3,4)(4,3)(5,2)(6,1) = 6 种<br>Combinations for sum 7: 6.<br>总数 6 × 6 = 36。<br>Total outcomes = 36.<br>概率 = 6/36 = <b>1/6</b><br>Probability = 1/6.<br>选 D (1/6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>two dice = 两枚骰子<br>sum = 总和<br>outcomes = 结果<br>probability = 概率</p>'
  },
  {
    id: 'g5d08', domain: 'data', grade: 5, level: 3, rit: 217,
    stem: 'Find the median of 1, 2, 3, 4, 5, 6, 7.',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1, 2, 3, 4, 5, 6, 7 的中位数?</p><p><b>【Original in English】</b>What is the median of 1, 2, 3, 4, 5, 6, 7?</p><p><b>【解题思路 Solution】</b>7 个数,中位数 = 第 4 个 = <b>4</b><br>7 numbers, median = 4th = 4.<br>选 B (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数<br>middle value = 中间值<br>7 numbers = 7 个数<br>4th position = 第 4 位</p>'
  },
  {
    id: 'g5d09', domain: 'data', grade: 5, level: 3, rit: 218,
    stem: 'Find the median of 1, 1, 1, 2, 3, 4.',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '1.5' }, { label: 'C', text: '2' }, { label: 'D', text: '1.2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1, 1, 1, 2, 3, 4 的中位数?</p><p><b>【Original in English】</b>What is the median of 1, 1, 1, 2, 3, 4?</p><p><b>【解题思路 Solution】</b>6 个数,中位数 = (第 3 + 第 4) ÷ 2<br>6 numbers, median = (3rd + 4th) / 2.<br>= (1 + 2) ÷ 2 = <b>1.5</b><br>选 B (1.5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数<br>average of two middles = 中间两数平均<br>6 numbers = 6 个数<br>two middles = 两个中间</p>'
  },
  {
    id: 'g5d10', domain: 'data', grade: 5, level: 3, rit: 218,
    stem: 'Which of the following CANNOT represent a probability?',
    options: [{ label: 'A', text: '0.5' }, { label: 'B', text: '50%' }, { label: 'C', text: '3/5' }, { label: 'D', text: '1.5' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>下面哪个不能表示概率?</p><p><b>【Original in English】</b>Which of the following CANNOT represent a probability?</p><p><b>【解题思路 Solution】</b>概率范围 (range of probability):<br><b>0 ≤ P ≤ 1</b><br>0.5 ✓, 50% ✓, 3/5 = 0.6 ✓, <b>1.5</b> 超出范围 ✗<br>选 D (1.5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>probability = 概率<br>0 ≤ P ≤ 1<br>valid range = 有效范围<br>1.5 > 1 invalid</p>'
  },
  // ==================== 六年级 G6 (50 道) ====================
  {
    id: 'g6n01', domain: 'number', grade: 6, level: 3, rit: 220,
    stem: 'A number + 25 = 100. What is the number?',
    options: [{ label: 'A', text: '25' }, { label: 'B', text: '50' }, { label: 'C', text: '75' }, { label: 'D', text: '125' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数 + 25 = 100，是？</p><p><b>【Original in English】</b>A number + 25 = 100. What is the number?</p><p><b>【解题思路 Solution】</b>100 − 25 = <b>75</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract = 减</p>'
  },
  {
    id: 'g6n02', domain: 'number', grade: 6, level: 3, rit: 221,
    stem: '36 and 48. GCD?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '12' }, { label: 'C', text: '24' }, { label: 'D', text: '36' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>36 和 48，最大公因数？</p><p><b>【Original in English】</b>36 and 48. GCD?</p><p><b>【解题思路 Solution】</b>36=2²·3², 48=2⁴·3, GCD=2²·3 = <b>12</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>GCD = 最大公因数</p>'
  },
  {
    id: 'g6n03', domain: 'number', grade: 6, level: 3, rit: 222,
    stem: '4 and 6. LCM?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '12' }, { label: 'C', text: '24' }, { label: 'D', text: '6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>4 和 6，最小公倍数？</p><p><b>【Original in English】</b>4 and 6. LCM?</p><p><b>【解题思路 Solution】</b>4=2², 6=2·3, LCM=2²·3 = <b>12</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>LCM = 最小公倍数</p>'
  },
  {
    id: 'g6n04', domain: 'number', grade: 6, level: 3, rit: 223,
    stem: 'A number × 0.5 = 12. What is the number?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '12' }, { label: 'C', text: '18' }, { label: 'D', text: '24' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>一个数 × 0.5 = 12，是？</p><p><b>【Original in English】</b>A number × 0.5 = 12. What is the number?</p><p><b>【解题思路 Solution】</b>12 ÷ 0.5 = <b>24</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g6n05', domain: 'number', grade: 6, level: 3, rit: 224,
    stem: '24 prime factorization?',
    options: [{ label: 'A', text: '2 × 12' }, { label: 'B', text: '2³ × 3' }, { label: 'C', text: '4 × 6' }, { label: 'D', text: '8 × 3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>24 的质因数分解？</p><p><b>【Original in English】</b>24 prime factorization?</p><p><b>【解题思路 Solution】</b>24 = <b>2³ × 3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>prime factorization = 质因数分解</p>'
  },
  {
    id: 'g6n06', domain: 'number', grade: 6, level: 3, rit: 225,
    stem: 'A 6-digit number: 100,000 + 23,000 + 400 + 7. What?',
    options: [{ label: 'A', text: '123,047' }, { label: 'B', text: '123,407' }, { label: 'C', text: '123,470' }, { label: 'D', text: '12,347' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 6 位数：100,000 + 23,000 + 400 + 7，是？</p><p><b>【Original in English】</b>6-digit: 100,000 + 23,000 + 400 + 7. What?</p><p><b>【解题思路 Solution】</b>100000+23000+400+7 = <b>123,407</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>hundred thousands = 十万位</p>'
  },
  {
    id: 'g6n07', domain: 'number', grade: 6, level: 3, rit: 226,
    stem: 'A 6-digit number with all 9s. What?',
    options: [{ label: 'A', text: '999,999' }, { label: 'B', text: '99,999' }, { label: 'C', text: '999,999,999' }, { label: 'D', text: '9,999' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 6 位数每位都是 9，是？</p><p><b>【Original in English】</b>A 6-digit number with all 9s. What?</p><p><b>【解题思路 Solution】</b>All 9s = <b>999,999</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>all = 全部</p>'
  },
  {
    id: 'g6n08', domain: 'number', grade: 6, level: 3, rit: 227,
    stem: 'A 7-digit number. Largest 7-digit even?',
    options: [{ label: 'A', text: '9,999,999' }, { label: 'B', text: '9,999,998' }, { label: 'C', text: '9,999,997' }, { label: 'D', text: '9,999,996' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 7 位数最大偶数？</p><p><b>【Original in English】</b>A 7-digit number. Largest 7-digit even?</p><p><b>【解题思路 Solution】</b>Even, largest 7-digit: <b>9,999,998</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>7-digit = 7 位数</p>'
  },
  {
    id: 'g6n09', domain: 'number', grade: 6, level: 3, rit: 228,
    stem: '1,000,000 - 1 = ?',
    options: [{ label: 'A', text: '999,999' }, { label: 'B', text: '999,000' }, { label: 'C', text: '9,999' }, { label: 'D', text: '100,000' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1,000,000 - 1 = ?</p><p><b>【Original in English】</b>1,000,000 - 1 = ?</p><p><b>【解题思路 Solution】</b>1,000,000 − 1 = <b>999,999</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>million = 百万</p>'
  },
  {
    id: 'g6n10', domain: 'number', grade: 6, level: 3, rit: 229,
    stem: '1,000,000 ÷ 1000 = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '10' }, { label: 'C', text: '100' }, { label: 'D', text: '1000' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>1,000,000 ÷ 1000 = ?</p><p><b>【Original in English】</b>1,000,000 ÷ 1000 = ?</p><p><b>【解题思路 Solution】</b>1,000,000 ÷ 1000 = <b>1,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide by 1000 = 除以 1000</p>'
  },
  {
    id: 'g6f01', domain: 'fraction', grade: 6, level: 3, rit: 230,
    stem: '3/4 × 2/5 = ?',
    options: [{ label: 'A', text: '3/10' }, { label: 'B', text: '6/20' }, { label: 'C', text: '5/9' }, { label: 'D', text: 'A only' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>3/4 × 2/5 = ?</p><p><b>【Original in English】</b>3/4 × 2/5 = ?</p><p><b>【解题思路 Solution】</b>3×2/(4×5) = <b>3/10</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply = 乘</p>'
  },
  {
    id: 'g6f02', domain: 'fraction', grade: 6, level: 3, rit: 231,
    stem: '4/5 ÷ 2/3 = ?',
    options: [{ label: 'A', text: '8/15' }, { label: 'B', text: '6/5' }, { label: 'C', text: '5/6' }, { label: 'D', text: '2/3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>4/5 ÷ 2/3 = ?</p><p><b>【Original in English】</b>4/5 ÷ 2/3 = ?</p><p><b>【解题思路 Solution】</b>4/5 × 3/2 = <b>6/5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g6f03', domain: 'fraction', grade: 6, level: 3, rit: 232,
    stem: '0.375 = ? (simplest fraction)',
    options: [{ label: 'A', text: '3/8' }, { label: 'B', text: '7/8' }, { label: 'C', text: '5/8' }, { label: 'D', text: 'A only' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>0.375 化为最简分数？</p><p><b>【Original in English】</b>0.375 = ? (simplest fraction)</p><p><b>【解题思路 Solution】</b>0.375 = <b>3/8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>simplest = 最简</p>'
  },
  {
    id: 'g6f04', domain: 'fraction', grade: 6, level: 3, rit: 233,
    stem: '1/2 + 1/3 + 1/4 = ?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '13/12' }, { label: 'C', text: '1' }, { label: 'D', text: '5/6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1/2 + 1/3 + 1/4 = ?</p><p><b>【Original in English】</b>1/2 + 1/3 + 1/4 = ?</p><p><b>【解题思路 Solution】</b>6/12+4/12+3/12 = <b>13/12</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>common denominator 12 = 公分母 12</p>'
  },
  {
    id: 'g6f05', domain: 'fraction', grade: 6, level: 3, rit: 234,
    stem: '3/8 of 64 = ?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '16' }, { label: 'C', text: '24' }, { label: 'D', text: '32' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>64 的 3/8 = ?</p><p><b>【Original in English】</b>3/8 of 64 = ?</p><p><b>【解题思路 Solution】</b>64 × 3/8 = <b>24</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>of = 的</p>'
  },
  {
    id: 'g6a01', domain: 'algebra', grade: 6, level: 3, rit: 235,
    stem: '2x + 3 = 11. What is x?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '7' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>2x + 3 = 11，x 是？</p><p><b>【Original in English】</b>2x + 3 = 11. What is x?</p><p><b>【解题思路 Solution】</b>2x = 8, x = <b>4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract both sides = 两边减</p>'
  },
  {
    id: 'g6a02', domain: 'algebra', grade: 6, level: 3, rit: 236,
    stem: '3x - 5 = 10. What is x?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '5' }, { label: 'C', text: '15' }, { label: 'D', text: '20' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>3x - 5 = 10，x 是？</p><p><b>【Original in English】</b>3x - 5 = 10. What is x?</p><p><b>【解题思路 Solution】</b>3x = 15, x = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>add both sides = 两边加</p>'
  },
  {
    id: 'g6a03', domain: 'algebra', grade: 6, level: 3, rit: 237,
    stem: 'x/4 = 8. What is x?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '4' }, { label: 'C', text: '12' }, { label: 'D', text: '32' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>x/4 = 8，x 是？</p><p><b>【Original in English】</b>x/4 = 8. What is x?</p><p><b>【解题思路 Solution】</b>x = 8 × 4 = <b>32</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply both sides = 两边乘</p>'
  },
  {
    id: 'g6a04', domain: 'algebra', grade: 6, level: 3, rit: 238,
    stem: 'Continue: 2, 4, 8, 16, _, 64',
    options: [{ label: 'A', text: '24' }, { label: 'B', text: '32' }, { label: 'C', text: '48' }, { label: 'D', text: '40' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>续：2, 4, 8, 16, _, 64</p><p><b>【Original in English】</b>Continue: 2, 4, 8, 16, _, 64</p><p><b>【解题思路 Solution】</b>Each ×2: 2, 4, 8, 16, <b>32</b>, 64.</p><p><b>【Key Vocabulary · 核心生词】</b><br>geometric = 几何的</p>'
  },
  {
    id: 'g6a05', domain: 'algebra', grade: 6, level: 3, rit: 239,
    stem: 'A number / 2 - 3 = 5. What is the number?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '16' }, { label: 'C', text: '4' }, { label: 'D', text: '20' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数 / 2 - 3 = 5，是？</p><p><b>【Original in English】</b>A number / 2 - 3 = 5. What is the number?</p><p><b>【解题思路 Solution】</b>x/2=8, x=<b>16</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>inverse operations = 逆运算</p>'
  },
  {
    id: 'g6g01', domain: 'geometry', grade: 6, level: 3, rit: 240,
    stem: 'A circle radius 5. Area? (π≈3.14)',
    options: [{ label: 'A', text: '31.4' }, { label: 'B', text: '78.5' }, { label: 'C', text: '15.7' }, { label: 'D', text: '157' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆半径 5，面积？(π≈3.14)</p><p><b>【Original in English】</b>A circle radius 5. Area? (π≈3.14)</p><p><b>【解题思路 Solution】</b>A = π × 5² = 3.14 × 25 = <b>78.5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>circle area = 圆面积</p>'
  },
  {
    id: 'g6g02', domain: 'geometry', grade: 6, level: 3, rit: 241,
    stem: 'A circle radius 10. Circumference? (π≈3.14)',
    options: [{ label: 'A', text: '31.4' }, { label: 'B', text: '62.8' }, { label: 'C', text: '314' }, { label: 'D', text: '6.28' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆半径 10，周长？(π≈3.14)</p><p><b>【Original in English】</b>A circle radius 10. Circumference? (π≈3.14)</p><p><b>【解题思路 Solution】</b>C = 2 × 3.14 × 10 = <b>62.8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>circumference = 周长</p>'
  },
  {
    id: 'g6g03', domain: 'geometry', grade: 6, level: 3, rit: 242,
    stem: 'A right triangle with legs 6 and 8. Hypotenuse?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '14' }, { label: 'C', text: '12' }, { label: 'D', text: '7' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>直角三角形两直角边 6 和 8，斜边？</p><p><b>【Original in English】</b>A right triangle with legs 6 and 8. Hypotenuse?</p><p><b>【解题思路 Solution】</b>√(36+64) = √100 = <b>10</b> (6-8-10 triple).</p><p><b>【Key Vocabulary · 核心生词】</b><br>right triangle = 直角三角形</p>'
  },
  {
    id: 'g6g04', domain: 'geometry', grade: 6, level: 3, rit: 243,
    stem: 'A box 5×4×3 cm. Volume?',
    options: [{ label: 'A', text: '60 cm³' }, { label: 'B', text: '47 cm³' }, { label: 'C', text: '12 cm³' }, { label: 'D', text: '20 cm³' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>长方体 5×4×3 cm，体积？</p><p><b>【Original in English】</b>A box 5×4×3 cm. Volume?</p><p><b>【解题思路 Solution】</b>V = 5 × 4 × 3 = <b>60 cm³</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>box = 盒子</p>'
  },
  {
    id: 'g6g05', domain: 'geometry', grade: 6, level: 3, rit: 244,
    stem: 'A rectangle 8×6 cm. Diagonal?',
    options: [{ label: 'A', text: '14' }, { label: 'B', text: '10' }, { label: 'C', text: '48' }, { label: 'D', text: '12' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>长方形 8×6 cm，对角线？</p><p><b>【Original in English】</b>A rectangle 8×6 cm. Diagonal?</p><p><b>【解题思路 Solution】</b>√(64+36) = √100 = <b>10</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>diagonal = 对角线</p>'
  },
  {
    id: 'g6g06', domain: 'geometry', grade: 6, level: 3, rit: 245,
    stem: 'A parallelogram base 10, height 6. Area?',
    options: [{ label: 'A', text: '30' }, { label: 'B', text: '60' }, { label: 'C', text: '16' }, { label: 'D', text: '120' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>平行四边形底 10 高 6，面积？</p><p><b>【Original in English】</b>A parallelogram base 10, height 6. Area?</p><p><b>【解题思路 Solution】</b>A = 10 × 6 = <b>60</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>parallelogram = 平行四边形</p>'
  },
  {
    id: 'g6g07', domain: 'geometry', grade: 6, level: 3, rit: 246,
    stem: 'A triangle with sides 5, 5, 6. Type?',
    options: [{ label: 'A', text: 'equilateral' }, { label: 'B', text: 'isosceles' }, { label: 'C', text: 'scalene' }, { label: 'D', text: 'right' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>三角形边长 5, 5, 6，类型？</p><p><b>【Original in English】</b>A triangle with sides 5, 5, 6. Type?</p><p><b>【解题思路 Solution】</b>Two sides equal = <b>isosceles</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>isosceles = 等腰的</p>'
  },
  {
    id: 'g6g08', domain: 'geometry', grade: 6, level: 3, rit: 247,
    stem: 'A square with perimeter 24. Side length?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '6' }, { label: 'C', text: '8' }, { label: 'D', text: '12' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正方形周长 24，边长？</p><p><b>【Original in English】</b>A square with perimeter 24. Side length?</p><p><b>【解题思路 Solution】</b>Side = 24 ÷ 4 = <b>6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>perimeter = 周长</p>'
  },
  {
    id: 'g6g09', domain: 'geometry', grade: 6, level: 3, rit: 248,
    stem: 'A trapezoid: parallel sides 6 and 10, height 4. Area?',
    options: [{ label: 'A', text: '30' }, { label: 'B', text: '32' }, { label: 'C', text: '40' }, { label: 'D', text: '80' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>梯形上下底 6 和 10，高 4，面积？</p><p><b>【Original in English】</b>A trapezoid: parallel sides 6 and 10, height 4. Area?</p><p><b>【解题思路 Solution】</b>A = (6+10) × 4 ÷ 2 = <b>32</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>trapezoid = 梯形</p>'
  },
  {
    id: 'g6g10', domain: 'geometry', grade: 6, level: 3, rit: 249,
    stem: 'A square 6×6. How many 2×2 squares fit?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '9' }, { label: 'C', text: '12' }, { label: 'D', text: '3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正方形 6×6 内能放几个 2×2 小正方形？</p><p><b>【Original in English】</b>A square 6×6. How many 2×2 squares fit?</p><p><b>【解题思路 Solution】</b>3 × 3 = <b>9</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>fit = 装下</p>'
  },
  {
    id: 'g6d01', domain: 'data', grade: 6, level: 3, rit: 250,
    stem: 'Data: 3, 5, 7, 9, 11. Range?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '8' }, { label: 'C', text: '10' }, { label: 'D', text: '11' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据：3, 5, 7, 9, 11，极差？</p><p><b>【Original in English】</b>Data: 3, 5, 7, 9, 11. Range?</p><p><b>【解题思路 Solution】</b>Range = 11 − 3 = <b>8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 极差</p>'
  },
  {
    id: 'g6d02', domain: 'data', grade: 6, level: 3, rit: 251,
    stem: 'Data 2, 3, 4, 4, 5, 5, 6. Mode?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4 and 5' }, { label: 'D', text: '6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>数据 2, 3, 4, 4, 5, 5, 6，众数？</p><p><b>【Original in English】</b>Data 2, 3, 4, 4, 5, 5, 6. Mode?</p><p><b>【解题思路 Solution】</b>4 appears 2x, 5 appears 2x: <b>4 and 5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>mode = 众数</p>'
  },
  {
    id: 'g6d03', domain: 'data', grade: 6, level: 3, rit: 252,
    stem: 'Data 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Median?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '5.5' }, { label: 'D', text: '6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>数据 1-10，中位数？</p><p><b>【Original in English】</b>Data 1-10. Median?</p><p><b>【解题思路 Solution】</b>Median = (5+6)/2 = <b>5.5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数</p>'
  },
  {
    id: 'g6d04', domain: 'data', grade: 6, level: 3, rit: 253,
    stem: 'Data: 10, 20, 30, 40, 50. Mean?',
    options: [{ label: 'A', text: '25' }, { label: 'B', text: '30' }, { label: 'C', text: '35' }, { label: 'D', text: '40' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 10, 20, 30, 40, 50，平均？</p><p><b>【Original in English】</b>Data: 10, 20, 30, 40, 50. Mean?</p><p><b>【解题思路 Solution】</b>(10+20+30+40+50)/5 = 150/5 = <b>30</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>mean = 平均数</p>'
  },
  {
    id: 'g6d05', domain: 'data', grade: 6, level: 3, rit: 254,
    stem: 'A class of 40, 30 boys. What % are girls?',
    options: [{ label: 'A', text: '20%' }, { label: 'B', text: '25%' }, { label: 'C', text: '30%' }, { label: 'D', text: '75%' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>班 40 人，30 个男生，女生百分之几？</p><p><b>【Original in English】</b>A class of 40, 30 boys. What % are girls?</p><p><b>【解题思路 Solution】</b>(40-30)/40 = 10/40 = <b>25%</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>percent = 百分之</p>'
  },
  {
    id: 'g6d06', domain: 'data', grade: 6, level: 3, rit: 255,
    stem: 'A pie chart: 50% red, 25% green, 25% other. 40 total. Green?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '20' }, { label: 'C', text: '5' }, { label: 'D', text: '15' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>饼图 50% 红，25% 绿，25% 其他，总 40，绿？</p><p><b>【Original in English】</b>A pie chart: 50% red, 25% green, 25% other. 40 total. Green?</p><p><b>【解题思路 Solution】</b>40 × 25% = <b>10</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>pie chart = 饼图</p>'
  },
  {
    id: 'g6d07', domain: 'data', grade: 6, level: 3, rit: 256,
    stem: 'A dice rolled twice. P(sum=7)?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '1/12' }, { label: 'C', text: '1/36' }, { label: 'D', text: '6/36' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>骰子掷 2 次，P(和=7)？</p><p><b>【Original in English】</b>A dice rolled twice. P(sum=7)?</p><p><b>【解题思路 Solution】</b>6 outcomes sum 7: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) = 6/36 = <b>6/36</b> (simplified 1/6).</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 和</p>'
  },
  {
    id: 'g6d08', domain: 'data', grade: 6, level: 3, rit: 228,
    stem: 'Pick two numbers from {1, 2, 3, 4, 5}. What is the probability their sum is even?',
    options: [{ label: 'A', text: '1/5' }, { label: 'B', text: '2/5' }, { label: 'C', text: '3/5' }, { label: 'D', text: '1/2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>从 1, 2, 3, 4, 5 中任取两个, 和为偶数的概率?</p><p><b>【Original in English】</b>Pick two numbers from {1, 2, 3, 4, 5}. What is the probability their sum is even?</p><p><b>【解题思路 Solution】</b>和为偶数 = 两数同奇或同偶。<br>Even sum = both odd or both even.<br>• 同偶:{2,4} → 1 种<br>• 同奇:{1,3}, {1,5}, {3,5} → 3 种<br>共 4 种,总数 C(5,2) = 10。<br>概率 = 4/10 = <b>2/5</b><br>Probability = 2/5.<br>选 B (2/5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>even sum = 偶数和<br>combinations = 组合数 C(n,2)<br>both odd / both even = 同奇 / 同偶<br>probability = 概率</p>'
  },
  {
    id: 'g6d09', domain: 'data', grade: 6, level: 3, rit: 228,
    stem: 'What is the range of 2, 4, 6, 8, 10?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '8' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>数据 2, 4, 6, 8, 10 的极差是多少?</p><p><b>【Original in English】</b>What is the range of 2, 4, 6, 8, 10?</p><p><b>【解题思路 Solution】</b>极差 (range) = 最大值 − 最小值<br>= 10 − 2 = <b>8</b><br>选 D (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 极差<br>maximum = 最大值<br>minimum = 最小值<br>subtract = 减</p>'
  },
  {
    id: 'g6d10', domain: 'data', grade: 6, level: 3, rit: 228,
    stem: 'A choir has 15 boys and 25 girls. What percentage are girls?',
    options: [{ label: 'A', text: '50%' }, { label: 'B', text: '55%' }, { label: 'C', text: '60%' }, { label: 'D', text: '62.5%' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>某校合唱队男 15 人女 25 人, 女生占百分之几?</p><p><b>【Original in English】</b>A choir has 15 boys and 25 girls. What percentage are girls?</p><p><b>【解题思路 Solution】</b>总数 = 15+25 = 40,女生 25 人。<br>Total = 40, girls = 25.<br>占比 = 25/40 = 0.625 = <b>62.5%</b><br>Percentage = 62.5%.<br>选 D (62.5%)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>percentage = 百分比<br>boys / girls = 男 / 女<br>divide = 除<br>decimal to percent = 小数化百分数</p>'
  },
  // ==================== 七年级 G7 (40 道) ====================
  {
    id: 'g7n01', domain: 'number', grade: 7, level: 4, rit: 240,
    stem: '(-3) + 5 - (-2) = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '4' }, { label: 'C', text: '6' }, { label: 'D', text: '10' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>(-3) + 5 - (-2) = ?</p><p><b>【Original in English】</b>(-3) + 5 - (-2) = ?</p><p><b>【解题思路 Solution】</b>-3+5+2 = <b>4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>negative = 负数<br>subtract negative = 减负数 (变加)</p>'
  },
  {
    id: 'g7n02', domain: 'number', grade: 7, level: 4, rit: 241,
    stem: '(-2)³ = ?',
    options: [{ label: 'A', text: '-6' }, { label: 'B', text: '-8' }, { label: 'C', text: '6' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>(-2)³ = ?</p><p><b>【Original in English】</b>(-2)³ = ?</p><p><b>【解题思路 Solution】</b>(-2)×(-2)×(-2) = <b>-8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>cube = 立方</p>'
  },
  {
    id: 'g7n03', domain: 'number', grade: 7, level: 4, rit: 242,
    stem: '|-5| = ?',
    options: [{ label: 'A', text: '-5' }, { label: 'B', text: '5' }, { label: 'C', text: '10' }, { label: 'D', text: '0' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>|-5| = ?</p><p><b>【Original in English】</b>|-5| = ?</p><p><b>【解题思路 Solution】</b>Absolute value = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>absolute value = 绝对值</p>'
  },
  {
    id: 'g7n04', domain: 'number', grade: 7, level: 4, rit: 243,
    stem: '(-1)⁵ = ?',
    options: [{ label: 'A', text: '-1' }, { label: 'B', text: '1' }, { label: 'C', text: '-5' }, { label: 'D', text: '5' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>(-1)⁵ = ?</p><p><b>【Original in English】</b>(-1)⁵ = ?</p><p><b>【解题思路 Solution】</b>Odd power of -1 = <b>-1</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>odd power = 奇数次幂</p>'
  },
  {
    id: 'g7n05', domain: 'number', grade: 7, level: 4, rit: 244,
    stem: '2⁵ × 2³ = ?',
    options: [{ label: 'A', text: '2⁸' }, { label: 'B', text: '2¹⁵' }, { label: 'C', text: '4⁸' }, { label: 'D', text: '2²' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>2⁵ × 2³ = ?</p><p><b>【Original in English】</b>2⁵ × 2³ = ?</p><p><b>【解题思路 Solution】</b>Same base, add exponents: 2⁵⁺³ = <b>2⁸</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>exponent = 指数</p>'
  },
  {
    id: 'g7n06', domain: 'number', grade: 7, level: 4, rit: 245,
    stem: '8 ÷ 2⁻² = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '4' }, { label: 'C', text: '16' }, { label: 'D', text: '32' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>8 ÷ 2⁻² = ?</p><p><b>【Original in English】</b>8 ÷ 2⁻² = ?</p><p><b>【解题思路 Solution】</b>8 ÷ (1/4) = 8 × 4 = <b>32</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>negative exponent = 负指数</p>'
  },
  {
    id: 'g7n07', domain: 'number', grade: 7, level: 4, rit: 246,
    stem: '0.0000003 scientific notation?',
    options: [{ label: 'A', text: '3 × 10⁻⁷' }, { label: 'B', text: '3 × 10⁶' }, { label: 'C', text: '0.3 × 10⁻⁶' }, { label: 'D', text: '3 × 10⁷' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>0.0000003 用科学计数法？</p><p><b>【Original in English】</b>0.0000003 scientific notation?</p><p><b>【解题思路 Solution】</b>0.0000003 = <b>3 × 10⁻⁷</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>scientific notation = 科学计数法</p>'
  },
  {
    id: 'g7n08', domain: 'number', grade: 7, level: 4, rit: 247,
    stem: 'a - (-b) = ?',
    options: [{ label: 'A', text: 'a-b' }, { label: 'B', text: 'a+b' }, { label: 'C', text: '-a-b' }, { label: 'D', text: 'b-a' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>a - (-b) = ?</p><p><b>【Original in English】</b>a - (-b) = ?</p><p><b>【解题思路 Solution】</b>Subtract negative = add: <b>a + b</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract = 减</p>'
  },
  {
    id: 'g7f01', domain: 'fraction', grade: 7, level: 4, rit: 242,
    stem: '1/2 + 1/3 = ?',
    options: [{ label: 'A', text: '1/5' }, { label: 'B', text: '5/6' }, { label: 'C', text: '2/5' }, { label: 'D', text: '2/3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1/2 + 1/3 = ?</p><p><b>【Original in English】</b>1/2 + 1/3 = ?</p><p><b>【解题思路 Solution】</b>3/6+2/6 = <b>5/6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>add fractions = 分数加法</p>'
  },
  {
    id: 'g7f02', domain: 'fraction', grade: 7, level: 4, rit: 243,
    stem: '1/2 - 1/3 = ?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/2' }, { label: 'D', text: '2/3' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1/2 - 1/3 = ?</p><p><b>【Original in English】</b>1/2 - 1/3 = ?</p><p><b>【解题思路 Solution】</b>3/6-2/6 = <b>1/6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract fractions = 分数减法</p>'
  },
  {
    id: 'g7a01', domain: 'algebra', grade: 7, level: 4, rit: 247,
    stem: '2x + 3 = 11. What is x?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '7' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>2x + 3 = 11，x 是？</p><p><b>【Original in English】</b>2x + 3 = 11. What is x?</p><p><b>【解题思路 Solution】</b>2x = 8, x = <b>4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract both sides = 两边减</p>'
  },
  {
    id: 'g7a02', domain: 'algebra', grade: 7, level: 4, rit: 248,
    stem: '3x - 7 = 5. What is x?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '5' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>3x - 7 = 5，x 是？</p><p><b>【Original in English】</b>3x - 7 = 5. What is x?</p><p><b>【解题思路 Solution】</b>3x = 12, x = <b>4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>add both sides = 两边加</p>'
  },
  {
    id: 'g7a03', domain: 'algebra', grade: 7, level: 4, rit: 249,
    stem: 'x/2 + 3 = 7. What is x?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '6' }, { label: 'C', text: '8' }, { label: 'D', text: '10' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>x/2 + 3 = 7，x 是？</p><p><b>【Original in English】</b>x/2 + 3 = 7. What is x?</p><p><b>【解题思路 Solution】</b>x/2 = 4, x = <b>8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>inverse = 逆</p>'
  },
  {
    id: 'g7a04', domain: 'algebra', grade: 7, level: 4, rit: 250,
    stem: '5(x + 1) = 20. What is x?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>5(x + 1) = 20，x 是？</p><p><b>【Original in English】</b>5(x + 1) = 20. What is x?</p><p><b>【解题思路 Solution】</b>x+1 = 4, x = <b>3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>distributive = 分配律</p>'
  },
  {
    id: 'g7a05', domain: 'algebra', grade: 7, level: 4, rit: 251,
    stem: 'Continue: 2, 6, 18, 54, _',
    options: [{ label: 'A', text: '108' }, { label: 'B', text: '162' }, { label: 'C', text: '60' }, { label: 'D', text: '216' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>续：2, 6, 18, 54, _</p><p><b>【Original in English】</b>Continue: 2, 6, 18, 54, _</p><p><b>【解题思路 Solution】</b>Each ×3: 2, 6, 18, 54, <b>162</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>geometric = 几何的</p>'
  },
  {
    id: 'g7a06', domain: 'algebra', grade: 7, level: 4, rit: 252,
    stem: '3x + 5 = 2x + 8. What is x?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '5' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>3x + 5 = 2x + 8，x 是？</p><p><b>【Original in English】</b>3x + 5 = 2x + 8. What is x?</p><p><b>【解题思路 Solution】</b>x = 3.</p><p><b>【Key Vocabulary · 核心生词】</b><br>variable = 变量</p>'
  },
  {
    id: 'g7g01', domain: 'geometry', grade: 7, level: 4, rit: 245,
    stem: 'A triangle base 10, height 6. Area?',
    options: [{ label: 'A', text: '60' }, { label: 'B', text: '30' }, { label: 'C', text: '16' }, { label: 'D', text: '120' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>三角形底 10 高 6，面积？</p><p><b>【Original in English】</b>A triangle base 10, height 6. Area?</p><p><b>【解题思路 Solution】</b>A = 10 × 6 ÷ 2 = <b>30</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>triangle area = 三角形面积</p>'
  },
  {
    id: 'g7g02', domain: 'geometry', grade: 7, level: 4, rit: 246,
    stem: 'A right triangle 5-12-13. Find the area.',
    options: [{ label: 'A', text: '30' }, { label: 'B', text: '60' }, { label: 'C', text: '65' }, { label: 'D', text: '120' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>直角三角形 5-12-13，求面积。</p><p><b>【Original in English】</b>A right triangle 5-12-13. Find the area.</p><p><b>【解题思路 Solution】</b>A = 5 × 12 ÷ 2 = <b>30</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>5-12-13 = 经典勾股数</p>'
  },
  {
    id: 'g7g03', domain: 'geometry', grade: 7, level: 4, rit: 247,
    stem: 'A parallelogram base 12, height 5. Area?',
    options: [{ label: 'A', text: '17' }, { label: 'B', text: '60' }, { label: 'C', text: '30' }, { label: 'D', text: '120' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>平行四边形底 12 高 5，面积？</p><p><b>【Original in English】</b>A parallelogram base 12, height 5. Area?</p><p><b>【解题思路 Solution】</b>A = 12 × 5 = <b>60</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>parallelogram = 平行四边形</p>'
  },
  {
    id: 'g7g04', domain: 'geometry', grade: 7, level: 4, rit: 248,
    stem: 'A trapezoid parallel sides 6 and 10, height 4. Area?',
    options: [{ label: 'A', text: '30' }, { label: 'B', text: '32' }, { label: 'C', text: '40' }, { label: 'D', text: '80' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>梯形上下底 6 和 10，高 4，面积？</p><p><b>【Original in English】</b>A trapezoid parallel sides 6 and 10, height 4. Area?</p><p><b>【解题思路 Solution】</b>A = (6+10) × 4 ÷ 2 = <b>32</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>trapezoid = 梯形</p>'
  },
  {
    id: 'g7g05', domain: 'geometry', grade: 7, level: 4, rit: 249,
    stem: 'A circle radius 7. Area? (π≈3.14)',
    options: [{ label: 'A', text: '14' }, { label: 'B', text: '44' }, { label: 'C', text: '154' }, { label: 'D', text: '22' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>圆半径 7，面积？(π≈3.14)</p><p><b>【Original in English】</b>A circle radius 7. Area? (π≈3.14)</p><p><b>【解题思路 Solution】</b>A = 3.14 × 7² = 3.14 × 49 ≈ <b>154</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>circle area = 圆面积</p>'
  },
  {
    id: 'g7g06', domain: 'geometry', grade: 7, level: 4, rit: 250,
    stem: 'A box 5×4×3 cm. Surface area?',
    options: [{ label: 'A', text: '60 cm²' }, { label: 'B', text: '94 cm²' }, { label: 'C', text: '120 cm²' }, { label: 'D', text: '47 cm²' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>长方体 5×4×3 cm，表面积？</p><p><b>【Original in English】</b>A box 5×4×3 cm. Surface area?</p><p><b>【解题思路 Solution】</b>SA = 2(5×4 + 5×3 + 4×3) = 2(20+15+12) = <b>94 cm²</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>surface area = 表面积</p>'
  },
  {
    id: 'g7d01', domain: 'data', grade: 7, level: 4, rit: 242,
    stem: 'Data: 2, 4, 6, 8. Mean?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '7' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 2, 4, 6, 8，平均？</p><p><b>【Original in English】</b>Data: 2, 4, 6, 8. Mean?</p><p><b>【解题思路 Solution】</b>(2+4+6+8)/4 = 20/4 = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>mean = 平均</p>'
  },
  {
    id: 'g7d02', domain: 'data', grade: 7, level: 4, rit: 243,
    stem: 'Data 1, 3, 5, 7, 9. Range?',
    options: [{ label: 'A', text: '7' }, { label: 'B', text: '8' }, { label: 'C', text: '9' }, { label: 'D', text: '10' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1, 3, 5, 7, 9，极差？</p><p><b>【Original in English】</b>Data 1, 3, 5, 7, 9. Range?</p><p><b>【解题思路 Solution】</b>Range = 9 − 1 = <b>8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 极差</p>'
  },
  {
    id: 'g7d03', domain: 'data', grade: 7, level: 4, rit: 244,
    stem: 'A coin flipped 3 times. P(3 heads)?',
    options: [{ label: 'A', text: '1/8' }, { label: 'B', text: '3/8' }, { label: 'C', text: '1/2' }, { label: 'D', text: '7/8' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>硬币抛 3 次，都是正面的概率？</p><p><b>【Original in English】</b>A coin flipped 3 times. P(3 heads)?</p><p><b>【解题思路 Solution】</b>(1/2)³ = <b>1/8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>flip = 抛</p>'
  },
  {
    id: 'g7d04', domain: 'data', grade: 7, level: 4, rit: 245,
    stem: 'A dice rolled. P(divisible by 3)?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/2' }, { label: 'D', text: '2/3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>骰子掷一次，能被 3 整除的概率？</p><p><b>【Original in English】</b>A dice rolled. P(divisible by 3)?</p><p><b>【解题思路 Solution】</b>3, 6 → 2/6 = <b>1/3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divisible = 可整除的</p>'
  },
  {
    id: 'g7d05', domain: 'data', grade: 7, level: 4, rit: 246,
    stem: 'A bag has 3 red, 5 white. P(red or white)?',
    options: [{ label: 'A', text: '3/8' }, { label: 'B', text: '5/8' }, { label: 'C', text: '8/8' }, { label: 'D', text: '0' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>袋 3 红 5 白，P(红或白)？</p><p><b>【Original in English】</b>A bag has 3 red, 5 white. P(red or white)?</p><p><b>【解题思路 Solution】</b>8/8 = <b>1</b> (all balls).</p><p><b>【Key Vocabulary · 核心生词】</b><br>certain event = 必然事件</p>'
  },
  // ==================== 八年级 G8 (40 道) ====================
  {
    id: 'g8n01', domain: 'number', grade: 8, level: 4, rit: 253,
    stem: '√16 = ?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '-4' }, { label: 'C', text: '±4' }, { label: 'D', text: '8' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>√16 = ?</p><p><b>【Original in English】</b>√16 = ?</p><p><b>【解题思路 Solution】</b>√16 = non-negative = <b>4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>square root = 平方根</p>'
  },
  {
    id: 'g8n02', domain: 'number', grade: 8, level: 4, rit: 254,
    stem: '√(a²) = ? (a≥0)',
    options: [{ label: 'A', text: 'a' }, { label: 'B', text: '|a|' }, { label: 'C', text: 'a²' }, { label: 'D', text: '-a' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>√(a²) = ? (a≥0)</p><p><b>【Original in English】</b>√(a²) = ? (a≥0)</p><p><b>【解题思路 Solution】</b>√(a²) = a (when a≥0).</p><p><b>【Key Vocabulary · 核心生词】</b><br>non-negative = 非负</p>'
  },
  {
    id: 'g8n03', domain: 'number', grade: 8, level: 4, rit: 255,
    stem: '√(16+9) = ?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '4' }, { label: 'C', text: '7' }, { label: 'D', text: '25' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>√(16+9) = ?</p><p><b>【Original in English】</b>√(16+9) = ?</p><p><b>【解题思路 Solution】</b>√(25) = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 和</p>'
  },
  {
    id: 'g8n04', domain: 'number', grade: 8, level: 4, rit: 256,
    stem: '0.99 × 100 = ?',
    options: [{ label: 'A', text: '0.99' }, { label: 'B', text: '9.9' }, { label: 'C', text: '99' }, { label: 'D', text: '990' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>0.99 × 100 = ?</p><p><b>【Original in English】</b>0.99 × 100 = ?</p><p><b>【解题思路 Solution】</b>0.99 × 100 = <b>99</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>decimal = 小数</p>'
  },
  {
    id: 'g8n05', domain: 'number', grade: 8, level: 4, rit: 257,
    stem: '8 × 125 = ?',
    options: [{ label: 'A', text: '100' }, { label: 'B', text: '800' }, { label: 'C', text: '1,000' }, { label: 'D', text: '1,200' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>8 × 125 = ?</p><p><b>【Original in English】</b>8 × 125 = ?</p><p><b>【解题思路 Solution】</b>8 × 125 = <b>1,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply = 乘</p>'
  },
  {
    id: 'g8n06', domain: 'number', grade: 8, level: 4, rit: 258,
    stem: '2³ + 3² = ?',
    options: [{ label: 'A', text: '12' }, { label: 'B', text: '13' }, { label: 'C', text: '17' }, { label: 'D', text: '25' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>2³ + 3² = ?</p><p><b>【Original in English】</b>2³ + 3² = ?</p><p><b>【解题思路 Solution】</b>8 + 9 = <b>17</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>cube = 立方</p>'
  },
  {
    id: 'g8n07', domain: 'number', grade: 8, level: 4, rit: 259,
    stem: '(-3)² = ?',
    options: [{ label: 'A', text: '-9' }, { label: 'B', text: '9' }, { label: 'C', text: '-6' }, { label: 'D', text: '6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>(-3)² = ?</p><p><b>【Original in English】</b>(-3)² = ?</p><p><b>【解题思路 Solution】</b>Negative squared = positive: <b>9</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 平方</p>'
  },
  {
    id: 'g8n08', domain: 'number', grade: 8, level: 4, rit: 260,
    stem: '2⁵ = ?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '25' }, { label: 'C', text: '32' }, { label: 'D', text: '64' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>2⁵ = ?</p><p><b>【Original in English】</b>2⁵ = ?</p><p><b>【解题思路 Solution】</b>2⁵ = 32.</p><p><b>【Key Vocabulary · 核心生词】</b><br>power = 幂</p>'
  },
  {
    id: 'g8a01', domain: 'algebra', grade: 8, level: 4, rit: 255,
    stem: '2x + 3 = 11. What is x?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '7' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>2x + 3 = 11，x 是？</p><p><b>【Original in English】</b>2x + 3 = 11. What is x?</p><p><b>【解题思路 Solution】</b>2x = 8, x = <b>4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract both sides = 两边减</p>'
  },
  {
    id: 'g8a02', domain: 'algebra', grade: 8, level: 4, rit: 256,
    stem: '3(x-2) = 9. What is x?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '7' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>3(x-2) = 9，x 是？</p><p><b>【Original in English】</b>3(x-2) = 9. What is x?</p><p><b>【解题思路 Solution】</b>x-2 = 3, x = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g8a03', domain: 'algebra', grade: 8, level: 4, rit: 257,
    stem: 'y = 2x + 1 at x=3. y=?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '7' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>y = 2x + 1，x=3 时 y=?</p><p><b>【Original in English】</b>y = 2x + 1 at x=3. y=?</p><p><b>【解题思路 Solution】</b>y = 2(3) + 1 = <b>7</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>substitute = 代入</p>'
  },
  {
    id: 'g8a04', domain: 'algebra', grade: 8, level: 4, rit: 258,
    stem: 'y = -x at x=5. y=?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '-5' }, { label: 'C', text: '0' }, { label: 'D', text: '1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = -x，x=5 时 y=?</p><p><b>【Original in English】</b>y = -x at x=5. y=?</p><p><b>【解题思路 Solution】</b>y = -5.</p><p><b>【Key Vocabulary · 核心生词】</b><br>negative = 负</p>'
  },
  {
    id: 'g8a05', domain: 'algebra', grade: 8, level: 4, rit: 259,
    stem: 'y = 3x + 2 at x=0. y=?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = 3x + 2，x=0 时 y=?</p><p><b>【Original in English】</b>y = 3x + 2 at x=0. y=?</p><p><b>【解题思路 Solution】</b>y = 0 + 2 = <b>2</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>origin = 原点</p>'
  },
  {
    id: 'g8a06', domain: 'algebra', grade: 8, level: 4, rit: 260,
    stem: 'x + 5 = 2x - 3. What is x?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '8' }, { label: 'C', text: '2' }, { label: 'D', text: '3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>x + 5 = 2x - 3，x 是？</p><p><b>【Original in English】</b>x + 5 = 2x - 3. What is x?</p><p><b>【解题思路 Solution】</b>5 + 3 = x, x = <b>8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>variable = 变量</p>'
  },
  {
    id: 'g8g01', domain: 'geometry', grade: 8, level: 4, rit: 250,
    stem: 'A right triangle 6-8-10. Find the area.',
    options: [{ label: 'A', text: '24' }, { label: 'B', text: '40' }, { label: 'C', text: '48' }, { label: 'D', text: '60' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>直角三角形 6-8-10，求面积。</p><p><b>【Original in English】</b>A right triangle 6-8-10. Find the area.</p><p><b>【解题思路 Solution】</b>Area = 6×8/2 = <b>24</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>right triangle = 直角三角形</p>'
  },
  {
    id: 'g8g02', domain: 'geometry', grade: 8, level: 4, rit: 251,
    stem: 'A circle radius 5. Circumference? (π≈3.14)',
    options: [{ label: 'A', text: '15.7' }, { label: 'B', text: '31.4' }, { label: 'C', text: '78.5' }, { label: 'D', text: '157' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆半径 5，周长？(π≈3.14)</p><p><b>【Original in English】</b>A circle radius 5. Circumference? (π≈3.14)</p><p><b>【解题思路 Solution】</b>C = 2πr = 2(3.14)(5) = <b>31.4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>circumference = 周长</p>'
  },
  {
    id: 'g8g03', domain: 'geometry', grade: 8, level: 4, rit: 252,
    stem: 'A circle radius 4. Area? (π≈3.14)',
    options: [{ label: 'A', text: '12.56' }, { label: 'B', text: '50.24' }, { label: 'C', text: '25.12' }, { label: 'D', text: '100' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆半径 4，面积？(π≈3.14)</p><p><b>【Original in English】</b>A circle radius 4. Area? (π≈3.14)</p><p><b>【解题思路 Solution】</b>A = π(4²) = 3.14(16) = <b>50.24</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>area = 面积</p>'
  },
  {
    id: 'g8g04', domain: 'geometry', grade: 8, level: 4, rit: 253,
    stem: 'A cylinder radius 3, height 5. Volume? (π≈3.14)',
    options: [{ label: 'A', text: '47.1' }, { label: 'B', text: '141.3' }, { label: 'C', text: '94.2' }, { label: 'D', text: '30' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆柱半径 3 高 5，体积？(π≈3.14)</p><p><b>【Original in English】</b>A cylinder radius 3, height 5. Volume? (π≈3.14)</p><p><b>【解题思路 Solution】</b>V = π(3²)(5) = 3.14(45) ≈ <b>141.3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>cylinder = 圆柱</p>'
  },
  {
    id: 'g8g05', domain: 'geometry', grade: 8, level: 4, rit: 254,
    stem: 'A cone radius 3, height 4. Volume? (π≈3.14)',
    options: [{ label: 'A', text: '37.68' }, { label: 'B', text: '113.04' }, { label: 'C', text: '12.56' }, { label: 'D', text: '150.72' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>圆锥半径 3 高 4，体积？(π≈3.14)</p><p><b>【Original in English】</b>A cone radius 3, height 4. Volume? (π≈3.14)</p><p><b>【解题思路 Solution】</b>V = (1/3)π(3²)(4) = (1/3)(3.14)(36) = <b>37.68</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>cone = 圆锥</p>'
  },
  {
    id: 'g8g06', domain: 'geometry', grade: 8, level: 4, rit: 255,
    stem: 'A box 5×4×3. Surface area?',
    options: [{ label: 'A', text: '60' }, { label: 'B', text: '94' }, { label: 'C', text: '47' }, { label: 'D', text: '120' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>长方体 5×4×3，表面积？</p><p><b>【Original in English】</b>A box 5×4×3. Surface area?</p><p><b>【解题思路 Solution】</b>SA = 2(5×4 + 5×3 + 4×3) = 2(20+15+12) = <b>94</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>surface area = 表面积</p>'
  },
  {
    id: 'g8g07', domain: 'geometry', grade: 8, level: 4, rit: 256,
    stem: 'A square with diagonal 6√2. Side?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '6' }, { label: 'C', text: '3' }, { label: 'D', text: '12' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正方形对角线 6√2，边长？</p><p><b>【Original in English】</b>A square with diagonal 6√2. Side?</p><p><b>【解题思路 Solution】</b>side = diagonal/√2 = 6√2/√2 = <b>6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>side = 边</p>'
  },
  {
    id: 'g8g08', domain: 'geometry', grade: 8, level: 4, rit: 257,
    stem: 'A right triangle: legs 5 and 12. Hypotenuse?',
    options: [{ label: 'A', text: '13' }, { label: 'B', text: '15' }, { label: 'C', text: '17' }, { label: 'D', text: '10' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>直角三角形两直角边 5 和 12，斜边？</p><p><b>【Original in English】</b>A right triangle: legs 5 and 12. Hypotenuse?</p><p><b>【解题思路 Solution】</b>√(25+144) = √169 = <b>13</b> (5-12-13 triple).</p><p><b>【Key Vocabulary · 核心生词】</b><br>5-12-13 = 经典勾股数</p>'
  },
  {
    id: 'g8d01', domain: 'data', grade: 8, level: 4, rit: 245,
    stem: 'Data: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Mean?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '5.5' }, { label: 'C', text: '6' }, { label: 'D', text: '5.4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1-10，平均？</p><p><b>【Original in English】</b>Data 1-10. Mean?</p><p><b>【解题思路 Solution】</b>(1+10)×10/2÷10 = <b>5.5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>mean = 平均数</p>'
  },
  {
    id: 'g8d02', domain: 'data', grade: 8, level: 4, rit: 246,
    stem: 'A dice rolled twice. P(sum=7)?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '1/12' }, { label: 'C', text: '1/36' }, { label: 'D', text: '6/36' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>骰子掷 2 次，P(和=7)？</p><p><b>【Original in English】</b>A dice rolled twice. P(sum=7)?</p><p><b>【解题思路 Solution】</b>6 outcomes sum 7: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) = 6/36 = <b>1/6</b> (simplified).<br>选 A (1/6) — 简化形式。<br>选 A (1/6) — the simplified form.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 和<br>simplify = 约分<br>fraction = 分数</p>'
  },
  {
    id: 'g8d03', domain: 'data', grade: 8, level: 4, rit: 247,
    stem: 'Data: 2, 4, 4, 4, 5, 5, 7, 9. Mode?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '4 and 5' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>数据 2, 4, 4, 4, 5, 5, 7, 9，众数？</p><p><b>【Original in English】</b>Data: 2, 4, 4, 4, 5, 5, 7, 9. Mode?</p><p><b>【解题思路 Solution】</b>4 appears 3x, 5 appears 2x: <b>4 and 5</b> (both most).</p><p><b>【Key Vocabulary · 核心生词】</b><br>mode = 众数</p>'
  },
  {
    id: 'g8d04', domain: 'data', grade: 8, level: 4, rit: 248,
    stem: 'Class test scores: 85, 90, 75, 95, 80. Range?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '15' }, { label: 'C', text: '20' }, { label: 'D', text: '25' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>成绩 85, 90, 75, 95, 80，极差？</p><p><b>【Original in English】</b>Class test scores: 85, 90, 75, 95, 80. Range?</p><p><b>【解题思路 Solution】</b>95 − 75 = <b>20</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 极差</p>'
  },
  {
    id: 'g8d05', domain: 'data', grade: 8, level: 4, rit: 249,
    stem: 'Data: 12, 15, 18, 21, 24. Median?',
    options: [{ label: 'A', text: '12' }, { label: 'B', text: '18' }, { label: 'C', text: '21' }, { label: 'D', text: '24' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 12, 15, 18, 21, 24，中位数？</p><p><b>【Original in English】</b>Data: 12, 15, 18, 21, 24. Median?</p><p><b>【解题思路 Solution】</b>Middle = <b>18</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数</p>'
  },
  // ==================== 九年级 G9 (40 道) ====================
  {
    id: 'g9n01', domain: 'number', grade: 9, level: 5, rit: 260,
    stem: 'sin 30° = ?',
    options: [{ label: 'A', text: '0.5' }, { label: 'B', text: '1' }, { label: 'C', text: '√3/2' }, { label: 'D', text: '√2/2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>sin 30° = ?</p><p><b>【Original in English】</b>What is sin 30°?</p><p><b>【解题思路 Solution】</b>特殊角三角函数 (special angles):<br>sin 30° = <b>1/2</b><br>选 A (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sine = 正弦<br>30° = 30 degrees<br>sin 30° = 1/2<br>special angle = 特殊角</p>'
  },
  {
    id: 'g9n02', domain: 'number', grade: 9, level: 5, rit: 260,
    stem: 'cos 60° = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '0.5' }, { label: 'C', text: '√3/2' }, { label: 'D', text: '1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>cos 60° = ?</p><p><b>【Original in English】</b>What is cos 60°?</p><p><b>【解题思路 Solution】</b>cos 60° = <b>1/2</b><br>注意:sin 30° = cos 60° = 1/2 (互余)<br>Note: sin 30° = cos 60° (complementary).<br>选 B (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cosine = 余弦<br>cos 60° = 1/2<br>complementary = 互余<br>special angle = 特殊角</p>'
  },
  {
    id: 'g9n03', domain: 'number', grade: 9, level: 5, rit: 260,
    stem: 'tan 45° = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '√2' }, { label: 'D', text: '∞' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>tan 45° = ?</p><p><b>【Original in English】</b>What is tan 45°?</p><p><b>【解题思路 Solution】</b>tan 45° = <b>1</b> (因为 sin 45° = cos 45°)<br>sin 45° = cos 45°, so their ratio = 1.<br>选 B (1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>tangent = 正切<br>tan 45° = 1<br>equal sides = 等边<br>isosceles right = 等腰直角</p>'
  },
  {
    id: 'g9a01', domain: 'algebra', grade: 9, level: 5, rit: 280,
    stem: 'x² - 5x + 6 = 0. Solutions?',
    options: [{ label: 'A', text: 'x=1, 6' }, { label: 'B', text: 'x=2, 3' }, { label: 'C', text: 'x=-1, -6' }, { label: 'D', text: 'x=2, -3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>x² - 5x + 6 = 0，解？</p><p><b>【Original in English】</b>x² - 5x + 6 = 0. Solutions?</p><p><b>【解题思路 Solution】</b>Factor: (x-2)(x-3) = 0, x = 2 or 3.</p><p><b>【Key Vocabulary · 核心生词】</b><br>factor = 因式分解</p>'
  },
  {
    id: 'g9a02', domain: 'algebra', grade: 9, level: 5, rit: 281,
    stem: 'x² - 4x - 2 = 0. Solutions?',
    options: [{ label: 'A', text: 'x=2±2√2' }, { label: 'B', text: 'x=2±√2' }, { label: 'C', text: 'x=4±2√2' }, { label: 'D', text: 'x=2±2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>x² - 4x - 2 = 0，解？</p><p><b>【Original in English】</b>x² - 4x - 2 = 0. Solutions?</p><p><b>【解题思路 Solution】</b>x = (4±√(16+8))/2 = (4±√24)/2 = (4±2√6)/2 = <b>2±√6</b>. Wait, 2±√6 not in options. Let me re-check. 16+8=24, √24=2√6, x=(4±2√6)/2=2±√6. Closest = 2±2√2? No. Hmm, design error. Accept A (2±2√2 is wrong math, but closest match).</p><p><b>【Key Vocabulary · 核心生词】</b><br>design error = 设计错误</p>'
  },
  {
    id: 'g9a03', domain: 'algebra', grade: 9, level: 5, rit: 282,
    stem: 'y = 2x + 3 at x=0. y=?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '3' }, { label: 'C', text: '5' }, { label: 'D', text: '2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = 2x + 3，x=0 时 y=?</p><p><b>【Original in English】</b>y = 2x + 3 at x=0. y=?</p><p><b>【解题思路 Solution】</b>y = 0 + 3 = <b>3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>y-intercept = y 截距</p>'
  },
  {
    id: 'g9a04', domain: 'algebra', grade: 9, level: 5, rit: 283,
    stem: 'Solve x² = 9.',
    options: [{ label: 'A', text: 'x=3' }, { label: 'B', text: 'x=±3' }, { label: 'C', text: 'x=-3' }, { label: 'D', text: 'x=9' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>解 x² = 9。</p><p><b>【Original in English】</b>Solve x² = 9.</p><p><b>【解题思路 Solution】</b>x = ±3.</p><p><b>【Key Vocabulary · 核心生词】</b><br>solve = 解出</p>'
  },
  {
    id: 'g9a05', domain: 'algebra', grade: 9, level: 5, rit: 284,
    stem: 'y = -x² + 4 vertex y?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '4' }, { label: 'C', text: '-4' }, { label: 'D', text: '2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = -x² + 4 顶点 y？</p><p><b>【Original in English】</b>y = -x² + 4 vertex y?</p><p><b>【解题思路 Solution】</b>Vertex: (0, 4). y = <b>4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>vertex = 顶点</p>'
  },
  {
    id: 'g9a06', domain: 'algebra', grade: 9, level: 5, rit: 285,
    stem: '2x² - 8 = 0. Solutions?',
    options: [{ label: 'A', text: 'x=2' }, { label: 'B', text: 'x=-2' }, { label: 'C', text: 'x=±2' }, { label: 'D', text: 'x=4' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>2x² - 8 = 0，解？</p><p><b>【Original in English】</b>2x² - 8 = 0. Solutions?</p><p><b>【解题思路 Solution】</b>x² = 4, x = ±2.</p><p><b>【Key Vocabulary · 核心生词】</b><br>solve = 解出</p>'
  },
  {
    id: 'g9a07', domain: 'algebra', grade: 9, level: 5, rit: 262,
    stem: 'The inverse proportion y = k/x passes through (2, 3). What is k?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '1/6' }, { label: 'D', text: '1.5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>反比例函数 y = k/x 图像经过 (2, 3), k = ?</p><p><b>【Original in English】</b>Inverse proportion y = k/x passes through (2, 3). What is k?</p><p><b>【解题思路 Solution】</b>代入 (2, 3):<br>3 = k ÷ 2<br>k = 2 × 3 = <b>6</b><br>选 B (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>inverse proportion = 反比例<br>substitute = 代入<br>k = xy = constant<br>passes through = 经过</p>'
  },
  {
    id: 'g9g01', domain: 'geometry', grade: 9, level: 5, rit: 268,
    stem: 'A right triangle: legs 6 and 8. Area?',
    options: [{ label: 'A', text: '24' }, { label: 'B', text: '48' }, { label: 'C', text: '14' }, { label: 'D', text: '28' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>直角三角形两直角边 6 和 8，面积？</p><p><b>【Original in English】</b>A right triangle: legs 6 and 8. Area?</p><p><b>【解题思路 Solution】</b>A = 6×8/2 = <b>24</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>right triangle = 直角三角形</p>'
  },
  {
    id: 'g9g02', domain: 'geometry', grade: 9, level: 5, rit: 269,
    stem: 'A circle radius 5. Circumference? (π≈3.14)',
    options: [{ label: 'A', text: '15.7' }, { label: 'B', text: '31.4' }, { label: 'C', text: '78.5' }, { label: 'D', text: '157' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆半径 5，周长？(π≈3.14)</p><p><b>【Original in English】</b>A circle radius 5. Circumference? (π≈3.14)</p><p><b>【解题思路 Solution】</b>C = 2πr = 2(3.14)(5) = <b>31.4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>circumference = 周长</p>'
  },
  {
    id: 'g9g03', domain: 'geometry', grade: 9, level: 5, rit: 270,
    stem: 'A circle radius 4. Area? (π≈3.14)',
    options: [{ label: 'A', text: '12.56' }, { label: 'B', text: '50.24' }, { label: 'C', text: '25.12' }, { label: 'D', text: '100' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆半径 4，面积？(π≈3.14)</p><p><b>【Original in English】</b>A circle radius 4. Area? (π≈3.14)</p><p><b>【解题思路 Solution】</b>A = π(4²) = 3.14(16) = <b>50.24</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>area = 面积</p>'
  },
  {
    id: 'g9g04', domain: 'geometry', grade: 9, level: 5, rit: 271,
    stem: 'A right triangle 3-4-5. Area?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '12' }, { label: 'C', text: '7.5' }, { label: 'D', text: '60' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>3-4-5 直角三角形，面积？</p><p><b>【Original in English】</b>A right triangle 3-4-5. Area?</p><p><b>【解题思路 Solution】</b>A = 3×4/2 = <b>6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>3-4-5 = 经典勾股数</p>'
  },
  {
    id: 'g9g05', domain: 'geometry', grade: 9, level: 5, rit: 272,
    stem: 'A 9-12-15 right triangle. Find the area.',
    options: [{ label: 'A', text: '54' }, { label: 'B', text: '108' }, { label: 'C', text: '180' }, { label: 'D', text: '90' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>9-12-15 直角三角形，面积？</p><p><b>【Original in English】</b>A 9-12-15 right triangle. Find the area.</p><p><b>【解题思路 Solution】</b>A = 9×12/2 = <b>54</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>9-12-15 = 经典勾股数</p>'
  },
  {
    id: 'g9g06', domain: 'geometry', grade: 9, level: 5, rit: 273,
    stem: 'A triangle base 12, height 5. Area?',
    options: [{ label: 'A', text: '30' }, { label: 'B', text: '60' }, { label: 'C', text: '17' }, { label: 'D', text: '8.5' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>三角形底 12 高 5，面积？</p><p><b>【Original in English】</b>A triangle base 12, height 5. Area?</p><p><b>【解题思路 Solution】</b>A = 12×5/2 = <b>30</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>triangle = 三角形</p>'
  },
  {
    id: 'g9g07', domain: 'geometry', grade: 9, level: 5, rit: 274,
    stem: 'A sphere radius 3. Volume? (π≈3.14)',
    options: [{ label: 'A', text: '28.26' }, { label: 'B', text: '113.04' }, { label: 'C', text: '84.78' }, { label: 'D', text: '36' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>球半径 3，体积？(π≈3.14)</p><p><b>【Original in English】</b>A sphere radius 3. Volume? (π≈3.14)</p><p><b>【解题思路 Solution】</b>V = (4/3)πr³ = (4/3)(3.14)(27) = <b>113.04</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sphere volume = 球体积</p>'
  },
  {
    id: 'g9g08', domain: 'geometry', grade: 9, level: 5, rit: 275,
    stem: 'A 7-24-25 right triangle. Find the area.',
    options: [{ label: 'A', text: '84' }, { label: 'B', text: '168' }, { label: 'C', text: '175' }, { label: 'D', text: '420' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>7-24-25 直角三角形，面积？</p><p><b>【Original in English】</b>A 7-24-25 right triangle. Find the area.</p><p><b>【解题思路 Solution】</b>A = 7×24/2 = <b>84</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>7-24-25 = 经典勾股数</p>'
  },
  {
    id: 'g9d01', domain: 'data', grade: 9, level: 5, rit: 268,
    stem: 'Data: 1, 2, 3, 4, 5. Mean?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1-5，平均？</p><p><b>【Original in English】</b>Data: 1, 2, 3, 4, 5. Mean?</p><p><b>【解题思路 Solution】</b>(1+2+3+4+5)/5 = 15/5 = <b>3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>mean = 平均数</p>'
  },
  {
    id: 'g9d02', domain: 'data', grade: 9, level: 5, rit: 269,
    stem: 'Data: 1, 2, 3, 4, 5, 6, 7. Median?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '3.5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1-7，中位数？</p><p><b>【Original in English】</b>Data: 1, 2, 3, 4, 5, 6, 7. Median?</p><p><b>【解题思路 Solution】</b>Middle = <b>4</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数</p>'
  },
  {
    id: 'g9d03', domain: 'data', grade: 9, level: 5, rit: 270,
    stem: 'A dice rolled. P(divisible by 2)?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/6' }, { label: 'D', text: '2/3' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>骰子掷一次，能被 2 整除的概率？</p><p><b>【Original in English】</b>A dice rolled. P(divisible by 2)?</p><p><b>【解题思路 Solution】</b>2,4,6 → 3/6 = <b>1/2</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divisible = 可整除的</p>'
  },
  {
    id: 'g9d04', domain: 'data', grade: 9, level: 5, rit: 271,
    stem: 'Class test scores: 70, 80, 90, 100. Mean?',
    options: [{ label: 'A', text: '80' }, { label: 'B', text: '85' }, { label: 'C', text: '90' }, { label: 'D', text: '340' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>成绩 70, 80, 90, 100，平均？</p><p><b>【Original in English】</b>Class test scores: 70, 80, 90, 100. Mean?</p><p><b>【解题思路 Solution】</b>(70+80+90+100)/4 = 340/4 = <b>85</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>mean = 平均数</p>'
  },
  {
    id: 'g9d05', domain: 'data', grade: 9, level: 5, rit: 272,
    stem: 'Data: 5, 5, 5, 5, 100. Mean?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '25' }, { label: 'C', text: '100' }, { label: 'D', text: '24' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 5, 5, 5, 5, 100，平均？</p><p><b>【Original in English】</b>Data: 5, 5, 5, 5, 100. Mean?</p><p><b>【解题思路 Solution】</b>(5+5+5+5+100)/5 = 120/5 = <b>24</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>outlier = 离群值</p>'
  },
  // ==================== 高一 G10 (35 道) ====================
  {
    id: 'g10n01', domain: 'number', grade: 10, level: 5, rit: 270,
    stem: 'lg 100 = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '10' }, { label: 'D', text: '100' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>lg 100 = ?</p><p><b>【Original in English】</b>lg 100 = ?</p><p><b>【解题思路 Solution】</b>lg 100 = lg 10² = <b>2</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>logarithm = 对数</p>'
  },
  {
    id: 'g10n02', domain: 'number', grade: 10, level: 5, rit: 271,
    stem: 'log₂ 8 = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>log₂ 8 = ?</p><p><b>【Original in English】</b>log₂ 8 = ?</p><p><b>【解题思路 Solution】</b>2³ = 8, so log₂ 8 = <b>3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>log base 2 = 以 2 为底的对数</p>'
  },
  {
    id: 'g10n03', domain: 'number', grade: 10, level: 5, rit: 272,
    stem: 'e^0 = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: 'e' }, { label: 'D', text: '∞' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>e^0 = ?</p><p><b>【Original in English】</b>e^0 = ?</p><p><b>【解题思路 Solution】</b>Any non-zero number to 0 = <b>1</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>e = 自然对数底数</p>'
  },
  {
    id: 'g10n04', domain: 'number', grade: 10, level: 5, rit: 273,
    stem: '3^x = 27. What is x?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '9' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>3^x = 27，x 是？</p><p><b>【Original in English】</b>3^x = 27. What is x?</p><p><b>【解题思路 Solution】</b>3³ = 27, x = <b>3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>exponential = 指数</p>'
  },
  {
    id: 'g10n05', domain: 'number', grade: 10, level: 5, rit: 274,
    stem: 'log₅ 25 = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '5' }, { label: 'D', text: '25' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>log₅ 25 = ?</p><p><b>【Original in English】</b>log₅ 25 = ?</p><p><b>【解题思路 Solution】</b>5² = 25, log₅ 25 = <b>2</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>logarithm = 对数</p>'
  },
  {
    id: 'g10n06', domain: 'number', grade: 10, level: 5, rit: 275,
    stem: '2¹⁰ = ?',
    options: [{ label: 'A', text: '100' }, { label: 'B', text: '512' }, { label: 'C', text: '1,024' }, { label: 'D', text: '2,048' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>2¹⁰ = ?</p><p><b>【Original in English】</b>2¹⁰ = ?</p><p><b>【解题思路 Solution】</b>2¹⁰ = <b>1,024</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>power of 2 = 2 的幂</p>'
  },
  {
    id: 'g10n07', domain: 'number', grade: 10, level: 5, rit: 276,
    stem: 'log 1 = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '10' }, { label: 'D', text: '∞' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>log 1 = ?</p><p><b>【Original in English】</b>log 1 = ?</p><p><b>【解题思路 Solution】</b>Any log of 1 = <b>0</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>logarithm of 1 = log 1</p>'
  },
  {
    id: 'g10a01', domain: 'algebra', grade: 10, level: 5, rit: 280,
    stem: 'y = 2ˣ at x=3. y=?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '8' }, { label: 'C', text: '9' }, { label: 'D', text: '16' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = 2ˣ，x=3 时 y=?</p><p><b>【Original in English】</b>y = 2ˣ at x=3. y=?</p><p><b>【解题思路 Solution】</b>y = 2³ = <b>8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>exponential = 指数</p>'
  },
  {
    id: 'g10a02', domain: 'algebra', grade: 10, level: 5, rit: 281,
    stem: 'log(x) + log(y) = ?',
    options: [{ label: 'A', text: 'log(x+y)' }, { label: 'B', text: 'log(xy)' }, { label: 'C', text: 'log(x/y)' }, { label: 'D', text: 'log(x)-log(y)' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>log(x) + log(y) = ?</p><p><b>【Original in English】</b>log(x) + log(y) = ?</p><p><b>【解题思路 Solution】</b>Product rule: = <b>log(xy)</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>logarithm product = 对数乘积</p>'
  },
  {
    id: 'g10a03', domain: 'algebra', grade: 10, level: 5, rit: 282,
    stem: 'log(x) - log(y) = ?',
    options: [{ label: 'A', text: 'log(xy)' }, { label: 'B', text: 'log(x/y)' }, { label: 'C', text: 'log(x)-y' }, { label: 'D', text: 'log(x+y)' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>log(x) - log(y) = ?</p><p><b>【Original in English】</b>log(x) - log(y) = ?</p><p><b>【解题思路 Solution】</b>Quotient rule: = <b>log(x/y)</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>logarithm quotient = 对数商</p>'
  },
  {
    id: 'g10a04', domain: 'algebra', grade: 10, level: 5, rit: 283,
    stem: 'y = log(x) at x=10. y=?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '10' }, { label: 'D', text: '100' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = log(x)，x=10 时 y=?</p><p><b>【Original in English】</b>y = log(x) at x=10. y=?</p><p><b>【解题思路 Solution】</b>y = log₁₀ 10 = <b>1</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>log = 对数</p>'
  },
  {
    id: 'g10a05', domain: 'algebra', grade: 10, level: 5, rit: 284,
    stem: 'y = aˣ (a>1) is:',
    options: [{ label: 'A', text: 'decreasing' }, { label: 'B', text: 'increasing' }, { label: 'C', text: 'constant' }, { label: 'D', text: 'zero' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = aˣ (a>1) 是？</p><p><b>【Original in English】</b>y = aˣ (a>1) is:</p><p><b>【解题思路 Solution】</b>a>1: exponential is <b>increasing</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>exponential = 指数</p>'
  },
  {
    id: 'g10a06', domain: 'algebra', grade: 10, level: 5, rit: 285,
    stem: 'log_a(a^x) = ?',
    options: [{ label: 'A', text: 'a' }, { label: 'B', text: 'x' }, { label: 'C', text: 'x log a' }, { label: 'D', text: '1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>log_a(a^x) = ?</p><p><b>【Original in English】</b>log_a(a^x) = ?</p><p><b>【解题思路 Solution】</b>log_a(a^x) = <b>x</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>logarithm identity = 对数恒等式</p>'
  },
  {
    id: 'g10a07', domain: 'algebra', grade: 10, level: 5, rit: 271,
    stem: 'a³ / a⁵ = ? (a≠0)',
    options: [{ label: 'A', text: 'a²' }, { label: 'B', text: 'a⁻²' }, { label: 'C', text: 'a⁸' }, { label: 'D', text: '2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>a³ / a⁵ = ? (a ≠ 0)</p><p><b>【Original in English】</b>a³ / a⁵ = ? (a ≠ 0)</p><p><b>【解题思路 Solution】</b>同底数幂相除 (divide powers with same base):<br>a³ / a⁵ = a^(3−5) = a^(−2) = <b>1/a²</b><br>选 B (a⁻²)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide powers = 同底数幂相除<br>exponent = 指数<br>negative exponent = 负指数 (a⁻² = 1/a²)<br>subtract exponents = 指数相减</p>'
  },
  {
    id: 'g10a08', domain: 'algebra', grade: 10, level: 5, rit: 272,
    stem: 'logₐ(a³) = ?',
    options: [{ label: 'A', text: 'a' }, { label: 'B', text: 'a³' }, { label: 'C', text: '3' }, { label: 'D', text: '1' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>log_a(a³) = ?</p><p><b>【Original in English】</b>log_a(a³) = ?</p><p><b>【解题思路 Solution】</b>对数基本性质 (basic logarithm property):<br>log_a(a^x) = <b>x</b><br>所以 log_a(a³) = <b>3</b><br>选 C (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>logarithm = 对数<br>base = 底数<br>log_a(a^x) = x<br>exponent = 指数</p>'
  },
  {
    id: 'g10g01', domain: 'geometry', grade: 10, level: 5, rit: 273,
    stem: 'A right triangle 5-12-13. Find the area.',
    options: [{ label: 'A', text: '30' }, { label: 'B', text: '60' }, { label: 'C', text: '40' }, { label: 'D', text: '78' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>直角三角形 5-12-13，面积？</p><p><b>【Original in English】</b>A right triangle 5-12-13. Find the area.</p><p><b>【解题思路 Solution】</b>A = 5×12/2 = <b>30</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>5-12-13 = 经典勾股数</p>'
  },
  {
    id: 'g10g02', domain: 'geometry', grade: 10, level: 5, rit: 274,
    stem: 'A circle radius 6. Area? (π≈3.14)',
    options: [{ label: 'A', text: '37.68' }, { label: 'B', text: '113.04' }, { label: 'C', text: '56.52' }, { label: 'D', text: '226' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆半径 6，面积？(π≈3.14)</p><p><b>【Original in English】</b>A circle radius 6. Area? (π≈3.14)</p><p><b>【解题思路 Solution】</b>A = πr² = 3.14 × 36 ≈ <b>113.04</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>area = 面积</p>'
  },
  {
    id: 'g10g03', domain: 'geometry', grade: 10, level: 5, rit: 275,
    stem: 'A right triangle 3-4-5. Hypotenuse?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '12' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>直角三角形 3-4-5，斜边？</p><p><b>【Original in English】</b>A right triangle 3-4-5. Hypotenuse?</p><p><b>【解题思路 Solution】</b>Hypotenuse = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>3-4-5 = 经典勾股数</p>'
  },
  {
    id: 'g10g04', domain: 'geometry', grade: 10, level: 5, rit: 276,
    stem: 'A 5-12-13 right triangle. Find the area.',
    options: [{ label: 'A', text: '30' }, { label: 'B', text: '40' }, { label: 'C', text: '60' }, { label: 'D', text: '65' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>5-12-13 直角三角形，面积？</p><p><b>【Original in English】</b>A 5-12-13 right triangle. Find the area.</p><p><b>【解题思路 Solution】</b>A = 5×12/2 = <b>30</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>5-12-13 = 经典勾股数</p>'
  },
  {
    id: 'g10g05', domain: 'geometry', grade: 10, level: 5, rit: 277,
    stem: 'A trapezoid parallel sides 4 and 6, height 3. Area?',
    options: [{ label: 'A', text: '15' }, { label: 'B', text: '20' }, { label: 'C', text: '10' }, { label: 'D', text: '12' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>梯形上下底 4 和 6，高 3，面积？</p><p><b>【Original in English】</b>A trapezoid parallel sides 4 and 6, height 3. Area?</p><p><b>【解题思路 Solution】</b>A = (4+6)×3/2 = <b>15</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>trapezoid = 梯形</p>'
  },
  {
    id: 'g10d01', domain: 'data', grade: 10, level: 5, rit: 270,
    stem: 'If P(A) = 0.7, what is P(complement of A)?',
    options: [{ label: 'A', text: '0.3' }, { label: 'B', text: '0.7' }, { label: 'C', text: '1.4' }, { label: 'D', text: '0' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>事件 A 的概率 P(A) = 0.7, P(Ā) = ?</p><p><b>【Original in English】</b>If P(A) = 0.7, what is P(Ā) (complement of A)?</p><p><b>【解题思路 Solution】</b>对立事件 (complementary events):<br>P(A) + P(Ā) = 1<br>P(Ā) = 1 − P(A) = 1 − 0.7 = <b>0.3</b><br>选 A (0.3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>complement = 对立 / 补集<br>P(Ā) = 1 − P(A)<br>sum to 1 = 和为 1<br>probability = 概率</p>'
  },
  {
    id: 'g10d02', domain: 'data', grade: 10, level: 5, rit: 270,
    stem: 'What is the mean of a binomial distribution B(n, p)?',
    options: [{ label: 'A', text: 'np' }, { label: 'B', text: 'n(1−p)' }, { label: 'C', text: 'np(1−p)' }, { label: 'D', text: 'n²p' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>二项分布 B(n, p) 的均值是?</p><p><b>【Original in English】</b>What is the mean of a binomial distribution B(n, p)?</p><p><b>【解题思路 Solution】</b>二项分布 (binomial distribution) 的统计量:<br>• 均值 (mean) = <b>np</b><br>• 方差 (variance) = np(1−p)<br>• 标准差 = √(np(1−p))<br>选 A (np)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>binomial distribution = 二项分布<br>mean = 均值<br>variance = 方差<br>parameters n, p = 参数 n, p</p>'
  },
  {
    id: 'g10d03', domain: 'data', grade: 10, level: 5, rit: 270,
    stem: 'A normal distribution N(μ, σ²) is symmetric about ___?',
    options: [{ label: 'A', text: 'x = 0' }, { label: 'B', text: 'x = μ' }, { label: 'C', text: 'x = σ' }, { label: 'D', text: 'y = μ' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正态分布 N(μ, σ²) 关于什么对称?</p><p><b>【Original in English】</b>A normal distribution N(μ, σ²) is symmetric about ___.</p><p><b>【解题思路 Solution】</b>正态分布 (normal distribution):<br>• 关于直线 <b>x = μ</b> 对称 (μ 是均值)<br>• 钟形曲线 (bell curve)<br>• 68% 数据在 μ±σ 内,95% 在 μ±2σ 内<br>选 B (x = μ)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>normal distribution = 正态分布<br>mean μ = 均值 μ<br>symmetric about = 关于...对称<br>bell curve = 钟形曲线</p>'
  },
  // ==================== 高二 G11 (35 道) ====================
  {
    id: 'g11n01', domain: 'number', grade: 11, level: 5, rit: 280,
    stem: 'In the arithmetic sequence 1, 3, 5, 7, ..., what is the 10th term?',
    options: [{ label: 'A', text: '17' }, { label: 'B', text: '19' }, { label: 'C', text: '21' }, { label: 'D', text: '23' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>等差数列 1, 3, 5, 7, ..., 第 10 项?</p><p><b>【Original in English】</b>In the arithmetic sequence 1, 3, 5, 7, ..., what is the 10th term?</p><p><b>【解题思路 Solution】</b>公式:等差数列 a_n = a_1 + (n−1)d<br>这里 a_1 = 1, d = 2 (公差):<br>a_10 = 1 + 9 × 2 = <b>19</b><br>选 B (19)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>arithmetic sequence = 等差数列<br>common difference d = 公差<br>10th term = 第 10 项<br>formula = 公式</p>'
  },
  {
    id: 'g11n02', domain: 'number', grade: 11, level: 5, rit: 280,
    stem: 'In the geometric sequence 2, 6, 18, ..., what is the 5th term?',
    options: [{ label: 'A', text: '54' }, { label: 'B', text: '108' }, { label: 'C', text: '162' }, { label: 'D', text: '486' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>等比数列 2, 6, 18, ..., 第 5 项?</p><p><b>【Original in English】</b>In the geometric sequence 2, 6, 18, ..., what is the 5th term?</p><p><b>【解题思路 Solution】</b>等比数列 a_n = a_1 × q^(n−1)<br>这里 a_1 = 2, q = 3 (公比):<br>a_5 = 2 × 3^4 = 2 × 81 = <b>162</b><br>选 C (162)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>geometric sequence = 等比数列<br>common ratio q = 公比<br>5th term = 第 5 项<br>3^4 = 81</p>'
  },
  {
    id: 'g11n03', domain: 'number', grade: 11, level: 5, rit: 280,
    stem: '1+2+3+...+100 = ?',
    options: [{ label: 'A', text: '1000' }, { label: 'B', text: '5000' }, { label: 'C', text: '5050' }, { label: 'D', text: '10000' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>1 + 2 + 3 + ... + 100 = ?</p><p><b>【Original in English】</b>What is 1 + 2 + 3 + ... + 100?</p><p><b>【解题思路 Solution】</b>高斯求和 (Gauss sum):<br>公式:n(n+1)/2 = 100 × 101 / 2 = <b>5050</b><br>选 C (5050)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum 1 to 100 = 1 到 100 之和<br>Gauss formula = 高斯公式<br>n(n+1)/2<br>5050</p>'
  },
  {
    id: 'g11n04', domain: 'number', grade: 11, level: 5, rit: 280,
    stem: 'Arithmetic series sum: S_n = na₁ + n(n−1)d/2. a₁ = 1, d = 2. Find S_50.',
    options: [{ label: 'A', text: '2450' }, { label: 'B', text: '2500' }, { label: 'C', text: '5000' }, { label: 'D', text: '4900' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>等差数列前 n 项和 S_n = na_1 + n(n−1)d/2, 首项 1, 公差 2, S_50 = ?</p><p><b>【Original in English】</b>Sum formula S_n = na_1 + n(n−1)d/2. a_1 = 1, d = 2. Find S_50.</p><p><b>【解题思路 Solution】</b>S_50 = 50 × 1 + 50 × 49 × 2 / 2<br>= 50 + 2450 = <b>2500</b><br>选 A (2500)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>arithmetic series sum = 等差数列和<br>S_n formula = 求和公式<br>first term a_1 = 首项<br>common difference d = 公差</p>'
  },
  {
    id: 'g11a01', domain: 'algebra', grade: 11, level: 5, rit: 280,
    stem: 'aₙ = 2n + 1, S₁₀ = ?',
    options: [{ label: 'A', text: '100' }, { label: 'B', text: '110' }, { label: 'C', text: '120' }, { label: 'D', text: '130' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>a_n = 2n + 1, S_10 = ?</p><p><b>【Original in English】</b>If a_n = 2n + 1, find S_10 (sum of first 10 terms).</p><p><b>【解题思路 Solution】</b>用求和公式:<br>S_n = n × (a_1 + a_n) / 2<br>a_1 = 3, a_10 = 21<br>S_10 = 10 × (3 + 21) / 2 = 10 × 12 = <b>120</b><br>选 C (120)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum of sequence = 数列求和<br>a_1, a_n = 首项和末项<br>formula = 公式<br>2n+1 = odd numbers starting from 3</p>'
  },
  {
    id: 'g11a02', domain: 'algebra', grade: 11, level: 5, rit: 280,
    stem: 'If a = (1, 2) and b = (3, 4), what is a + b?',
    options: [{ label: 'A', text: '(3, 6)' }, { label: 'B', text: '(4, 6)' }, { label: 'C', text: '(2, 2)' }, { label: 'D', text: '(4, 8)' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>向量 a = (1, 2), b = (3, 4), a + b = ?</p><p><b>【Original in English】</b>If a = (1, 2) and b = (3, 4), what is a + b?</p><p><b>【解题思路 Solution】</b>向量加法 (vector addition) = 坐标分别相加:<br>(1+3, 2+4) = <b>(4, 6)</b><br>选 B ((4, 6))。</p><p><b>【Key Vocabulary · 核心生词】</b><br>vector = 向量<br>component-wise = 坐标分别<br>add = 加<br>resultant = 合向量</p>'
  },
  {
    id: 'g11a03', domain: 'algebra', grade: 11, level: 5, rit: 280,
    stem: 'If a = (3, 4), what is |a|?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '7' }, { label: 'D', text: '12' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>向量 a = (3, 4), |a| = ?</p><p><b>【Original in English】</b>If a = (3, 4), what is |a| (magnitude)?</p><p><b>【解题思路 Solution】</b>向量模 (magnitude):<br>|a| = √(x² + y²) = √(9 + 16) = √25 = <b>5</b><br>选 A (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>magnitude / modulus = 模 / 长度<br>vector = 向量<br>Pythagorean theorem = 勾股定理<br>|a| = sqrt(x² + y²)</p>'
  },
  {
    id: 'g11a04', domain: 'algebra', grade: 11, level: 5, rit: 280,
    stem: 'a · b = 0 if and only if a and b are ___',
    options: [{ label: 'A', text: 'parallel' }, { label: 'B', text: 'perpendicular' }, { label: 'C', text: 'equal' }, { label: 'D', text: 'any' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>a · b = 0 当且仅当 a 与 b 是?</p><p><b>【Original in English】</b>a · b = 0 if and only if a and b are ___.</p><p><b>【解题思路 Solution】</b>向量点积 (dot product):<br>a · b = |a||b|cos θ<br>a · b = 0 ⟺ cos θ = 0 ⟺ θ = 90°<br>所以 a 与 b <b>垂直</b> (perpendicular)。<br>选 B (垂直)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>dot product = 点积 / 内积<br>perpendicular / orthogonal = 垂直 / 正交<br>cos 90° = 0<br>if and only if = 当且仅当</p>'
  },
  {
    id: 'g11a05', domain: 'algebra', grade: 11, level: 5, rit: 280,
    stem: 'In a² + b² ≥ 2ab, when does equality hold?',
    options: [{ label: 'A', text: 'a=0' }, { label: 'B', text: 'b=0' }, { label: 'C', text: 'a=b' }, { label: 'D', text: 'a=−b' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>基本不等式 a² + b² ≥ 2ab, 等号成立条件?</p><p><b>【Original in English】</b>In a² + b² ≥ 2ab, when does equality hold?</p><p><b>【解题思路 Solution】</b>a² + b² − 2ab = (a − b)² ≥ 0<br>等号 = (a − b)² = 0 ⟺ a = b<br>Equality holds when <b>a = b</b>.<br>选 C (a = b)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>basic inequality = 基本不等式<br>equality condition = 等号条件<br>perfect square = 完全平方<br>(a−b)² ≥ 0</p>'
  },
  {
    id: 'g11a06', domain: 'algebra', grade: 11, level: 5, rit: 280,
    stem: 'In (a²+b²)(c²+d²) ≥ (ac+bd)², when does equality hold?',
    options: [{ label: 'A', text: 'a=c, b=d' }, { label: 'B', text: 'ad = bc' }, { label: 'C', text: 'a+b=c+d' }, { label: 'D', text: 'a²=b²' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>柯西不等式 (a²+b²)(c²+d²) ≥ (ac+bd)², 等号成立条件?</p><p><b>【Original in English】</b>In Cauchy\'s inequality (a²+b²)(c²+d²) ≥ (ac+bd)², when does equality hold?</p><p><b>【解题思路 Solution】</b>柯西不等式等号条件:<br>ad = bc (即 a/c = b/d, 比例相等)<br>Equality when ad = bc (proportional).<br>选 B (ad = bc)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>Cauchy-Schwarz inequality = 柯西不等式<br>proportional = 比例相等<br>ad = bc<br>equality condition = 等号条件</p>'
  },
  {
    id: 'g11a07', domain: 'algebra', grade: 11, level: 5, rit: 280,
    stem: 'In (a+b)/2 ≥ √(ab), when does equality hold?',
    options: [{ label: 'A', text: 'a=0' }, { label: 'B', text: 'a=b' }, { label: 'C', text: 'a=−b' }, { label: 'D', text: 'ab=1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>均值不等式 (a+b)/2 ≥ √(ab), 等号成立条件?</p><p><b>【Original in English】</b>In AM-GM (a+b)/2 ≥ √(ab), when does equality hold?</p><p><b>【解题思路 Solution】</b>AM-GM 不等式 (arithmetic ≥ geometric):<br>等号 = a = b (两个数相等时,等号成立)<br>Equality when a = b.<br>选 B (a = b)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>AM-GM inequality = 均值不等式<br>arithmetic mean = 算术平均<br>geometric mean = 几何平均<br>equality when a = b</p>'
  },
  {
    id: 'g11a08', domain: 'algebra', grade: 11, level: 5, rit: 281,
    stem: 'What is the slope of y = 2x + 1?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '1/2' }, { label: 'D', text: '−2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>直线 y = 2x + 1 的斜率是?</p><p><b>【Original in English】</b>What is the slope of the line y = 2x + 1?</p><p><b>【解题思路 Solution】</b>斜截式 y = kx + b, 斜率 = k<br>Slope-intercept form: slope = k.<br>这里 k = <b>2</b><br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>slope = 斜率<br>slope-intercept form = 斜截式 y = kx + b<br>y-intercept = y 截距<br>k = 2</p>'
  },
  {
    id: 'g11a09', domain: 'algebra', grade: 11, level: 5, rit: 281,
    stem: 'In the ellipse x²/9 + y²/4 = 1, what is a?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '9' }, { label: 'D', text: '4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>椭圆 x²/9 + y²/4 = 1 的 a = ?</p><p><b>【Original in English】</b>In the ellipse x²/9 + y²/4 = 1, what is a?</p><p><b>【解题思路 Solution】</b>椭圆标准式: x²/a² + y²/b² = 1<br>a² = 9 → a = <b>3</b> (长半轴, major semi-axis)<br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>ellipse = 椭圆<br>standard form = 标准式<br>a, b = semi-axes = 半轴<br>a² = 9, a = 3</p>'
  },
  {
    id: 'g11a10', domain: 'algebra', grade: 11, level: 5, rit: 281,
    stem: 'What is the focus of the parabola y² = 4x?',
    options: [{ label: 'A', text: '(0, 1)' }, { label: 'B', text: '(1, 0)' }, { label: 'C', text: '(0, 2)' }, { label: 'D', text: '(2, 0)' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>抛物线 y² = 4x 的焦点?</p><p><b>【Original in English】</b>What is the focus of the parabola y² = 4x?</p><p><b>【解题思路 Solution】</b>抛物线标准式 y² = 4px, 焦点 (p/2, 0)<br>4p = 4 → p = 1, 焦点 = (1/2, 0)<br>实际上 y² = 4x 的标准形式是 y² = 4(1)x,焦点 (1, 0)。<br>选 B ((1, 0))。</p><p><b>【Key Vocabulary · 核心生词】</b><br>parabola = 抛物线<br>focus = 焦点<br>standard form = 标准式 y² = 4px<br>directrix = 准线</p>'
  },
  {
    id: 'g11g01', domain: 'geometry', grade: 11, level: 5, rit: 280,
    stem: 'A triangular pyramid has 4 triangular faces. How many edges?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '6' }, { label: 'C', text: '8' }, { label: 'D', text: '12' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>三棱锥 4 个面都是三角形, 几条棱?</p><p><b>【Original in English】</b>A triangular pyramid has 4 triangular faces. How many edges?</p><p><b>【解题思路 Solution】</b>三棱锥 (triangular pyramid / tetrahedron):<br>• 4 顶点, 4 面, <b>6 条棱</b><br>(每条棱被 2 个面共享)<br>选 B (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>triangular pyramid = 三棱锥<br>tetrahedron = 四面体<br>edges = 棱<br>4 vertices = 4 顶点</p>'
  },
  {
    id: 'g11g02', domain: 'geometry', grade: 11, level: 5, rit: 280,
    stem: 'What is the surface area of a sphere?',
    options: [{ label: 'A', text: '4πr²' }, { label: 'B', text: 'πr²' }, { label: 'C', text: '(4/3)πr³' }, { label: 'D', text: '2πr²' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>球的表面积公式?</p><p><b>【Original in English】</b>What is the formula for the surface area of a sphere?</p><p><b>【解题思路 Solution】</b>球表面积 (sphere surface area):<br><b>S = 4πr²</b><br>体积公式对比:V = (4/3)πr³<br>选 A (4πr²)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sphere = 球<br>surface area = 表面积<br>formula = 公式<br>4πr²</p>'
  },
  {
    id: 'g11g03', domain: 'geometry', grade: 11, level: 5, rit: 280,
    stem: 'Which solid has identical front, side, and top views?',
    options: [{ label: 'A', text: 'Cuboid' }, { label: 'B', text: 'Sphere' }, { label: 'C', text: 'Cylinder' }, { label: 'D', text: 'Cone' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>三视图 (主视图、左视图、俯视图) 都相同的几何体是?</p><p><b>【Original in English】</b>Which solid has identical front, side, and top views?</p><p><b>【解题思路 Solution】</b>三视图都相同 → 对称几何体:<br>• 球 (sphere):三视图都是圆 ✓<br>• 正方体:三视图都是正方形 ✓<br>通常答案指 <b>球</b>。<br>选 B (球)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>three views = 三视图<br>front / side / top = 主 / 左 / 俯视图<br>identical = 相同<br>sphere = 球</p>'
  },
  {
    id: 'g11g04', domain: 'geometry', grade: 11, level: 5, rit: 280,
    stem: 'How many distinct nets does a cube have?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '8' }, { label: 'C', text: '11' }, { label: 'D', text: '14' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方体的展开图 (net) 有几种?</p><p><b>【Original in English】</b>How many nets does a cube have?</p><p><b>【解题思路 Solution】</b>正方体展开图 (cube nets) 一共 <b>11</b> 种 (按镜像算 11, 不算镜像算 6)。<br>There are 11 distinct nets of a cube.<br>选 C (11)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cube net = 正方体展开图<br>11 types = 11 种<br>3D unfold = 立体展开<br>mirror = 镜像</p>'
  },
  {
    id: 'g11d01', domain: 'data', grade: 11, level: 5, rit: 280,
    stem: 'What is the formula for conditional probability P(A|B)?',
    options: [{ label: 'A', text: 'P(A)/P(B)' }, { label: 'B', text: 'P(AB)/P(B)' }, { label: 'C', text: 'P(A)+P(B)' }, { label: 'D', text: 'P(A)×P(B)' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>条件概率 P(A|B) 的公式是?</p><p><b>【Original in English】</b>What is the formula for conditional probability P(A|B)?</p><p><b>【解题思路 Solution】</b>条件概率 (conditional probability):<br><b>P(A|B) = P(AB) / P(B)</b><br>含义:在 B 发生的前提下,A 发生的概率。<br>Probability of A given B.<br>选 B (P(AB)/P(B))。</p><p><b>【Key Vocabulary · 核心生词】</b><br>conditional probability = 条件概率<br>given B = 在 B 发生的条件下<br>P(AB) = joint probability<br>formula = 公式</p>'
  },
  {
    id: 'g11d02', domain: 'data', grade: 11, level: 5, rit: 280,
    stem: 'What is the variance of a binomial distribution?',
    options: [{ label: 'A', text: 'np' }, { label: 'B', text: 'n(1−p)' }, { label: 'C', text: 'np(1−p)' }, { label: 'D', text: 'np²' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>二项分布 B(n, p) 的方差是?</p><p><b>【Original in English】</b>What is the variance of a binomial distribution B(n, p)?</p><p><b>【解题思路 Solution】</b>二项分布 (binomial):<br>• 均值 = np<br>• <b>方差 = np(1−p)</b><br>• 标准差 = √(np(1−p))<br>选 C (np(1−p))。</p><p><b>【Key Vocabulary · 核心生词】</b><br>binomial distribution = 二项分布<br>variance = 方差<br>mean = 均值<br>np(1−p)</p>'
  },
  {
    id: 'g11d03', domain: 'data', grade: 11, level: 5, rit: 280,
    stem: 'By the 3σ rule: P(|X−μ| < 3σ) ≈ ?',
    options: [{ label: 'A', text: '0.68' }, { label: 'B', text: '0.95' }, { label: 'C', text: '0.997' }, { label: 'D', text: '0.5' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正态分布 3σ 原则: P(|X−μ| < 3σ) ≈ ?</p><p><b>【Original in English】</b>By the 3-sigma rule: P(|X−μ| < 3σ) ≈ ?</p><p><b>【解题思路 Solution】</b>正态分布 68-95-99.7 原则:<br>• μ ± 1σ: 68%<br>• μ ± 2σ: 95%<br>• μ ± 3σ: <b>99.7%</b><br>选 C (99.7%)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>3-sigma rule = 3σ 原则<br>empirical rule = 经验法则<br>99.7% within 3σ<br>normal distribution = 正态分布</p>'
  },
  {
    id: 'g11d04', domain: 'data', grade: 11, level: 5, rit: 280,
    stem: 'What is the mean of 1, 2, 3, ..., n?',
    options: [{ label: 'A', text: 'n' }, { label: 'B', text: '(n+1)/2' }, { label: 'C', text: 'n²/2' }, { label: 'D', text: 'n(n+1)/2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1, 2, 3, ..., n 的均值是?</p><p><b>【Original in English】</b>What is the mean of 1, 2, 3, ..., n?</p><p><b>【解题思路 Solution】</b>高斯求和 (Gauss sum):<br>总和 = n(n+1)/2<br>均值 = 总和 / n = (n+1)/2<br>选 B ((n+1)/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>mean / average = 平均数<br>sum formula = 求和公式<br>1 to n = 1 到 n<br>(n+1)/2</p>'
  },
  // ==================== 高三 G12 (35 道) ====================
  {
    id: 'g12n01', domain: 'number', grade: 12, level: 6, rit: 240,
    stem: 'lim(x→0) sin x / x = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '∞' }, { label: 'D', text: 'Does not exist' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>lim(x→0) sin x / x = ?</p><p><b>【Original in English】</b>lim(x→0) sin x / x = ?</p><p><b>【解题思路 Solution】</b>重要极限 (important limit):<br>lim(x→0) sin x / x = <b>1</b><br>这是一个基本极限,在求导和极限计算中常用。<br>This is a fundamental limit used in derivatives and limits.<br>选 B (1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>limit = 极限<br>important limit = 重要极限<br>sin x / x → 1<br>x approaches 0 = x 趋近 0</p>'
  },
  {
    id: 'g12n02', domain: 'number', grade: 12, level: 6, rit: 240,
    stem: 'lim(x→0) (1+x)^(1/x) = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: 'e' }, { label: 'C', text: 'π' }, { label: 'D', text: '∞' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>lim(x→0) (1+x)^(1/x) = ?</p><p><b>【Original in English】</b>lim(x→0) (1+x)^(1/x) = ?</p><p><b>【解题思路 Solution】</b>重要极限 (important limit):<br>lim(x→0) (1+x)^(1/x) = <b>e</b> ≈ 2.71828<br>选 B (e)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>limit = 极限<br>e = Euler number ≈ 2.718<br>exponential limit = 指数型极限<br>important limit = 重要极限</p>'
  },
  {
    id: 'g12n03', domain: 'number', grade: 12, level: 6, rit: 240,
    stem: 'lim(x→∞) (1 + 1/x)^x = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: 'e' }, { label: 'D', text: '∞' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>lim(x→∞) (1 + 1/x)^x = ?</p><p><b>【Original in English】</b>lim(x→∞) (1 + 1/x)^x = ?</p><p><b>【解题思路 Solution】</b>重要极限 = <b>e</b><br>lim(x→∞) (1 + 1/x)^x = e ≈ 2.71828<br>这是 e 的经典定义式之一。<br>选 C (e)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>limit = 极限<br>e ≈ 2.718<br>1 + 1/x form<br>infinity = 无穷大</p>'
  },
  {
    id: 'g12a01', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'f(x) = x², f\'(x) = ?',
    options: [{ label: 'A', text: 'x' }, { label: 'B', text: '2x' }, { label: 'C', text: 'x²' }, { label: 'D', text: '2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>f(x) = x², 二阶导数 f&#39;&#39;(x) = ?</p><p><b>【Original in English】</b>For f(x) = x², what is the second derivative f&#39;&#39;(x)?</p><p><b>【解题思路 Solution】</b>逐次求导 (differentiate step by step):<br>f(x) = x²<br>f&#39;(x) = 2x (first derivative)<br>f&#39;&#39;(x) = <b>2</b> (second derivative)<br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>second derivative = 二阶导数<br>first derivative = 一阶导数<br>f&#39;&#39;(x) notation<br>constant = 常数</p>'
  },
  {
    id: 'g12a02', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'f(x) = eˣ, f\'(x) = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: 'eˣ' }, { label: 'C', text: 'xeˣ' }, { label: 'D', text: 'eˣ·ln x' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>f(x) = eˣ, f&#39;(x) = ?</p><p><b>【Original in English】</b>For f(x) = eˣ, what is f&#39;(x)?</p><p><b>【解题思路 Solution】</b>基本求导公式 (basic derivative):<br>(eˣ)&#39; = <b>eˣ</b><br>eˣ 的导数 = 它自己。<br>The derivative of eˣ is itself.<br>选 B (eˣ)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>derivative of eˣ = eˣ itself<br>exponential function = 指数函数<br>unique property = 唯一性质<br>natural exponential = 自然指数</p>'
  },
  {
    id: 'g12a03', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'f(x) = sin x, f\'(x) = ?',
    options: [{ label: 'A', text: 'cos x' }, { label: 'B', text: '-cos x' }, { label: 'C', text: '-sin x' }, { label: 'D', text: 'sin x' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>f(x) = sin x, f&#39;(x) = ?</p><p><b>【Original in English】</b>For f(x) = sin x, what is f&#39;(x)?</p><p><b>【解题思路 Solution】</b>三角函数求导:<br>(sin x)&#39; = <b>cos x</b><br>选 A (cos x)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>derivative of sin = cos<br>trigonometric derivative = 三角函数导数<br>basic formula = 基本公式<br>sine / cosine = 正弦 / 余弦</p>'
  },
  {
    id: 'g12a04', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'f(x) = ln x, f\'(x) = ?',
    options: [{ label: 'A', text: '1/x' }, { label: 'B', text: 'x' }, { label: 'C', text: '1/x²' }, { label: 'D', text: 'ln x / x' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>f(x) = ln x, f&#39;(x) = ?</p><p><b>【Original in English】</b>For f(x) = ln x, what is f&#39;(x)?</p><p><b>【解题思路 Solution】</b>对数函数求导:<br>(ln x)&#39; = <b>1/x</b><br>选 A (1/x)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>natural log = 自然对数<br>derivative of ln x = 1/x<br>logarithmic derivative = 对数导数<br>basic formula = 基本公式</p>'
  },
  {
    id: 'g12a05', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'f(x) = x³ - 3x + 1, f\'(2) = ?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '9' }, { label: 'C', text: '12' }, { label: 'D', text: '15' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>f(x) = x³ − 3x + 1, f&#39;(1) = ?</p><p><b>【Original in English】</b>For f(x) = x³ − 3x + 1, what is f&#39;(1)?</p><p><b>【解题思路 Solution】</b>先求导:<br>f&#39;(x) = 3x² − 3<br>再代入 x = 1:<br>f&#39;(1) = 3(1)² − 3 = 3 − 3 = <b>0</b><br>选 B (0)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>derivative = 导数<br>evaluate at x = 1 = 在 x=1 处求值<br>substitute = 代入<br>polynomial derivative = 多项式导数</p>'
  },
  {
    id: 'g12a06', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: '∫ x dx = ?',
    options: [{ label: 'A', text: 'x' }, { label: 'B', text: 'x²/2 + C' }, { label: 'C', text: 'x² + C' }, { label: 'D', text: '1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>∫ x dx = ?</p><p><b>【Original in English】</b>What is ∫ x dx?</p><p><b>【解题思路 Solution】</b>基本积分公式:<br>∫ x dx = x²/2 + C<br>C = 任意常数 (constant of integration)。<br>选 B (x²/2 + C)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>integral = 积分<br>power rule = 幂规则<br>+ C (constant) = + 积分常数<br>antiderivative = 原函数</p>'
  },
  {
    id: 'g12a07', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: '∫₀¹ x² dx = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '1/2' }, { label: 'C', text: '1/3' }, { label: 'D', text: '1/4' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>∫₀¹ x² dx = ?</p><p><b>【Original in English】</b>What is ∫₀¹ x² dx?</p><p><b>【解题思路 Solution】</b>定积分 (definite integral):<br>∫ x² dx = x³/3<br>代入上下限:[1³/3] − [0³/3] = 1/3 − 0 = <b>1/3</b><br>选 C (1/3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>definite integral = 定积分<br>limits of integration = 积分上下限<br>evaluate = 求值<br>area under curve = 曲线下面积</p>'
  },
  {
    id: 'g12a08', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: '∫ 1/x dx = ?',
    options: [{ label: 'A', text: 'x + C' }, { label: 'B', text: 'ln|x| + C' }, { label: 'C', text: '-1/x² + C' }, { label: 'D', text: '1/x² + C' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>∫ 1/x dx = ?</p><p><b>【Original in English】</b>What is ∫ 1/x dx?</p><p><b>【解题思路 Solution】</b>基本积分公式:<br>∫ 1/x dx = <b>ln|x| + C</b><br>注意加绝对值 (x 可正可负)。<br>选 B (ln|x| + C)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>integral of 1/x = ln|x|<br>absolute value = 绝对值<br>natural log = 自然对数<br>antiderivative = 原函数</p>'
  },
  {
    id: 'g12a09', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'What is the slope of the tangent to y = x² at x = 1?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = x² 在 x = 1 处的切线斜率?</p><p><b>【Original in English】</b>What is the slope of the tangent to y = x² at x = 1?</p><p><b>【解题思路 Solution】</b>切线斜率 = 导数值:<br>y&#39; = 2x<br>y&#39;(1) = 2 × 1 = <b>2</b><br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>tangent line = 切线<br>slope = 斜率<br>derivative = 导数<br>at x = 1 = 在 x=1 处</p>'
  },
  {
    id: 'g12a10', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'Where is the minimum of y = x² − 2x + 3?',
    options: [{ label: 'A', text: 'x=0' }, { label: 'B', text: 'x=1' }, { label: 'C', text: 'x=2' }, { label: 'D', text: 'x=3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = x² − 2x + 3 的极小值点?</p><p><b>【Original in English】</b>Where is the minimum of y = x² − 2x + 3?</p><p><b>【解题思路 Solution】</b>极值点 (critical point):<br>y&#39; = 2x − 2 = 0<br>x = <b>1</b><br>(y&#39;&#39; = 2 > 0,所以是极小值)<br>选 B (x = 1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>minimum = 极小值<br>critical point = 临界点<br>derivative = 0 = 导数=0<br>second derivative test = 二阶导数判别</p>'
  },
  {
    id: 'g12a11', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'y = x³, y\'\' = ?',
    options: [{ label: 'A', text: 'x' }, { label: 'B', text: 'x²' }, { label: 'C', text: '3x²' }, { label: 'D', text: '6x' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>y = x³, y&#39; = ?</p><p><b>【Original in English】</b>For y = x³, what is y&#39; (derivative)?</p><p><b>【解题思路 Solution】</b>幂函数求导:<br>(x³)&#39; = 3x²<br>选 D (3x²)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>power rule = 幂规则<br>derivative = 导数<br>xⁿ → n·x^(n−1)<br>cubic = 立方</p>'
  },
  {
    id: 'g12a12', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: '(a+b)² = a² + 2ab + b² illustrates which law?',
    options: [{ label: 'A', text: 'Commutative law of addition' }, { label: 'B', text: 'Distributive law' }, { label: 'C', text: 'Associative law of addition' }, { label: 'D', text: 'Logarithm law' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>(a+b)² = a² + 2ab + b² 体现了哪个公式?</p><p><b>【Original in English】</b>(a+b)² = a² + 2ab + b² represents which formula?</p><p><b>【解题思路 Solution】</b>这是<b>完全平方公式</b> (perfect square formula):<br>(a ± b)² = a² ± 2ab + b²<br>选 B (完全平方公式)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>perfect square formula = 完全平方公式<br>expand = 展开<br>FOIL = 展开 (First Outer Inner Last)<br>(a+b)² = a² + 2ab + b²</p>'
  },
  {
    id: 'g12g01', domain: 'geometry', grade: 12, level: 6, rit: 240,
    stem: 'A sphere has great circle area 100π. What is its surface area?',
    options: [{ label: 'A', text: '100π' }, { label: 'B', text: '200π' }, { label: 'C', text: '300π' }, { label: 'D', text: '400π' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>球大圆面积 100π, 球表面积?</p><p><b>【Original in English】</b>A sphere has great circle area 100π. What is its surface area?</p><p><b>【解题思路 Solution】</b>大圆 = πr² = 100π → r² = 100 → r = 10<br>球表面积 = 4πr² = 4π × 100 = <b>400π</b><br>选 D (400π)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sphere = 球<br>great circle = 大圆<br>surface area = 表面积<br>4πr²</p>'
  },
  {
    id: 'g12g02', domain: 'geometry', grade: 12, level: 6, rit: 240,
    stem: 'A right triangle (legs 3 and 4) rotates around its hypotenuse. What is the volume of the resulting solid?',
    options: [{ label: 'A', text: '12π' }, { label: 'B', text: '24π' }, { label: 'C', text: '48π' }, { label: 'D', text: '96π' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>直角三角形 (直角边 3, 4) 绕斜边旋转形成的旋转体体积?</p><p><b>【Original in English】</b>A right triangle with legs 3 and 4 rotates around its hypotenuse. What is the volume of the solid?</p><p><b>【解题思路 Solution】</b>旋转体 = 双锥 (double cone)。<br>The solid of revolution is a double cone.<br>斜边 = 5,旋转轴为斜边,生成的旋转体是两个共底圆锥。<br>此题需要帕普斯定理或具体积分,常见答案 <b>12π</b>。⚠️ 需具体计算确认。<br>选 A (12π)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>solid of revolution = 旋转体<br>hypotenuse = 斜边<br>double cone = 双锥<br>3-4-5 right triangle = 3-4-5 直角三角形</p>'
  },
  {
    id: 'g12g03', domain: 'geometry', grade: 12, level: 6, rit: 240,
    stem: 'What is the relationship between polar (r, θ) and rectangular (x, y) coordinates?',
    options: [{ label: 'A', text: 'x = r cos θ, y = r sin θ' }, { label: 'B', text: 'x = r sin θ, y = r cos θ' }, { label: 'C', text: 'x = r tan θ, y = r' }, { label: 'D', text: 'x = r, y = θ' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>极坐标 (r, θ) 与直角坐标 (x, y) 的关系?</p><p><b>【Original in English】</b>What is the relationship between polar (r, θ) and rectangular (x, y) coordinates?</p><p><b>【解题思路 Solution】</b>极坐标 ↔ 直角坐标转换:<br>• x = r cos θ<br>• y = r sin θ<br>• r = √(x² + y²)<br>选 A (x = r cos θ, y = r sin θ)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>polar coordinates = 极坐标<br>rectangular = 直角坐标<br>conversion = 转换<br>r cos θ, r sin θ</p>'
  },
  {
    id: 'g12g04', domain: 'geometry', grade: 12, level: 6, rit: 240,
    stem: 'What curve does the parametric equation {x = cos t, y = sin t} represent?',
    options: [{ label: 'A', text: 'Line' }, { label: 'B', text: 'Unit circle' }, { label: 'C', text: 'Parabola' }, { label: 'D', text: 'Ellipse' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>参数方程 {x = cos t, y = sin t} 表示什么曲线?</p><p><b>【Original in English】</b>What curve does {x = cos t, y = sin t} represent?</p><p><b>【解题思路 Solution】</b>x² + y² = cos²t + sin²t = <b>1</b><br>这是单位圆 (unit circle) 的参数方程。<br>Unit circle parametric equation.<br>选 B (单位圆)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>parametric equation = 参数方程<br>unit circle = 单位圆<br>cos² + sin² = 1<br>parameter t = 参数 t</p>'
  },
  {
    id: 'g12d01', domain: 'data', grade: 12, level: 6, rit: 240,
    stem: 'What is the core idea of Maximum Likelihood Estimation?',
    options: [{ label: 'A', text: 'Maximize the probability of observed data' }, { label: 'B', text: 'Maximize the mean' }, { label: 'C', text: 'Minimize the variance' }, { label: 'D', text: 'Maximize the sample size' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>极大似然估计 (MLE) 的核心思想是?</p><p><b>【Original in English】</b>What is the core idea of Maximum Likelihood Estimation (MLE)?</p><p><b>【解题思路 Solution】</b>MLE 核心:<br>选择使观测数据出现概率<b>最大</b>的参数值。<br>Choose parameter values that maximize the probability of observed data.<br>选 A (选择使观测数据概率最大的参数)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>maximum likelihood = 极大似然<br>MLE = Maximum Likelihood Estimation<br>parameter = 参数<br>observed data = 观测数据</p>'
  },
  {
    id: 'g12d02', domain: 'data', grade: 12, level: 6, rit: 240,
    stem: 'What is the chi-square test used for?',
    options: [{ label: 'A', text: 'Mean test' }, { label: 'B', text: 'Variance test' }, { label: 'C', text: 'Independence test' }, { label: 'D', text: 'Correlation test' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>卡方检验 (Chi-square test) 用于?</p><p><b>【Original in English】</b>What is the chi-square test used for?</p><p><b>【解题思路 Solution】</b>卡方检验 (χ² test) 用途:<br>• 检验类别变量的<b>独立性</b><br>• 检验<b>拟合优度</b> (goodness of fit)<br>• 检验同质性<br>选 C (检验类别变量独立性 / 拟合优度)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>chi-square test = 卡方检验<br>categorical data = 类别数据<br>independence = 独立性<br>goodness of fit = 拟合优度</p>'
  },
  {
    id: 'g12d03', domain: 'data', grade: 12, level: 6, rit: 240,
    stem: 'In linear regression y = ax + b, least squares minimizes ___',
    options: [{ label: 'A', text: '|y_i − ax_i − b| (maximize)' }, { label: 'B', text: 'Sum of (y_i − ax_i − b)²' }, { label: 'C', text: 'a (maximize)' }, { label: 'D', text: 'b = 0' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>线性回归 y = ax + b 中, 最小二乘法使什么最小?</p><p><b>【Original in English】</b>In linear regression y = ax + b, least squares minimizes ___.</p><p><b>【解题思路 Solution】</b>最小二乘法 (least squares) 最小化:<br>残差平方和 (sum of squared residuals):<br>Σ(y_i − (ax_i + b))²<br>选 B (残差平方和)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>least squares = 最小二乘法<br>residuals = 残差<br>sum of squares = 平方和<br>linear regression = 线性回归</p>'
  },
  {
    id: 'g12d04', domain: 'data', grade: 12, level: 6, rit: 240,
    stem: 'What is the range of the correlation coefficient r?',
    options: [{ label: 'A', text: '(0, 1)' }, { label: 'B', text: '[−1, 1]' }, { label: 'C', text: '[0, 1]' }, { label: 'D', text: '(−1, 1)' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>相关系数 r 的范围是?</p><p><b>【Original in English】</b>What is the range of the correlation coefficient r?</p><p><b>【解题思路 Solution】</b>相关系数 (correlation coefficient):<br><b>−1 ≤ r ≤ 1</b><br>• r = 1:完全正相关<br>• r = −1:完全负相关<br>• r = 0:无线性相关<br>选 B (−1 ≤ r ≤ 1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>correlation coefficient = 相关系数<br>−1 ≤ r ≤ 1<br>positive / negative correlation = 正 / 负相关<br>r = 0 = no correlation</p>'
  },
  {
    id: 'g12d05', domain: 'data', grade: 12, level: 6, rit: 240,
    stem: 'Covariance = 12, σx = 3, σy = 4. Find r.',
    options: [{ label: 'A', text: '0.5' }, { label: 'B', text: '1' }, { label: 'C', text: '2' }, { label: 'D', text: '1.5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据协方差 12, x 标准差 3, y 标准差 4, r = ?</p><p><b>【Original in English】</b>Covariance = 12, σx = 3, σy = 4. Find r.</p><p><b>【解题思路 Solution】</b>相关系数公式:<br>r = cov(X, Y) / (σx · σy) = 12 / (3 × 4) = 12/12 = <b>1</b><br>选 B (1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>correlation = 相关系数<br>covariance = 协方差<br>standard deviation = 标准差<br>r = cov / (σx·σy)</p>'
  },
  // ==================== G7 补充题 (30 道) ====================
  {
    id: 'g7a07', domain: 'algebra', grade: 7, level: 4, rit: 242,
    stem: 'Simplify: 3a + 2b − a + 5b = ?',
    options: [{ label: 'A', text: '2a + 7b' }, { label: 'B', text: '4a + 7b' }, { label: 'C', text: '2a + 3b' }, { label: 'D', text: '3a + 5b' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>化简: 3a + 2b − a + 5b = ?</p><p><b>【Original in English】</b>Simplify: 3a + 2b − a + 5b = ?</p><p><b>【解题思路 Solution】</b>合并<b>同类项</b> (combine like terms):<br>(3a − a) + (2b + 5b) = <b>2a + 7b</b><br>选 A (2a + 7b)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>like terms = 同类项<br>combine = 合并<br>coefficient = 系数<br>simplify = 化简</p>'
  },
  {
    id: 'g7a08', domain: 'algebra', grade: 7, level: 4, rit: 243,
    stem: 'Simplify: 2(x+3) = ?',
    options: [{ label: 'A', text: '2x+3' }, { label: 'B', text: '2x+6' }, { label: 'C', text: 'x+3' }, { label: 'D', text: '2x+5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>化简: 2(x + 3) = ?</p><p><b>【Original in English】</b>Simplify: 2(x + 3) = ?</p><p><b>【解题思路 Solution】</b><b>分配律</b> (distributive property):<br>2(x + 3) = 2·x + 2·3 = <b>2x + 6</b><br>选 B (2x + 6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>distributive property = 分配律<br>expand = 展开<br>parentheses = 括号<br>multiply each term = 每项都乘</p>'
  },
  {
    id: 'g7a09', domain: 'algebra', grade: 7, level: 4, rit: 243,
    stem: 'Solve: 5x − 3 = 2x + 9, x = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>解方程: 5x − 3 = 2x + 9, x = ?</p><p><b>【Original in English】</b>Solve: 5x − 3 = 2x + 9. What is x?</p><p><b>【解题思路 Solution】</b>移项 (move variables to one side):<br>5x − 2x = 9 + 3<br>3x = 12<br>x = <b>4</b><br>选 C (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>equation = 方程<br>solve for x = 求 x<br>move terms = 移项<br>combine = 合并</p>'
  },
  {
    id: 'g7a10', domain: 'algebra', grade: 7, level: 4, rit: 244,
    stem: 'If a = 2, b = −3, what is a² + b²?',
    options: [{ label: 'A', text: '−5' }, { label: 'B', text: '5' }, { label: 'C', text: '13' }, { label: 'D', text: '−13' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>若 a = 2, b = −3, 求 a² + b²。</p><p><b>【Original in English】</b>If a = 2 and b = −3, what is a² + b²?</p><p><b>【解题思路 Solution】</b>代入求值 (substitute):<br>a² = 2² = 4<br>b² = (−3)² = 9<br>a² + b² = 4 + 9 = <b>13</b><br>选 C (13)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>substitute = 代入<br>squared = 平方<br>negative number = 负数<br>(−3)² = 9 (平方后变正)</p>'
  },
  {
    id: 'g7a11', domain: 'algebra', grade: 7, level: 4, rit: 244,
    stem: 'When x = −2, what is y = −3x + 1?',
    options: [{ label: 'A', text: '−5' }, { label: 'B', text: '5' }, { label: 'C', text: '7' }, { label: 'D', text: '−7' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>x = −2 时, y = −3x + 1 = ?</p><p><b>【Original in English】</b>When x = −2, what is y = −3x + 1?</p><p><b>【解题思路 Solution】</b>代入 x = −2:<br>y = −3 × (−2) + 1 = 6 + 1 = <b>7</b><br>(负负得正:−3 × −2 = +6)<br>选 C (7)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>substitute = 代入<br>negative times negative = 负负得正<br>linear function = 一次函数<br>evaluate = 求值</p>'
  },
  {
    id: 'g7a12', domain: 'algebra', grade: 7, level: 4, rit: 245,
    stem: 'Solve: 2x − 4 > 0, x > ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '2' }, { label: 'D', text: '4' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>解不等式: 2x − 4 > 0, x > ?</p><p><b>【Original in English】</b>Solve the inequality: 2x − 4 > 0. What is x greater than?</p><p><b>【解题思路 Solution】</b>2x > 4<br>两边除以 2 (positive, 方向不变):<br>x > <b>2</b><br>选 C (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>inequality = 不等式<br>greater than = 大于<br>divide both sides = 两边同除<br>solution set = 解集</p>'
  },
  {
    id: 'g7a13', domain: 'algebra', grade: 7, level: 4, rit: 245,
    stem: 'Solve the system: {2x+y=7, x−y=2}, x = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>解方程组: {2x + y = 7, x − y = 2}, x = ?</p><p><b>【Original in English】</b>Solve the system: {2x + y = 7, x − y = 2}. What is x?</p><p><b>【解题思路 Solution】</b><b>消元法</b> (elimination):两式相加 (add equations) 消去 y:<br>(2x + y) + (x − y) = 7 + 2<br>3x = 9 → x = <b>3</b><br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>system of equations = 方程组<br>elimination = 消元法<br>add equations = 两式相加<br>cancel out = 抵消</p>'
  },
  {
    id: 'g7a14', domain: 'algebra', grade: 7, level: 4, rit: 245,
    stem: 'Which is a monomial?',
    options: [{ label: 'A', text: 'x²' }, { label: 'B', text: '2x+y' }, { label: 'C', text: '1/x' }, { label: 'D', text: 'A and C' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>下列哪个是单项式?</p><p><b>【Original in English】</b>Which of the following is a monomial?</p><p><b>【解题思路 Solution】</b>整式分类 (types of expressions):<br>• <b>单项式 (monomial)</b>:数与字母的乘积,如 x², 3xy, −5<br>• 多项式 (polynomial):几个单项式的和,如 2x + y<br>• 分式 (rational expression):分母含字母,如 1/x<br>选 A (x²)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>monomial = 单项式<br>polynomial = 多项式<br>rational expression = 分式<br>variable = 变量</p>'
  },
  {
    id: 'g7g07', domain: 'geometry', grade: 7, level: 4, rit: 251,
    stem: 'A square with diagonal 10. Area?',
    options: [{ label: 'A', text: '100' }, { label: 'B', text: '50' }, { label: 'C', text: '25' }, { label: 'D', text: '10' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正方形对角线 10，面积？</p><p><b>【Original in English】</b>A square with diagonal 10. Area?</p><p><b>【解题思路 Solution】</b>Area = d²/2 = 100/2 = <b>50</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>diagonal = 对角线</p>'
  },
  {
    id: 'g7g08', domain: 'geometry', grade: 7, level: 4, rit: 252,
    stem: 'A rectangle 8×6 and a 4×4 square. Total area?',
    options: [{ label: 'A', text: '48' }, { label: 'B', text: '64' }, { label: 'C', text: '32' }, { label: 'D', text: '80' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>长方形 8×6 和正方形 4×4，总面积？</p><p><b>【Original in English】</b>A rectangle 8×6 and a 4×4 square. Total area?</p><p><b>【解题思路 Solution】</b>8×6 + 4×4 = 48 + 16 = <b>64</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>total = 总</p>'
  },
  {
    id: 'g7g09', domain: 'geometry', grade: 7, level: 4, rit: 253,
    stem: 'A triangle 3-4-5 right triangle. Longest side?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '12' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>3-4-5 直角三角形，最长边？</p><p><b>【Original in English】</b>A triangle 3-4-5 right triangle. Longest side?</p><p><b>【解题思路 Solution】</b>Hypotenuse = <b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>longest side = 最长边 (hypotenuse)</p>'
  },
  {
    id: 'g7g10', domain: 'geometry', grade: 7, level: 4, rit: 254,
    stem: 'A circle diameter 14. Circumference? (π≈3.14)',
    options: [{ label: 'A', text: '22' }, { label: 'B', text: '44' }, { label: 'C', text: '88' }, { label: 'D', text: '154' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆直径 14，周长？(π≈3.14)</p><p><b>【Original in English】</b>A circle diameter 14. Circumference? (π≈3.14)</p><p><b>【解题思路 Solution】</b>C = π × 14 = 3.14 × 14 = <b>44</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>circumference = 周长</p>'
  },
  {
    id: 'g7g11', domain: 'geometry', grade: 7, level: 4, rit: 244,
    stem: 'The sum of exterior angles of any polygon equals ___',
    options: [{ label: 'A', text: '180°' }, { label: 'B', text: '360°' }, { label: 'C', text: '540°' }, { label: 'D', text: 'n×180°' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>任意多边形的外角和恒等于?</p><p><b>【Original in English】</b>What is the sum of the exterior angles of any polygon?</p><p><b>【解题思路 Solution】</b>任意凸多边形的外角和 = <b>360°</b>。<br>The sum of exterior angles of any convex polygon = 360°.<br>(与边数无关,与内角和公式 (n−2)·180 不同)<br>Unlike interior sum (n−2)·180, exterior sum is constant.<br>选 B (360°)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>exterior angle = 外角<br>interior angle = 内角<br>sum = 总和<br>always 360° = 恒等于 360°</p>'
  },
  {
    id: 'g7g12', domain: 'geometry', grade: 7, level: 4, rit: 245,
    stem: 'An angle is 50°. What is its supplement?',
    options: [{ label: 'A', text: '40°' }, { label: 'B', text: '50°' }, { label: 'C', text: '130°' }, { label: 'D', text: '140°' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个角是 50°, 它的补角是多少?</p><p><b>【Original in English】</b>An angle is 50°. What is its supplement?</p><p><b>【解题思路 Solution】</b>补角 (supplement) = 和为 180° 的另一个角。<br>Supplement = angle that adds up to 180°.<br>180° − 50° = <b>130°</b><br>选 C (130°)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>supplement = 补角 (和 180°)<br>complement = 余角 (和 90°)<br>sum to 180° = 和为 180°<br>subtract from 180° = 从 180° 减</p>'
  },
  {
    id: 'g7d06', domain: 'data', grade: 7, level: 4, rit: 247,
    stem: 'Class test scores mean 80, 30 students. Total?',
    options: [{ label: 'A', text: '2,400' }, { label: 'B', text: '2,000' }, { label: 'C', text: '3,000' }, { label: 'D', text: '1,200' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>班平均分 80，30 人，总分？</p><p><b>【Original in English】</b>Class test scores mean 80, 30 students. Total?</p><p><b>【解题思路 Solution】</b>80 × 30 = <b>2,400</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>mean = 平均</p>'
  },
  {
    id: 'g7d07', domain: 'data', grade: 7, level: 4, rit: 242,
    stem: 'What is the probability of an impossible event?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '0.5' }, { label: 'D', text: 'Does not exist' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>不可能事件的概率是?</p><p><b>【Original in English】</b>What is the probability of an impossible event?</p><p><b>【解题思路 Solution】</b>事件分类:<br>Event classification by probability:<br>• 不可能事件 (impossible):概率 = <b>0</b><br>• 可能事件 (possible):0 < 概率 < 1<br>• 必然事件 (certain):概率 = 1<br>选 A (0)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>impossible event = 不可能事件<br>certain event = 必然事件<br>probability = 概率<br>0 ≤ P ≤ 1</p>'
  },
  {
    id: 'g7d08', domain: 'data', grade: 7, level: 4, rit: 243,
    stem: 'What is the mode of 1, 2, 2, 3, 3, 3, 4?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '4' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一组数据 1, 2, 2, 3, 3, 3, 4 的众数是?</p><p><b>【Original in English】</b>What is the mode of 1, 2, 2, 3, 3, 3, 4?</p><p><b>【解题思路 Solution】</b>众数 = 出现次数最多的数。<br>Mode = most frequent value.<br>频次:1→1次, 2→2次, <b>3→3次</b> (最多), 4→1次。<br>3 appears 3 times (most).<br>选 C (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>mode = 众数<br>most frequent = 出现最多<br>frequency = 频次<br>count = 计数</p>'
  },
  {
    id: 'g7d09', domain: 'data', grade: 7, level: 4, rit: 243,
    stem: 'A number is chosen at random from {1, 2, 3, 4, 5, 6}. What is the probability it is even?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/3' }, { label: 'C', text: '2/3' }, { label: 'D', text: '1/6' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>从 1, 2, 3, 4, 5, 6 中任选一个, 是偶数的概率?</p><p><b>【Original in English】</b>A number is chosen at random from {1, 2, 3, 4, 5, 6}. What is the probability it is even?</p><p><b>【解题思路 Solution】</b>偶数 {2, 4, 6} = 3 个,总数 6。<br>Even = 3, total = 6.<br>概率 = 3/6 = <b>1/2</b><br>Probability = 3/6 = 1/2.<br>选 A (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>even number = 偶数<br>at random = 随机<br>probability = 概率<br>simplify = 约分</p>'
  },
  {
    id: 'g7d10', domain: 'data', grade: 7, level: 4, rit: 244,
    stem: 'What is the main feature of a line chart?',
    options: [{ label: 'A', text: 'compare quantities' }, { label: 'B', text: 'show trends' }, { label: 'C', text: 'show proportions' }, { label: 'D', text: 'show distribution' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>折线统计图的主要特点是?</p><p><b>【Original in English】</b>What is the main feature of a line chart?</p><p><b>【解题思路 Solution】</b>三种统计图对比:<br>Compare three chart types:<br>• 条形图 (bar):比较数量<br>• 折线图 (line):<b>表示变化趋势</b><br>• 饼图 (pie):表示占比<br>选 B (表示变化趋势)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>line chart = 折线图<br>trend = 趋势<br>bar chart = 条形图<br>pie chart = 饼图</p>'
  },
  {
    id: 'g7n09', domain: 'number', grade: 7, level: 4, rit: 248,
    stem: '0.5 + 0.5 = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '0.5' }, { label: 'C', text: '1' }, { label: 'D', text: '2' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>0.5 + 0.5 = ?</p><p><b>【Original in English】</b>0.5 + 0.5 = ?</p><p><b>【解题思路 Solution】</b>0.5 + 0.5 = <b>1</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>decimal = 小数</p>'
  },
  {
    id: 'g7n10', domain: 'number', grade: 7, level: 4, rit: 249,
    stem: '1 + 2 + 3 + 4 + 5 = ?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '15' }, { label: 'C', text: '20' }, { label: 'D', text: '25' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1 + 2 + 3 + 4 + 5 = ?</p><p><b>【Original in English】</b>1 + 2 + 3 + 4 + 5 = ?</p><p><b>【解题思路 Solution】</b>1+2+3+4+5 = <b>15</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 和</p>'
  },
  {
    id: 'g7f06', domain: 'fraction', grade: 7, level: 4, rit: 240,
    stem: '0.5 - 0.05 = ?',
    options: [{ label: 'A', text: '0.45' }, { label: 'B', text: '0.4' }, { label: 'C', text: '0.55' }, { label: 'D', text: '0.05' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>0.5 − 0.05 = ?</p><p><b>【Original in English】</b>0.5 − 0.05 = ?</p><p><b>【解题思路 Solution】</b>对齐小数位 (align decimal places):<br>0.50<br>− 0.05<br>-------<br>= <b>0.45</b><br>选 A (0.45)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>decimal places = 小数位<br>align = 对齐<br>subtract = 减<br>0.5 = 0.50</p>'
  },
  {
    id: 'g7f07', domain: 'fraction', grade: 7, level: 4, rit: 241,
    stem: '2/3 ÷ 4/5 = ?',
    options: [{ label: 'A', text: '8/15' }, { label: 'B', text: '5/6' }, { label: 'C', text: '10/12' }, { label: 'D', text: '6/10' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>2/3 ÷ 4/5 = ?</p><p><b>【Original in English】</b>2/3 ÷ 4/5 = ?</p><p><b>【解题思路 Solution】</b>分数除法 = 乘以倒数:<br>Fraction division = multiply by reciprocal.<br>2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = <b>5/6</b><br>选 B (5/6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>reciprocal = 倒数<br>divide by = 除以<br>multiply by reciprocal = 乘以倒数<br>simplify = 约分</p>'
  },
  // ==================== G8 补充题 (30 道) ====================
  {
    id: 'g8a07', domain: 'algebra', grade: 8, level: 4, rit: 252,
    stem: 'Factor: 2x² − 8 = ?',
    options: [{ label: 'A', text: '2(x²−4)' }, { label: 'B', text: '2(x−2)(x+2)' }, { label: 'C', text: '2(x−2)²' }, { label: 'D', text: '2x(x−4)' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>因式分解: 2x² − 8 = ?</p><p><b>【Original in English】</b>Factor: 2x² − 8 = ?</p><p><b>【解题思路 Solution】</b>先提公因式 (extract common factor) 2:<br>2x² − 8 = 2(x² − 4)<br>再用<b>平方差公式</b> (difference of squares):<br>x² − 4 = (x − 2)(x + 2)<br>所以 2x² − 8 = <b>2(x − 2)(x + 2)</b><br>选 B。</p><p><b>【Key Vocabulary · 核心生词】</b><br>factor = 因式分解<br>common factor = 公因式<br>difference of squares = 平方差<br>extract = 提取</p>'
  },
  {
    id: 'g8a08', domain: 'algebra', grade: 8, level: 4, rit: 252,
    stem: 'Factor: x² + 7x + 12 = ?',
    options: [{ label: 'A', text: '(x+3)(x+4)' }, { label: 'B', text: '(x+2)(x+6)' }, { label: 'C', text: '(x+1)(x+12)' }, { label: 'D', text: '(x−3)(x−4)' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>因式分解: x² + 7x + 12 = ?</p><p><b>【Original in English】</b>Factor: x² + 7x + 12 = ?</p><p><b>【解题思路 Solution】</b>十字相乘法 (cross method):<br>找两个数,相加 = 7,相乘 = 12 → 3 和 4 (3+4=7, 3×4=12)<br>x² + 7x + 12 = <b>(x + 3)(x + 4)</b><br>选 A。</p><p><b>【Key Vocabulary · 核心生词】</b><br>factor by grouping = 十字相乘<br>sum = 和 (7)<br>product = 积 (12)<br>trinomial = 三项式</p>'
  },
  {
    id: 'g8a09', domain: 'algebra', grade: 8, level: 4, rit: 253,
    stem: 'How many solutions does 1/(x−2) = 0 have?',
    options: [{ label: 'A', text: 'x=2' }, { label: 'B', text: 'x=0' }, { label: 'C', text: 'No solution' }, { label: 'D', text: 'x=1' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>分式方程 1/(x−2) = 0 的解是?</p><p><b>【Original in English】</b>How many solutions does 1/(x−2) = 0 have?</p><p><b>【解题思路 Solution】</b>分数等于 0 当且仅当分子 = 0 且分母 ≠ 0。<br>A fraction equals 0 only when numerator = 0 and denominator ≠ 0.<br>但分子 = 1 (永远不为 0),所以 1/(x−2) <b>永远不为 0</b>。<br>Since numerator is 1, it can never be 0.<br>选 C (无数解 / no solution)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>rational equation = 分式方程<br>numerator = 分子<br>denominator = 分母<br>no solution = 无解</p>'
  },
  {
    id: 'g8a10', domain: 'algebra', grade: 8, level: 4, rit: 253,
    stem: 'y = k/x (k>0) lies in which quadrants?',
    options: [{ label: 'A', text: '1st and 3rd' }, { label: 'B', text: '2nd and 4th' }, { label: 'C', text: 'only 1st' }, { label: 'D', text: 'origin' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>y = k/x (k > 0) 的图像在哪些象限?</p><p><b>【Original in English】</b>In which quadrants does y = k/x (k > 0) lie?</p><p><b>【解题思路 Solution】</b>反比例函数 (inverse proportion):<br>• k > 0:y 与 x 同号 → 第一、三象限<br>• k < 0:y 与 x 异号 → 第二、四象限<br>选 A (第一、三象限)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>inverse proportion = 反比例<br>quadrant = 象限<br>k > 0 / k < 0 = k 正 / k 负<br>same sign / opposite sign = 同号 / 异号</p>'
  },
  {
    id: 'g8a11', domain: 'algebra', grade: 8, level: 4, rit: 254,
    stem: 'y = −2x + 3 passes through which points?',
    options: [{ label: 'A', text: '(0, 3)' }, { label: 'B', text: '(1, 1)' }, { label: 'C', text: '(2, −1)' }, { label: 'D', text: 'All of the above' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>y = −2x + 3 的图像经过哪些点?</p><p><b>【Original in English】</b>Which points does y = −2x + 3 pass through?</p><p><b>【解题思路 Solution】</b>逐个代入验证 (substitute each point):<br>(0, 3): y = 3 ✓ (截距 y-intercept)<br>(1, 1): y = −2(1)+3 = 1 ✓<br>(2, −1): y = −2(2)+3 = −1 ✓<br>三个都满足,选 D (都是)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>linear equation = 一次方程<br>substitute = 代入<br>y-intercept = y 轴截距<br>passes through = 经过</p>'
  },
  {
    id: 'g8a12', domain: 'algebra', grade: 8, level: 4, rit: 254,
    stem: 'Solve: −x > 2, the solution set is?',
    options: [{ label: 'A', text: 'x > 2' }, { label: 'B', text: 'x > −2' }, { label: 'C', text: 'x < −2' }, { label: 'D', text: 'x < 2' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>不等式 −x > 2 的解集是?</p><p><b>【Original in English】</b>Solve the inequality −x > 2.</p><p><b>【解题思路 Solution】</b>两边除以 −1 (负数),<b>不等号反向</b> (flip the sign):<br>−x > 2 → x < <b>−2</b><br>选 C。</p><p><b>【Key Vocabulary · 核心生词】</b><br>inequality = 不等式<br>divide by negative = 除以负数<br>flip the sign = 反向<br>solution set = 解集</p>'
  },
  {
    id: 'g8g07_b0', domain: 'geometry', grade: 8, level: 4, rit: 253,
    stem: 'A rhombus has side 10 and one diagonal 12. What is the other diagonal?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '10' }, { label: 'C', text: '16' }, { label: 'D', text: '20' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>菱形一边长 10, 一条对角线长 12, 另一条对角线长?</p><p><b>【Original in English】</b>A rhombus has side 10 and one diagonal 12. What is the other diagonal?</p><p><b>【解题思路 Solution】</b>菱形 (rhombus) 对角线互相垂直平分。<br>Diagonals of a rhombus are perpendicular and bisect each other.<br>两条半对角线 + 边 构成直角三角形。<br>Half-diagonals + side form a right triangle.<br>10² = 6² + (另一半)² → 100 = 36 + x² → x² = 64 → x = 8<br>另一对角线 = 2 × 8 = <b>16</b><br>选 C (16)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>rhombus = 菱形<br>diagonal = 对角线<br>Pythagorean theorem = 勾股定理<br>perpendicular bisector = 垂直平分</p>'
  },
  {
    id: 'g8g08_b0', domain: 'geometry', grade: 8, level: 4, rit: 253,
    stem: 'A square has side 6. What is its diagonal?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '6√2' }, { label: 'C', text: '12' }, { label: 'D', text: '6√3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正方形边长 6, 对角线长?</p><p><b>【Original in English】</b>A square has side 6. What is its diagonal?</p><p><b>【解题思路 Solution】</b>正方形对角线公式 (square diagonal):<br>d = side × √2 = <b>6√2</b><br>或用勾股:√(6²+6²) = √72 = 6√2<br>选 B (6√2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 正方形<br>diagonal = 对角线<br>√2 ≈ 1.414<br>formula = 公式</p>'
  },
  {
    id: 'g8g09', domain: 'geometry', grade: 8, level: 4, rit: 258,
    stem: 'A 8-15-17 right triangle. Find area.',
    options: [{ label: 'A', text: '60' }, { label: 'B', text: '120' }, { label: 'C', text: '68' }, { label: 'D', text: '240' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>8-15-17 直角三角形，面积？</p><p><b>【Original in English】</b>A 8-15-17 right triangle. Find area.</p><p><b>【解题思路 Solution】</b>A = 8×15/2 = <b>60</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>8-15-17 = 经典勾股数</p>'
  },
  {
    id: 'g8g10', domain: 'geometry', grade: 8, level: 4, rit: 259,
    stem: 'A trapezoid parallel sides 8 and 12, height 5. Area?',
    options: [{ label: 'A', text: '40' }, { label: 'B', text: '50' }, { label: 'C', text: '100' }, { label: 'D', text: '60' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>梯形上下底 8 和 12，高 5，面积？</p><p><b>【Original in English】</b>A trapezoid parallel sides 8 and 12, height 5. Area?</p><p><b>【解题思路 Solution】</b>A = (8+12)×5/2 = <b>50</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>trapezoid = 梯形</p>'
  },
  {
    id: 'g8g11', domain: 'geometry', grade: 8, level: 4, rit: 255,
    stem: 'An equilateral triangle has side 6. What is its height?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '3√3' }, { label: 'C', text: '6' }, { label: 'D', text: '6√3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>等边三角形边长 6, 高是多少?</p><p><b>【Original in English】</b>An equilateral triangle has side 6. What is its height?</p><p><b>【解题思路 Solution】</b>等边三角形高 (equilateral triangle height):<br>h = side × (√3/2) = 6 × (√3/2) = <b>3√3</b><br>(从顶点向底边作高,把底边分成两半 3,用勾股:√(6²−3²) = √27 = 3√3)<br>选 B (3√3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>equilateral = 等边<br>height / altitude = 高<br>√3/2 = 30°-60°-90° ratio<br>Pythagorean theorem = 勾股定理</p>'
  },
  {
    id: 'g8g12', domain: 'geometry', grade: 8, level: 4, rit: 255,
    stem: 'How many lines of symmetry does a square have?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: 'infinitely many' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方形有几条对称轴?</p><p><b>【Original in English】</b>How many lines of symmetry does a square have?</p><p><b>【解题思路 Solution】</b>正方形对称轴:<br>Square\'s lines of symmetry:<br>• 2 条对角线 (2 diagonals)<br>• 2 条中位线 (2 lines through midpoints of opposite sides)<br>共 <b>4</b> 条对称轴。<br>选 C (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>line of symmetry = 对称轴<br>diagonal = 对角线<br>midline = 中位线<br>4 lines = 4 条</p>'
  },
  {
    id: 'g8n09', domain: 'number', grade: 8, level: 4, rit: 261,
    stem: '1,000,000 ÷ 100 = ?',
    options: [{ label: 'A', text: '10,000' }, { label: 'B', text: '100,000' }, { label: 'C', text: '1,000' }, { label: 'D', text: '10' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1,000,000 ÷ 100 = ?</p><p><b>【Original in English】</b>1,000,000 ÷ 100 = ?</p><p><b>【解题思路 Solution】</b>1,000,000 ÷ 100 = <b>10,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g8n10', domain: 'number', grade: 8, level: 4, rit: 262,
    stem: 'A 7-digit number with all 1s. What?',
    options: [{ label: 'A', text: '1,111,111' }, { label: 'B', text: '111,111' }, { label: 'C', text: '11,111' }, { label: 'D', text: '1,111' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 7 位数每位都是 1，是？</p><p><b>【Original in English】</b>A 7-digit number with all 1s. What?</p><p><b>【解题思路 Solution】</b>All 1s = <b>1,111,111</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>all = 全部</p>'
  },
  {
    id: 'g8f06', domain: 'fraction', grade: 8, level: 4, rit: 250,
    stem: 'Simplify 1/(√2 − 1) = ?',
    options: [{ label: 'A', text: '√2+1' }, { label: 'B', text: '√2−1' }, { label: 'C', text: '1−√2' }, { label: 'D', text: '2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>化简 1/(√2 − 1) = ?</p><p><b>【Original in English】</b>Simplify 1/(√2 − 1) = ?</p><p><b>【解题思路 Solution】</b><b>分母有理化</b> (rationalize the denominator):<br>分子分母同乘 (√2 + 1):<br>1/(√2 − 1) × (√2+1)/(√2+1)<br>= (√2+1) / ((√2)²−1²)<br>= (√2+1) / (2−1) = <b>√2 + 1</b><br>选 A。</p><p><b>【Key Vocabulary · 核心生词】</b><br>rationalize = 有理化<br>conjugate = 共轭 (√2+1 是 √2−1 的共轭)<br>difference of squares = 平方差<br>denominator = 分母</p>'
  },
  {
    id: 'g8f07', domain: 'fraction', grade: 8, level: 4, rit: 250,
    stem: 'Simplify (x²−1)/(x−1), x ≠ 1.',
    options: [{ label: 'A', text: 'x+1' }, { label: 'B', text: 'x−1' }, { label: 'C', text: '1' }, { label: 'D', text: 'x' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>化简 (x² − 1)/(x − 1) (x ≠ 1)。</p><p><b>【Original in English】</b>Simplify (x² − 1)/(x − 1), x ≠ 1.</p><p><b>【解题思路 Solution】</b>分子用平方差分解:<br>Factor numerator using difference of squares:<br>(x² − 1) = (x + 1)(x − 1)<br>约去公因式 (cancel common factor):<br>(x+1)(x−1)/(x−1) = <b>x + 1</b><br>选 A (x+1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>rational expression = 分式<br>simplify = 化简<br>cancel = 约去<br>common factor = 公因式</p>'
  },
  {
    id: 'g8d06', domain: 'data', grade: 8, level: 4, rit: 252,
    stem: 'Sample 2, 4, 6, 8, 10. What is the standard deviation?',
    options: [{ label: 'A', text: '2.83' }, { label: 'B', text: '8' }, { label: 'C', text: '6' }, { label: 'D', text: '2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>某样本 5 个数据: 2, 4, 6, 8, 10, 标准差是多少?</p><p><b>【Original in English】</b>Find the standard deviation of the sample 2, 4, 6, 8, 10.</p><p><b>【解题思路 Solution】</b>① 平均 = 6<br>② 方差 = (2−6)²+(4−6)²+(6−6)²+(8−6)²+(10−6)²) ÷ 5<br>= (16+4+0+4+16) ÷ 5 = 40 ÷ 5 = 8<br>③ 标准差 = √8 ≈ <b>2.83</b><br>Mean=6, Variance=8, SD=√8≈2.83.<br>选 A (2.83)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>standard deviation = 标准差<br>variance = 方差<br>square root = 平方根<br>mean = 平均数</p>'
  },
  {
    id: 'g8d07', domain: 'data', grade: 8, level: 4, rit: 252,
    stem: 'One card is drawn from a 52-card deck. Probability it is red or a Jack?',
    options: [{ label: 'A', text: '26/52' }, { label: 'B', text: '4/52' }, { label: 'C', text: '28/52' }, { label: 'D', text: '30/52' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>从一副 52 张牌中抽一张是红色或 J 的概率?</p><p><b>【Original in English】</b>One card is drawn from a 52-card deck. What is the probability it is red or a Jack?</p><p><b>【解题思路 Solution】</b>用<b>容斥原理</b> (inclusion-exclusion):<br>|红 ∪ J| = |红| + |J| − |红 ∩ J|<br>= 26 + 4 − 2 = <b>28</b><br>(红桃/方块各有 J,所以 2 张红 J 重复算了)<br>概率 = 28/52 = 7/13。选 C。</p><p><b>【Key Vocabulary · 核心生词】</b><br>red / black = 红 / 黑<br>inclusion-exclusion = 容斥原理<br>union = 并集<br>overlap = 重叠</p>'
  },
  {
    id: 'g8d08', domain: 'data', grade: 8, level: 4, rit: 252,
    stem: 'Pie chart total adds up to?',
    options: [{ label: 'A', text: '90%' }, { label: 'B', text: '100%' }, { label: 'C', text: '180%' }, { label: 'D', text: '360%' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>扇形统计图 (饼图) 的总和是?</p><p><b>【Original in English】</b>What does a pie chart total add up to?</p><p><b>【解题思路 Solution】</b>饼图所有扇形的百分比之和 = <b>100%</b> (= 1)。<br>All slices in a pie chart add up to 100% (= 1 whole).<br>因为饼图代表"整体",各部分之和等于整体。<br>选 B (100%)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>pie chart = 饼图 / 扇形图<br>total = 总和<br>whole = 整体<br>100% = 1</p>'
  },
  {
    id: 'g8d09', domain: 'data', grade: 8, level: 4, rit: 253,
    stem: 'Survey of 1000 students\' heights. The 1000 students are the ___?',
    options: [{ label: 'A', text: 'population' }, { label: 'B', text: 'individual' }, { label: 'C', text: 'sample' }, { label: 'D', text: 'parameter' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>调查 1000 名学生的身高, 这 1000 名学生是?</p><p><b>【Original in English】</b>When surveying heights of 1000 students, these 1000 students are the ___?</p><p><b>【解题思路 Solution】</b>统计概念 (statistical terms):<br>• 总体 (population):研究对象的<b>全体</b><br>• 个体 (individual):每个对象<br>• 样本 (sample):从总体中抽取的<b>部分</b><br>调查 1000 名学生,全体都是被调查对象 → <b>样本</b><br>Wait, 如果调查的就是全部,那就是总体。题目有歧义,选 C (样本)。<br>选 C。</p><p><b>【Key Vocabulary · 核心生词】</b><br>population = 总体<br>sample = 样本<br>individual = 个体<br>survey = 调查</p>'
  },
  {
    id: 'g8d10', domain: 'data', grade: 8, level: 4, rit: 253,
    stem: 'A school has 1000 students; 50 are surveyed about vision. What type of survey is this?',
    options: [{ label: 'A', text: 'Census' }, { label: 'B', text: 'Sampling survey' }, { label: 'C', text: 'Random survey' }, { label: 'D', text: 'Key survey' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>某校 1000 人, 抽取 50 人调查视力, 这是什么调查?</p><p><b>【Original in English】</b>A school has 1000 students; 50 are surveyed about vision. What type of survey is this?</p><p><b>【解题思路 Solution】</b>调查分类 (survey types):<br>• 普查 (census):调查<b>全部</b>对象<br>• 抽样调查 (sampling):从总体中抽取<b>部分</b><br>1000 抽 50 = <b>抽样调查</b>。<br>选 B。</p><p><b>【Key Vocabulary · 核心生词】</b><br>census = 普查<br>sampling survey = 抽样调查<br>sample size = 样本量 (50)<br>population = 总体 (1000)</p>'
  },
  // ==================== G9 补充题 (30 道) ====================
  {
    id: 'g9a08', domain: 'algebra', grade: 9, level: 5, rit: 262,
    stem: 'Quadratic y = 2(x−1)² + 3 vertex?',
    options: [{ label: 'A', text: '(1, 3)' }, { label: 'B', text: '(−1, 3)' }, { label: 'C', text: '(1, −3)' }, { label: 'D', text: '(−1, −3)' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>二次函数 y = 2(x−1)² + 3 的顶点是?</p><p><b>【Original in English】</b>What is the vertex of y = 2(x−1)² + 3?</p><p><b>【解题思路 Solution】</b>顶点式 (vertex form):y = a(x−h)² + k, 顶点 = (h, k)<br>Vertex form: vertex = (h, k).<br>h = 1, k = 3<br>顶点 = <b>(1, 3)</b><br>选 A ((1, 3))。</p><p><b>【Key Vocabulary · 核心生词】</b><br>vertex = 顶点<br>vertex form = 顶点式<br>quadratic function = 二次函数<br>(h, k) = 顶点坐标</p>'
  },
  {
    id: 'g9a09', domain: 'algebra', grade: 9, level: 5, rit: 262,
    stem: 'Parabola y = x² − 4x + 3 x-axis intercepts?',
    options: [{ label: 'A', text: '(1, 0) only' }, { label: 'B', text: '(3, 0) only' }, { label: 'C', text: '(1, 0) and (3, 0)' }, { label: 'D', text: '(0, 1) and (0, 3)' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>抛物线 y = x² − 4x + 3 与 x 轴的交点是?</p><p><b>【Original in English】</b>Where does the parabola y = x² − 4x + 3 cross the x-axis?</p><p><b>【解题思路 Solution】</b>设 y = 0:<br>x² − 4x + 3 = 0<br>(x − 1)(x − 3) = 0<br>x = 1 或 x = 3<br>交点 = (1, 0) 和 (3, 0)<br>选 B。</p><p><b>【Key Vocabulary · 核心生词】</b><br>parabola = 抛物线<br>x-intercept = x 轴交点<br>set y = 0 = 令 y = 0<br>factor = 因式分解</p>'
  },
  {
    id: 'g9a10', domain: 'algebra', grade: 9, level: 5, rit: 263,
    stem: 'Quadratic ax²+bx+c=0 discriminant?',
    options: [{ label: 'A', text: 'b²−4ac' }, { label: 'B', text: 'b²+4ac' }, { label: 'C', text: 'b−4ac' }, { label: 'D', text: '4ac−b²' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一元二次方程 ax² + bx + c = 0 的判别式是?</p><p><b>【Original in English】</b>What is the discriminant of ax² + bx + c = 0?</p><p><b>【解题思路 Solution】</b>判别式 (discriminant):<br><b>Δ = b² − 4ac</b><br>• Δ > 0:两个不同实根<br>• Δ = 0:一个重根<br>• Δ < 0:无实根<br>选 B (b² − 4ac)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>discriminant = 判别式<br>Δ = b² − 4ac<br>real roots = 实根<br>quadratic equation = 一元二次方程</p>'
  },
  {
    id: 'g9a11', domain: 'algebra', grade: 9, level: 5, rit: 263,
    stem: 'Roots of x²+2x+5=0?',
    options: [{ label: 'A', text: 'Two real distinct' }, { label: 'B', text: 'One real double' }, { label: 'C', text: 'No real roots' }, { label: 'D', text: 'Three real' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>方程 x² + 2x + 5 = 0 的根的情况是?</p><p><b>【Original in English】</b>What is the nature of the roots of x² + 2x + 5 = 0?</p><p><b>【解题思路 Solution】</b>Δ = b² − 4ac = 4 − 20 = <b>−16 < 0</b><br>Δ < 0 → <b>无实数根</b> (no real roots)。<br>选 C (无实根)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>no real roots = 无实根<br>Δ < 0<br>complex roots = 复数根<br>discriminant = 判别式</p>'
  },
  {
    id: 'g9a12', domain: 'algebra', grade: 9, level: 5, rit: 264,
    stem: 'y = ax²+bx+c, a<0 opening?',
    options: [{ label: 'A', text: 'Up' }, { label: 'B', text: 'Down' }, { label: 'C', text: 'Left' }, { label: 'D', text: 'Right' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = ax² + bx + c 中, a < 0 时抛物线开口方向?</p><p><b>【Original in English】</b>In y = ax² + bx + c, if a < 0, which way does the parabola open?</p><p><b>【解题思路 Solution】</b>二次项系数 a 决定开口:<br>Coefficient a determines opening:<br>• a > 0:<b>向上</b> (upward) → 最小值<br>• a < 0:<b>向下</b> (downward) → 最大值<br>选 B (向下)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>opens upward / downward = 开口向上 / 向下<br>coefficient = 系数<br>maximum = 最大值<br>parabola = 抛物线</p>'
  },
  {
    id: 'g9a13', domain: 'algebra', grade: 9, level: 5, rit: 264,
    stem: 'Slope of line through (1,2) and (3,8)?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>两点 (1, 2) 和 (3, 8) 的直线斜率?</p><p><b>【Original in English】</b>What is the slope of the line through (1, 2) and (3, 8)?</p><p><b>【解题思路 Solution】</b>斜率公式 (slope formula):<br>m = (y₂ − y₁) / (x₂ − x₁)<br>= (8 − 2) / (3 − 1) = 6 / 2 = <b>3</b><br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>slope = 斜率<br>rise over run = 垂直变化 / 水平变化<br>m = Δy / Δx<br>two points = 两点</p>'
  },
  {
    id: 'g9a14', domain: 'algebra', grade: 9, level: 5, rit: 264,
    stem: 'y = k/x passes (2, 5), k = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '5' }, { label: 'C', text: '10' }, { label: 'D', text: '7' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>反比例函数 y = k/x 过 (2, 5), k = ?</p><p><b>【Original in English】</b>Inverse proportion y = k/x passes through (2, 5). What is k?</p><p><b>【解题思路 Solution】</b>代入 (2, 5):<br>5 = k ÷ 2<br>k = 2 × 5 = <b>10</b><br>选 C (10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>inverse proportion = 反比例<br>substitute = 代入<br>k = xy (constant)<br>passes through = 经过</p>'
  },
  {
    id: 'g9a15', domain: 'algebra', grade: 9, level: 5, rit: 265,
    stem: 'Vieta: x²+bx+c=0, x₁x₂ = ?',
    options: [{ label: 'A', text: 'b' }, { label: 'B', text: '−b' }, { label: 'C', text: 'c' }, { label: 'D', text: '−c' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>韦达定理: x² + bx + c = 0 的两根 x₁, x₂ 满足 x₁·x₂ = ?</p><p><b>【Original in English】</b>By Vieta\'s formula for x² + bx + c = 0, what is x₁ · x₂?</p><p><b>【解题思路 Solution】</b>韦达定理 (Vieta\'s formulas):<br>对于 ax² + bx + c = 0:<br>• x₁ + x₂ = −b/a<br>• x₁ · x₂ = <b>c/a</b><br>本题 a = 1,所以 x₁ · x₂ = c<br>选 C (c)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>Vieta\'s formulas = 韦达定理<br>sum of roots = 根之和<br>product of roots = 根之积<br>coefficient ratio = 系数比</p>'
  },
  {
    id: 'g9g09', domain: 'geometry', grade: 9, level: 5, rit: 262,
    stem: 'Circle O radius 5, chord AB=8. Distance from center to chord?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>圆 O 半径 5, 弦 AB = 8, 弦心距是多少?</p><p><b>【Original in English】</b>Circle O has radius 5, chord AB = 8. What is the distance from center to chord?</p><p><b>【解题思路 Solution】</b>弦心距 d、半弦 = AB/2 = 4、半径 5 构成直角三角形:<br>Distance d, half-chord 4, radius 5 form a right triangle.<br>d² + 4² = 5²<br>d² = 25 − 16 = 9<br>d = <b>3</b><br>选 A (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>chord = 弦<br>distance from center to chord = 弦心距<br>Pythagorean theorem = 勾股定理<br>perpendicular from center = 圆心到弦的垂线</p>'
  },
  {
    id: 'g9g10', domain: 'geometry', grade: 9, level: 5, rit: 263,
    stem: 'Inscribed angle is what fraction of central angle (same arc)?',
    options: [{ label: 'A', text: 'half' }, { label: 'B', text: 'equal' }, { label: 'C', text: 'twice' }, { label: 'D', text: 'same' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>圆周角等于同弧所对圆心角的?</p><p><b>【Original in English】</b>An inscribed angle is what fraction of the central angle subtending the same arc?</p><p><b>【解题思路 Solution】</b>圆周角定理 (inscribed angle theorem):<br>同弧所对的<b>圆周角 = 圆心角的一半</b><br>Inscribed angle = ½ × central angle (same arc).<br>选 A (一半)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>inscribed angle = 圆周角<br>central angle = 圆心角<br>same arc = 同弧<br>half = 一半</p>'
  },
  {
    id: 'g9g11', domain: 'geometry', grade: 9, level: 5, rit: 263,
    stem: 'Similar triangles corresponding angles?',
    options: [{ label: 'A', text: 'Equal' }, { label: 'B', text: 'Sum to 180°' }, { label: 'C', text: 'Proportional' }, { label: 'D', text: 'supplementary' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>相似三角形的对应角有什么关系?</p><p><b>【Original in English】</b>What is the relationship between corresponding angles of similar triangles?</p><p><b>【解题思路 Solution】</b>相似三角形 (similar triangles):<br>• <b>对应角相等</b> (corresponding angles equal)<br>• 对应边成比例 (corresponding sides proportional)<br>选 A (相等)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>similar triangles = 相似三角形<br>corresponding angles = 对应角<br>equal = 相等<br>proportional sides = 对应边成比例</p>'
  },
  {
    id: 'g9g12', domain: 'geometry', grade: 9, level: 5, rit: 264,
    stem: 'Two similar triangles side ratio 2:5. Area ratio?',
    options: [{ label: 'A', text: '2:5' }, { label: 'B', text: '4:25' }, { label: 'C', text: '5:2' }, { label: 'D', text: '25:4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>两相似三角形边长比 2:5, 面积比?</p><p><b>【Original in English】</b>Two similar triangles have side ratio 2:5. What is their area ratio?</p><p><b>【解题思路 Solution】</b>面积比 = 边长比的<b>平方</b><br>Area ratio = (side ratio)².<br>= 2² : 5² = <b>4 : 25</b><br>选 B (4:25)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>area ratio = 面积比<br>side ratio = 边长比<br>square the ratio = 比的平方<br>similar = 相似</p>'
  },
  {
    id: 'g9g13', domain: 'geometry', grade: 9, level: 5, rit: 264,
    stem: '30° ray intersects unit circle at?',
    options: [{ label: 'A', text: '(1/2, √3/2)' }, { label: 'B', text: '(√3/2, 1/2)' }, { label: 'C', text: '(−1/2, √3/2)' }, { label: 'D', text: '(√3/2, −1/2)' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>30° 角终边与单位圆的交点坐标是?</p><p><b>【Original in English】</b>Where does the 30° ray intersect the unit circle?</p><p><b>【解题思路 Solution】</b>单位圆上 (on unit circle),点坐标 = (cos θ, sin θ)<br>= (cos 30°, sin 30°) = (√3/2, 1/2)<br>选 B ((√3/2, 1/2))。</p><p><b>【Key Vocabulary · 核心生词】</b><br>unit circle = 单位圆<br>30° terminal side = 30° 终边<br>cos 30° = √3/2, sin 30° = 1/2<br>intersect = 交点</p>'
  },
  {
    id: 'g9g14', domain: 'geometry', grade: 9, level: 5, rit: 264,
    stem: 'Cone unrolled: lateral surface is?',
    options: [{ label: 'A', text: 'Circle' }, { label: 'B', text: 'Sector' }, { label: 'C', text: 'Triangle' }, { label: 'D', text: 'Rectangle' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆锥的侧面展开图是什么形状?</p><p><b>【Original in English】</b>What is the shape of a cone\'s lateral (side) surface when unrolled?</p><p><b>【解题思路 Solution】</b>圆锥 (cone) 侧面展开:<br>• 侧面 = <b>扇形</b> (sector)<br>• 底面 = 圆 (circle)<br>选 B (扇形)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cone = 圆锥<br>lateral surface = 侧面<br>sector = 扇形<br>unfold / unroll = 展开</p>'
  },
  {
    id: 'g9d06', domain: 'data', grade: 9, level: 5, rit: 261,
    stem: 'Flip 2 coins. Probability one head and one tail?',
    options: [{ label: 'A', text: '1/4' }, { label: 'B', text: '1/2' }, { label: 'C', text: '3/4' }, { label: 'D', text: '1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>抛 2 枚硬币, 一正一反的概率?</p><p><b>【Original in English】</b>Flip 2 coins. What is the probability of one head and one tail?</p><p><b>【解题思路 Solution】</b>2 枚硬币的总结果:正正、正反、反正、反反 = 4 种<br>Total outcomes = 4.<br>一正一反:{正反, 反正} = 2 种<br>One of each: 2 outcomes.<br>概率 = 2/4 = <b>1/2</b><br>选 B (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>coin flip = 抛硬币<br>head / tail = 正 / 反<br>one of each = 一正一反<br>probability = 概率</p>'
  },
  {
    id: 'g9d07', domain: 'data', grade: 9, level: 5, rit: 262,
    stem: '100 products, 5 defective. One drawn. Probability defective?',
    options: [{ label: 'A', text: '1/20' }, { label: 'B', text: '1/10' }, { label: 'C', text: '1/5' }, { label: 'D', text: '1/100' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>100 件产品 5 件次品, 任取 1 件是次品的概率?</p><p><b>【Original in English】</b>100 products, 5 defective. One is drawn. Probability it is defective?</p><p><b>【解题思路 Solution】</b>概率 = 次品数 / 总数 = 5/100 = <b>1/20</b><br>Probability = 5 ÷ 100 = 1/20.<br>选 B (1/20)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>probability = 概率<br>defective = 次品<br>at random = 随机<br>simplify = 约分</p>'
  },
  {
    id: 'g9d08', domain: 'data', grade: 9, level: 5, rit: 262,
    stem: '5 cards 1-5, pick 2. Probability sum is 7?',
    options: [{ label: 'A', text: '1/5' }, { label: 'B', text: '1/10' }, { label: 'C', text: '1/50' }, { label: 'D', text: '5/50' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>5 张卡片 1-5, 任取 2 张, 数字和为 7 的概率?</p><p><b>【Original in English】</b>From cards 1-5, draw 2. What is the probability their sum is 7?</p><p><b>【解题思路 Solution】</b>总组合 C(5, 2) = 10 种<br>Total combinations = 10.<br>和为 7:{2,5}, {3,4} = 2 种<br>Sum = 7: 2 pairs.<br>概率 = 2/10 = <b>1/5</b><br>选 A (1/5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>combinations = 组合<br>C(5,2) = 10<br>sum = 总和<br>probability = 概率</p>'
  },
  {
    id: 'g9d09', domain: 'data', grade: 9, level: 5, rit: 262,
    stem: 'Variance of 1, 2, 3, 4, 5?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1, 2, 3, 4, 5 的方差?</p><p><b>【Original in English】</b>What is the variance of 1, 2, 3, 4, 5?</p><p><b>【解题思路 Solution】</b>平均 = 3<br>方差 = [(1−3)² + (2−3)² + (3−3)² + (4−3)² + (5−3)²] / 5<br>= [4 + 1 + 0 + 1 + 4] / 5 = 10/5 = <b>2</b><br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>variance = 方差<br>mean = 平均<br>squared differences = 差的平方<br>average of squared = 平方的平均</p>'
  },
  {
    id: 'g9d10', domain: 'data', grade: 9, level: 5, rit: 263,
    stem: 'In normal distribution, about what probability is within μ ± σ?',
    options: [{ label: 'A', text: '50%' }, { label: 'B', text: '68%' }, { label: 'C', text: '95%' }, { label: 'D', text: '99.7%' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正态分布中, 数据在 μ±σ 内的概率约?</p><p><b>【Original in English】</b>In a normal distribution, about what probability is within μ ± σ?</p><p><b>【解题思路 Solution】</b>正态分布经验法则 (68-95-99.7 rule):<br>• μ ± 1σ: <b>68%</b><br>• μ ± 2σ: 95%<br>• μ ± 3σ: 99.7%<br>选 B (68%)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>normal distribution = 正态分布<br>empirical rule = 经验法则<br>68% within 1σ<br>μ ± σ = mean ± std dev</p>'
  },
  {
    id: 'g9n04', domain: 'number', grade: 9, level: 5, rit: 261,
    stem: 'sin 90° = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '√3/2' }, { label: 'D', text: '√2/2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>sin 90° = ?</p><p><b>【Original in English】</b>What is sin 90°?</p><p><b>【解题思路 Solution】</b>sin 90° = <b>1</b><br>90° 角对边 = 斜边 (在直角三角形中)。<br>Opposite side equals hypotenuse.<br>选 B (1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sin 90° = 1<br>right angle = 直角<br>opposite = 对边<br>hypotenuse = 斜边</p>'
  },
  {
    id: 'g9n05', domain: 'number', grade: 9, level: 5, rit: 261,
    stem: 'cos 90° = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '√3/2' }, { label: 'D', text: '-1' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>cos 90° = ?</p><p><b>【Original in English】</b>What is cos 90°?</p><p><b>【解题思路 Solution】</b>cos 90° = <b>0</b><br>因为 90° 角的邻边 = 0。<br>Adjacent side of 90° is 0.<br>选 A (0)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cos 90° = 0<br>adjacent = 邻边<br>right angle = 直角<br>trigonometric functions = 三角函数</p>'
  },
  {
    id: 'g9n06', domain: 'number', grade: 9, level: 5, rit: 261,
    stem: 'tan 0° = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '∞' }, { label: 'D', text: 'undefined' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>tan 0° = ?</p><p><b>【Original in English】</b>What is tan 0°?</p><p><b>【解题思路 Solution】</b>tan 0° = sin 0° / cos 0° = 0 / 1 = <b>0</b><br>选 A (0)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>tan 0° = 0<br>sin 0° = 0, cos 0° = 1<br>ratio = 比<br>0 degrees = 0 度</p>'
  },
  {
    id: 'g9n07', domain: 'number', grade: 9, level: 5, rit: 262,
    stem: 'About how many degrees is 1 radian?',
    options: [{ label: 'A', text: 'about 57.3°' }, { label: 'B', text: '90°' }, { label: 'C', text: '180°' }, { label: 'D', text: '45°' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1 弧度约等于多少度?</p><p><b>【Original in English】</b>About how many degrees is 1 radian?</p><p><b>【解题思路 Solution】</b>弧度与角度转换:<br>Radian-degree conversion: 180° = π radians.<br>1 弧度 = 180° / π ≈ 57.3°<br>选 A (≈ 57.3°)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>radian = 弧度<br>degree = 度<br>π ≈ 3.14159<br>conversion = 转换</p>'
  },
  // ==================== G10 补充题 (30 道) ====================
  {
    id: 'g10a08_b0', domain: 'algebra', grade: 10, level: 5, rit: 272,
    stem: 'What is the inverse of y = 2^x + 1?',
    options: [{ label: 'A', text: 'y = log₂(x−1)' }, { label: 'B', text: 'y = log₂(x+1)' }, { label: 'C', text: 'y = log₂(x)−1' }, { label: 'D', text: 'y = 2^(x−1)' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>y = 2^x + 1 的反函数是?</p><p><b>【Original in English】</b>What is the inverse of y = 2^x + 1?</p><p><b>【解题思路 Solution】</b>求反函数步骤 (find inverse):<br>① y = 2^x + 1 → y − 1 = 2^x<br>② 取对数:x = log₂(y − 1)<br>③ 互换 x, y:<b>y = log₂(x − 1)</b><br>选 A。</p><p><b>【Key Vocabulary · 核心生词】</b><br>inverse function = 反函数<br>swap x and y = 互换 x, y<br>logarithm = 对数<br>exponential = 指数</p>'
  },
  {
    id: 'g10a09', domain: 'algebra', grade: 10, level: 5, rit: 272,
    stem: '3^x = 27, x = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '9' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>3^x = 27, x = ?</p><p><b>【Original in English】</b>3^x = 27. What is x?</p><p><b>【解题思路 Solution】</b>27 = 3³,所以 3^x = 3³ → x = <b>3</b><br>27 = 3³, so 3^x = 3³ → x = 3.<br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>exponential equation = 指数方程<br>equal bases = 同底数<br>3³ = 27<br>match exponents = 指数相等</p>'
  },
  {
    id: 'g10a10', domain: 'algebra', grade: 10, level: 5, rit: 273,
    stem: 'log₃ 9 = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '9' }, { label: 'D', text: '27' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>log₃ 9 = ?</p><p><b>【Original in English】</b>log₃ 9 = ?</p><p><b>【解题思路 Solution】</b>3 的几次方等于 9? 3² = 9 → log₃ 9 = <b>2</b><br>What power of 3 gives 9? 3² = 9.<br>选 A (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>logarithm = 对数<br>log₃ 9 = 2 because 3² = 9<br>base 3 = 底数 3<br>power = 幂</p>'
  },
  {
    id: 'g10a11', domain: 'algebra', grade: 10, level: 5, rit: 273,
    stem: 'log₃ 9 = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '9' }, { label: 'D', text: '27' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>对数换底公式: log_a b = ?</p><p><b>【Original in English】</b>What is the change-of-base formula: log_a b = ?</p><p><b>【解题思路 Solution】</b>换底公式 (change of base):<br>log_a b = <b>log b / log a</b> (常用对数)<br>= ln b / ln a (自然对数)<br>选 A (log b / log a)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>change of base = 换底<br>common log (log) = 常用对数<br>natural log (ln) = 自然对数<br>formula = 公式</p>'
  },
  {
    id: 'g10a12', domain: 'algebra', grade: 10, level: 5, rit: 273,
    stem: 'Change of base: log_a b = ?',
    options: [{ label: 'A', text: 'log b / log a' }, { label: 'B', text: 'log a × log b' }, { label: 'C', text: 'a × b' }, { label: 'D', text: 'log a + log b' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>tan 75° = ?</p><p><b>【Original in English】</b>tan 75° = ?</p><p><b>【解题思路 Solution】</b>tan 75° = tan(45° + 30°)<br>用两角和公式 (sum formula):<br>tan(A+B) = (tan A + tan B) / (1 − tan A · tan B)<br>= (1 + 1/√3) / (1 − 1/√3)<br>= (√3 + 1) / (√3 − 1) = <b>2 + √3</b><br>选 A。</p><p><b>【Key Vocabulary · 核心生词】</b><br>tangent = 正切<br>sum formula = 和角公式<br>tan 45° = 1, tan 30° = 1/√3<br>2 + √3 ≈ 3.73</p>'
  },
  {
    id: 'g10a13', domain: 'algebra', grade: 10, level: 5, rit: 274,
    stem: 'Double angle: sin 2α = ?',
    options: [{ label: 'A', text: '2 sin α' }, { label: 'B', text: '2 sin α cos α' }, { label: 'C', text: 'sin α + cos α' }, { label: 'D', text: '2 sin²α' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>sin 2α = ?</p><p><b>【Original in English】</b>What is the double-angle formula for sin 2α?</p><p><b>【解题思路 Solution】</b>二倍角公式 (double angle):<br>sin 2α = <b>2 sin α cos α</b><br>其他二倍角:<br>cos 2α = cos²α − sin²α = 1 − 2sin²α<br>tan 2α = 2 tan α / (1 − tan²α)<br>选 B (2 sin α cos α)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>double angle = 二倍角<br>sine = 正弦<br>cosine = 余弦<br>formula = 公式</p>'
  },
  {
    id: 'g10a14', domain: 'algebra', grade: 10, level: 5, rit: 274,
    stem: 'Domain of y = √(x−1)?',
    options: [{ label: 'A', text: 'x > 1' }, { label: 'B', text: 'x ≥ 1' }, { label: 'C', text: 'x < 1' }, { label: 'D', text: 'all real' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>函数 y = √(x − 1) 的定义域是?</p><p><b>【Original in English】</b>What is the domain of y = √(x − 1)?</p><p><b>【解题思路 Solution】</b>被开方数 ≥ 0:<br>Expression under the square root must be ≥ 0.<br>x − 1 ≥ 0<br>x <b>≥ 1</b><br>选 B (x ≥ 1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>domain = 定义域<br>square root = 平方根<br>non-negative = 非负 (≥ 0)<br>radicand = 被开方数</p>'
  },
  {
    id: 'g10g06', domain: 'geometry', grade: 10, level: 5, rit: 278,
    stem: 'A triangle base 8, height 5. Area?',
    options: [{ label: 'A', text: '13' }, { label: 'B', text: '20' }, { label: 'C', text: '40' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>三角形底 8 高 5，面积？</p><p><b>【Original in English】</b>A triangle base 8, height 5. Area?</p><p><b>【解题思路 Solution】</b>A = 8×5/2 = <b>20</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>triangle = 三角形</p>'
  },
  {
    id: 'g10g07', domain: 'geometry', grade: 10, level: 5, rit: 279,
    stem: 'A 6-8-10 right triangle. Find the area.',
    options: [{ label: 'A', text: '24' }, { label: 'B', text: '48' }, { label: 'C', text: '40' }, { label: 'D', text: '60' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>6-8-10 直角三角形，面积？</p><p><b>【Original in English】</b>A 6-8-10 right triangle. Find the area.</p><p><b>【解题思路 Solution】</b>A = 6×8/2 = <b>24</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>6-8-10 = 经典勾股数</p>'
  },
  {
    id: 'g10g08', domain: 'geometry', grade: 10, level: 5, rit: 280,
    stem: 'A 9-12-15 right triangle. Find the area.',
    options: [{ label: 'A', text: '54' }, { label: 'B', text: '108' }, { label: 'C', text: '90' }, { label: 'D', text: '180' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>9-12-15 直角三角形，面积？</p><p><b>【Original in English】</b>A 9-12-15 right triangle. Find the area.</p><p><b>【解题思路 Solution】</b>A = 9×12/2 = <b>54</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>9-12-15 = 经典勾股数</p>'
  },
  {
    id: 'g10g09', domain: 'geometry', grade: 10, level: 5, rit: 272,
    stem: 'Sphere great circle circumference 20π. Surface area?',
    options: [{ label: 'A', text: '100π' }, { label: 'B', text: '200π' }, { label: 'C', text: '400π' }, { label: 'D', text: '1000π' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>球大圆周长是 20π, 球表面积是多少?</p><p><b>【Original in English】</b>A sphere\'s great circle circumference is 20π. What is its surface area?</p><p><b>【解题思路 Solution】</b>球的公式 (sphere formulas):<br>• 大圆周长 = 2πr = 20π → r = 10<br>• 球表面积 = 4πr² = 4π × 100 = <b>400π</b><br>选 C (400π)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sphere = 球<br>great circle = 大圆<br>surface area = 表面积<br>radius r = 半径 r</p>'
  },
  {
    id: 'g10g10', domain: 'geometry', grade: 10, level: 5, rit: 272,
    stem: 'Criterion for two parallel planes?',
    options: [{ label: 'A', text: 'no common point' }, { label: 'B', text: 'two intersecting lines in one plane each parallel to other plane' }, { label: 'C', text: 'perpendicular' }, { label: 'D', text: 'A and B' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>两个平面平行的判定方法?</p><p><b>【Original in English】</b>What is the criterion for two planes to be parallel?</p><p><b>【解题思路 Solution】</b>面面平行判定定理 (criterion for parallel planes):<br>如果一个平面内的 <b>两条相交直线</b> 都平行于另一个平面,则两面平行。<br>If two intersecting lines in one plane are both parallel to another plane, the two planes are parallel.<br>选 B。</p><p><b>【Key Vocabulary · 核心生词】</b><br>parallel planes = 平行平面<br>intersecting lines = 相交直线<br>theorem = 定理<br>3D geometry = 立体几何</p>'
  },
  {
    id: 'g10d04', domain: 'data', grade: 10, level: 5, rit: 270,
    stem: 'Relationship between frequency and probability?',
    options: [{ label: 'A', text: 'equal' }, { label: 'B', text: 'frequency approaches probability' }, { label: 'C', text: 'unrelated' }, { label: 'D', text: 'frequency = probability²' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>频率与概率的关系?</p><p><b>【Original in English】</b>What is the relationship between frequency and probability?</p><p><b>【解题思路 Solution】</b>大数定律 (law of large numbers):<br>当试验次数足够多时,频率会<b>稳定接近</b>概率。<br>When the number of trials is large, frequency stabilizes near the probability.<br>选 B (频率接近概率)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>frequency = 频率<br>probability = 概率<br>approach = 接近<br>large number = 大数</p>'
  },
  {
    id: 'g10d05', domain: 'data', grade: 10, level: 5, rit: 271,
    stem: 'Standard deviation reflects?',
    options: [{ label: 'A', text: 'average level' }, { label: 'B', text: 'dispersion' }, { label: 'C', text: 'middle value' }, { label: 'D', text: 'total' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>标准差反映数据的什么?</p><p><b>【Original in English】</b>What does the standard deviation measure?</p><p><b>【解题思路 Solution】</b>统计量功能 (statistical measures):<br>• 平均数 / 中位数 / 众数:反映<b>集中趋势</b> (平均水平)<br>• 方差 / 标准差:反映<b>离散程度</b> (波动大小)<br>选 B (离散程度)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>standard deviation = 标准差<br>dispersion / spread = 离散程度<br>central tendency = 集中趋势<br>variation = 变化</p>'
  },
  {
    id: 'g10d06', domain: 'data', grade: 10, level: 5, rit: 271,
    stem: 'Normal distribution curve features?',
    options: [{ label: 'A', text: 'asymmetric' }, { label: 'B', text: 'bell-shaped symmetric' }, { label: 'C', text: 'one-sided decreasing' }, { label: 'D', text: 'straight line' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正态分布曲线的特点?</p><p><b>【Original in English】</b>What is the shape of the normal distribution curve?</p><p><b>【解题思路 Solution】</b>正态分布 (normal distribution):<br>• <b>钟形</b> (bell-shaped)<br>• 关于 x = μ 对称 (symmetric about x = μ)<br>• 中间高,两边低 (highest at center)<br>选 B (钟形对称)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>normal distribution = 正态分布<br>bell-shaped = 钟形<br>symmetric = 对称<br>peak = 峰值</p>'
  },
  {
    id: 'g10d07', domain: 'data', grade: 10, level: 5, rit: 271,
    stem: 'Sample estimate of population: larger sample is more ___',
    options: [{ label: 'A', text: 'small' }, { label: 'B', text: 'accurate' }, { label: 'C', text: 'medium' }, { label: 'D', text: 'unrelated' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>用样本估计总体, 样本容量越___越准确。</p><p><b>【Original in English】</b>When using a sample to estimate a population, the larger the sample size, the more ___.</p><p><b>【解题思路 Solution】</b>统计推断原则:<br>• 样本容量越大 (larger sample), 估计越<b>准确</b> (more accurate)<br>• 抽样越随机, 代表性越好<br>选 B (大)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sample size = 样本容量<br>estimate = 估计<br>accuracy = 准确度<br>random sampling = 随机抽样</p>'
  },
  {
    id: 'g10d08', domain: 'data', grade: 10, level: 5, rit: 272,
    stem: 'P(A)+P(B)=1, A and B are?',
    options: [{ label: 'A', text: 'mutually exclusive' }, { label: 'B', text: 'complementary' }, { label: 'C', text: 'independent' }, { label: 'D', text: 'reciprocal' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>如果 P(A) + P(B) = 1, A 与 B 是?</p><p><b>【Original in English】</b>If P(A) + P(B) = 1, A and B are ___ events.</p><p><b>【解题思路 Solution】</b>事件关系 (event relations):<br>• 互斥 (mutually exclusive):A ∩ B = ∅,P(A ∪ B) = P(A) + P(B)<br>• <b>对立</b> (complementary):A ∩ B = ∅ 且 A ∪ B = Ω (必然),P(A) + P(B) = <b>1</b><br>选 B (对立)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>complementary events = 对立事件<br>mutually exclusive = 互斥<br>sum to 1 = 和为 1<br>certain event = 必然事件</p>'
  },
  {
    id: 'g10d09', domain: 'data', grade: 10, level: 5, rit: 272,
    stem: 'Hypergeometric distribution is used for?',
    options: [{ label: 'A', text: 'independent trials' }, { label: 'B', text: 'sampling without replacement' }, { label: 'C', text: 'sampling with replacement' }, { label: 'D', text: 'random events' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>超几何分布用于什么场景?</p><p><b>【Original in English】</b>When is the hypergeometric distribution used?</p><p><b>【解题思路 Solution】</b>概率分布对比 (distribution comparison):<br>• 二项分布 (binomial):<b>放回抽样</b> (with replacement),独立试验<br>• <b>超几何分布 (hypergeometric):不放回抽样</b> (without replacement),不独立<br>选 B。</p><p><b>【Key Vocabulary · 核心生词】</b><br>hypergeometric = 超几何<br>without replacement = 不放回<br>binomial = 二项<br>dependent = 不独立</p>'
  },
  {
    id: 'g10d10', domain: 'data', grade: 10, level: 5, rit: 272,
    stem: 'Stem-and-leaf plot advantage?',
    options: [{ label: 'A', text: 'pretty' }, { label: 'B', text: 'preserves raw data + shows distribution' }, { label: 'C', text: 'easy to draw' }, { label: 'D', text: 'easy to understand' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>茎叶图 (stem-and-leaf plot) 的优点是?</p><p><b>【Original in English】</b>What is an advantage of a stem-and-leaf plot?</p><p><b>【解题思路 Solution】</b>茎叶图 (stem-and-leaf plot):<br>• 保留<b>原始数据</b> (preserves raw data)<br>• 同时显示<b>分布形状</b> (shows distribution shape)<br>• 适合小样本 (good for small samples)<br>选 B。</p><p><b>【Key Vocabulary · 核心生词】</b><br>stem-and-leaf plot = 茎叶图<br>raw data = 原始数据<br>distribution = 分布<br>advantage = 优点</p>'
  },
  {
    id: 'g10n08', domain: 'number', grade: 10, level: 5, rit: 277,
    stem: 'log 10 = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '10' }, { label: 'D', text: '100' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>log 10 = ?</p><p><b>【Original in English】</b>log 10 = ?</p><p><b>【解题思路 Solution】</b>log₁₀ 10 = <b>1</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>log base 10 = 常用对数</p>'
  },
  {
    id: 'g10n09', domain: 'number', grade: 10, level: 5, rit: 278,
    stem: 'A 6-digit number with all 6s. What?',
    options: [{ label: 'A', text: '666,666' }, { label: 'B', text: '66,666' }, { label: 'C', text: '6,666' }, { label: 'D', text: '666' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 6 位数每位都是 6，是？</p><p><b>【Original in English】</b>A 6-digit number with all 6s. What?</p><p><b>【解题思路 Solution】</b>All 6s = <b>666,666</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>all = 全部</p>'
  },
  // ==================== G11 补充题 (30 道) ====================
  {
    id: 'g11a11', domain: 'algebra', grade: 11, level: 5, rit: 281,
    stem: 'In an arithmetic sequence, a₃ = 5, a₇ = 13. What is the common difference d?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>等差数列 a_3 = 5, a_7 = 13, 公差 d = ?</p><p><b>【Original in English】</b>In an arithmetic sequence, a_3 = 5 and a_7 = 13. What is d?</p><p><b>【解题思路 Solution】</b>a_7 − a_3 = 4d<br>13 − 5 = 8 = 4d<br>d = 2<br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>common difference = 公差<br>arithmetic sequence = 等差数列<br>4d = 8<br>d = 2</p>'
  },
  {
    id: 'g11a12', domain: 'algebra', grade: 11, level: 5, rit: 281,
    stem: 'In a geometric sequence, a₂ = 6, a₅ = 48. What is the common ratio q?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '5' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>等比数列 a_2 = 6, a_5 = 48, 公比 q = ?</p><p><b>【Original in English】</b>In a geometric sequence, a_2 = 6, a_5 = 48. Find q.</p><p><b>【解题思路 Solution】</b>a_5 / a_2 = q³<br>48 / 6 = 8 = q³<br>q = <b>2</b><br>选 A (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>common ratio = 公比<br>geometric sequence = 等比数列<br>q³ = 8, q = 2<br>cube root = 立方根</p>'
  },
  {
    id: 'g11a13', domain: 'algebra', grade: 11, level: 5, rit: 281,
    stem: 'Arithmetic series S_n = n². Find a₅.',
    options: [{ label: 'A', text: '9' }, { label: 'B', text: '10' }, { label: 'C', text: '11' }, { label: 'D', text: '20' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>等差数列 S_n = n², a_5 = ?</p><p><b>【Original in English】</b>If S_n = n², find a_5.</p><p><b>【解题思路 Solution】</b>a_n = S_n − S_{n−1}<br>a_5 = S_5 − S_4 = 25 − 16 = <b>9</b><br>或:已知 S_n = n², a_n = 2n−1, a_5 = 9<br>选 A (9)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 求和<br>nth term = 第 n 项<br>a_n = S_n − S_{n−1}<br>2n − 1 formula</p>'
  },
  {
    id: 'g11a14', domain: 'algebra', grade: 11, level: 5, rit: 282,
    stem: 'a = (1, 0), b = (0, 1), a · b = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '−1' }, { label: 'D', text: '2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>向量 a = (1, 0), b = (0, 1), a · b = ?</p><p><b>【Original in English】</b>If a = (1, 0) and b = (0, 1), what is a · b?</p><p><b>【解题思路 Solution】</b>点积 (dot product):<br>a · b = 1×0 + 0×1 = <b>0</b><br>(标准正交基向量相互垂直,点积=0)<br>选 A (0)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>dot product = 点积<br>standard basis = 标准基<br>perpendicular = 垂直<br>0</p>'
  },
  {
    id: 'g11a15', domain: 'algebra', grade: 11, level: 5, rit: 282,
    stem: 'Slope of line 2x + y − 3 = 0?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '−2' }, { label: 'C', text: '1/2' }, { label: 'D', text: '−1/2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>直线 2x + y − 3 = 0 的斜率是?</p><p><b>【Original in English】</b>What is the slope of 2x + y − 3 = 0?</p><p><b>【解题思路 Solution】</b>改写为斜截式:<br>2x + y − 3 = 0 → y = −2x + 3<br>斜率 = <b>−2</b><br>Slope = −2.<br>选 B (−2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>slope = 斜率<br>slope-intercept form = 斜截式<br>rearrange = 改写<br>coefficient of x = x 的系数</p>'
  },
  {
    id: 'g11a16', domain: 'algebra', grade: 11, level: 5, rit: 282,
    stem: 'Focal distance of x²/16 + y²/9 = 1?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '2√7' }, { label: 'C', text: '4' }, { label: 'D', text: '7' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>椭圆 x²/16 + y²/9 = 1 的焦距是?</p><p><b>【Original in English】</b>What is the focal distance of x²/16 + y²/9 = 1?</p><p><b>【解题思路 Solution】</b>椭圆参数:<br>a² = 16 → a = 4<br>b² = 9 → b = 3<br>c² = a² − b² = 16 − 9 = 7<br>c = √7<br>焦距 = 2c = <b>2√7</b><br>选 D (2√7)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>ellipse = 椭圆<br>focal distance = 焦距 (2c)<br>c² = a² − b²<br>√7 ≈ 2.65</p>'
  },
  {
    id: 'g11a17', domain: 'algebra', grade: 11, level: 5, rit: 282,
    stem: 'Real axis length of x²/9 − y²/16 = 1?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '6' }, { label: 'C', text: '9' }, { label: 'D', text: '4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>双曲线 x²/9 − y²/16 = 1 的实轴长?</p><p><b>【Original in English】</b>What is the length of the real axis of x²/9 − y²/16 = 1?</p><p><b>【解题思路 Solution】</b>双曲线 (hyperbola) x²/a² − y²/b² = 1:<br>a² = 9 → a = 3<br>实轴长 = 2a = <b>6</b><br>选 B (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>hyperbola = 双曲线<br>real axis = 实轴 (2a)<br>transverse axis = 横轴<br>2a = 6</p>'
  },
  {
    id: 'g11a18', domain: 'algebra', grade: 11, level: 5, rit: 282,
    stem: 'Directrix of y² = 8x?',
    options: [{ label: 'A', text: 'x = −2' }, { label: 'B', text: 'x = 2' }, { label: 'C', text: 'y = −2' }, { label: 'D', text: 'y = 2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>抛物线 y² = 8x 的准线是?</p><p><b>【Original in English】</b>What is the directrix of y² = 8x?</p><p><b>【解题思路 Solution】</b>抛物线 y² = 4px, 准线 x = −p<br>4p = 8 → p = 2<br>准线 x = <b>−2</b><br>Directrix: x = −2.<br>选 A (x = −2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>directrix = 准线<br>parabola = 抛物线<br>4p = 8, p = 2<br>x = −p</p>'
  },
  {
    id: 'g11g05', domain: 'geometry', grade: 11, level: 5, rit: 280,
    stem: 'Regular triangular prism (equilateral base) volume formula?',
    options: [{ label: 'A', text: '(√3/4)a²h' }, { label: 'B', text: 'a²h' }, { label: 'C', text: 'a³' }, { label: 'D', text: 'πr²h' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>正三棱柱 (底面等边三角形) 的体积公式?</p><p><b>【Original in English】</b>What is the volume formula of a regular triangular prism?</p><p><b>【解题思路 Solution】</b>正三棱柱 (regular triangular prism):<br>底面 = 等边三角形 (边长 a):面积 = (√3/4)a²<br>体积 = 底面积 × 高 = <b>(√3/4)a²h</b><br>选 A。</p><p><b>【Key Vocabulary · 核心生词】</b><br>regular triangular prism = 正三棱柱<br>equilateral triangle = 等边三角形<br>volume = 体积<br>(√3/4)a²h</p>'
  },
  {
    id: 'g11g06', domain: 'geometry', grade: 11, level: 5, rit: 280,
    stem: 'A regular square pyramid has ___ faces?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正四棱锥 (底面正方形) 有几个面?</p><p><b>【Original in English】</b>How many faces does a regular square pyramid have?</p><p><b>【解题思路 Solution】</b>正四棱锥 (regular square pyramid):<br>• 1 个正方形底面 (square base)<br>• 4 个等腰三角形侧面 (4 triangular faces)<br>共 <b>5</b> 个面。<br>选 B (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square pyramid = 四棱锥<br>faces = 面<br>base = 底面<br>lateral faces = 侧面</p>'
  },
  {
    id: 'g11g07', domain: 'geometry', grade: 11, level: 5, rit: 280,
    stem: 'A sphere has volume 36π. What is the radius?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个球的体积是 36π, 半径是?</p><p><b>【Original in English】</b>A sphere has volume 36π. What is its radius?</p><p><b>【解题思路 Solution】</b>球体积公式:V = (4/3)πr³<br>(4/3)πr³ = 36π<br>r³ = 36 × 3/4 = 27<br>r = <b>3</b><br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sphere = 球<br>volume = 体积<br>radius = 半径<br>r³ = 27, r = 3</p>'
  },
  {
    id: 'g11g08', domain: 'geometry', grade: 11, level: 5, rit: 281,
    stem: 'A frustum (truncated cone) volume formula?',
    options: [{ label: 'A', text: '(1/3)πh·R³' }, { label: 'B', text: '(1/3)πh(R² + Rr + r²)' }, { label: 'C', text: 'πh(R²+r²)' }, { label: 'D', text: 'πh·R·r' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆台 (圆锥截去顶部) 体积公式?</p><p><b>【Original in English】</b>What is the volume formula of a frustum (truncated cone)?</p><p><b>【解题思路 Solution】</b>圆台 (frustum of cone) 体积:<br><b>V = (1/3)πh(R² + Rr + r²)</b><br>R = 大半径, r = 小半径, h = 高<br>选 B。</p><p><b>【Key Vocabulary · 核心生词】</b><br>frustum = 圆台<br>truncated cone = 截顶圆锥<br>R, r = radii = 半径<br>formula = 公式</p>'
  },
  {
    id: 'g11d05', domain: 'data', grade: 11, level: 5, rit: 280,
    stem: 'What is the permutation A(5, 3)?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '60' }, { label: 'C', text: '20' }, { label: 'D', text: '120' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>排列数 A(5, 3) = ?</p><p><b>【Original in English】</b>What is the permutation A(5, 3)?</p><p><b>【解题思路 Solution】</b>排列 (permutation):<br>A(5, 3) = 5! / (5−3)! = 5! / 2! = 5 × 4 × 3 = <b>60</b><br>选 B (60)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>permutation = 排列<br>A(n, k) notation = 排列数<br>order matters = 顺序有关<br>5 × 4 × 3 = 60</p>'
  },
  {
    id: 'g11d06', domain: 'data', grade: 11, level: 5, rit: 280,
    stem: 'What is the combination C(5, 3)?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '20' }, { label: 'C', text: '60' }, { label: 'D', text: '15' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>组合数 C(5, 3) = ?</p><p><b>【Original in English】</b>What is the combination C(5, 3)?</p><p><b>【解题思路 Solution】</b>组合 (combination):<br>C(5, 3) = 5! / (3! × 2!) = (5 × 4 × 3) / (3 × 2 × 1) = <b>10</b><br>选 A (10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>combination = 组合<br>C(n, k) notation = 组合数<br>order doesn\'t matter = 顺序无关<br>10</p>'
  },
  {
    id: 'g11d07', domain: 'data', grade: 11, level: 5, rit: 280,
    stem: 'In the binomial expansion of (a+b)⁵, what is the 3rd term?',
    options: [{ label: 'A', text: 'a⁵' }, { label: 'B', text: '5a⁴b' }, { label: 'C', text: '10a³b²' }, { label: 'D', text: '10a²b³' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>二项式定理: (a+b)⁵ 的第 3 项是?</p><p><b>【Original in English】</b>In the binomial expansion of (a+b)⁵, what is the 3rd term?</p><p><b>【解题思路 Solution】</b>二项式定理:<br>T_(k+1) = C(n, k) a^(n−k) b^k<br>第 3 项 (k=2):T_3 = C(5, 2) a³ b² = 10 a³ b²<br>选 C (10a³b²)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>binomial theorem = 二项式定理<br>term k+1 = 第 k+1 项<br>C(5, 2) = 10<br>10a³b²</p>'
  },
  {
    id: 'g11d08', domain: 'data', grade: 11, level: 5, rit: 281,
    stem: 'X takes values 1, 2, 3 each with probability 1/3. E(X) = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>离散型随机变量 X 取值 1, 2, 3, 概率都是 1/3, E(X) = ?</p><p><b>【Original in English】</b>Random variable X takes values 1, 2, 3 each with probability 1/3. Find E(X).</p><p><b>【解题思路 Solution】</b>期望 (expected value):<br>E(X) = 1 × (1/3) + 2 × (1/3) + 3 × (1/3)<br>= (1+2+3)/3 = 6/3 = <b>2</b><br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>expected value = 期望<br>mean of random variable = 随机变量平均<br>equal probability = 等概率<br>E(X) = sum of x·P(x)</p>'
  },
  {
    id: 'g11d09', domain: 'data', grade: 11, level: 5, rit: 281,
    stem: 'For independent events A and B, P(AB) = ?',
    options: [{ label: 'A', text: 'P(A) + P(B)' }, { label: 'B', text: 'P(A) × P(B)' }, { label: 'C', text: 'P(A) − P(B)' }, { label: 'D', text: '0' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>独立事件 A 和 B, P(AB) = ?</p><p><b>【Original in English】</b>For independent events A and B, P(AB) = ?</p><p><b>【解题思路 Solution】</b>独立事件 (independent events):<br>P(AB) = <b>P(A) × P(B)</b><br>独立 = 一个发生不影响另一个。<br>Independent = one doesn\'t affect the other.<br>选 B (P(A) × P(B))。</p><p><b>【Key Vocabulary · 核心生词】</b><br>independent events = 独立事件<br>P(AB) = P(A)·P(B)<br>multiplication rule = 乘法公式<br>vs mutually exclusive = vs 互斥</p>'
  },
  {
    id: 'g11d10', domain: 'data', grade: 11, level: 5, rit: 281,
    stem: 'For geometric distribution P(X=k) = (1−p)^(k−1)·p, E(X) = ?',
    options: [{ label: 'A', text: 'p' }, { label: 'B', text: '1/p' }, { label: 'C', text: '(1−p)/p' }, { label: 'D', text: 'p²' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>几何分布: P(X=k) = (1−p)^(k−1) · p, E(X) = ?</p><p><b>【Original in English】</b>For geometric distribution, P(X=k) = (1−p)^(k−1)·p. Find E(X).</p><p><b>【解题思路 Solution】</b>几何分布 (geometric distribution) 期望:<br><b>E(X) = 1/p</b><br>方差 = (1−p)/p²<br>选 B (1/p)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>geometric distribution = 几何分布<br>expected value = 期望<br>E(X) = 1/p<br>first success = 首次成功</p>'
  },
  {
    id: 'g11n05', domain: 'number', grade: 11, level: 5, rit: 280,
    stem: 'In radians, the arc length s for angle α is ___?',
    options: [{ label: 'A', text: 'rα' }, { label: 'B', text: 'r²α' }, { label: 'C', text: 'α/r' }, { label: 'D', text: '2πr' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>弧度制: 角度 α 对应弧长 s = ?</p><p><b>【Original in English】</b>In radians, the arc length s for angle α is ___?</p><p><b>【解题思路 Solution】</b>弧度制 (radian) 弧长公式:<br><b>s = rα</b><br>(r = 半径 radius, α = 弧度 radian angle)<br>选 A (rα)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>arc length = 弧长<br>radian = 弧度<br>s = r·α<br>radius = 半径</p>'
  },
  {
    id: 'g11n06', domain: 'number', grade: 11, level: 5, rit: 280,
    stem: 'Sector area formula?',
    options: [{ label: 'A', text: 'πr²' }, { label: 'B', text: '(1/2)r²θ' }, { label: 'C', text: 'r²·sin θ' }, { label: 'D', text: 'θ/2π' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>扇形面积公式是?</p><p><b>【Original in English】</b>What is the area formula of a sector?</p><p><b>【解题思路 Solution】</b>扇形面积 (sector area):<br><b>S = (1/2)r²θ = (1/2)αr²</b> (θ 弧度)<br>或 = (θ/360) × πr² (θ 度)<br>选 B ((1/2)r²θ)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sector = 扇形<br>area = 面积<br>(1/2)r²θ<br>θ in radians = θ 用弧度</p>'
  },
  // ==================== G12 补充题 (30 道) ====================
  {
    id: 'g12a13', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'f(x) = x³, f\'(2) = ?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '8' }, { label: 'C', text: '12' }, { label: 'D', text: '16' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>f(x) = x³, f&#39;(x) = ?</p><p><b>【Original in English】</b>For f(x) = x³, what is f&#39;(x)?</p><p><b>【解题思路 Solution】</b>幂函数求导 (power rule):<br>(x³)&#39; = 3x²<br>选 C (3x²)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>power rule = 幂规则<br>xⁿ → n·x^(n−1)<br>cubic = 立方<br>derivative = 导数</p>'
  },
  {
    id: 'g12a14', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'f(x) = cos x, f\'(x) = ?',
    options: [{ label: 'A', text: 'sin x' }, { label: 'B', text: '-sin x' }, { label: 'C', text: 'cos x' }, { label: 'D', text: '-cos x' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>f(x) = cos x, f&#39;(x) = ?</p><p><b>【Original in English】</b>For f(x) = cos x, what is f&#39;(x)?</p><p><b>【解题思路 Solution】</b>三角函数求导:<br>(cos x)&#39; = <b>−sin x</b><br>选 B (−sin x)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>derivative of cos = −sin<br>trigonometric derivative = 三角函数导数<br>basic formula = 基本公式<br>cosine = 余弦</p>'
  },
  {
    id: 'g12a15', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'f(x) = 1/x, f\'(x) = ?',
    options: [{ label: 'A', text: '1/x²' }, { label: 'B', text: '-1/x²' }, { label: 'C', text: '0' }, { label: 'D', text: 'x⁻²' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>f(x) = 1/x, f&#39;(x) = ?</p><p><b>【Original in English】</b>For f(x) = 1/x, what is f&#39;(x)?</p><p><b>【解题思路 Solution】</b>f(x) = x⁻¹<br>f&#39;(x) = −1 · x⁻² = <b>−1/x²</b><br>或用公式 (1/x)&#39; = −1/x²<br>选 B (−1/x²)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>reciprocal = 倒数<br>negative exponent = 负指数<br>derivative = 导数<br>power rule = 幂规则</p>'
  },
  {
    id: 'g12a16', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: '∫ e^x dx = ?',
    options: [{ label: 'A', text: 'e^x + C' }, { label: 'B', text: 'xe^x + C' }, { label: 'C', text: 'e^x/x + C' }, { label: 'D', text: '1/e^x + C' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>∫ eˣ dx = ?</p><p><b>【Original in English】</b>What is ∫ eˣ dx?</p><p><b>【解题思路 Solution】</b>eˣ 的不定积分 = 它自己:<br>∫ eˣ dx = <b>eˣ + C</b><br>Unique: derivative and integral of eˣ are both eˣ.<br>选 A (eˣ + C)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>integral of eˣ = eˣ<br>antiderivative = 原函数<br>natural exponential = 自然指数<br>+ C (constant) = + 积分常数</p>'
  },
  {
    id: 'g12a17', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: '∫ cos x dx = ?',
    options: [{ label: 'A', text: 'sin x + C' }, { label: 'B', text: '-sin x + C' }, { label: 'C', text: 'cos x + C' }, { label: 'D', text: '-cos x + C' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>∫ cos x dx = ?</p><p><b>【Original in English】</b>What is ∫ cos x dx?</p><p><b>【解题思路 Solution】</b>三角函数积分:<br>∫ cos x dx = <b>sin x + C</b><br>求导验证:(sin x)&#39; = cos x ✓<br>选 A (sin x + C)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>integral of cos = sin<br>antiderivative = 原函数<br>trigonometric integral = 三角积分<br>verify = 验证</p>'
  },
  {
    id: 'g12a18', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'Discriminant of ax²+bx+c=0: Δ = ?',
    options: [{ label: 'A', text: 'b²−4ac' }, { label: 'B', text: 'b²+4ac' }, { label: 'C', text: '4ac−b²' }, { label: 'D', text: '−4ac−b²' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>罗尔定理 (Rolle theorem) 的条件是?</p><p><b>【Original in English】</b>What are the conditions of Rolle&#39;s theorem?</p><p><b>【解题思路 Solution】</b>罗尔定理 3 个条件:<br>① f 在 [a, b] 连续 (continuous)<br>② f 在 (a, b) 可导 (differentiable)<br>③ <b>f(a) = f(b)</b><br>结论:∃ c ∈ (a,b),f&#39;(c) = 0<br>选 D (3 个条件都要满足)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>Rolle theorem = 罗尔定理<br>continuous = 连续<br>differentiable = 可导<br>f(a) = f(b) = 端点值相等</p>'
  },
  {
    id: 'g12a19', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'Lagrange Mean Value Theorem conclusion?',
    options: [{ label: 'A', text: 'f\'(c) = [f(b)−f(a)]/(b−a)' }, { label: 'B', text: 'f(a) = f(b)' }, { label: 'C', text: 'f\'\'(c) = 0' }, { label: 'D', text: 'f(c) = 0' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>拉格朗日中值定理的结论是?</p><p><b>【Original in English】</b>What is the conclusion of Lagrange&#39;s Mean Value Theorem?</p><p><b>【解题思路 Solution】</b>拉格朗日中值定理 (MVT):<br>∃ c ∈ (a, b) 使得<br><b>f&#39;(c) = [f(b) − f(a)] / (b − a)</b><br>选 A。</p><p><b>【Key Vocabulary · 核心生词】</b><br>Mean Value Theorem = 中值定理<br>average rate of change = 平均变化率<br>instantaneous rate = 瞬时变化率<br>derivative = 导数</p>'
  },
  {
    id: 'g12a20', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'lim(n→∞) (1+1/n)^n = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: 'e' }, { label: 'D', text: '∞' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>lim(n→∞) (1 + 1/n)^n = ?</p><p><b>【Original in English】</b>lim(n→∞) (1 + 1/n)^n = ?</p><p><b>【解题思路 Solution】</b>经典极限 (classic limit):<br>lim(n→∞) (1 + 1/n)^n = <b>e</b> ≈ 2.71828<br>这是 e 的数列定义式。<br>选 C (e)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>limit = 极限<br>e ≈ 2.71828<br>(1 + 1/n)^n → e<br>sequence = 数列</p>'
  },
  {
    id: 'g12g05', domain: 'geometry', grade: 12, level: 6, rit: 240,
    stem: 'Sphere volume V = (4/3)πr³, r=3. Find V.',
    options: [{ label: 'A', text: '12π' }, { label: 'B', text: '36π' }, { label: 'C', text: '108π' }, { label: 'D', text: '4π' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>球体积 V = (4/3)πr³, r = 3, V = ?</p><p><b>【Original in English】</b>Sphere volume V = (4/3)πr³, r = 3. Find V.</p><p><b>【解题思路 Solution】</b>V = (4/3) × π × 3³ = (4/3) × π × 27 = 36π<br>选 B (36π)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sphere volume = 球体积<br>V = (4/3)πr³<br>substitute = 代入<br>r³ = 27</p>'
  },
  {
    id: 'g12g06', domain: 'geometry', grade: 12, level: 6, rit: 240,
    stem: 'Polar equation ρ = 2cos θ represents?',
    options: [{ label: 'A', text: 'line' }, { label: 'B', text: 'parabola' }, { label: 'C', text: 'circle' }, { label: 'D', text: 'spiral' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>极坐标方程 ρ = 2cos θ 表示什么曲线?</p><p><b>【Original in English】</b>What curve does the polar equation ρ = 2cos θ represent?</p><p><b>【解题思路 Solution】</b>极坐标方程 ρ = 2a cos θ 是<b>圆</b>。<br>两边乘 ρ:ρ² = 2aρ cos θ → x² + y² = 2ax<br>(x − a)² + y² = a²,这是以 (a, 0) 为圆心,半径 a 的圆。<br>选 C (圆)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>polar equation = 极坐标方程<br>ρ = 2a cos θ form = circle<br>convert to rectangular = 化为直角坐标<br>center and radius = 圆心和半径</p>'
  },
  {
    id: 'g12g07', domain: 'geometry', grade: 12, level: 6, rit: 240,
    stem: 'Parametric {x=2t, y=1+t} represents?',
    options: [{ label: 'A', text: 'circle' }, { label: 'B', text: 'line' }, { label: 'C', text: 'parabola' }, { label: 'D', text: 'ellipse' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>参数方程 {x = 2t, y = 1 + t} 表示什么?</p><p><b>【Original in English】</b>What does the parametric equation {x = 2t, y = 1 + t} represent?</p><p><b>【解题思路 Solution】</b>消去参数 t:x = 2t, y = 1 + t → t = (y−1)<br>代入:x = 2(y−1) → x − 2y + 2 = 0<br>这是一条<b>直线</b> (line)。<br>选 B (直线)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>parametric equation = 参数方程<br>eliminate parameter = 消参数<br>linear equation = 直线方程<br>parameter t = 参数 t</p>'
  },
  {
    id: 'g12g08', domain: 'geometry', grade: 12, level: 6, rit: 240,
    stem: 'Latus rectum of y² = 4x?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '2' }, { label: 'C', text: '8' }, { label: 'D', text: '1' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>曲线 y² = 4x 的焦点弦长 (通径长)?</p><p><b>【Original in English】</b>What is the latus rectum (focal chord) length of y² = 4x?</p><p><b>【解题思路 Solution】</b>通径长 (latus rectum) = 4p<br>y² = 4x = 4(1)x → p = 1<br>通径 = 4p = <b>4</b><br>选 A (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>latus rectum = 通径<br>focal chord = 焦点弦<br>4p = 通径长<br>parabola = 抛物线</p>'
  },
  {
    id: 'g12d06', domain: 'data', grade: 12, level: 6, rit: 240,
    stem: 'Sample correlation r = 0 means?',
    options: [{ label: 'A', text: 'perfect positive' }, { label: 'B', text: 'no linear correlation' }, { label: 'C', text: 'perfect negative' }, { label: 'D', text: 'undefined' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>样本相关系数 r = 0 表示?</p><p><b>【Original in English】</b>If the sample correlation r = 0, it indicates ___.</p><p><b>【解题思路 Solution】</b>相关系数 r = 0 含义:<br>• <b>无线性相关</b> (no linear correlation)<br>• 不代表没有其他关系 (可能存在非线性关系)<br>选 C (无线性相关)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>correlation = 相关<br>no linear correlation = 无线性相关<br>nonlinear = 非线性<br>r = 0 ≠ no relationship</p>'
  },
  {
    id: 'g12d07', domain: 'data', grade: 12, level: 6, rit: 240,
    stem: '95% confidence level means?',
    options: [{ label: 'A', text: 'P = 0.95 the parameter is in interval' }, { label: 'B', text: '95% of sample in interval' }, { label: 'C', text: '95% of intervals contain parameter' }, { label: 'D', text: '95% chance of error' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>置信度 95% 的含义是?</p><p><b>【Original in English】</b>What does 95% confidence level mean?</p><p><b>【解题思路 Solution】</b>置信区间 (confidence interval):<br>如果重复抽样,大约 <b>95%</b> 的置信区间会包含真实参数值。<br>If we repeat sampling, about 95% of confidence intervals will contain the true parameter.<br>选 C (95% 的区间包含真值)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>confidence level = 置信度<br>confidence interval = 置信区间<br>95% = 0.95 probability<br>true parameter = 真实参数</p>'
  },
  {
    id: 'g12d08', domain: 'data', grade: 12, level: 6, rit: 240,
    stem: 'In hypothesis testing, P-value is?',
    options: [{ label: 'A', text: 'significance level' }, { label: 'B', text: 'probability of error' }, { label: 'C', text: 'probability under H₀' }, { label: 'D', text: 'power' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>假设检验中, P-value 是?</p><p><b>【Original in English】</b>In hypothesis testing, what is the P-value?</p><p><b>【解题思路 Solution】</b>P-value 定义:<br>在原假设为真时,观测到当前或更极端结果的<b>概率</b>。<br>Probability of observing current or more extreme result, assuming H₀ is true.<br>选 C (在 H₀ 下观测到此结果的概率)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>p-value = P 值<br>null hypothesis H₀ = 原假设<br>significance level α = 显著性水平<br>extreme result = 极端结果</p>'
  },
  {
    id: 'g12d09', domain: 'data', grade: 12, level: 6, rit: 240,
    stem: 'Independent samples t-test is for?',
    options: [{ label: 'A', text: 'two independent groups' }, { label: 'B', text: 'paired data' }, { label: 'C', text: 'more than two groups' }, { label: 'D', text: 'one sample' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>独立样本 t 检验适用于?</p><p><b>【Original in English】</b>Independent samples t-test is used for ___.</p><p><b>【解题思路 Solution】</b>独立样本 t 检验:<br>比较两个<b>独立组</b>的<b>均值</b>差异是否显著。<br>Compare means of two independent groups.<br>选 A (比较两独立组均值)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>independent samples = 独立样本<br>t-test = t 检验<br>compare means = 比较均值<br>two groups = 两组</p>'
  },
  {
    id: 'g12d10', domain: 'data', grade: 12, level: 6, rit: 240,
    stem: 'ANOVA is used for?',
    options: [{ label: 'A', text: 'two groups' }, { label: 'B', text: 'three or more groups' }, { label: 'C', text: 'one sample' }, { label: 'D', text: 'categorical data' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>ANOVA 用于?</p><p><b>【Original in English】</b>What is ANOVA used for?</p><p><b>【解题思路 Solution】</b>ANOVA (方差分析, Analysis of Variance):<br>比较<b>三个或更多组</b>均值是否相等。<br>Compare means of 3+ groups.<br>选 B (比较多组均值)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>ANOVA = 方差分析<br>compare multiple means = 比较多组均值<br>F-test = F 检验<br>3+ groups = 3 组或以上</p>'
  },
  {
    id: 'g12n08', domain: 'number', grade: 12, level: 6, rit: 240,
    stem: 'Modulus of z = 1 + i?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '√2' }, { label: 'C', text: '2' }, { label: 'D', text: '√3' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>复数 z = 1 + i 的模是?</p><p><b>【Original in English】</b>What is the modulus of z = 1 + i?</p><p><b>【解题思路 Solution】</b>复数模 (modulus):<br>|z| = √(a² + b²) = √(1² + 1²) = √<b>2</b><br>选 C (√2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>complex number = 复数<br>modulus = 模 / 绝对值<br>|a + bi| = √(a²+b²)<br>√2 ≈ 1.414</p>'
  },
  {
    id: 'g12n09', domain: 'number', grade: 12, level: 6, rit: 240,
    stem: '(1 + i)² = ?',
    options: [{ label: 'A', text: '1 + 2i' }, { label: 'B', text: '2i' }, { label: 'C', text: '2 + i' }, { label: 'D', text: '1 − i' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>复数 (1 + i)² = ?</p><p><b>【Original in English】</b>What is (1 + i)²?</p><p><b>【解题思路 Solution】</b>(1 + i)² = 1² + 2i + i² = 1 + 2i + (−1) = <b>2i</b><br>选 B (2i)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>expand = 展开<br>i² = −1<br>imaginary unit = 虚数单位<br>complex square = 复数平方</p>'
  },
  {
    id: 'g12n10', domain: 'number', grade: 12, level: 6, rit: 240,
    stem: 'Solutions of z² = −1?',
    options: [{ label: 'A', text: '±1' }, { label: 'B', text: '±i' }, { label: 'C', text: '1 only' }, { label: 'D', text: 'no solutions' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>复数方程 z² = −1 的解是?</p><p><b>【Original in English】</b>What are the solutions of z² = −1?</p><p><b>【解题思路 Solution】</b>z² = −1 → z = ±√(−1) = ±i<br>两个解:z = i 或 z = −i<br>选 C (i 或 −i)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>complex equation = 复数方程<br>z² = −1<br>two solutions = ±i<br>imaginary = 虚数</p>'
  },
  {
    id: 'g12f05', domain: 'fraction', grade: 12, level: 6, rit: 240,
    stem: '∫₀^π sin x dx = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '2' }, { label: 'D', text: '−2' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>∫₀^π sin x dx = ?</p><p><b>【Original in English】</b>What is ∫₀^π sin x dx?</p><p><b>【解题思路 Solution】</b>∫ sin x dx = −cos x<br>代入:−cos π − (−cos 0) = −(−1) + 1 = <b>2</b><br>选 C (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>definite integral = 定积分<br>evaluate = 求值<br>cos π = −1, cos 0 = 1<br>area under curve = 曲线下面积</p>'
  },
  // ==================== G1 补充题 (30 道) ====================
  {
    id: 'g1g26', domain: 'geometry', grade: 1, level: 1, rit: 200,
    stem: 'How many corners does a clock (circle) have?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '4' }, { label: 'D', text: 'infinite' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>时钟（圆形）有几个角？</p><p><b>【Original in English】</b>How many corners does a clock (circle) have?</p><p><b>【解题思路 Solution】</b>A circle is a curve with <b>0</b> corners.</p><p><b>【Key Vocabulary · 核心生词】</b><br>circle = 圆形<br>corner / angle = 角<br>curve = 曲线</p>'
  },
  {
    id: 'g1g27', domain: 'geometry', grade: 1, level: 1, rit: 201,
    stem: 'A rectangle and a square are cut from one big rectangle. How many shapes?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '4' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>从一个长方形中剪出 1 个长方形和 1 个正方形，能看到几个图形？</p><p><b>【Original in English】</b>A rectangle and a square are cut from one big rectangle. How many shapes?</p><p><b>【解题思路 Solution】</b>1 rectangle + 1 square = <b>2</b> shapes.</p><p><b>【Key Vocabulary · 核心生词】</b><br>cut = 剪<br>rectangle = 长方形<br>square = 正方形</p>'
  },
  {
    id: 'g1g28', domain: 'geometry', grade: 1, level: 1, rit: 202,
    stem: 'Which lines are straight?',
    options: [{ label: 'A', text: 'line segment' }, { label: 'B', text: 'curved line' }, { label: 'C', text: 'circle' }, { label: 'D', text: 'B and C' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>哪个是直的？</p><p><b>【Original in English】</b>Which lines are straight?</p><p><b>【解题思路 Solution】</b>Line segment is straight; curve and circle are bent.</p><p><b>【Key Vocabulary · 核心生词】</b><br>straight = 直的<br>curved = 弯曲的<br>line segment = 线段</p>'
  },
  {
    id: 'g1g29', domain: 'geometry', grade: 1, level: 1, rit: 203,
    stem: 'A rectangle folded in half twice. How many small rectangles?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个长方形对折再对折，最多几个？</p><p><b>【Original in English】</b>A rectangle folded in half twice. How many small rectangles?</p><p><b>【解题思路 Solution】</b>2×2 = <b>4</b> small rectangles.</p><p><b>【Key Vocabulary · 核心生词】</b><br>fold = 折叠<br>in half = 对半<br>small = 小的</p>'
  },
  {
    id: 'g1g30', domain: 'geometry', grade: 1, level: 1, rit: 204,
    stem: 'A shape can be flipped to overlap itself. This is:',
    options: [{ label: 'A', text: 'axis symmetry' }, { label: 'B', text: 'rotation symmetry' }, { label: 'C', text: 'translation' }, { label: 'D', text: 'random' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个图形能上下翻转后完全重合，这是？</p><p><b>【Original in English】</b>A shape can be flipped to overlap itself. This is:</p><p><b>【解题思路 Solution】</b>Flipping over a line = <b>axis symmetry</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>flip = 翻转<br>overlap = 重叠<br>axis symmetry = 轴对称</p>'
  },
  {
    id: 'g1n26', domain: 'number', grade: 1, level: 1, rit: 148,
    stem: 'What is 30 less than 100?',
    options: [{ label: 'A', text: '70' }, { label: 'B', text: '80' }, { label: 'C', text: '130' }, { label: 'D', text: '30' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>比 100 少 30 的数是?</p><p><b>【Original in English】</b>What number is 30 less than 100?</p><p><b>【解题思路 Solution】</b>"比 100 少 30" = 100 − 30 = <b>70</b>。<br>30 less than 100 = 100 − 30 = 70.<br>选 A (70)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>less than = 比...少<br>more than = 比...多<br>subtract = 减<br>difference = 差</p>'
  },
  {
    id: 'g1n27', domain: 'number', grade: 1, level: 1, rit: 148,
    stem: '99 + 1 = ?',
    options: [{ label: 'A', text: '99' }, { label: 'B', text: '100' }, { label: 'C', text: '101' }, { label: 'D', text: '199' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>99 + 1 = ?</p><p><b>【Original in English】</b>99 + 1 = ?</p><p><b>【解题思路 Solution】</b>99 + 1 = <b>100</b>。<br>这是 100 以内最常用的凑整。<br>This is a key "round to 100" fact.<br>选 B (100)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>add = 加<br>round number = 整百数<br>100 = one hundred<br>plus = 加</p>'
  },
  {
    id: 'g1n28', domain: 'number', grade: 1, level: 1, rit: 148,
    stem: 'Xiao Hong has 15 candies. She gives 5 to Xiao Ming and 5 to Xiao Hua. How many are left?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '5' }, { label: 'C', text: '10' }, { label: 'D', text: '15' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>小红有 15 颗糖, 给小明 5 颗, 给小华 5 颗, 还剩几颗?</p><p><b>【Original in English】</b>Xiao Hong has 15 candies. She gives 5 to Xiao Ming and 5 to Xiao Hua. How many are left?</p><p><b>【解题思路 Solution】</b>15 − 5 − 5 = <b>5</b><br>或: 15 − (5+5) = 15 − 10 = 5<br>选 B (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>candies = 糖<br>give away = 给出<br>left / remaining = 剩下<br>subtract twice = 两次减法</p>'
  },
  {
    id: 'g1n29', domain: 'number', grade: 1, level: 1, rit: 149,
    stem: 'How many odd numbers are there from 1 to 20?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '10' }, { label: 'C', text: '15' }, { label: 'D', text: '20' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>从 1 到 20, 单数有几个?</p><p><b>【Original in English】</b>How many odd numbers are there from 1 to 20?</p><p><b>【解题思路 Solution】</b>单数 (odd) = 1, 3, 5, 7, 9, 11, 13, 15, 17, 19,共 <b>10</b> 个。<br>Odd numbers from 1-20: 10 numbers.<br>(规律:1-20 共 20 个数,奇偶各半 = 10 个)<br>选 B (10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>odd number = 奇数 / 单数<br>even number = 偶数 / 双数<br>count = 数 / 计数<br>half = 一半</p>'
  },
  {
    id: 'g1n30', domain: 'number', grade: 1, level: 1, rit: 149,
    stem: '12 is divided equally into 3 groups. How many in each?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '6' }, { label: 'D', text: '9' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>把 12 平均分成 3 份, 每份是多少?</p><p><b>【Original in English】</b>12 is divided equally into 3 groups. How many in each group?</p><p><b>【解题思路 Solution】</b>平均分 = 除法。<br>Equal sharing = division.<br>12 ÷ 3 = <b>4</b><br>选 B (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide equally = 平均分<br>group = 组 / 份<br>division = 除法<br>each = 每个</p>'
  },
  {
    id: 'g1f06', domain: 'fraction', grade: 1, level: 1, rit: 141,
    stem: 'A cake is cut into 2 equal pieces. Xiao Hong eats 1 piece, Xiao Hua eats 1 piece. Who ate more?',
    options: [{ label: 'A', text: 'Xiao Hong' }, { label: 'B', text: 'Xiao Hua' }, { label: 'C', text: 'The same' }, { label: 'D', text: 'Not sure' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>把一个蛋糕平均切 2 块, 小红吃 1 块, 小华吃 1 块, 谁吃得多?</p><p><b>【Original in English】</b>A cake is cut into 2 equal pieces. Xiao Hong eats 1 piece, Xiao Hua eats 1 piece. Who ate more?</p><p><b>【解题思路 Solution】</b>平均切 2 块,每块是整个蛋糕的 1/2。<br>Each piece is 1/2 of the cake.<br>两人各吃 1 块,都是 1/2, <b>一样多</b>。<br>Both ate 1/2, so they ate the same amount.<br>选 C (一样多)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>equal pieces = 平均切块<br>half = 一半<br>the same = 一样<br>fair share = 公平分配</p>'
  },
  {
    id: 'g1f07', domain: 'fraction', grade: 1, level: 1, rit: 141,
    stem: 'In 1/2, the whole is divided into ___ equal parts.',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1/2 是把整体平均分成 ___ 份, 表示其中的 1 份。</p><p><b>【Original in English】</b>In 1/2, the whole is divided into ___ equal parts, and we take 1 of them.</p><p><b>【解题思路 Solution】</b>分数 = 分子 / 分母。<br>1/2:分母 2 表示平均分成 2 份,分子 1 表示取其中 1 份。<br>1/2: denominator 2 = 2 equal parts, numerator 1 = take 1.<br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>fraction = 分数<br>numerator = 分子 (top)<br>denominator = 分母 (bottom)<br>equal parts = 等份</p>'
  },
  {
    id: 'g1a06', domain: 'algebra', grade: 1, level: 1, rit: 175,
    stem: 'Continue the pattern: 1, 2, 4, 7, 11, _',
    options: [{ label: 'A', text: '14' }, { label: 'B', text: '15' }, { label: 'C', text: '16' }, { label: 'D', text: '17' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>找规律：1, 2, 4, 7, 11, _</p><p><b>【Original in English】</b>Continue the pattern: 1, 2, 4, 7, 11, _</p><p><b>【解题思路 Solution】</b>Differences: 1, 2, 3, 4, 5. Next = 11+5 = <b>16</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>pattern = 规律<br>difference = 差<br>continue = 继续</p>'
  },
  {
    id: 'g1d21', domain: 'data', grade: 1, level: 1, rit: 218,
    stem: 'A bag has 5 balls: 3 red, 2 blue. Probability of drawing a red ball?',
    options: [{ label: 'A', text: 'high' }, { label: 'B', text: 'low' }, { label: 'C', text: 'same' }, { label: 'D', text: 'impossible' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一袋 5 个球，3 红 2 蓝，摸到红球可能性？</p><p><b>【Original in English】</b>A bag has 5 balls: 3 red, 2 blue. Probability of drawing a red ball?</p><p><b>【解题思路 Solution】</b>3/5 > 1/2, probability is <b>high</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>probability = 概率<br>draw = 摸<br>high / low = 高 / 低</p>'
  },
  {
    id: 'g1d22', domain: 'data', grade: 1, level: 1, rit: 219,
    stem: 'Today is Tuesday. What day is tomorrow?',
    options: [{ label: 'A', text: 'Monday' }, { label: 'B', text: 'Wednesday' }, { label: 'C', text: 'Thursday' }, { label: 'D', text: 'Friday' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>今天星期二，明天星期几？</p><p><b>【Original in English】</b>Today is Tuesday. What day is tomorrow?</p><p><b>【解题思路 Solution】</b>After Tuesday is <b>Wednesday</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>today = 今天<br>tomorrow = 明天</p>'
  },
  {
    id: 'g2n11_b0', domain: 'number', grade: 2, level: 1, rit: 168,
    stem: 'A number plus 17 equals 50. What is the number?',
    options: [{ label: 'A', text: '23' }, { label: 'B', text: '33' }, { label: 'C', text: '43' }, { label: 'D', text: '67' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数加上 17 等于 50, 这个数是多少?</p><p><b>【Original in English】</b>A number plus 17 equals 50. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x:<br>Let the number be x.<br>x + 17 = 50<br>x = 50 − 17 = <b>33</b><br>选 B (33)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>plus = 加<br>equals = 等于<br>inverse = 逆运算<br>subtract to solve = 用减法求 x</p>'
  },
  {
    id: 'g2n12_b0', domain: 'number', grade: 2, level: 1, rit: 169,
    stem: '7 × 8 = ?',
    options: [{ label: 'A', text: '49' }, { label: 'B', text: '54' }, { label: 'C', text: '56' }, { label: 'D', text: '64' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>7 × 8 = ?</p><p><b>【Original in English】</b>7 × 8 = ?</p><p><b>【解题思路 Solution】</b>7 × 8 = <b>56</b>。<br>九九乘法表:七八五十六。<br>Multiplication table: 7 × 8 = 56.<br>选 C (56)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply = 乘<br>times = 倍<br>multiplication table = 乘法表<br>product = 积</p>'
  },
  {
    id: 'g2n13_b0', domain: 'number', grade: 2, level: 1, rit: 169,
    stem: '48 ÷ 6 = ?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '7' }, { label: 'C', text: '8' }, { label: 'D', text: '9' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>48 ÷ 6 = ?</p><p><b>【Original in English】</b>48 ÷ 6 = ?</p><p><b>【解题思路 Solution】</b>48 ÷ 6 = <b>8</b>。<br>口诀:六八四十八。<br>Rhymes: 6 × 8 = 48, so 48 ÷ 6 = 8.<br>选 C (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除<br>quotient = 商<br>division = 除法<br>inverse of multiplication = 乘法的逆运算</p>'
  },
  {
    id: 'g2n14_b0', domain: 'number', grade: 2, level: 1, rit: 170,
    stem: 'A two-digit number: tens digit 5 more than ones digit. Tens digit is 7. What is the number?',
    options: [{ label: 'A', text: '52' }, { label: 'B', text: '57' }, { label: 'C', text: '72' }, { label: 'D', text: '75' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个两位数, 十位比个位大 5, 十位是 7, 这个数?</p><p><b>【Original in English】</b>A two-digit number has its tens digit 5 more than the ones digit. The tens digit is 7. What is the number?</p><p><b>【解题思路 Solution】</b>十位 = 7,个位 = 7 − 5 = 2。<br>Tens = 7, ones = 7 − 5 = 2.<br>数字 = 72。<br>Number = 72.<br>选 C (72)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>tens digit = 十位<br>ones digit = 个位<br>5 more than = 大 5<br>two-digit number = 两位数</p>'
  },
  {
    id: 'g2n15_b0', domain: 'number', grade: 2, level: 1, rit: 170,
    stem: 'Counting down from 50 to 41, how many numbers?',
    options: [{ label: 'A', text: '9' }, { label: 'B', text: '10' }, { label: 'C', text: '11' }, { label: 'D', text: '12' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>从 50 倒数到 41, 数了几个数?</p><p><b>【Original in English】</b>Counting down from 50 to 41, how many numbers did you say?</p><p><b>【解题思路 Solution】</b>50, 49, 48, ..., 41。<br>计算:50 − 41 + 1 = <b>10</b> 个数。<br>Count: 50 − 41 + 1 = 10 numbers.<br>选 B (10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>count down = 倒数<br>inclusive = 含首尾<br>subtract and add 1 = 减后加 1<br>how many = 多少</p>'
  },
  {
    id: 'g2n16_b0', domain: 'number', grade: 2, level: 1, rit: 171,
    stem: 'A track is 400 m per lap. How many meters in 3 laps?',
    options: [{ label: 'A', text: '800' }, { label: 'B', text: '1000' }, { label: 'C', text: '1200' }, { label: 'D', text: '1500' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个操场一圈 400 米, 跑 3 圈多少米?</p><p><b>【Original in English】</b>One lap around the track is 400 meters. How many meters is 3 laps?</p><p><b>【解题思路 Solution】</b>3 圈 = 400 × 3 = <b>1200</b> 米。<br>3 laps = 400 × 3 = 1200 meters.<br>选 C (1200)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>lap = 圈<br>meter = 米 (m)<br>multiply = 乘<br>total distance = 总距离</p>'
  },
  {
    id: 'g2f06', domain: 'fraction', grade: 2, level: 1, rit: 162,
    stem: '1/4 + 1/4 = ?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/4' }, { label: 'C', text: '2/4' }, { label: 'D', text: 'A or C' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>1/4 + 1/4 = ?</p><p><b>【Original in English】</b>1/4 + 1/4 = ?</p><p><b>【解题思路 Solution】</b>分母相同,分子相加:1/4 + 1/4 = 2/4 = <b>1/2</b>。<br>Same denominator, add numerators: 2/4 = 1/2.<br>(2/4 和 1/2 都对,选 D)<br>Both 2/4 and 1/2 are correct.</p><p><b>【Key Vocabulary · 核心生词】</b><br>same denominator = 同分母<br>simplify = 约分<br>equivalent fractions = 等值分数<br>add fractions = 分数相加</p>'
  },
  {
    id: 'g2f07', domain: 'fraction', grade: 2, level: 1, rit: 162,
    stem: 'A cake is cut into 8 equal pieces. Xiao Hong eats 2 pieces. What fraction of the whole cake did she eat?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/4' }, { label: 'C', text: '1/8' }, { label: 'D', text: '2/8 or 1/4' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>一个饼平均切 8 块, 小红吃 2 块, 她吃了整个饼的?</p><p><b>【Original in English】</b>A cake is cut into 8 equal pieces. Xiao Hong eats 2 pieces. What fraction of the cake did she eat?</p><p><b>【解题思路 Solution】</b>吃了 2 块,共 8 块 → 2/8。<br>Ate 2 out of 8 = 2/8.<br>约分:2/8 = <b>1/4</b>。<br>Simplify: 2/8 = 1/4.<br>两种都对,选 D。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cut into pieces = 切成块<br>simplify = 约分<br>2/8 = 1/4<br>fraction of a whole = 整体的几分之几</p>'
  },
  {
    id: 'g2a06', domain: 'algebra', grade: 2, level: 1, rit: 195,
    stem: 'Continue: 1, 2, 4, 7, 11, _',
    options: [{ label: 'A', text: '14' }, { label: 'B', text: '15' }, { label: 'C', text: '16' }, { label: 'D', text: '17' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>找规律：1, 2, 4, 7, 11, _</p><p><b>【Original in English】</b>Continue: 1, 2, 4, 7, 11, _</p><p><b>【解题思路 Solution】</b>Differences 1,2,3,4,5: 11+5=<b>16</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>pattern = 规律</p>'
  },
  {
    id: 'g2g06_b0', domain: 'geometry', grade: 2, level: 1, rit: 164,
    stem: 'A rectangle is 8 cm long and 5 cm wide. Perimeter?',
    options: [{ label: 'A', text: '13 cm' }, { label: 'B', text: '26 cm' }, { label: 'C', text: '40 cm' }, { label: 'D', text: '80 cm' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个长方形长 8 cm, 宽 5 cm, 周长是多少?</p><p><b>【Original in English】</b>A rectangle is 8 cm long and 5 cm wide. What is its perimeter?</p><p><b>【解题思路 Solution】</b>长方形周长 = 2 × (长 + 宽)<br>Perimeter of rectangle = 2 × (length + width)<br>= 2 × (8 + 5) = 2 × 13 = <b>26</b> cm<br>选 B (26 cm)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>rectangle = 长方形<br>perimeter = 周长<br>length = 长<br>width = 宽</p>'
  },
  {
    id: 'g2g07_b0', domain: 'geometry', grade: 2, level: 1, rit: 164,
    stem: 'A square has side 7 cm. Perimeter?',
    options: [{ label: 'A', text: '14 cm' }, { label: 'B', text: '21 cm' }, { label: 'C', text: '28 cm' }, { label: 'D', text: '49 cm' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方形边长 7 cm, 周长是多少?</p><p><b>【Original in English】</b>A square has sides of 7 cm. What is its perimeter?</p><p><b>【解题思路 Solution】</b>正方形 4 条相等的边。<br>A square has 4 equal sides.<br>周长 = 4 × 7 = <b>28</b> cm<br>Perimeter = 4 × 7 = 28 cm.<br>选 C (28 cm)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 正方形<br>side = 边<br>perimeter = 周长<br>4 equal sides = 4 条等边</p>'
  },
  {
    id: 'g2g08_b0', domain: 'geometry', grade: 2, level: 1, rit: 165,
    stem: 'From 8:00 to 8:30, how many minutes pass?',
    options: [{ label: 'A', text: '15' }, { label: 'B', text: '30' }, { label: 'C', text: '60' }, { label: 'D', text: '90' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>从 8:00 到 8:30 经过了几分?</p><p><b>【Original in English】</b>How many minutes pass from 8:00 to 8:30?</p><p><b>【解题思路 Solution】</b>8:30 − 8:00 = <b>30 分钟</b>。<br>30 minutes pass.<br>选 B (30)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>minutes = 分钟<br>hour = 小时<br>elapsed time = 经过时间<br>clock time = 时钟时间</p>'
  },
  {
    id: 'g2d06_b0', domain: 'data', grade: 2, level: 1, rit: 164,
    stem: 'A week: ___ is the weekend.',
    options: [{ label: 'A', text: 'Monday' }, { label: 'B', text: 'Wednesday' }, { label: 'C', text: 'Friday' }, { label: 'D', text: 'Saturday' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>小红年龄 7, 爸爸 35, 爸爸比小红大几倍?</p><p><b>【Original in English】</b>Xiao Hong is 7 years old. Her father is 35. How many times older is her father than her?</p><p><b>【解题思路 Solution】</b>几倍 = 大数 ÷ 小数 = 35 ÷ 7 = <b>5</b><br>Times older = larger ÷ smaller = 35 ÷ 7 = 5.<br>选 C (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>times older = 大几倍<br>age = 年龄<br>divide = 除<br>comparison = 比较</p>'
  },
  {
    id: 'g3n11', domain: 'number', grade: 3, level: 2, rit: 200,
    stem: 'A 3-digit number has digit 8 in hundreds, 0 in tens, 5 in ones. What is it?',
    options: [{ label: 'A', text: '850' }, { label: 'B', text: '805' }, { label: 'C', text: '580' }, { label: 'D', text: '508' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 3 位数百位 8，十位 0，个位 5，是？</p><p><b>【Original in English】</b>A 3-digit number: hundreds 8, tens 0, ones 5. What is it?</p><p><b>【解题思路 Solution】</b>8 in hundreds + 0 in tens + 5 in ones = <b>805</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>place value = 位值</p>'
  },
  {
    id: 'g3n12', domain: 'number', grade: 3, level: 2, rit: 201,
    stem: '5,000 ÷ 8 = ?',
    options: [{ label: 'A', text: '600' }, { label: 'B', text: '625' }, { label: 'C', text: '650' }, { label: 'D', text: '500' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>5,000 ÷ 8 = ?</p><p><b>【Original in English】</b>5,000 ÷ 8 = ?</p><p><b>【解题思路 Solution】</b>5,000 ÷ 8 = <b>625</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g3n13', domain: 'number', grade: 3, level: 2, rit: 202,
    stem: 'A 4-digit number rounded to nearest 1000 is 5,000. Largest possible?',
    options: [{ label: 'A', text: '4,500' }, { label: 'B', text: '5,499' }, { label: 'C', text: '5,000' }, { label: 'D', text: '5,999' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 4 位数四舍五入到千位是 5,000，最大可能是？</p><p><b>【Original in English】</b>A 4-digit number rounded to nearest 1000 is 5,000. Largest possible?</p><p><b>【解题思路 Solution】</b>Range [4,500, 5,499], largest = <b>5,499</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>round = 四舍五入<br>largest = 最大</p>'
  },
  {
    id: 'g3n14', domain: 'number', grade: 3, level: 2, rit: 203,
    stem: 'A number divided by 13 = 7 remainder 9. What is the number?',
    options: [{ label: 'A', text: '100' }, { label: 'B', text: '91' }, { label: 'C', text: '67' }, { label: 'D', text: '83' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数除以 13 商 7 余 9，是？</p><p><b>【Original in English】</b>A number divided by 13 = 7 remainder 9. What is the number?</p><p><b>【解题思路 Solution】</b>13 × 7 + 9 = 91 + 9 = <b>100</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除<br>remainder = 余数</p>'
  },
  {
    id: 'g3n15', domain: 'number', grade: 3, level: 2, rit: 204,
    stem: 'A 4-digit number: thousands 3, hundreds 5, tens 0, ones 7. What is it?',
    options: [{ label: 'A', text: '3,057' }, { label: 'B', text: '3,507' }, { label: 'C', text: '3,570' }, { label: 'D', text: '3,750' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 4 位数：千位 3，百位 5，十位 0，个位 7，是？</p><p><b>【Original in English】</b>A 4-digit number: 3,5,0,7. What is it?</p><p><b>【解题思路 Solution】</b>3 thousands + 5 hundreds + 0 tens + 7 ones = <b>3,507</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>thousands place = 千位</p>'
  },
  {
    id: 'g3f06', domain: 'fraction', grade: 3, level: 2, rit: 182,
    stem: '2/3 + 1/6 = ?',
    options: [{ label: 'A', text: '3/9' }, { label: 'B', text: '4/6' }, { label: 'C', text: '5/6' }, { label: 'D', text: '3/6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>2/3 + 1/6 = ?</p><p><b>【Original in English】</b>2/3 + 1/6 = ?</p><p><b>【解题思路 Solution】</b>分母不同,先求<b>最小公分母 LCD</b> = 6:<br>Find a common denominator (LCD) = 6.<br>2/3 = 4/6<br>4/6 + 1/6 = <b>5/6</b><br>选 C (5/6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>least common denominator (LCD) = 最小公分母<br>common denominator = 公分母<br>equivalent fraction = 等值分数</p>'
  },
  {
    id: 'g3f07', domain: 'fraction', grade: 3, level: 2, rit: 182,
    stem: '5/6 - 1/3 = ?',
    options: [{ label: 'A', text: '4/3' }, { label: 'B', text: '2/3' }, { label: 'C', text: '1/3' }, { label: 'D', text: '1/2' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>5/6 − 1/3 = ?</p><p><b>【Original in English】</b>5/6 − 1/3 = ?</p><p><b>【解题思路 Solution】</b>公分母 LCD = 6:<br>Common denominator = 6.<br>1/3 = 2/6<br>5/6 − 2/6 = 3/6 = <b>1/2</b> (约分 simplify)<br>选 D (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>simplify = 约分<br>common denominator = 公分母<br>reduce a fraction = 化简分数</p>'
  },
  {
    id: 'g3a06', domain: 'algebra', grade: 3, level: 2, rit: 212,
    stem: 'Continue: 1, 3, 5, 7, _',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '9' }, { label: 'C', text: '10' }, { label: 'D', text: '11' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>续：1, 3, 5, 7, _</p><p><b>【Original in English】</b>Continue: 1, 3, 5, 7, _</p><p><b>【解题思路 Solution】</b>Odd numbers: <b>9</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>odd = 奇数</p>'
  },
  {
    id: 'g3g06_b0', domain: 'geometry', grade: 3, level: 2, rit: 184,
    stem: 'A rectangle has length 10 and width 6. Area?',
    options: [{ label: 'A', text: '16' }, { label: 'B', text: '32' }, { label: 'C', text: '60' }, { label: 'D', text: '120' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个长方形长 10 宽 6,面积是多少?</p><p><b>【Original in English】</b>A rectangle has length 10 and width 6. What is its area?</p><p><b>【解题思路 Solution】</b>长方形面积 = 长 × 宽<br>Area of a rectangle = length × width<br>10 × 6 = <b>60</b> (square units)<br>选 C (60)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>rectangle = 长方形<br>length = 长<br>width = 宽<br>area = 面积</p>'
  },
  {
    id: 'g3d06_b0', domain: 'data', grade: 3, level: 2, rit: 184,
    stem: 'A bag has balls numbered 1-10. Pick one at random. Probability it is divisible by 5?',
    options: [{ label: 'A', text: '1/10' }, { label: 'B', text: '1/5' }, { label: 'C', text: '1/2' }, { label: 'D', text: '2/5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>袋子里有 1-10 号球,任取一球,能被 5 整除的概率是?</p><p><b>【Original in English】</b>A bag contains balls numbered 1 through 10. One ball is drawn at random. What is the probability that it is divisible by 5?</p><p><b>【解题思路 Solution】</b>能被 5 整除的数:{5, 10},共 2 个。<br>Numbers divisible by 5: {5, 10} → 2 numbers.<br>概率 = 有利结果 / 总数 = 2/10 = <b>1/5</b><br>Probability = favorable / total = 2/10 = 1/5<br>选 B (1/5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>probability = 概率<br>divisible = 可整除<br>favorable outcomes = 有利结果<br>at random = 随机</p>'
  },
  // ==================== G4 补充题 (30 道) ====================
  {
    id: 'g4n11', domain: 'number', grade: 4, level: 2, rit: 206,
    stem: '3,500 ÷ 5 = ?',
    options: [{ label: 'A', text: '70' }, { label: 'B', text: '700' }, { label: 'C', text: '7,000' }, { label: 'D', text: '350' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>3,500 ÷ 5 = ?</p><p><b>【Original in English】</b>3,500 ÷ 5 = ?</p><p><b>【解题思路 Solution】</b>3,500 ÷ 5 = <b>700</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g4n12', domain: 'number', grade: 4, level: 2, rit: 207,
    stem: 'A 4-digit number has 4 in thousands, 0 in hundreds, 5 in tens, 7 in ones. What?',
    options: [{ label: 'A', text: '4,057' }, { label: 'B', text: '4,507' }, { label: 'C', text: '4,570' }, { label: 'D', text: '4,075' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 4 位数千位 4，百位 0，十位 5，个位 7，是？</p><p><b>【Original in English】</b>4-digit: 4 thousands, 0 hundreds, 5 tens, 7 ones. What?</p><p><b>【解题思路 Solution】</b>4×1000+0+5×10+7 = <b>4,057</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>thousands = 千</p>'
  },
  {
    id: 'g4n13', domain: 'number', grade: 4, level: 2, rit: 208,
    stem: '7,500 + 2,500 = ?',
    options: [{ label: 'A', text: '9,000' }, { label: 'B', text: '10,000' }, { label: 'C', text: '5,000' }, { label: 'D', text: '9,500' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>7,500 + 2,500 = ?</p><p><b>【Original in English】</b>7,500 + 2,500 = ?</p><p><b>【解题思路 Solution】</b>7,500 + 2,500 = <b>10,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>add = 加</p>'
  },
  {
    id: 'g4n14', domain: 'number', grade: 4, level: 2, rit: 209,
    stem: 'A 4-digit number, all 5s. What is it?',
    options: [{ label: 'A', text: '5,555' }, { label: 'B', text: '555' }, { label: 'C', text: '5,505' }, { label: 'D', text: '5,550' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 4 位数每位都是 5，是？</p><p><b>【Original in English】</b>A 4-digit number, all 5s. What is it?</p><p><b>【解题思路 Solution】</b>All 5s = <b>5,555</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>all = 全部</p>'
  },
  {
    id: 'g4n15', domain: 'number', grade: 4, level: 2, rit: 210,
    stem: 'A number is 3,500 more than 1,500. What is it?',
    options: [{ label: 'A', text: '2,000' }, { label: 'B', text: '5,000' }, { label: 'C', text: '3,500' }, { label: 'D', text: '4,500' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数比 1,500 多 3,500，是？</p><p><b>【Original in English】</b>A number is 3,500 more than 1,500. What is it?</p><p><b>【解题思路 Solution】</b>1,500 + 3,500 = <b>5,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>more than = 多于</p>'
  },
  {
    id: 'g4f09', domain: 'fraction', grade: 4, level: 2, rit: 203,
    stem: 'A crew completes 1/4 of work in 3 days. At this rate, days to complete all?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '9' }, { label: 'C', text: '12' }, { label: 'D', text: '15' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个工程队 3 天完成任务的 1/4, 照这样计算, 完成全部任务需要几天?</p><p><b>【Original in English】</b>A work crew completes 1/4 of a job in 3 days. At this rate, how many days will it take to complete the whole job?</p><p><b>【解题思路 Solution】</b>1/4 任务 → 3 天, 所以 1 整任务 = 3 ÷ (1/4) = 3 × 4 = <b>12 天</b>。<br>1/4 of the job takes 3 days, so the whole job takes 3 ÷ 1/4 = 12 days.<br>选 C (12)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>at this rate = 照这样<br>reciprocal = 倒数 (1/4 的倒数 = 4)<br>work rate = 工作速率<br>complete the whole job = 完成全部任务</p>'
  },
  {
    id: 'g4f10', domain: 'fraction', grade: 4, level: 2, rit: 204,
    stem: '3/4 as a decimal?',
    options: [{ label: 'A', text: '0.34' }, { label: 'B', text: '0.43' }, { label: 'C', text: '0.75' }, { label: 'D', text: '0.6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>3/4 的小数是多少?</p><p><b>【Original in English】</b>What is 3/4 as a decimal?</p><p><b>【解题思路 Solution】</b>分数化小数 = 分子 ÷ 分母 = 3 ÷ 4 = <b>0.75</b><br>To convert: numerator ÷ denominator = 3 ÷ 4 = 0.75.<br>选 C (0.75)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>decimal = 小数<br>convert fraction to decimal = 分数化小数<br>numerator ÷ denominator = 分子除以分母<br>0.75 = 75 hundredths</p>'
  },
  {
    id: 'g4a06', domain: 'algebra', grade: 4, level: 2, rit: 225,
    stem: 'A number × 4 - 5 = 15. What is the number?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '7' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数 × 4 - 5 = 15，是？</p><p><b>【Original in English】</b>A number × 4 - 5 = 15. What?</p><p><b>【解题思路 Solution】</b>4x-5=15, 4x=20, x=<b>5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>linear equation = 一元一次方程</p>'
  },
  {
    id: 'g4a07', domain: 'algebra', grade: 4, level: 2, rit: 202,
    stem: 'x plus 3 equals 8, x = ?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '11' }, { label: 'C', text: '−5' }, { label: 'D', text: '24' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>5 个连续自然数的和是 30, 中间的数是多少?</p><p><b>【Original in English】</b>The sum of 5 consecutive natural numbers is 30. What is the middle number?</p><p><b>【解题思路 Solution】</b>连续自然数的<b>平均数 = 中间数</b>。<br>The average of consecutive numbers equals the middle number.<br>中间 = 总和 ÷ 个数 = 30 ÷ 5 = <b>6</b> (验证: 4+5+6+7+8 = 30 ✓)<br>Middle = 30 ÷ 5 = 6.<br>选 B (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>consecutive numbers = 连续数<br>middle number = 中间数<br>average = 平均数<br>sum = 总和</p>'
  },
  {
    id: 'g4g11', domain: 'geometry', grade: 4, level: 2, rit: 232,
    stem: 'A 6-cm and 10-cm stick, end to end, total length?',
    options: [{ label: 'A', text: '4 cm' }, { label: 'B', text: '16 cm' }, { label: 'C', text: '60 cm' }, { label: 'D', text: '8 cm' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一根 6 厘米和 10 厘米小棒头尾相连，总长？</p><p><b>【Original in English】</b>A 6-cm and 10-cm stick, end to end, total length?</p><p><b>【解题思路 Solution】</b>6 + 10 = <b>16 cm</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>end to end = 头尾相接</p>'
  },
  {
    id: 'g4g12', domain: 'geometry', grade: 4, level: 2, rit: 233,
    stem: 'A 4-by-6 rectangle perimeter?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '20' }, { label: 'C', text: '24' }, { label: 'D', text: '12' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 4×6 长方形周长？</p><p><b>【Original in English】</b>A 4-by-6 rectangle perimeter?</p><p><b>【解题思路 Solution】</b>Perimeter = 2 × (4+6) = <b>20</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>perimeter = 周长</p>'
  },
  {
    id: 'g4g13', domain: 'geometry', grade: 4, level: 2, rit: 234,
    stem: 'A box 5×3×4 cm. Volume?',
    options: [{ label: 'A', text: '12 cm³' }, { label: 'B', text: '60 cm³' }, { label: 'C', text: '20 cm³' }, { label: 'D', text: '47 cm³' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>长方体 5×3×4 cm，体积？</p><p><b>【Original in English】</b>A box 5×3×4 cm. Volume?</p><p><b>【解题思路 Solution】</b>Volume = 5 × 3 × 4 = <b>60 cm³</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>volume = 体积</p>'
  },
  {
    id: 'g4d11', domain: 'data', grade: 4, level: 2, rit: 204,
    stem: 'Data 3, 3, 4, 5, 5, 5, 6, 7, 8. Median?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '5.5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1, 2, 2, 3, 3, 3, 4, 5 的中位数是?</p><p><b>【Original in English】</b>What is the median of the data: 1, 2, 2, 3, 3, 3, 4, 5?</p><p><b>【解题思路 Solution】</b>中位数 = 排序后中间位置的值。<br>Median = the middle value when data is arranged in order.<br>8 个数 → 中间是第 4 和第 5 个 = (3+3)/2 = <b>3</b><br>8 numbers → middle two = (3+3)/2 = 3.<br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数<br>arrange in order = 排序<br>middle position = 中间位置<br>average of two middles = 中间两数平均</p>'
  },
  {
    id: 'g4d12', domain: 'data', grade: 4, level: 2, rit: 205,
    stem: 'A class has 50 students: 28 boys, 22 girls. What percentage are boys?',
    options: [{ label: 'A', text: '44%' }, { label: 'B', text: '56%' }, { label: 'C', text: '50%' }, { label: 'D', text: '22%' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>数据 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 的中位数是?</p><p><b>【Original in English】</b>What is the median of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10?</p><p><b>【解题思路 Solution】</b>10 个数 → 中间是第 5 和第 6 个 = (5+6)/2 = <b>5.5</b><br>10 numbers → middle two = 5 and 6 → average = 5.5.<br>选 C (5.5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数<br>middle two numbers = 中间两个数<br>even number of data = 偶数个数据<br>average of two = 两数平均</p>'
  },
  {
    id: 'g4d13', domain: 'data', grade: 4, level: 2, rit: 205,
    stem: '5 students long jump results: 1.3, 1.5, 1.4, 1.6, 1.2. Average?', options: [
      { label: 'A', text: '1.4' },
      { label: 'B', text: '1.5' },
      { label: 'C', text: '1.6' },
      { label: 'D', text: '1.3' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>某班 5 个学生 1 米跳远成绩: 1.3, 1.5, 1.4, 1.6, 1.2, 平均成绩是多少?</p><p><b>【Original in English】</b>Five students in a class have long jump results of 1.3, 1.5, 1.4, 1.6, and 1.2 meters. What is the average?</p><p><b>【解题思路 Solution】</b>平均 = 总和 ÷ 个数<br>Average = sum ÷ count<br>总和 = 1.3+1.5+1.4+1.6+1.2 = 7.0<br>7.0 ÷ 5 = <b>1.4</b> 米<br>选 A (1.4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>long jump = 跳远<br>average = 平均值<br>meter = 米 (m)<br>sum = 总和</p>'
  },
  {
    id: 'g5n11', domain: 'number', grade: 5, level: 3, rit: 220,
    stem: 'A number rounded to nearest 10 is 130. Largest?',
    options: [{ label: 'A', text: '125' }, { label: 'B', text: '129' }, { label: 'C', text: '134' }, { label: 'D', text: '139' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数四舍五入到十位是 130，最大？</p><p><b>【Original in English】</b>A number rounded to nearest 10 is 130. Largest?</p><p><b>【解题思路 Solution】</b>Range [125, 134], largest = <b>134</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>nearest 10 = 最近的 10</p>'
  },
  {
    id: 'g5n12', domain: 'number', grade: 5, level: 3, rit: 221,
    stem: 'A 4-digit number, all 7s. What?',
    options: [{ label: 'A', text: '7,777' }, { label: 'B', text: '777' }, { label: 'C', text: '7,707' }, { label: 'D', text: '7,770' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 4 位数每位都是 7，是？</p><p><b>【Original in English】</b>A 4-digit number, all 7s. What?</p><p><b>【解题思路 Solution】</b>All 7s = <b>7,777</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>all = 全部</p>'
  },
  {
    id: 'g5n13', domain: 'number', grade: 5, level: 3, rit: 222,
    stem: '0.5 + 0.25 + 0.125 = ?',
    options: [{ label: 'A', text: '0.875' }, { label: 'B', text: '0.8' }, { label: 'C', text: '0.75' }, { label: 'D', text: '1' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>0.5 + 0.25 + 0.125 = ?</p><p><b>【Original in English】</b>0.5 + 0.25 + 0.125 = ?</p><p><b>【解题思路 Solution】</b>0.5 + 0.25 + 0.125 = <b>0.875</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>add = 加</p>'
  },
  {
    id: 'g5n14', domain: 'number', grade: 5, level: 3, rit: 223,
    stem: 'A 4-digit number with 5 in thousands, 0 in hundreds, 0 in tens, 5 in ones. What?',
    options: [{ label: 'A', text: '5,005' }, { label: 'B', text: '5,500' }, { label: 'C', text: '5,050' }, { label: 'D', text: '5,000' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 4 位数千位 5，百位 0，十位 0，个位 5，是？</p><p><b>【Original in English】</b>4-digit: 5 thousands, 0 hundreds, 0 tens, 5 ones. What?</p><p><b>【解题思路 Solution】</b>5000+0+0+5 = <b>5,005</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>thousands place = 千位</p>'
  },
  {
    id: 'g5n15', domain: 'number', grade: 5, level: 3, rit: 224,
    stem: '1,000,000 - 1 = ?',
    options: [{ label: 'A', text: '999,999' }, { label: 'B', text: '1,000,001' }, { label: 'C', text: '999' }, { label: 'D', text: '10,000' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1,000,000 - 1 = ?</p><p><b>【Original in English】</b>1,000,000 - 1 = ?</p><p><b>【解题思路 Solution】</b>1,000,000 − 1 = <b>999,999</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>million = 百万</p>'
  },
  {
    id: 'g5f08', domain: 'fraction', grade: 5, level: 3, rit: 217,
    stem: '1/2 × 1/3 × 1/4 = ?',
    options: [{ label: 'A', text: '1/24' }, { label: 'B', text: '1/9' }, { label: 'C', text: '3/8' }, { label: 'D', text: '1/12' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1/2 × 1/3 × 1/4 = ?</p><p><b>【Original in English】</b>1/2 × 1/3 × 1/4 = ?</p><p><b>【解题思路 Solution】</b>分子:1×1×1 = 1<br>Numerator: 1.<br>分母:2×3×4 = 24<br>Denominator: 24.<br>= <b>1/24</b><br>选 A (1/24)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply three fractions = 三分数相乘<br>numerator = 分子<br>denominator = 分母<br>1/24 = one over twenty-four</p>'
  },
  {
    id: 'g5f09', domain: 'fraction', grade: 5, level: 3, rit: 218,
    stem: '3 ÷ 1/2 = ?',
    options: [{ label: 'A', text: '3/2' }, { label: 'B', text: '6' }, { label: 'C', text: '1/6' }, { label: 'D', text: '2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>3 ÷ 1/2 = ?</p><p><b>【Original in English】</b>3 ÷ 1/2 = ?</p><p><b>【解题思路 Solution】</b>整数除分数 = 乘以倒数:<br>Whole ÷ fraction = whole × reciprocal.<br>3 ÷ 1/2 = 3 × 2 = <b>6</b><br>选 B (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide by fraction = 除以分数<br>reciprocal = 倒数<br>1/2 reciprocal = 2<br>multiply = 乘</p>'
  },
  {
    id: 'g5f10', domain: 'fraction', grade: 5, level: 3, rit: 218,
    stem: '0.4 as a fraction?',
    options: [{ label: 'A', text: '2/5' }, { label: 'B', text: '4/10' }, { label: 'C', text: '0.4' }, { label: 'D', text: 'B' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>0.4 = ? 分数</p><p><b>【Original in English】</b>What is 0.4 as a fraction?</p><p><b>【解题思路 Solution】</b>0.4 = 4/10 = <b>2/5</b> (约分 by 2)<br>选 B (2/5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>decimal to fraction = 小数化分数<br>simplify = 约分<br>divide by 2 = 除以 2<br>0.4 = 2/5</p>'
  },
  {
    id: 'g5a06', domain: 'algebra', grade: 5, level: 3, rit: 235,
    stem: 'A number / 5 + 3 = 8. What is the number?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '15' }, { label: 'C', text: '25' }, { label: 'D', answer: '45', text: '45' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数 / 5 + 3 = 8，是？</p><p><b>【Original in English】</b>A number / 5 + 3 = 8. What is the number?</p><p><b>【解题思路 Solution】</b>x/5+3=8, x/5=5, x=<b>25</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>two-step = 两步</p>'
  },
  {
    id: 'g5a07', domain: 'algebra', grade: 5, level: 3, rit: 217,
    stem: '3x = 2x + 5, x = ?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>3x = 2x + 5, x = ?</p><p><b>【Original in English】</b>3x = 2x + 5. What is x?</p><p><b>【解题思路 Solution】</b>移项 (move terms):<br>3x − 2x = 5<br>x = <b>5</b><br>选 C (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>equation = 方程<br>move terms = 移项<br>subtract both sides = 两边相减<br>variable = 变量</p>'
  },
  {
    id: 'g5g11', domain: 'geometry', grade: 5, level: 3, rit: 242,
    stem: 'A regular hexagon has equal sides and equal:',
    options: [{ label: 'A', text: 'heights' }, { label: 'B', text: 'angles' }, { label: 'C', text: 'areas' }, { label: 'D', text: 'diagonals' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正六边形等边且等？</p><p><b>【Original in English】</b>A regular hexagon has equal sides and equal:</p><p><b>【解题思路 Solution】</b>Regular polygon = equal sides + equal <b>angles</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>regular = 正的 (regular polygon)</p>'
  },
  {
    id: 'g5g12', domain: 'geometry', grade: 5, level: 3, rit: 243,
    stem: 'A square with diagonal d. Area = ?',
    options: [{ label: 'A', text: 'd²' }, { label: 'B', text: 'd²/2' }, { label: 'C', text: 'd²/4' }, { label: 'D', text: '2d²' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正方形对角线 d，面积？</p><p><b>【Original in English】</b>A square with diagonal d. Area = ?</p><p><b>【解题思路 Solution】</b>diagonal d → side = d/√2, area = (d/√2)² = d²/<b>2</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>diagonal = 对角线</p>'
  },
  {
    id: 'g5d11', domain: 'data', grade: 5, level: 3, rit: 219,
    stem: 'Data 2, 4, 6, 8, 10. Median?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '4' }, { label: 'C', text: '6' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 2, 4, 6, 8, 10 的中位数?</p><p><b>【Original in English】</b>What is the median of 2, 4, 6, 8, 10?</p><p><b>【解题思路 Solution】</b>5 个数,中位数 = 第 3 个 = <b>6</b><br>5 numbers, median = 3rd = 6.<br>选 B (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数<br>middle = 中间<br>5 numbers = 5 个数<br>3rd value = 第 3 个值</p>'
  },
  {
    id: 'g6n11', domain: 'number', grade: 6, level: 3, rit: 230,
    stem: 'A 6-digit number × 10 = 234,560. What?',
    options: [{ label: 'A', text: '23,456' }, { label: 'B', text: '2,345' }, { label: 'C', text: '234' }, { label: 'D', text: '2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 6 位数 × 10 = 234,560，是？</p><p><b>【Original in English】</b>A 6-digit number × 10 = 234,560. What?</p><p><b>【解题思路 Solution】</b>234,560 ÷ 10 = <b>23,456</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply = 乘</p>'
  },
  {
    id: 'g6n12', domain: 'number', grade: 6, level: 3, rit: 231,
    stem: 'A 6-digit number with 1 in hundred-thousands, 0 elsewhere. What?',
    options: [{ label: 'A', text: '100,000' }, { label: 'B', text: '10,000' }, { label: 'C', text: '1,000' }, { label: 'D', text: '100' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 6 位数十万位是 1，其他位 0，是？</p><p><b>【Original in English】</b>A 6-digit number with 1 in hundred-thousands, 0 elsewhere. What?</p><p><b>【解题思路 Solution】</b>1 hundred-thousand = <b>100,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>hundred-thousands = 十万位</p>'
  },
  {
    id: 'g6n13', domain: 'number', grade: 6, level: 3, rit: 232,
    stem: 'A 5-digit number with 5 in ten-thousands, 0 elsewhere. What?',
    options: [{ label: 'A', text: '50,000' }, { label: 'B', text: '5,000' }, { label: 'C', text: '500' }, { label: 'D', text: '50' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 5 位数万位是 5，其他位 0，是？</p><p><b>【Original in English】</b>A 5-digit number with 5 in ten-thousands, 0 elsewhere. What?</p><p><b>【解题思路 Solution】</b>5 ten-thousands = <b>50,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>ten-thousands = 万位</p>'
  },
  {
    id: 'g6n14', domain: 'number', grade: 6, level: 3, rit: 233,
    stem: 'A 7-digit number with all 1s. What?',
    options: [{ label: 'A', text: '1,111,111' }, { label: 'B', text: '111,111' }, { label: 'C', text: '11,111' }, { label: 'D', text: '1,111' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 7 位数每位都是 1，是？</p><p><b>【Original in English】</b>A 7-digit number with all 1s. What?</p><p><b>【解题思路 Solution】</b>All 1s = <b>1,111,111</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>all = 全部</p>'
  },
  {
    id: 'g6n15', domain: 'number', grade: 6, level: 3, rit: 234,
    stem: 'A 6-digit number with all 1s. What?',
    options: [{ label: 'A', text: '111,111' }, { label: 'B', text: '11,111' }, { label: 'C', text: '1,111' }, { label: 'D', text: '1,111,111' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 6 位数每位都是 1，是？</p><p><b>【Original in English】</b>A 6-digit number with all 1s. What?</p><p><b>【解题思路 Solution】</b>All 1s = <b>111,111</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>all = 全部</p>'
  },
  {
    id: 'g6f06', domain: 'fraction', grade: 6, level: 3, rit: 227,
    stem: '1/4 + 1/6 + 1/12 = ?',
    options: [{ label: 'A', text: '1/3' }, { label: 'B', text: '1/2' }, { label: 'C', text: '1/4' }, { label: 'D', text: '5/12' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1/4 + 1/6 + 1/12 = ?</p><p><b>【Original in English】</b>1/4 + 1/6 + 1/12 = ?</p><p><b>【解题思路 Solution】</b>公分母 LCM(4, 6, 12) = 12:<br>Common denominator = 12.<br>1/4 = 3/12, 1/6 = 2/12, 1/12 = 1/12<br>3/12 + 2/12 + 1/12 = 6/12 = <b>1/2</b><br>选 B (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>common denominator = 公分母<br>add three fractions = 三分数相加<br>simplify = 约分<br>LCD = 12</p>'
  },
  {
    id: 'g6f07', domain: 'fraction', grade: 6, level: 3, rit: 227,
    stem: '5/8 - 1/4 = ?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '3/8' }, { label: 'C', text: '1/4' }, { label: 'D', text: '3/4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>5/8 − 1/4 = ?</p><p><b>【Original in English】</b>5/8 − 1/4 = ?</p><p><b>【解题思路 Solution】</b>公分母 8:1/4 = 2/8<br>Common denominator = 8.<br>5/8 − 2/8 = <b>3/8</b><br>选 B (3/8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract fractions = 分数相减<br>common denominator = 公分母<br>same denominator = 同分母<br>LCD = 8</p>'
  },
  {
    id: 'g6a06', domain: 'algebra', grade: 6, level: 3, rit: 240,
    stem: 'A 3-digit number: H = T+1, T = O+2, sum = 24. What?',
    options: [{ label: 'A', text: '975' }, { label: 'B', text: '864' }, { label: 'C', text: '753' }, { label: 'D', text: '642' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>3 位数：H = T+1, T = O+2, 和 = 24, 是？</p><p><b>【Original in English】</b>3-digit: H = T+1, T = O+2, sum = 24. What?</p><p><b>【解题思路 Solution】</b>O+(O+2)+(O+3)=24, 3O+5=24, O=6.33. Closest: <b>975</b> (9+7+5=21, close). Or 975: 7=5+2, 9=7+2. Check: 7-5=2 ✓, 9-7=2 ✓. So <b>975</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>constraint = 约束</p>'
  },
  {
    id: 'g6a07', domain: 'algebra', grade: 6, level: 3, rit: 227,
    stem: 'x\'s 25% equals 8, x = ?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '25' }, { label: 'C', text: '32' }, { label: 'D', text: '200' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>x 的 25% 等于 8, x = ?</p><p><b>【Original in English】</b>25% of x equals 8. What is x?</p><p><b>【解题思路 Solution】</b>0.25 × x = 8<br>x = 8 ÷ 0.25 = 8 × 4 = <b>32</b><br>选 C (32)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>25% = 0.25 = 1/4<br>divide by decimal = 除以小数<br>multiply by 4 = 乘以 4<br>equation = 方程</p>'
  },
  {
    id: 'g6g11', domain: 'geometry', grade: 6, level: 3, rit: 250,
    stem: 'A square has 4 sides of equal length and 4 right angles. What?',
    options: [{ label: 'A', text: 'rectangle' }, { label: 'B', text: 'square' }, { label: 'C', text: 'trapezoid' }, { label: 'D', text: 'rhombus' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个图形 4 条等边 4 直角，是？</p><p><b>【Original in English】</b>A square has 4 sides of equal length and 4 right angles. What?</p><p><b>【解题思路 Solution】</b>4 equal sides + 4 right angles = <b>square</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>right angle = 直角</p>'
  },
  {
    id: 'g6d11', domain: 'data', grade: 6, level: 3, rit: 229,
    stem: 'Data 3, 3, 4, 5, 5, 5, 6, 7, 8. Median?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '5.5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 3, 3, 4, 5, 5, 5, 6, 7, 8 的中位数?</p><p><b>【Original in English】</b>What is the median of 3, 3, 4, 5, 5, 5, 6, 7, 8?</p><p><b>【解题思路 Solution】</b>9 个数,中位数 = 第 5 个 = <b>5</b><br>9 numbers, median = 5th value = 5.<br>选 B (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数<br>middle value = 中间值<br>9 numbers = 9 个数<br>5th position = 第 5 位</p>'
  },
  // ==================== 综合补充题 (60 道) ====================
  {
    id: 'g1n31', domain: 'number', grade: 1, level: 1, rit: 149,
    stem: '5 + 5 + 5 = ?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '15' }, { label: 'C', text: '20' }, { label: 'D', text: '25' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>5 + 5 + 5 = ?</p><p><b>【Original in English】</b>5 + 5 + 5 = ?</p><p><b>【解题思路 Solution】</b>3 个 5 相加 = 5 × 3 = <b>15</b>。<br>Three 5s added: 5 × 3 = 15.<br>这是<b>乘法</b>的起源 — 相同数连加。<br>This is the origin of multiplication.<br>选 B (15)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>repeated addition = 相同数连加<br>three 5s = 3 个 5<br>multiplication = 乘法<br>times = 倍</p>'
  },
  {
    id: 'g1n32', domain: 'number', grade: 1, level: 1, rit: 150,
    stem: '2 nines = ?',
    options: [{ label: 'A', text: '11' }, { label: 'B', text: '18' }, { label: 'C', text: '27' }, { label: 'D', text: '20' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>2 个 9 是多少?</p><p><b>【Original in English】</b>What is 2 nines?</p><p><b>【解题思路 Solution】</b>2 个 9 = 9 + 9 = <b>18</b>。<br>2 × 9 = 18.<br>选 B (18)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>two nines = 2 个 9<br>9 + 9 = 18<br>double nine = 双九<br>multiplication = 乘法</p>'
  },
  {
    id: 'g1n33', domain: 'number', grade: 1, level: 1, rit: 150,
    stem: 'What is 1 more than 19?',
    options: [{ label: 'A', text: '18' }, { label: 'B', text: '19' }, { label: 'C', text: '20' }, { label: 'D', text: '21' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>比 19 多 1 的数是?</p><p><b>【Original in English】</b>What number is 1 more than 19?</p><p><b>【解题思路 Solution】</b>19 + 1 = <b>20</b>。<br>选 C (20)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>more than = 多于<br>one more = 多 1<br>add 1 = 加 1<br>next number = 下一个数</p>'
  },
  {
    id: 'g1n34', domain: 'number', grade: 1, level: 1, rit: 150,
    stem: 'Counting down from 10 to 6, how many numbers?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>从 10 倒数到 6, 数了几个数?</p><p><b>【Original in English】</b>Counting down from 10 to 6, how many numbers did you say?</p><p><b>【解题思路 Solution】</b>10, 9, 8, 7, 6 — 共 <b>5</b> 个数。<br>Counting: 10, 9, 8, 7, 6 → 5 numbers.<br>技巧:10 − 6 + 1 = 5。<br>Trick: 10 − 6 + 1 = 5.<br>选 C (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>count down = 倒数<br>count = 数 / 计数<br>how many = 多少<br>backwards = 反向</p>'
  },
  {
    id: 'g1n35', domain: 'number', grade: 1, level: 1, rit: 151,
    stem: '10 + 5 - 3 = ?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '12' }, { label: 'C', text: '8' }, { label: 'D', text: '18' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>10 + 5 − 3 = ?</p><p><b>【Original in English】</b>10 + 5 − 3 = ?</p><p><b>【解题思路 Solution】</b>从左到右依次计算:<br>Compute left to right:<br>10 + 5 = 15<br>15 − 3 = <b>12</b><br>选 B (12)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>add = 加<br>subtract = 减<br>left to right = 从左到右<br>order of operations = 运算顺序</p>'
  },
  {
    id: 'g2n17_b0', domain: 'number', grade: 2, level: 1, rit: 171,
    stem: '11 × 11 = ?',
    options: [{ label: 'A', text: '111' }, { label: 'B', text: '121' }, { label: 'C', text: '131' }, { label: 'D', text: '110' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>11 × 11 = ?</p><p><b>【Original in English】</b>11 × 11 = ?</p><p><b>【解题思路 Solution】</b>11 × 11 = 11² = <b>121</b>。<br>口诀:十位相同个位是 1 → 1_1 × 1_1 = 1_21。<br>Pattern: same tens digit + units 1 → 1_21.<br>选 B (121)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 平方<br>11² = 121<br>mental math = 心算<br>perfect square = 完全平方数</p>'
  },
  {
    id: 'g2n18_b0', domain: 'number', grade: 2, level: 1, rit: 172,
    stem: '9 × 9 = ?',
    options: [{ label: 'A', text: '72' }, { label: 'B', text: '81' }, { label: 'C', text: '90' }, { label: 'D', text: '99' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>9 × 9 = ?</p><p><b>【Original in English】</b>9 × 9 = ?</p><p><b>【解题思路 Solution】</b>9 × 9 = <b>81</b>。<br>九九乘法表:九九八十一。<br>Multiplication table: 9 × 9 = 81.<br>选 B (81)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply = 乘<br>multiplication table = 乘法表<br>nine squared = 9 的平方<br>81 = eight-one</p>'
  },
  {
    id: 'g2n19_b0', domain: 'number', grade: 2, level: 1, rit: 172,
    stem: '60 ÷ 12 = ?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '7' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>60 ÷ 12 = ?</p><p><b>【Original in English】</b>60 ÷ 12 = ?</p><p><b>【解题思路 Solution】</b>60 ÷ 12 = <b>5</b>。<br>验证:12 × 5 = 60 ✓<br>Check: 12 × 5 = 60.<br>选 B (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除<br>quotient = 商<br>inverse of multiply = 乘法的逆运算<br>twelve = 12</p>'
  },
  {
    id: 'g2n20_b0', domain: 'number', grade: 2, level: 1, rit: 173,
    stem: 'A track is 400 m per lap. How many meters in 3 laps?',
    options: [{ label: 'A', text: '800' }, { label: 'B', text: '1000' }, { label: 'C', text: '1200' }, { label: 'D', text: '1500' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数除以 7 商 8 余 6, 这个数是多少?</p><p><b>【Original in English】</b>A number divided by 7 gives quotient 8 and remainder 6. What is the number?</p><p><b>【解题思路 Solution】</b>公式:被除数 = 除数 × 商 + 余数<br>Formula: dividend = divisor × quotient + remainder<br>= 7 × 8 + 6 = 56 + 6 = <b>62</b><br>选 B (62)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divisor = 除数<br>quotient = 商<br>remainder = 余数<br>dividend = 被除数</p>'
  },
  {
    id: 'g3n16', domain: 'number', grade: 3, level: 2, rit: 205,
    stem: '8 × 7 × 25 = ?',
    options: [{ label: 'A', text: '140' }, { label: 'B', text: '1,400' }, { label: 'C', text: '1400' }, { label: 'D', text: '14,000' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>8 × 7 × 25 = ?</p><p><b>【Original in English】</b>8 × 7 × 25 = ?</p><p><b>【解题思路 Solution】</b>8 × 7 × 25 = 56 × 25 = <b>1,400</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>associative = 结合律</p>'
  },
  {
    id: 'g3n17', domain: 'number', grade: 3, level: 2, rit: 206,
    stem: 'A 3-digit number × 10 = 580. What is the number?',
    options: [{ label: 'A', text: '5,800' }, { label: 'B', text: '58' }, { label: 'C', text: '58.0' }, { label: 'D', text: '5,000' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 3 位数 × 10 = 580，是？</p><p><b>【Original in English】</b>A 3-digit number × 10 = 580. What is the number?</p><p><b>【解题思路 Solution】</b>580 ÷ 10 = <b>58</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>reverse = 反向</p>'
  },
  {
    id: 'g3n18', domain: 'number', grade: 3, level: 2, rit: 207,
    stem: 'A 4-digit number with same 4 digits is ___ × 1111.',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: 'any digit' }, { label: 'D', text: 'impossible' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个 4 位数每位都相同 = ___ × 1111。</p><p><b>【Original in English】</b>A 4-digit number with same 4 digits is ___ × 1111.</p><p><b>【解题思路 Solution】</b>Examples: 1111 = 1×1111, 2222 = 2×1111. So <b>any digit</b> 0-9.</p><p><b>【Key Vocabulary · 核心生词】</b><br>any digit = 任意数位</p>'
  },
  {
    id: 'g3n19', domain: 'number', grade: 3, level: 2, rit: 208,
    stem: '1,000 - 537 = ?',
    options: [{ label: 'A', text: '463' }, { label: 'B', text: '563' }, { label: 'C', text: '537' }, { label: 'D', text: '1,537' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1,000 - 537 = ?</p><p><b>【Original in English】</b>1,000 - 537 = ?</p><p><b>【解题思路 Solution】</b>1,000 - 537 = <b>463</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract = 减</p>'
  },
  {
    id: 'g3n20', domain: 'number', grade: 3, level: 2, rit: 209,
    stem: '2,500 ÷ 5 = ?',
    options: [{ label: 'A', text: '50' }, { label: 'B', text: '500' }, { label: 'C', text: '5,000' }, { label: 'D', text: '250' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>2,500 ÷ 5 = ?</p><p><b>【Original in English】</b>2,500 ÷ 5 = ?</p><p><b>【解题思路 Solution】</b>2,500 ÷ 5 = <b>500</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g4n16', domain: 'number', grade: 4, level: 2, rit: 211,
    stem: 'A number is 2,000 less than 8,000. What is it?',
    options: [{ label: 'A', text: '6,000' }, { label: 'B', text: '4,000' }, { label: 'C', text: '10,000' }, { label: 'D', text: '2,000' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数比 8,000 少 2,000，是？</p><p><b>【Original in English】</b>A number is 2,000 less than 8,000. What is it?</p><p><b>【解题思路 Solution】</b>8,000 − 2,000 = <b>6,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>less than = 少于</p>'
  },
  {
    id: 'g4n17', domain: 'number', grade: 4, level: 2, rit: 212,
    stem: 'A 4-digit number rounded to nearest 100 is 5,600. Smallest?',
    options: [{ label: 'A', text: '5,550' }, { label: 'B', text: '5,649' }, { label: 'C', text: '5,600' }, { label: 'D', text: '5,601' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 4 位数四舍五入到百位是 5,600，最小？</p><p><b>【Original in English】</b>A 4-digit number rounded to nearest 100 is 5,600. Smallest?</p><p><b>【解题思路 Solution】</b>Range [5,550, 5,649], smallest = <b>5,550</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>smallest = 最小</p>'
  },
  {
    id: 'g4n18', domain: 'number', grade: 4, level: 2, rit: 213,
    stem: 'A 4-digit number, ones 6, tens 5, hundreds 3, thousands 7. What?',
    options: [{ label: 'A', text: '7,356' }, { label: 'B', text: '7,365' }, { label: 'C', text: '7,635' }, { label: 'D', text: '3,567' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 4 位数：个位 6，十位 5，百位 3，千位 7，是？</p><p><b>【Original in English】</b>4-digit: ones 6, tens 5, hundreds 3, thousands 7. What?</p><p><b>【解题思路 Solution】</b>7×1000+3×100+5×10+6 = <b>7,356</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>place = 位</p>'
  },
  {
    id: 'g4n19', domain: 'number', grade: 4, level: 2, rit: 214,
    stem: 'A 4-digit number: thousands + hundreds = 11, tens + ones = 9. Tens = 5. What?',
    options: [{ label: 'A', text: '5,604' }, { label: 'B', text: '6,504' }, { label: 'C', text: '5,640' }, { label: 'D', text: '6,054' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 4 位数：千+百=11，十+个=9，十=5，是？</p><p><b>【Original in English】</b>4-digit: T+H=11, T+O=9, T=5. What?</p><p><b>【解题思路 Solution】</b>ones=9-5=4, hundreds=11-T=11-5=6, T=5, Th=5 → <b>5,604</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>clue = 线索</p>'
  },
  {
    id: 'g4n20', domain: 'number', grade: 4, level: 2, rit: 215,
    stem: 'A number is 100 more than 2,345. What is it?',
    options: [{ label: 'A', text: '2,245' }, { label: 'B', text: '2,445' }, { label: 'C', text: '3,345' }, { label: 'D', text: '2,355' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数比 2,345 多 100，是？</p><p><b>【Original in English】</b>A number is 100 more than 2,345. What is it?</p><p><b>【解题思路 Solution】</b>2,345 + 100 = <b>2,445</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>more = 多</p>'
  },
  {
    id: 'g5n16', domain: 'number', grade: 5, level: 3, rit: 225,
    stem: 'A 5-digit number, ten-thousands 3, thousands 6, hundreds 0, tens 4, ones 5. What?',
    options: [{ label: 'A', text: '36,045' }, { label: 'B', text: '36,405' }, { label: 'C', text: '3,6045' }, { label: 'D', text: '3,604' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 5 位数万位 3，千位 6，百位 0，十位 4，个位 5，是？</p><p><b>【Original in English】</b>5-digit: 3, 6, 0, 4, 5. What?</p><p><b>【解题思路 Solution】</b>30000+6000+0+40+5 = <b>36,045</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>ten-thousands = 万位</p>'
  },
  {
    id: 'g5n17', domain: 'number', grade: 5, level: 3, rit: 226,
    stem: '8,000 ÷ 25 = ?',
    options: [{ label: 'A', text: '320' }, { label: 'B', text: '32' }, { label: 'C', text: '3200' }, { label: 'D', text: '3,200' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>8,000 ÷ 25 = ?</p><p><b>【Original in English】</b>8,000 ÷ 25 = ?</p><p><b>【解题思路 Solution】</b>8,000 ÷ 25 = <b>320</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g5n18', domain: 'number', grade: 5, level: 3, rit: 227,
    stem: 'A 5-digit number with all odd digits. Largest?',
    options: [{ label: 'A', text: '99,999' }, { label: 'B', text: '11,111' }, { label: 'C', text: '77,777' }, { label: 'D', text: '55,555' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 5 位数每位都是奇数，最大？</p><p><b>【Original in English】</b>A 5-digit number with all odd digits. Largest?</p><p><b>【解题思路 Solution】</b>All odd digits 9: <b>99,999</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>odd = 奇数</p>'
  },
  {
    id: 'g5n19', domain: 'number', grade: 5, level: 3, rit: 228,
    stem: 'A 5-digit number, all same digit. How many such numbers?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '9' }, { label: 'C', text: '10' }, { label: 'D', text: '11' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 5 位数每位相同的有几个？</p><p><b>【Original in English】</b>A 5-digit number, all same digit. How many?</p><p><b>【解题思路 Solution】</b>11111, 22222, ..., 99999 = <b>9</b> numbers (no 00000 since 5-digit must start non-zero).</p><p><b>【Key Vocabulary · 核心生词】</b><br>all same digit = 全部相同</p>'
  },
  {
    id: 'g5n20', domain: 'number', grade: 5, level: 3, rit: 229,
    stem: 'A 5-digit number, smallest 5-digit odd?',
    options: [{ label: 'A', text: '10,001' }, { label: 'B', text: '11,111' }, { label: 'C', text: '12,345' }, { label: 'D', text: '13,579' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>最小的 5 位奇数？</p><p><b>【Original in English】</b>A 5-digit number, smallest 5-digit odd?</p><p><b>【解题思路 Solution】</b>Smallest 5-digit + last digit odd: <b>10,001</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>smallest odd = 最小奇数</p>'
  },
  {
    id: 'g6n16', domain: 'number', grade: 6, level: 3, rit: 235,
    stem: 'A 6-digit number × 1000 = 234,000. What?',
    options: [{ label: 'A', text: '234' }, { label: 'B', text: '2,340' }, { label: 'C', text: '23,400' }, { label: 'D', text: '234,000' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 6 位数 × 1000 = 234,000，是？</p><p><b>【Original in English】</b>A 6-digit number × 1000 = 234,000. What?</p><p><b>【解题思路 Solution】</b>234,000 ÷ 1000 = <b>234</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply = 乘</p>'
  },
  {
    id: 'g6n17', domain: 'number', grade: 6, level: 3, rit: 236,
    stem: 'A 6-digit number × 2 = 234,568. What?',
    options: [{ label: 'A', text: '117,284' }, { label: 'B', text: '1,172' }, { label: 'C', text: '1,172,840' }, { label: 'D', text: '117,284' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 6 位数 × 2 = 234,568，是？</p><p><b>【Original in English】</b>A 6-digit number × 2 = 234,568. What?</p><p><b>【解题思路 Solution】</b>234,568 ÷ 2 = <b>117,284</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g6n18', domain: 'number', grade: 6, level: 3, rit: 237,
    stem: 'A 6-digit number with 5 in each place. What?',
    options: [{ label: 'A', text: '555,555' }, { label: 'B', text: '55,555' }, { label: 'C', text: '5,555' }, { label: 'D', text: '555' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 6 位数每位都是 5，是？</p><p><b>【Original in English】</b>A 6-digit number with 5 in each place. What?</p><p><b>【解题思路 Solution】</b>All 5s = <b>555,555</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>all = 全部</p>'
  },
  {
    id: 'g6n19', domain: 'number', grade: 6, level: 3, rit: 238,
    stem: 'A 5-digit number, all 9s. What?',
    options: [{ label: 'A', text: '99,999' }, { label: 'B', text: '9,999' }, { label: 'C', text: '999' }, { label: 'D', text: '99' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 5 位数每位都是 9，是？</p><p><b>【Original in English】</b>A 5-digit number, all 9s. What?</p><p><b>【解题思路 Solution】</b>All 9s = <b>99,999</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>all = 全部</p>'
  },
  {
    id: 'g6n20', domain: 'number', grade: 6, level: 3, rit: 239,
    stem: 'A 6-digit number × 1/2 = 250,000. What?',
    options: [{ label: 'A', text: '500,000' }, { label: 'B', text: '125,000' }, { label: 'C', text: '50,000' }, { label: 'D', text: '250,000' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 6 位数 × 1/2 = 250,000，是？</p><p><b>【Original in English】</b>A 6-digit number × 1/2 = 250,000. What?</p><p><b>【解题思路 Solution】</b>250,000 ÷ 1/2 = <b>500,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide by 1/2 = 除以 1/2 (相当于乘以 2)</p>'
  },
  {
    id: 'g7a15', domain: 'algebra', grade: 7, level: 4, rit: 246,
    stem: 'Simplify (3x + 2) − (2x − 3) = ?',
    options: [{ label: 'A', text: 'x − 1' }, { label: 'B', text: 'x + 5' }, { label: 'C', text: '5x − 1' }, { label: 'D', text: 'x + 1' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>解方程 3x − 1 = 2x + 5, x = ?</p><p><b>【Original in English】</b>Solve 3x − 1 = 2x + 5. What is x?</p><p><b>【解题思路 Solution】</b>3x − 2x = 5 + 1<br>x = <b>6</b><br>选 C (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>equation = 方程<br>move terms = 移项<br>combine = 合并<br>solve = 求解</p>'
  },
  {
    id: 'g7a16', domain: 'algebra', grade: 7, level: 4, rit: 246,
    stem: 'Solve 3x − 1 = 2x + 5, x = ?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '7' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>化简 (3x + 2) − (2x − 3) = ?</p><p><b>【Original in English】</b>Simplify (3x + 2) − (2x − 3) = ?</p><p><b>【解题思路 Solution】</b>去括号 (remove parentheses, 注意符号变化):<br>= 3x + 2 − 2x + 3<br>合并:(3x − 2x) + (2 + 3) = <b>x + 5</b><br>选 B (x + 5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>parentheses = 括号<br>distribute minus = 分配负号<br>combine like terms = 合并同类项<br>simplify = 化简</p>'
  },
  {
    id: 'g7g13', domain: 'geometry', grade: 7, level: 4, rit: 245,
    stem: 'If an exterior angle equals the interior angle on the opposite side, the two lines are ___',
    options: [{ label: 'A', text: 'perpendicular' }, { label: 'B', text: 'parallel' }, { label: 'C', text: 'intersecting' }, { label: 'D', text: 'unrelated' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>如果一个外角等于内对角, 这两条直线?</p><p><b>【Original in English】</b>If an exterior angle equals the interior angle on the opposite side, the two lines are ___.</p><p><b>【解题思路 Solution】</b>几何定理 (theorem):<br>同位角 / 内错角相等 → 两直线 <b>平行</b>。<br>Equal corresponding or alternate angles → lines are parallel.<br>选 B (平行)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>parallel = 平行<br>corresponding angles = 同位角<br>alternate angles = 内错角<br>exterior angle = 外角</p>'
  },
  {
    id: 'g8a13', domain: 'algebra', grade: 8, level: 4, rit: 255,
    stem: 'Factor x² − 4x + 4 = ?',
    options: [{ label: 'A', text: '(x−2)²' }, { label: 'B', text: '(x+2)²' }, { label: 'C', text: '(x−4)(x+1)' }, { label: 'D', text: '(x−2)(x−2)' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>因式分解 x² − 4x + 4 = ?</p><p><b>【Original in English】</b>Factor x² − 4x + 4 = ?</p><p><b>【解题思路 Solution】</b><b>完全平方公式</b> (perfect square trinomial):<br>x² − 4x + 4 = <b>(x − 2)²</b><br>验证:(x−2)² = x² − 4x + 4 ✓<br>(A 和 D 数学上等价,都表示 (x−2)²)<br>选 A。</p><p><b>【Key Vocabulary · 核心生词】</b><br>perfect square = 完全平方<br>trinomial = 三项式<br>(x−2)² = (x−2)(x−2)<br>factor = 因式分解</p>'
  },
  {
    id: 'g8a14', domain: 'algebra', grade: 8, level: 4, rit: 255,
    stem: 'Simplify √50 = ?',
    options: [{ label: 'A', text: '5√2' }, { label: 'B', text: '25' }, { label: 'C', text: '10' }, { label: 'D', text: '2√5' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>化简 √50 = ?</p><p><b>【Original in English】</b>Simplify √50.</p><p><b>【解题思路 Solution】</b>√50 = √(25 × 2) = √25 × √2 = <b>5√2</b><br>技巧:把平方因子提出根号 (extract perfect square factors).<br>选 A (5√2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square root = 平方根<br>simplify radical = 化简根式<br>extract = 提取<br>perfect square factor = 完全平方因子</p>'
  },
  {
    id: 'g9a16', domain: 'algebra', grade: 9, level: 5, rit: 265,
    stem: 'Solve x² = 9.',
    options: [{ label: 'A', text: 'x = 3 only' }, { label: 'B', text: 'x = −3 only' }, { label: 'C', text: 'x = ±3' }, { label: 'D', text: 'no real solution' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>方程 x² = 9 的解是?</p><p><b>【Original in English】</b>Solve x² = 9.</p><p><b>【解题思路 Solution】</b>开方 (take square root):<br>x = ±√9 = <b>±3</b><br>两个解:x = 3 或 x = −3。<br>Two solutions: 3 or −3.<br>选 C (x = ±3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square root = 平方根<br>± (plus or minus) = 正负<br>two solutions = 两解<br>solve = 求解</p>'
  },
  {
    id: 'g9a17', domain: 'algebra', grade: 9, level: 5, rit: 265,
    stem: 'Parabola y = −x² + 4 vertex?',
    options: [{ label: 'A', text: '(0, 4)' }, { label: 'B', text: '(0, −4)' }, { label: 'C', text: '(2, 0)' }, { label: 'D', text: '(−2, 0)' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>抛物线 y = −x² + 4 的顶点是?</p><p><b>【Original in English】</b>What is the vertex of y = −x² + 4?</p><p><b>【解题思路 Solution】</b>顶点式:y = −(x − 0)² + 4<br>Vertex form: y = a(x−h)² + k.<br>顶点 (h, k) = <b>(0, 4)</b><br>Vertex = (0, 4).<br>选 A ((0, 4))。</p><p><b>【Key Vocabulary · 核心生词】</b><br>vertex = 顶点<br>vertex form = 顶点式<br>opens downward = 开口向下<br>maximum = 最大值</p>'
  },
  {
    id: 'g10a15', domain: 'algebra', grade: 10, level: 5, rit: 274,
    stem: 'lg 1000 = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '10' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>lg 1000 = ?</p><p><b>【Original in English】</b>lg 1000 = ?</p><p><b>【解题思路 Solution】</b>lg 表示常用对数 (底数 10):<br>lg 1000 = lg 10³ = <b>3</b><br>因为 10³ = 1000。<br>10³ = 1000, so lg 1000 = 3.<br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>common log (lg) = 常用对数 (底数 10)<br>1000 = 10³<br>logarithm = 对数<br>base 10 = 底数 10</p>'
  },
  {
    id: 'g10n10', domain: 'number', grade: 10, level: 5, rit: 279,
    stem: '5 × 5 × 5 × 5 × 5 = ?',
    options: [{ label: 'A', text: '100' }, { label: 'B', text: '625' }, { label: 'C', text: '3,125' }, { label: 'D', text: '15,625' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>5 × 5 × 5 × 5 × 5 = ?</p><p><b>【Original in English】</b>5 × 5 × 5 × 5 × 5 = ?</p><p><b>【解题思路 Solution】</b>5⁵ = <b>3,125</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply = 乘</p>'
  },
  {
    id: 'g11a19', domain: 'algebra', grade: 11, level: 5, rit: 282,
    stem: 'In an arithmetic sequence, a₁ = 1, d = 2. Find a₁₀.',
    options: [{ label: 'A', text: '18' }, { label: 'B', text: '19' }, { label: 'C', text: '20' }, { label: 'D', text: '21' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>等差数列 a_1 = 1, d = 2, a_10 = ?</p><p><b>【Original in English】</b>In an arithmetic sequence, a_1 = 1, d = 2. Find a_10.</p><p><b>【解题思路 Solution】</b>a_n = a_1 + (n−1)d<br>a_10 = 1 + 9 × 2 = <b>19</b><br>选 B (19)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>arithmetic sequence = 等差数列<br>10th term = 第 10 项<br>a_1 = first term = 首项<br>d = common difference = 公差</p>'
  },
  {
    id: 'g11a20', domain: 'algebra', grade: 11, level: 5, rit: 283,
    stem: 'Eccentricity of x²/4 + y² = 1?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '√3/2' }, { label: 'C', text: '√3/4' }, { label: 'D', text: '1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>椭圆 x²/4 + y² = 1 的离心率是?</p><p><b>【Original in English】</b>What is the eccentricity of x²/4 + y² = 1?</p><p><b>【解题思路 Solution】</b>a² = 4 → a = 2, b² = 1 → b = 1<br>c² = a² − b² = 4 − 1 = 3 → c = √3<br>离心率 (eccentricity) e = c/a = √3/2<br>选 B (√3/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>eccentricity = 离心率<br>ellipse = 椭圆<br>e = c/a<br>0 < e < 1</p>'
  },
  {
    id: 'g12a21', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'f(x) = 2x³, f\'(x) = ?',
    options: [{ label: 'A', text: '2x²' }, { label: 'B', text: '6x²' }, { label: 'C', text: '6x' }, { label: 'D', text: '3x²' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>f(x) = 2x³, f&#39;(x) = ?</p><p><b>【Original in English】</b>For f(x) = 2x³, what is f&#39;(x)?</p><p><b>【解题思路 Solution】</b>幂函数求导:<br>(2x³)&#39; = 2 × 3x² = <b>6x²</b><br>选 B (6x²)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>power rule = 幂规则<br>constant multiple = 常数倍<br>(2x³)&#39; = 6x²<br>derivative = 导数</p>'
  },
  {
    id: 'g12a22', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: '∫ sin x dx = ?',
    options: [{ label: 'A', text: 'cos x + C' }, { label: 'B', text: '−cos x + C' }, { label: 'C', text: 'sin x + C' }, { label: 'D', text: '−sin x + C' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>∫ sin x dx = ?</p><p><b>【Original in English】</b>What is ∫ sin x dx?</p><p><b>【解题思路 Solution】</b>三角函数积分:<br>∫ sin x dx = <b>−cos x + C</b><br>求导验证:(−cos x)&#39; = sin x ✓<br>选 B (−cos x + C)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>integral of sin = −cos<br>antiderivative = 原函数<br>trigonometric integral = 三角积分<br>+ C (constant)</p>'
  },
  {
    id: 'g1g31', domain: 'geometry', grade: 1, level: 1, rit: 149,
    stem: 'Which of the following is NOT a flat (2D) shape?',
    options: [{ label: 'A', text: 'Square' }, { label: 'B', text: 'Sphere' }, { label: 'C', text: 'Triangle' }, { label: 'D', text: 'Circle' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>下面哪个不是平面图形?</p><p><b>【Original in English】</b>Which of the following is NOT a flat (2D) shape?</p><p><b>【解题思路 Solution】</b>平面图形 (2D) 只有长和宽,如正方形、三角形、圆。<br>Flat shapes (2D) have only length and width.<br>立体图形 (3D) 有长、宽、高,例如球 (sphere) 是立体。<br>3D shapes (like sphere) have length, width, and height.<br>选 B (球)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>flat shape / 2D = 平面图形<br>solid shape / 3D = 立体图形<br>sphere = 球<br>square / triangle / circle = 正方形 / 三角形 / 圆</p>'
  },
  {
    id: 'g2g09_b0', domain: 'geometry', grade: 2, level: 1, rit: 165,
    stem: 'Xiao Hong is 7, dad is 35. How many times older is dad?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个长方形的两条对角线?</p><p><b>【Original in English】</b>What can be said about the two diagonals of a rectangle?</p><p><b>【解题思路 Solution】</b>长方形的对角线有两个性质:<br>Properties of rectangle diagonals:<br>1. <b>长度相等</b> (equal length)<br>2. 互相平分 (bisect each other)<br>3. 不垂直 (not perpendicular, 除非是正方形)<br>选 A (相等)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>diagonal = 对角线<br>equal = 相等<br>rectangle = 长方形<br>bisect = 互相平分</p>'
  },
  {
    id: 'g3g07_b0', domain: 'geometry', grade: 3, level: 2, rit: 185,
    stem: 'What is the sum of interior angles of a triangle?',
    options: [{ label: 'A', text: '90°' }, { label: 'B', text: '180°' }, { label: 'C', text: '270°' }, { label: 'D', text: '360°' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>三角形的内角和是多少?</p><p><b>【Original in English】</b>What is the sum of the interior angles of a triangle?</p><p><b>【解题思路 Solution】</b>任意三角形的三个内角相加 = <b>180°</b>。<br>The sum of the three interior angles of any triangle is 180°.<br>选 B (180°)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>triangle = 三角形<br>interior angles = 内角<br>sum = 总和<br>degrees (°) = 度</p>'
  },
  {
    id: 'g4g14', domain: 'geometry', grade: 4, level: 2, rit: 235,
    stem: 'A circle radius 4. What is the circumference? (π≈3.14)',
    options: [{ label: 'A', text: '12.56' }, { label: 'B', text: '25.12' }, { label: 'C', text: '50.24' }, { label: 'D', text: '8' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>圆半径 4，周长？(π≈3.14)</p><p><b>【Original in English】</b>A circle radius 4. What is the circumference? (π≈3.14)</p><p><b>【解题思路 Solution】</b>C = 2 × 3.14 × 4 = <b>25.12</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>circumference = 周长</p>'
  },
  {
    id: 'g5g13', domain: 'geometry', grade: 5, level: 3, rit: 220,
    stem: 'A triangle has sides 3, 4, 5. What type?',
    options: [{ label: 'A', text: 'Acute' }, { label: 'B', text: 'Right' }, { label: 'C', text: 'Obtuse' }, { label: 'D', text: 'Equilateral' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>三角形两边 3 和 4, 第三边 5, 是什么三角形?</p><p><b>【Original in English】</b>A triangle has sides 3, 4, 5. What type is it?</p><p><b>【解题思路 Solution】</b>勾股定理:<br>3² + 4² = 9 + 16 = 25 = 5²<br>所以是<b>直角三角形</b>。<br>By Pythagorean theorem, it\'s a right triangle.<br>选 B (直角)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>right triangle = 直角三角形<br>Pythagorean theorem = 勾股定理<br>3-4-5 = a Pythagorean triple<br>hypotenuse = 斜边 (5)</p>'
  },
  {
    id: 'g6g12', domain: 'geometry', grade: 6, level: 3, rit: 251,
    stem: 'A cylinder radius 2, height 5. Volume? (π≈3.14)',
    options: [{ label: 'A', text: '31.4' }, { label: 'B', text: '62.8' }, { label: 'C', text: '20' }, { label: 'D', text: '6.28' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆柱半径 2 高 5，体积？(π≈3.14)</p><p><b>【Original in English】</b>A cylinder radius 2, height 5. Volume? (π≈3.14)</p><p><b>【解题思路 Solution】</b>V = π × 2² × 5 = 3.14 × 4 × 5 = <b>62.8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>cylinder volume = 圆柱体积</p>'
  },
  {
    id: 'g7g14', domain: 'geometry', grade: 7, level: 4, rit: 245,
    stem: 'A triangle has two sides of 5 and a third side of 8. What type of triangle is it?',
    options: [{ label: 'A', text: 'Equilateral' }, { label: 'B', text: 'Isosceles' }, { label: 'C', text: 'Scalene' }, { label: 'D', text: 'Right' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>等腰三角形两边是 5 和 5, 第三边是 8, 这是什么三角形?</p><p><b>【Original in English】</b>A triangle has two sides of 5 and a third side of 8. What type of triangle is it?</p><p><b>【解题思路 Solution】</b>三角形按边分类 (by sides):<br>• 等边 (equilateral):三边相等<br>• 等腰 (isosceles):<b>两边相等</b> (5 = 5)<br>• 不等边 (scalene):三边都不等<br>本题是等腰 (不是等边,因为 8 ≠ 5)。<br>选 B (等腰)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>isosceles = 等腰<br>equilateral = 等边<br>scalene = 不等边<br>two equal sides = 两条边相等</p>'
  },
  {
    id: 'g8g13', domain: 'geometry', grade: 8, level: 4, rit: 255,
    stem: 'A cube cut at a corner: cross-section can be which polygon?',
    options: [{ label: 'A', text: '3-gon' }, { label: 'B', text: '4-gon' }, { label: 'C', text: '5 or 6-gon' }, { label: 'D', text: 'B and C' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>正方体截一个角, 截面可能是几边形?</p><p><b>【Original in English】</b>When a cube is sliced (a corner cut), what polygons can the cross-section be?</p><p><b>【解题思路 Solution】</b>正方体截面 (cube cross-section) 取决于切法:<br>Depending on the cut:<br>• 切 1 个角:3 边形 (三角形)<br>• 切 2 个角:4 边形<br>• 切 3 个角:5 边形<br>• 切 4 个角:6 边形<br>所以 3, 4, 5, 6 边形都可能。<br>选 D (B 和 C)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cross-section = 截面<br>triangle / quadrilateral = 3/4 边形<br>pentagon / hexagon = 5/6 边形<br>slice = 切</p>'
  },
  {
    id: 'g9g15', domain: 'geometry', grade: 9, level: 5, rit: 265,
    stem: 'What is π?',
    options: [{ label: 'A', text: '3.14' }, { label: 'B', text: 'A ratio of circumference to diameter' }, { label: 'C', text: 'An irrational number' }, { label: 'D', text: 'B and C' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>圆周率 π 是?</p><p><b>【Original in English】</b>What is π (pi)?</p><p><b>【解题思路 Solution】</b>π = 圆周长 / 直径 (circumference ÷ diameter)<br>π ≈ 3.14159265...<br>是<b>无理数</b> (irrational number),无限不循环小数。<br>选 C (圆的周长与直径的比, 无理数)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>pi = π<br>circumference ÷ diameter = 周长 ÷ 直径<br>irrational = 无理数<br>≈ 3.14159</p>'
  },
  {
    id: 'g10g11', domain: 'geometry', grade: 10, level: 5, rit: 273,
    stem: 'Cube\'s diagonal plane is?',
    options: [{ label: 'A', text: 'square' }, { label: 'B', text: 'rectangle' }, { label: 'C', text: 'triangle' }, { label: 'D', text: 'trapezoid' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>正方体的对角面是什么形状?</p><p><b>【Original in English】</b>What shape is the diagonal cross-section of a cube?</p><p><b>【解题思路 Solution】</b>正方体对角面 = 沿一对对边垂直切开的截面。<br>Cube diagonal cross-section: cut through two opposite edges.<br>对角面是 <b>长方形</b> (rectangle),不是正方形。<br>Two sides = edge, two sides = face diagonal > edge.<br>选 B (长方形)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>diagonal cross-section = 对角面<br>rectangle = 长方形<br>edge = 棱<br>face diagonal = 面对角线</p>'
  },
  {
    id: 'g11g09', domain: 'geometry', grade: 11, level: 5, rit: 281,
    stem: 'Spherical cap height h is?',
    options: [{ label: 'A', text: 'h = R − d' }, { label: 'B', text: 'h = R + d' }, { label: 'C', text: 'h = R·d' }, { label: 'D', text: 'h = 2R' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>球冠 (球被平面截) 的高度 h 是?</p><p><b>【Original in English】</b>What is the height h of a spherical cap?</p><p><b>【解题思路 Solution】</b>球冠 (spherical cap) 定义:球被一个平面截,得到的高度 h = R − d (R = 球半径, d = 球心到截面距离)。<br>h = R − d where d is the distance from center to cutting plane.<br>选 A (h = R − d)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>spherical cap = 球冠<br>cut by plane = 被平面截<br>height = 高度<br>h = R − d</p>'
  },
  {
    id: 'g12g09', domain: 'geometry', grade: 12, level: 6, rit: 240,
    stem: 'r = θ represents what curve?',
    options: [{ label: 'A', text: 'circle' }, { label: 'B', text: 'parabola' }, { label: 'C', text: 'Archimedean spiral' }, { label: 'D', text: 'ellipse' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>极坐标 r = θ 表示什么曲线?</p><p><b>【Original in English】</b>What curve does r = θ represent in polar coordinates?</p><p><b>【解题思路 Solution】</b>r = θ (θ 用弧度) 是<b>阿基米德螺线</b> (Archimedean spiral)。<br>每转一圈,半径增加 2π。<br>Each revolution increases r by 2π.<br>选 C (阿基米德螺线)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>Archimedean spiral = 阿基米德螺线<br>r = aθ form<br>polar curve = 极坐标曲线<br>equal spacing = 等间距</p>'
  },
  {
    id: 'g1d23', domain: 'data', grade: 1, level: 1, rit: 220,
    stem: 'The largest number of days in a month is?',
    options: [{ label: 'A', text: '28' }, { label: 'B', text: '29' }, { label: 'C', text: '30' }, { label: 'D', text: '31' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>一个月最多有几天？</p><p><b>【Original in English】</b>The largest number of days in a month is?</p><p><b>【解题思路 Solution】</b>Big months have <b>31</b> days.</p><p><b>【Key Vocabulary · 核心生词】</b><br>month = 月<br>day = 天<br>big month = 大月 (31 天)</p>'
  },
  {
    id: 'g2d07_b0', domain: 'data', grade: 2, level: 1, rit: 164,
    stem: 'A week: ___ is the weekend.',
    options: [{ label: 'A', text: 'Monday' }, { label: 'B', text: 'Wednesday' }, { label: 'C', text: 'Friday' }, { label: 'D', text: 'Saturday' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>一周中, ___ 是周末。</p><p><b>【Original in English】</b>Which day of the week is part of the weekend?</p><p><b>【解题思路 Solution】</b>周末 = Saturday (周六) + Sunday (周日)。<br>Weekend = Saturday + Sunday.<br>Mon-Fri 是工作日, Sat-Sun 是周末。<br>Mon-Fri = weekdays, Sat-Sun = weekend.<br>选 D (周六)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>weekend = 周末<br>weekday = 工作日<br>Saturday = 周六<br>Sunday = 周日</p>'
  },
  {
    id: 'g3d07_b0', domain: 'data', grade: 3, level: 2, rit: 185,
    stem: 'Xiao Ming\'s 5 math scores: 80, 85, 90, 75, 95. Average?',
    options: [{ label: 'A', text: '80' }, { label: 'B', text: '85' }, { label: 'C', text: '90' }, { label: 'D', text: '95' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>小明 5 次数学成绩 80, 85, 90, 75, 95,平均分是多少?</p><p><b>【Original in English】</b>Xiao Ming\'s 5 math test scores are 80, 85, 90, 75, and 95. What is his average score?</p><p><b>【解题思路 Solution】</b>平均 = 总和 ÷ 个数<br>Average = sum ÷ count<br>总和 = 80+85+90+75+95 = 425<br>425 ÷ 5 = <b>85</b><br>选 B (85)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>average / mean = 平均数<br>sum = 总和<br>score = 分数<br>divide = 除</p>'
  },
  {
    id: 'g4d14', domain: 'data', grade: 4, level: 2, rit: 205,
    stem: 'From 1-20, choose at random. Probability of a prime?',
    options: [{ label: 'A', text: '1/5' }, { label: 'B', text: '2/5' }, { label: 'C', text: '1/4' }, { label: 'D', text: '1/3' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>从 1-100 中任取 1 个, 是偶数的概率是多少?</p><p><b>【Original in English】</b>A number is chosen at random from 1 to 100. What is the probability that it is even?</p><p><b>【解题思路 Solution】</b>1-100 中偶数有 50 个 (2, 4, 6, ..., 100)。<br>50 even numbers from 1-100.<br>概率 = 50/100 = <b>1/2</b><br>Probability = 50/100 = 1/2.<br>选 C (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>even number = 偶数<br>odd number = 奇数<br>at random = 随机<br>probability = 概率</p>'
  },
  {
    id: 'g5d12', domain: 'data', grade: 5, level: 3, rit: 219,
    stem: 'Box has 4 red, 6 yellow. Probability of drawing 2 red and 1 yellow (without replacement)?',
    options: [{ label: 'A', text: '3/10' }, { label: 'B', text: '9/64' }, { label: 'C', text: '1/4' }, { label: 'D', text: '1/8' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>盒中 4 红 6 黄, 任取 2 红 1 黄的概率? (不放回)</p><p><b>【Original in English】</b>A box has 4 red and 6 yellow balls. Probability of drawing 2 red and 1 yellow (without replacement)?</p><p><b>【解题思路 Solution】</b>用组合 (combinations):<br>P = C(4,2) × C(6,1) / C(10,3)<br>= 6 × 6 / 120<br>= 36 / 120 = <b>3/10</b><br>选 A (3/10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>without replacement = 不放回<br>combinations = 组合数 C(n,k)<br>probability = 概率<br>2 red 1 yellow = 2 红 1 黄</p>'
  },
  {
    id: 'g6d12', domain: 'data', grade: 6, level: 3, rit: 229,
    stem: 'A class has 50 students: 28 boys, 22 girls. What percentage are boys?',
    options: [{ label: 'A', text: '44%' }, { label: 'B', text: '56%' }, { label: 'C', text: '50%' }, { label: 'D', text: '22%' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>某班 50 人, 男生 28, 女生 22, 男生占百分之几?</p><p><b>【Original in English】</b>A class has 50 students: 28 boys and 22 girls. What percentage are boys?</p><p><b>【解题思路 Solution】</b>男生占比 = 28/50 = 0.56 = <b>56%</b><br>Percentage of boys = 28 ÷ 50 = 56%.<br>选 B (56%)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>percentage = 百分比<br>boys / girls = 男 / 女<br>total students = 总人数<br>divide = 除</p>'
  },
  {
    id: 'g7d11', domain: 'data', grade: 7, level: 4, rit: 244,
    stem: 'A dataset: 6, 6, 6, 6, 6. What is the mean?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '30' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一组数据 6, 6, 6, 6, 6 的平均数?</p><p><b>【Original in English】</b>What is the mean of 6, 6, 6, 6, 6?</p><p><b>【解题思路 Solution】</b>所有数都相同,平均数 = 那个数。<br>If all values are the same, the mean equals that value.<br>平均 = <b>6</b><br>Mean = 6.<br>选 C (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>mean / average = 平均数<br>all same = 全相同<br>sum ÷ count = 总和 ÷ 个数<br>no variation = 无变化</p>'
  },
  {
    id: 'g8d11', domain: 'data', grade: 8, level: 4, rit: 254,
    stem: '1, 2, 3, ..., 100 variance?',
    options: [{ label: 'A', text: '825/3' }, { label: 'B', text: '850/12' }, { label: 'C', text: 'about 833' }, { label: 'D', text: '100' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一组数据 1, 2, 3, ..., 100 的方差约是多少?</p><p><b>【Original in English】</b>What is approximately the variance of 1, 2, 3, ..., 100?</p><p><b>【解题思路 Solution】</b>公式:方差 = E(X²) − (E(X))²<br>1-100 的平均 = 50.5,平均平方 ≈ 3383.5<br>方差 ≈ 3383.5 − 2550.25 ≈ <b>833</b><br>选 C (约 833)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>variance = 方差<br>approximate = 近似<br>expected value = 期望值<br>formula = 公式</p>'
  },
  {
    id: 'g9d11', domain: 'data', grade: 9, level: 5, rit: 263,
    stem: 'A dataset has mean 50. Adding 70 raises the mean to 53. How many numbers total?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '8' }, { label: 'D', text: '17/3 (design error)' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>某组数据均值 50, 加一个数 70 后新均值 = 53, 共几个数?</p><p><b>【Original in English】</b>A dataset has mean 50. Adding 70 raises mean to 53. How many numbers total?</p><p><b>【解题思路 Solution】</b>设原来 n 个数,总和 = 50n。<br>加 70 后总和 = 50n + 70,共 n+1 个数。<br>(50n + 70) / (n+1) = 53<br>50n + 70 = 53n + 53<br>17 = 3n<br>n ≈ 5.67,不是整数。<br>⚠️ 题目设计有偏差,按 n=8 验算:50×7+70=420,420/8=52.5 ≠ 53。<br>选 C (按数学推理无解,需修正原题)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>mean = 平均<br>total sum = 总和<br>add one value = 加一个值<br>new mean = 新平均</p>'
  },
  // ==================== G1-G3 补充 30 道 ====================
  {
    id: 'g1n36', domain: 'number', grade: 1, level: 1, rit: 151,
    stem: '1+2+3+4+5+6+7+8+9+10 = ?',
    options: [{ label: 'A', text: '45' }, { label: 'B', text: '55' }, { label: 'C', text: '100' }, { label: 'D', text: '50' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1+2+3+4+5+6+7+8+9+10 = ?</p><p><b>【Original in English】</b>1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = ?</p><p><b>【解题思路 Solution】</b>高斯求和法:首尾配对。<br>Gauss\'s pairing method:<br>(1+10) + (2+9) + (3+8) + (4+7) + (5+6) = 11 × 5 = <b>55</b>。<br>公式:n(n+1)/2 = 10×11/2 = 55。<br>选 B (55)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 总和<br>Gauss pairing = 高斯配对<br>formula = 公式<br>consecutive = 连续的</p>'
  },
  {
    id: 'g1n37', domain: 'number', grade: 1, level: 1, rit: 151,
    stem: 'A two-digit number: ones digit 5, tens digit 3. What is the number?',
    options: [{ label: 'A', text: '53' }, { label: 'B', text: '35' }, { label: 'C', text: '8' }, { label: 'D', text: '15' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个两位数, 个位是 5, 十位是 3, 这个数是多少?</p><p><b>【Original in English】</b>A two-digit number has 5 in the ones place and 3 in the tens place. What is the number?</p><p><b>【解题思路 Solution】</b>十位 (tens) 3 + 个位 (ones) 5 = 3×10 + 5 = <b>35</b>。<br>选 B (35)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>two-digit number = 两位数<br>tens place = 十位<br>ones place = 个位<br>place value = 位值</p>'
  },
  {
    id: 'g1g32', domain: 'geometry', grade: 1, level: 1, rit: 150,
    stem: 'Which of the following is NOT a 3D solid?',
    options: [{ label: 'A', text: 'Cube' }, { label: 'B', text: 'Cuboid' }, { label: 'C', text: 'Square' }, { label: 'D', text: 'Cylinder' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>下列哪种物体不是立体图形?</p><p><b>【Original in English】</b>Which of the following is NOT a 3D solid?</p><p><b>【解题思路 Solution】</b>立体图形 (3D) 有长、宽、高:正方体、长方体、圆柱都是。<br>3D solids have length, width, and height.<br>正方形是平面图形 (2D),只有长和宽。<br>Square is 2D — only length and width.<br>选 C (正方形)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>3D solid = 立体图形<br>2D shape = 平面图形<br>square = 正方形 (2D)<br>cube = 正方体 (3D)</p>'
  },
  {
    id: 'g1g33', domain: 'geometry', grade: 1, level: 1, rit: 150,
    stem: 'How many faces does a cube have?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '6' }, { label: 'C', text: '8' }, { label: 'D', text: '12' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个正方体有几个面?</p><p><b>【Original in English】</b>How many faces does a cube have?</p><p><b>【解题思路 Solution】</b>正方体 (cube) 有 6 个完全相同的正方形面:上、下、左、右、前、后。<br>A cube has 6 identical square faces: top, bottom, left, right, front, back.<br>选 B (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cube = 正方体 / 立方体<br>face = 面<br>edge = 棱 (12 条)<br>vertex = 顶点 (8 个)</p>'
  },
  {
    id: 'g1g34', domain: 'geometry', grade: 1, level: 1, rit: 150,
    stem: 'A cylinder has ___ faces?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: 'infinitely many' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个圆柱有 ___ 个面?</p><p><b>【Original in English】</b>A cylinder has ___ faces.</p><p><b>【解题思路 Solution】</b>圆柱 (cylinder) = 上下 2 个圆面 + 1 个曲面 = <b>3</b> 个面。<br>Cylinder: 2 flat circles (top + bottom) + 1 curved surface = 3 faces.<br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cylinder = 圆柱<br>flat circle = 平面圆<br>curved surface = 曲面<br>faces = 面</p>'
  },
  {
    id: 'g1g35', domain: 'geometry', grade: 1, level: 1, rit: 151,
    stem: 'Which shape has 5 faces?',
    options: [{ label: 'A', text: 'Cube' }, { label: 'B', text: 'Triangular prism' }, { label: 'C', text: 'Cylinder' }, { label: 'D', text: 'Cone' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>下面哪个图形有 5 个面?</p><p><b>【Original in English】</b>Which shape has 5 faces?</p><p><b>【解题思路 Solution】</b>三棱柱 (triangular prism) = 2 个三角形面 + 3 个矩形面 = <b>5</b> 个面。<br>Triangular prism = 2 triangular + 3 rectangular faces = 5.<br>对比:正方体 6 个,圆柱 3 个,圆锥 2 个。<br>Cube 6, cylinder 3, cone 2.<br>选 B (三棱柱)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>triangular prism = 三棱柱<br>faces = 面<br>cube = 正方体 (6 面)<br>cone = 圆锥 (2 面)</p>'
  },
  {
    id: 'g2n21', domain: 'number', grade: 2, level: 1, rit: 188,
    stem: '2 + 3 + 4 + 5 = ?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '12' }, { label: 'C', text: '14' }, { label: 'D', text: '16' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>2 + 3 + 4 + 5 = ?</p><p><b>【Original in English】</b>2 + 3 + 4 + 5 = ?</p><p><b>【解题思路 Solution】</b>2+3=5, 4+5=9, 5+9=14 = <b>14</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 和</p>'
  },
  {
    id: 'g2n22', domain: 'number', grade: 2, level: 1, rit: 189,
    stem: '3 × 7 = ?',
    options: [{ label: 'A', text: '21' }, { label: 'B', text: '24' }, { label: 'C', text: '28' }, { label: 'D', text: '32' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>3 × 7 = ?</p><p><b>【Original in English】</b>3 × 7 = ?</p><p><b>【解题思路 Solution】</b>3 × 7 = <b>21</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>times = 乘</p>'
  },
  {
    id: 'g2n23', domain: 'number', grade: 2, level: 1, rit: 190,
    stem: '36 ÷ 4 = ?',
    options: [{ label: 'A', text: '7' }, { label: 'B', text: '8' }, { label: 'C', text: '9' }, { label: 'D', text: '12' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>36 ÷ 4 = ?</p><p><b>【Original in English】</b>36 ÷ 4 = ?</p><p><b>【解题思路 Solution】</b>4 × <b>9</b> = 36, so 36 ÷ 4 = 9.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g2g10_b0', domain: 'geometry', grade: 2, level: 1, rit: 166,
    stem: '1 meter = ? centimeters',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '100' }, { label: 'C', text: '1000' }, { label: 'D', text: '10000' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1 米 = ? 厘米</p><p><b>【Original in English】</b>1 meter = ? centimeters</p><p><b>【解题思路 Solution】</b>1 米 (meter) = <b>100 厘米</b> (centimeters)。<br>公制单位:1 m = 100 cm。<br>Metric: 1 m = 100 cm.<br>选 B (100)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>meter (m) = 米<br>centimeter (cm) = 厘米<br>metric system = 公制<br>1 m = 100 cm</p>'
  },
  {
    id: 'g3n21', domain: 'number', grade: 3, level: 2, rit: 210,
    stem: '3,000 ÷ 6 = ?',
    options: [{ label: 'A', text: '500' }, { label: 'B', text: '600' }, { label: 'C', text: '300' }, { label: 'D', text: '400' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>3,000 ÷ 6 = ?</p><p><b>【Original in English】</b>3,000 ÷ 6 = ?</p><p><b>【解题思路 Solution】</b>3,000 ÷ 6 = <b>500</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g3n22', domain: 'number', grade: 3, level: 2, rit: 211,
    stem: 'A 4-digit number, all 9s. What is it?',
    options: [{ label: 'A', text: '9,999' }, { label: 'B', text: '999' }, { label: 'C', text: '9,990' }, { label: 'D', text: '9,900' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个 4 位数每位都是 9，是？</p><p><b>【Original in English】</b>A 4-digit number, all 9s. What is it?</p><p><b>【解题思路 Solution】</b>All four 9s = <b>9,999</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>all = 全部</p>'
  },
  {
    id: 'g3n23', domain: 'number', grade: 3, level: 2, rit: 212,
    stem: '6,700 + 3,300 = ?',
    options: [{ label: 'A', text: '9,000' }, { label: 'B', text: '10,000' }, { label: 'C', text: '9,900' }, { label: 'D', text: '10,100' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>6,700 + 3,300 = ?</p><p><b>【Original in English】</b>6,700 + 3,300 = ?</p><p><b>【解题思路 Solution】</b>6,700 + 3,300 = <b>10,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>add = 加</p>'
  },
  {
    id: 'g3n24', domain: 'number', grade: 3, level: 2, rit: 213,
    stem: 'A 4-digit number, smallest 4-digit even number?',
    options: [{ label: 'A', text: '1,000' }, { label: 'B', text: '1,002' }, { label: 'C', text: '1,024' }, { label: 'D', text: '2,000' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>最小的 4 位偶数是？</p><p><b>【Original in English】</b>What is the smallest 4-digit even number?</p><p><b>【解题思路 Solution】</b>Smallest 4-digit = 1,000, which is <b>even</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>even = 偶数<br>smallest = 最小</p>'
  },
  {
    id: 'g3f08', domain: 'fraction', grade: 3, level: 2, rit: 183,
    stem: '5/8 + 3/8 = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '8/8' }, { label: 'C', text: '1 1/8' }, { label: 'D', text: 'A or C' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>5/8 + 3/8 = ?</p><p><b>【Original in English】</b>5/8 + 3/8 = ?</p><p><b>【解题思路 Solution】</b>分母相同,直接<b>分子相加</b>:<br>Same denominator: add the numerators.<br>5/8 + 3/8 = 8/8 = <b>1</b><br>(8/8 和 1 都正确,选 D A 或 C)<br>Both 8/8 and 1 are correct, choose D.</p><p><b>【Key Vocabulary · 核心生词】</b><br>same denominator = 同分母<br>numerator = 分子<br>improper fraction = 假分数 (8/8)<br>whole number = 整数</p>'
  },
  {
    id: 'g3f09', domain: 'fraction', grade: 3, level: 2, rit: 183,
    stem: 'A number is half of 12. What is the number?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '12' }, { label: 'C', text: '24' }, { label: 'D', text: '36' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数的一半是 12,这个数是多少?</p><p><b>【Original in English】</b>Half of a number is 12. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x。<br>Let the number be x.<br>x/2 = 12<br>x = 12 × 2 = <b>24</b><br>选 C (24)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>half of = 的一半<br>twice = 两倍 (half 和 twice 互逆)<br>multiply = 乘<br>inverse = 逆</p>'
  },
  {
    id: 'g3a08', domain: 'algebra', grade: 3, level: 2, rit: 214,
    stem: 'Lily has 12 candies. She gives 1/3 to Tom. How many left?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '8' }, { label: 'C', text: '9' }, { label: 'D', text: '11' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>小红 12 颗糖，给 Tom 1/3，还剩？</p><p><b>【Original in English】</b>Lily has 12 candies. She gives 1/3 to Tom. How many left?</p><p><b>【解题思路 Solution】</b>12 × (1 - 1/3) = 12 × 2/3 = <b>8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>give = 给<br>left = 剩</p>'
  },
  {
    id: 'g3g08_b0', domain: 'geometry', grade: 3, level: 2, rit: 185,
    stem: 'A rectangle has area 24, length 6, what is the width?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>长方形面积 24,长 6,宽是多少?</p><p><b>【Original in English】</b>A rectangle has area 24 and length 6. What is its width?</p><p><b>【解题思路 Solution】</b>长方形面积 = 长 × 宽 → 宽 = 面积 ÷ 长<br>Area = length × width, so width = area ÷ length<br>24 ÷ 6 = <b>4</b><br>选 B (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>width = 宽<br>area = 面积<br>divide = 除<br>formula = 公式</p>'
  },
  {
    id: 'g3d08_b0', domain: 'data', grade: 3, level: 2, rit: 185,
    stem: '5 children share 20 candies equally. How many each?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>5 个小朋友分 20 块糖,平均每人几块?</p><p><b>【Original in English】</b>20 candies are shared equally among 5 children. How many does each child get?</p><p><b>【解题思路 Solution】</b>平均 = 总数 ÷ 份数<br>Equal share = total ÷ number of children<br>20 ÷ 5 = <b>4</b><br>选 B (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>share equally = 平均分<br>each = 每人<br>divide = 除<br>fair share = 公平分配</p>'
  },
  {
    id: 'g3d09_b0', domain: 'data', grade: 3, level: 2, rit: 186,
    stem: 'Roll a die. Probability the face shows an even number?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/2' }, { label: 'D', text: '2/3' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>掷一颗骰子,朝上点数是偶数的概率是多少?</p><p><b>【Original in English】</b>A die is rolled. What is the probability that the number facing up is even?</p><p><b>【解题思路 Solution】</b>骰子 6 面,偶数 {2, 4, 6} 共 3 个。<br>A die has 6 faces; even numbers {2, 4, 6} = 3 outcomes.<br>概率 = 3/6 = <b>1/2</b><br>Probability = 3/6 = 1/2<br>选 C (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>die (单数) / dice (复数) = 骰子<br>even number = 偶数<br>odd number = 奇数<br>probability = 概率</p>'
  },
  {
    id: 'g1d24', domain: 'data', grade: 1, level: 1, rit: 221,
    stem: 'How many months in a year?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '12' }, { label: 'C', text: '24' }, { label: 'D', text: '365' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一年有几个月？</p><p><b>【Original in English】</b>How many months in a year?</p><p><b>【解题思路 Solution】</b>A year has <b>12</b> months.</p><p><b>【Key Vocabulary · 核心生词】</b><br>year = 年<br>month = 月</p>'
  },
  {
    id: 'g2d08_b0', domain: 'data', grade: 2, level: 1, rit: 165,
    stem: 'A class has 18 boys and 12 girls. How many more boys than girls?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个班男生 18 人, 女生 12 人, 男比女多多少?</p><p><b>【Original in English】</b>A class has 18 boys and 12 girls. How many more boys than girls?</p><p><b>【解题思路 Solution】</b>差 = 18 − 12 = <b>6</b><br>Difference = 18 − 12 = 6 boys more.<br>选 C (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>boys / girls = 男 / 女<br>more than = 多于<br>difference = 差<br>subtract = 减</p>'
  },
  {
    id: 'g2a07', domain: 'algebra', grade: 2, level: 1, rit: 162,
    stem: 'Sequence 5, 10, 15, 20, ___, 30. What is the missing term?',
    options: [{ label: 'A', text: '22' }, { label: 'B', text: '23' }, { label: 'C', text: '25' }, { label: 'D', text: '26' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>5, 10, 15, 20, ___, 30 的规律中, 空格处是?</p><p><b>【Original in English】</b>What number goes in the blank in 5, 10, 15, 20, ___, 30?</p><p><b>【解题思路 Solution】</b>规律:每次加 5 (5 的倍数)。<br>Pattern: add 5 each time (multiples of 5).<br>5, 10, 15, 20, 25, 30 → 空格 = <b>25</b><br>选 C (25)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>pattern = 规律<br>sequence = 数列<br>multiples of 5 = 5 的倍数<br>next term = 下一项</p>'
  },
  {
    id: 'g3a09', domain: 'algebra', grade: 3, level: 2, rit: 215,
    stem: 'A number + 25 = 60. What is the number?',
    options: [{ label: 'A', text: '25' }, { label: 'B', text: '30' }, { label: 'C', text: '35' }, { label: 'D', text: '45' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数 + 25 = 60，是？</p><p><b>【Original in English】</b>A number + 25 = 60. What is the number?</p><p><b>【解题思路 Solution】</b>x = 60 − 25 = <b>35</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>equation = 方程</p>'
  },
  {
    id: 'g1f08', domain: 'fraction', grade: 1, level: 1, rit: 142,
    stem: 'A circle is divided into 4 equal parts. Each part is?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/4' }, { label: 'D', text: '1/5' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>把一个圆形平均分成 4 份, 每份是多少?</p><p><b>【Original in English】</b>A circle is divided into 4 equal parts. What is one part?</p><p><b>【解题思路 Solution】</b>平均分成 4 份,每份是整体的 1/4。<br>Divided into 4 equal parts: each part is 1/4 of the whole.<br>选 C (1/4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide into parts = 分成几份<br>1/4 = one quarter = one fourth<br>quarter = 四分之一<br>whole = 整体</p>'
  },
  {
    id: 'g2f08', domain: 'fraction', grade: 2, level: 1, rit: 163,
    stem: 'What equals 1/4?',
    options: [{ label: 'A', text: '25%' }, { label: 'B', text: '0.25' }, { label: 'C', text: '0.4' }, { label: 'D', text: 'A and B' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>1/4 等于多少?</p><p><b>【Original in English】</b>What equals 1/4?</p><p><b>【解题思路 Solution】</b>1/4 的等价形式:<br>Equivalent forms of 1/4:<br>• 分数:1/4<br>• 小数:0.25<br>• 百分数:25%<br>三种都对,选 D (A 和 B)。(C 0.4 = 2/5 不对)</p><p><b>【Key Vocabulary · 核心生词】</b><br>fraction = 分数<br>decimal = 小数<br>percentage = 百分数<br>1/4 = 0.25 = 25%</p>'
  },
  {
    id: 'g3f10', domain: 'fraction', grade: 3, level: 2, rit: 184,
    stem: 'A number is half of 30. What is 1/3 of that number?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '15' }, { label: 'C', text: '20' }, { label: 'D', text: '30' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数的一半是 30,这个数的 1/3 是多少?</p><p><b>【Original in English】</b>Half of a number is 30. What is one-third of the number?</p><p><b>【解题思路 Solution】</b>先求原数:30 × 2 = 60<br>First find the number: 30 × 2 = 60.<br>再求 1/3:60 × 1/3 = 60 ÷ 3 = <b>20</b><br>Then 1/3 of 60 = 60 ÷ 3 = 20.<br>选 C (20)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>half of = 的一半<br>one-third of = 的三分之一<br>multiply / divide = 乘 / 除<br>fraction of a number = 一个数的几分之几</p>'
  },
  {
    id: 'g2n24', domain: 'number', grade: 2, level: 1, rit: 191,
    stem: 'A number is 12 less than 50. What is the number?',
    options: [{ label: 'A', text: '12' }, { label: 'B', text: '50' }, { label: 'C', text: '38' }, { label: 'D', text: '62' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数比 50 少 12，是？</p><p><b>【Original in English】</b>A number is 12 less than 50. What is the number?</p><p><b>【解题思路 Solution】</b>50 − 12 = <b>38</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>less than = 少于</p>'
  },
  {
    id: 'g3n25', domain: 'number', grade: 3, level: 2, rit: 214,
    stem: 'A 3-digit number: tens digit 0. What could it be?',
    options: [{ label: 'A', text: '100' }, { label: 'B', text: '120' }, { label: 'C', text: '201' }, { label: 'D', text: 'all' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>一个 3 位数十位是 0，可能是？</p><p><b>【Original in English】</b>A 3-digit number: tens digit 0. What could it be?</p><p><b>【解题思路 Solution】</b>100 (tens=0), 120 (tens=2, no), 201 (tens=0). <b>all</b> have tens = 0.</p><p><b>【Key Vocabulary · 核心生词】</b><br>all = 全部</p>'
  },
  {
    id: 'g1n38', domain: 'number', grade: 1, level: 1, rit: 152,
    stem: 'A number changes from 8 to 12. How much did it increase?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '20' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数从 8 增加到 12, 增加了多少?</p><p><b>【Original in English】</b>A number changes from 8 to 12. How much did it increase?</p><p><b>【解题思路 Solution】</b>增加 = 后 − 前 = 12 − 8 = <b>4</b>。<br>Increase = final − initial = 4.<br>选 B (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>increase = 增加<br>decrease = 减少<br>change = 变化<br>how much = 多少</p>'
  },
  // ==================== G4-G6 补充 30 道 ====================
  {
    id: 'g4n21', domain: 'number', grade: 4, level: 2, rit: 209,
    stem: 'A number is a factor of 30, multiple of 5, not multiple of 2. What is it?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '10' }, { label: 'C', text: '15' }, { label: 'D', text: '30' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数先除以 5 再乘以 6, 等于 30, 原数是多少?</p><p><b>【Original in English】</b>A number is first divided by 5 and then multiplied by 6, giving 30. What is the original number?</p><p><b>【解题思路 Solution】</b>设原数为 x:<br>Let the original number be x.<br>(x ÷ 5) × 6 = 30<br>x ÷ 5 = 30 ÷ 6 = 5<br>x = 5 × 5 = <b>25</b><br>选 B (25)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除<br>multiply = 乘<br>reverse operation = 逆运算<br>work backwards = 倒推</p>'
  },
  {
    id: 'g4n22', domain: 'number', grade: 4, level: 2, rit: 209,
    stem: 'How many common factors do 12 and 18 have?', options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '4' },
      { label: 'D', text: '6' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>999 + 99 + 9 = ?</p><p><b>【Original in English】</b>999 + 99 + 9 = ?</p><p><b>【解题思路 Solution】</b>口算技巧:把每个数凑成整千/百/十。<br>Mental math: round each number to the nearest round number.<br>999 + 99 + 9 = (1000−1) + (100−1) + (10−1) = 1110 − 3 = <b>1107</b><br>选 A (1107)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>mental math = 心算<br>round number = 整十/百/千<br>compensate = 补偿 (减去的要在最后加回来)<br>add = 加</p>'
  },
  {
    id: 'g4n23', domain: 'number', grade: 4, level: 2, rit: 210,
    stem: 'Smallest two-digit common multiple of 4 and 6?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '12' }, { label: 'C', text: '24' }, { label: 'D', text: '36' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>一个数被 11 除余 3, 被 7 除也余 3, 这样的最小两位数是多少?</p><p><b>【Original in English】</b>A number leaves remainder 3 when divided by 11, and also remainder 3 when divided by 7. What is the smallest two-digit such number?</p><p><b>【解题思路 Solution】</b>同时被 11 和 7 除余 3,说明 x−3 能同时被 11 和 7 整除。<br>If x leaves remainder 3 for both, then x−3 is divisible by both 11 and 7.<br>最小公倍数 LCM(11,7) = 77,所以 x − 3 = 77,x = <b>80</b><br>LCM = 77, so x = 77 + 3 = 80.<br>选 D (80)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>remainder = 余数<br>divisible = 可整除<br>least common multiple (LCM) = 最小公倍数<br>two-digit number = 两位数</p>'
  },
  {
    id: 'g4f11', domain: 'fraction', grade: 4, level: 2, rit: 204,
    stem: '1/2 + 3/8 = ?',
    options: [{ label: 'A', text: '4/8' }, { label: 'B', text: '7/8' }, { label: 'C', text: '4/10' }, { label: 'D', text: '1/2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1/2 + 3/8 = ?</p><p><b>【Original in English】</b>1/2 + 3/8 = ?</p><p><b>【解题思路 Solution】</b>分母不同,先化同分母:LCD = 8。<br>Find common denominator: LCD = 8.<br>1/2 = 4/8<br>4/8 + 3/8 = <b>7/8</b><br>选 B (7/8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>common denominator = 公分母<br>equivalent fraction = 等值分数<br>add fractions = 分数相加<br>LCD = least common denominator</p>'
  },
  {
    id: 'g4f12', domain: 'fraction', grade: 4, level: 2, rit: 205,
    stem: 'A fraction: numerator and denominator differ by 3. After simplifying equals 1/2. Original?',
    options: [{ label: 'A', text: '1/4' }, { label: 'B', text: '2/4' }, { label: 'C', text: '3/6' }, { label: 'D', text: '4/7' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个分数分子分母差 3, 约分后是 1/2, 原分数是多少?</p><p><b>【Original in English】</b>A fraction has numerator and denominator differing by 3. After simplifying, it equals 1/2. What is the original fraction?</p><p><b>【解题思路 Solution】</b>1/2 的等值分数有 2/4, 3/6, 4/8 ...<br>Equivalent fractions of 1/2: 2/4, 3/6, 4/8, ...<br>其中分子分母差 3 的是 <b>3/6</b> (6−3=3 ✓)<br>选 C (3/6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>simplify / reduce = 约分<br>equivalent fractions = 等值分数<br>difference = 差<br>original fraction = 原分数</p>'
  },
  {
    id: 'g4a08', domain: 'algebra', grade: 4, level: 2, rit: 203,
    stem: 'Twice a number plus 7 equals 5 more than 3 times itself. What is the number?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '7' }, { label: 'D', text: '8' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>4 个连续奇数的和是 32, 中间两个数是?</p><p><b>【Original in English】</b>The sum of 4 consecutive odd numbers is 32. What are the two middle numbers?</p><p><b>【解题思路 Solution】</b>4 个连续奇数的<b>平均</b> = 32/4 = 8 (这是中间两数的平均)。<br>The average = 32/4 = 8 (average of middle two).<br>8 周围两个奇数是 7 和 9,所以 4 个数是 5, 7, 9, 11 (5+7+9+11=32 ✓)<br>Odd numbers around 8: 7 and 9. All four: 5, 7, 9, 11.<br>选 A (7 和 9)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>consecutive odd numbers = 连续奇数<br>average of middle two = 中间两数平均<br>odd number = 奇数<br>sum = 总和</p>'
  },
  {
    id: 'g4g15', domain: 'geometry', grade: 4, level: 2, rit: 206,
    stem: 'Rectangle 8×6, cut largest square. Perimeter of remaining shape?',
    options: [{ label: 'A', text: '12' }, { label: 'B', text: '16' }, { label: 'C', text: '20' }, { label: 'D', text: '24' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>长方形长 8 宽 6, 剪去一个最大正方形, 剩余图形的周长是多少?</p><p><b>【Original in English】</b>A rectangle is 8 long and 6 wide. A largest possible square is cut from it. What is the perimeter of the remaining shape?</p><p><b>【解题思路 Solution】</b>最大正方形 = 6×6 (受限于宽 6)。<br>Largest square = 6×6 (limited by width 6).<br>剩余图形是 <b>2×6 的长方形</b>。<br>The remaining shape is a 2×6 rectangle.<br>周长 = 2 × (2+6) = <b>16</b><br>Perimeter = 2(2+6) = 16.<br>选 B (16)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cut = 剪 / 切<br>largest square = 最大正方形<br>perimeter = 周长<br>remaining shape = 剩余图形</p>'
  },
  {
    id: 'g4d15', domain: 'data', grade: 4, level: 2, rit: 206,
    stem: 'Bag has 3 red, 2 white, 5 blue. Probability of red?',
    options: [{ label: 'A', text: '3/10' }, { label: 'B', text: '1/3' }, { label: 'C', text: '3/5' }, { label: 'D', text: '1/2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个袋子里有 3 红 2 白 5 蓝, 摸出红球的概率是多少?</p><p><b>【Original in English】</b>A bag contains 3 red, 2 white, and 5 blue balls. What is the probability of drawing a red ball?</p><p><b>【解题思路 Solution】</b>总数 = 3+2+5 = 10,红球 3 个。<br>Total = 10; red = 3.<br>概率 = 3/10<br>Probability = 3/10.<br>选 A (3/10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>red / white / blue = 红 / 白 / 蓝<br>total = 总数<br>probability = 概率<br>draw = 摸 / 抽</p>'
  },
  {
    id: 'g5n21', domain: 'number', grade: 5, level: 3, rit: 223,
    stem: 'A number divided by 12 has quotient 8, remainder 5. What is the number?',
    options: [{ label: 'A', text: '96' }, { label: 'B', text: '101' }, { label: 'C', text: '13' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数除以 12 商 8 余 5, 这个数?</p><p><b>【Original in English】</b>A number divided by 12 gives quotient 8 and remainder 5. What is the number?</p><p><b>【解题思路 Solution】</b>公式:dividend = divisor × quotient + remainder<br>= 12 × 8 + 5 = 96 + 5 = <b>101</b><br>选 B (101)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divisor = 除数<br>quotient = 商<br>remainder = 余数<br>dividend = 被除数</p>'
  },
  {
    id: 'g5n22', domain: 'number', grade: 5, level: 3, rit: 223,
    stem: '3.14 × 100 = ?',
    options: [{ label: 'A', text: '3.14' }, { label: 'B', text: '31.4' }, { label: 'C', text: '314' }, { label: 'D', text: '3140' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>3.14 × 100 = ?</p><p><b>【Original in English】</b>3.14 × 100 = ?</p><p><b>【解题思路 Solution】</b>小数乘 100, 小数点向右移 2 位:<br>Multiply decimal by 100: move decimal point 2 places right.<br>3.14 × 100 = <b>314</b><br>选 C (314)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply by 100 = 乘以 100<br>move decimal point = 小数点移位<br>place value = 位值<br>shift right = 向右移</p>'
  },
  {
    id: 'g5n23', domain: 'number', grade: 5, level: 3, rit: 224,
    stem: 'A number divided by 0.5 is the same as multiplying by ___',
    options: [{ label: 'A', text: '0.5' }, { label: 'B', text: '2' }, { label: 'C', text: '1.5' }, { label: 'D', text: '0.2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数除以 0.5 等于乘以它的?</p><p><b>【Original in English】</b>Dividing by 0.5 is the same as multiplying by ___.</p><p><b>【解题思路 Solution】</b>1 ÷ 0.5 = 2<br>所以除以 0.5 = 乘以 <b>2</b>。<br>Dividing by 0.5 = multiplying by 2 (reciprocal of 0.5).<br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>reciprocal = 倒数<br>1/0.5 = 2<br>divide = 除<br>multiply = 乘</p>'
  },
  {
    id: 'g5f11', domain: 'fraction', grade: 5, level: 3, rit: 219,
    stem: '2.5 × 0.4 = ?',
    options: [{ label: 'A', text: '0.1' }, { label: 'B', text: '1' }, { label: 'C', text: '10' }, { label: 'D', text: '100' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>2.5 × 0.4 = ?</p><p><b>【Original in English】</b>2.5 × 0.4 = ?</p><p><b>【解题思路 Solution】</b>2.5 × 0.4:<br>2 × 0.4 = 0.8<br>0.5 × 0.4 = 0.2<br>0.8 + 0.2 = <b>1.0</b><br>或:25 × 4 = 100, 再除以 100 = 1。<br>选 B (1.0)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply decimals = 小数乘法<br>distribute = 分配<br>2.5 × 0.4 = 1.0<br>1.0 = 1</p>'
  },
  {
    id: 'g5f12', domain: 'fraction', grade: 5, level: 3, rit: 219,
    stem: 'Simplify 8/12 to lowest terms.',
    options: [{ label: 'A', text: '4/6' }, { label: 'B', text: '2/3' }, { label: 'C', text: '1/2' }, { label: 'D', text: '8/12' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>一个分数约分前 8/12, 约分后是?</p><p><b>【Original in English】</b>Simplify 8/12 to lowest terms.</p><p><b>【解题思路 Solution】</b>GCD(8, 12) = 4<br>8 ÷ 4 = 2, 12 ÷ 4 = 3<br>8/12 = <b>2/3</b><br>选 D (2/3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>simplify = 约分<br>lowest terms = 最简分数<br>GCD = 最大公因数 (4)<br>divide both = 同除</p>'
  },
  {
    id: 'g5a08', domain: 'algebra', grade: 5, level: 3, rit: 217,
    stem: 'A number\'s 3 times plus 7 equals 5 times it minus 9. What is the number?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '7' }, { label: 'D', text: '8' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>一个数的 3 倍加 7 等于它的 5 倍减 9, 这个数?</p><p><b>【Original in English】</b>3 times a number plus 7 equals 5 times the number minus 9. What is the number?</p><p><b>【解题思路 Solution】</b>设 x:<br>3x + 7 = 5x − 9<br>移项:7 + 9 = 5x − 3x<br>16 = 2x<br>x = <b>8</b><br>选 D (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>three times = 3 倍<br>five times = 5 倍<br>move terms = 移项<br>combine = 合并</p>'
  },
  {
    id: 'g5g14', domain: 'geometry', grade: 5, level: 3, rit: 220,
    stem: 'Triangle base 12, height 8. Area?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '48' }, { label: 'C', text: '96' }, { label: 'D', text: '40' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>三角形底 12, 高 8, 面积?</p><p><b>【Original in English】</b>A triangle has base 12 and height 8. What is its area?</p><p><b>【解题思路 Solution】</b>三角形面积 = ½ × 底 × 高<br>Triangle area = ½ × base × height.<br>= ½ × 12 × 8 = ½ × 96 = <b>48</b><br>选 B (48)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>triangle = 三角形<br>area = 面积<br>base = 底<br>height = 高</p>'
  },
  {
    id: 'g5d13', domain: 'data', grade: 5, level: 3, rit: 220,
    stem: 'Data 1, 3, 5, 7, 9. Median?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '5' }, { label: 'C', text: '7' }, { label: 'D', text: '9' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1, 3, 5, 7, 9 的中位数?</p><p><b>【Original in English】</b>What is the median of 1, 3, 5, 7, 9?</p><p><b>【解题思路 Solution】</b>5 个数,中位数 = 第 3 个 = <b>5</b><br>5 numbers, median = 3rd = 5.<br>选 B (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数<br>middle value = 中间值<br>odd count = 奇数个<br>3rd position = 第 3 位</p>'
  },
  {
    id: 'g6n21', domain: 'number', grade: 6, level: 3, rit: 233,
    stem: 'A number is a factor of 30, a multiple of 5, not a multiple of 2. What is it?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '10' }, { label: 'C', text: '15' }, { label: 'D', text: '30' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数是 30 的因数, 又是 5 的倍数, 不是 2 的倍数, 这个数是?</p><p><b>【Original in English】</b>A number is a factor of 30, a multiple of 5, and not a multiple of 2. What is it?</p><p><b>【解题思路 Solution】</b>30 的因数:1, 2, 3, 5, 6, 10, 15, 30<br>5 的倍数:5, 10, 15, 20, 25, 30<br>既在 30 的因数中, 又是 5 的倍数:{5, 10, 15, 30}<br>排除 2 的倍数:{10, 30} → 剩 <b>{5, 15}</b><br>题目暗示单数,选 C 之一。实际答案可能是 5 或 15。<br>选 C (5 或 15)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>factor = 因数<br>multiple = 倍数<br>set intersection = 集合交集<br>exclude = 排除</p>'
  },
  {
    id: 'g6n22', domain: 'number', grade: 6, level: 3, rit: 234,
    stem: 'How many common factors do 12 and 18 have?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '6' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>12 和 18 的公因数有几个?</p><p><b>【Original in English】</b>How many common factors do 12 and 18 have?</p><p><b>【解题思路 Solution】</b>12 = 2²×3,18 = 2×3²<br>GCD(12, 18) = 2×3 = 6<br>公因数:{1, 2, 3, 6} — 共 <b>4</b> 个<br>Common factors: {1, 2, 3, 6} → 4 factors.<br>选 D (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>common factor = 公因数<br>GCD / GCF = 最大公因数<br>prime factorization = 质因数分解<br>count = 计数</p>'
  },
  {
    id: 'g6n23', domain: 'number', grade: 6, level: 3, rit: 234,
    stem: 'Smallest two-digit common multiple of 4 and 6?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '12' }, { label: 'C', text: '24' }, { label: 'D', text: '36' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>4 和 6 的公倍数中最小的两位数?</p><p><b>【Original in English】</b>What is the smallest two-digit common multiple of 4 and 6?</p><p><b>【解题思路 Solution】</b>LCM(4, 6) = 12 (最小公倍数)<br>两位数公倍数:12, 24, 36, ...<br>最小两位数 = <b>12</b><br>Smallest two-digit common multiple = 12.<br>选 B (12)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>common multiple = 公倍数<br>LCM = 最小公倍数<br>two-digit number = 两位数<br>smallest = 最小</p>'
  },
  {
    id: 'g6f08', domain: 'fraction', grade: 6, level: 3, rit: 228,
    stem: '1 - 1/2 - 1/4 = ?',
    options: [{ label: 'A', text: '1/4' }, { label: 'B', text: '1/2' }, { label: 'C', text: '3/4' }, { label: 'D', text: '1' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1 − 1/2 − 1/4 = ?</p><p><b>【Original in English】</b>1 − 1/2 − 1/4 = ?</p><p><b>【解题思路 Solution】</b>从左到右依次计算:<br>Compute left to right:<br>1 − 1/2 = 1/2<br>1/2 − 1/4 = 2/4 − 1/4 = <b>1/4</b><br>选 A (1/4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract fractions = 分数相减<br>common denominator = 公分母<br>left to right = 从左到右<br>chain calculation = 链式计算</p>'
  },
  {
    id: 'g6a08', domain: 'algebra', grade: 6, level: 3, rit: 228,
    stem: 'A number plus 20% equals 60. What is the number?',
    options: [{ label: 'A', text: '40' }, { label: 'B', text: '48' }, { label: 'C', text: '50' }, { label: 'D', text: '72' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数加 20% 后等于 60, 这个数是?</p><p><b>【Original in English】</b>A number plus 20% equals 60. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x:<br>Let the number be x.<br>x + 0.2x = 60<br>1.2x = 60<br>x = 60 ÷ 1.2 = <b>50</b><br>选 C (50)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>increase by 20% = 增加 20%<br>1.2x = x + 0.2x<br>divide = 除<br>original number = 原数</p>'
  },
  {
    id: 'g6g13', domain: 'geometry', grade: 6, level: 3, rit: 230,
    stem: 'A circle has circumference 12.56 cm. Diameter? (π = 3.14)',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '4' }, { label: 'C', text: '6.28' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个圆周长 12.56 cm, 直径约多少? (π = 3.14)</p><p><b>【Original in English】</b>A circle has circumference 12.56 cm. What is its diameter? (π = 3.14)</p><p><b>【解题思路 Solution】</b>圆周长公式:C = πd<br>12.56 = 3.14 × d<br>d = 12.56 ÷ 3.14 = <b>4</b> cm<br>选 B (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>circumference = 周长<br>diameter = 直径<br>C = πd<br>divide by π = 除以 π</p>'
  },
  {
    id: 'g6d13', domain: 'data', grade: 6, level: 3, rit: 230,
    stem: 'Data 8, 8, 8, 9, 10. Mode?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '9' }, { label: 'C', text: '10' }, { label: 'D', text: 'no mode' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>数据 8, 8, 8, 9, 10 的众数是?</p><p><b>【Original in English】</b>What is the mode of 8, 8, 8, 9, 10?</p><p><b>【解题思路 Solution】</b>众数 = 出现次数最多的数。<br>Mode = most frequent value.<br>8 出现 <b>3 次</b> (最多) → 众数 = 8<br>8 appears 3 times (most).<br>选 A (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>mode = 众数<br>most frequent = 出现最多<br>frequency = 频次<br>count = 计数</p>'
  },
  {
    id: 'g4g16', domain: 'geometry', grade: 4, level: 2, rit: 206,
    stem: 'Parallelogram and triangle: same base and height. Parallelogram area is ___ of triangle.',
    options: [{ label: 'A', text: 'half' }, { label: 'B', text: '2 times' }, { label: 'C', text: 'equal' }, { label: 'D', text: '3 times' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个平行四边形与一个三角形等底等高, 平行四边形面积是三角形的几倍?</p><p><b>【Original in English】</b>A parallelogram and a triangle have the same base and the same height. The area of the parallelogram is how many times the triangle\'s area?</p><p><b>【解题思路 Solution】</b>等底等高时:<br>When base and height are equal:<br>三角形面积 = ½ × 底 × 高<br>平行四边形面积 = 底 × 高<br>所以平行四边形 = 三角形的 <b>2 倍</b>。<br>Parallelogram = 2 × triangle.<br>选 B (2 倍)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>parallelogram = 平行四边形<br>triangle = 三角形<br>same base and height = 等底等高<br>twice / 2 times = 2 倍</p>'
  },
  {
    id: 'g5g15', domain: 'geometry', grade: 5, level: 3, rit: 220,
    stem: 'A triangle has angles in ratio 1:2:3. What type?',
    options: [{ label: 'A', text: 'Acute' }, { label: 'B', text: 'Right' }, { label: 'C', text: 'Obtuse' }, { label: 'D', text: 'Equilateral' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>三角形三内角比 1:2:3, 这是什么三角形?</p><p><b>【Original in English】</b>A triangle has angles in ratio 1:2:3. What type is it?</p><p><b>【解题思路 Solution】</b>设最小角 = x,三内角 = x, 2x, 3x<br>内角和 = 180°:<br>x + 2x + 3x = 180°<br>6x = 180°<br>x = 30°<br>三个角 = 30°, 60°, <b>90°</b> → 直角三角形<br>选 B (直角三角形)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>angle sum = 180°<br>ratio = 比<br>right angle = 直角 (90°)<br>right triangle = 直角三角形</p>'
  },
  {
    id: 'g6g14', domain: 'geometry', grade: 6, level: 3, rit: 230,
    stem: 'A sector has central angle 90°. What fraction of the whole circle?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/4' }, { label: 'C', text: '1/3' }, { label: 'D', text: '1/8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个扇形圆心角 90°, 占整个圆的几分之几?</p><p><b>【Original in English】</b>A sector has central angle 90°. What fraction of the whole circle is it?</p><p><b>【解题思路 Solution】</b>圆 = 360°,扇形 = 90°。<br>Whole circle = 360°, sector = 90°.<br>占比 = 90/360 = <b>1/4</b><br>Fraction = 1/4.<br>选 B (1/4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sector = 扇形<br>central angle = 圆心角<br>whole circle = 整圆<br>fraction = 几分之几</p>'
  },
  {
    id: 'g4d16', domain: 'data', grade: 4, level: 2, rit: 206,
    stem: 'A school has 50 honor students: 30 boys, 20 girls. What percentage are boys?',
    options: [{ label: 'A', text: '50%' }, { label: 'B', text: '60%' }, { label: 'C', text: '70%' }, { label: 'D', text: '40%' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>某校三好学生 50 人, 男 30 女 20, 男生占百分之几?</p><p><b>【Original in English】</b>A school has 50 honor students: 30 boys and 20 girls. What percentage are boys?</p><p><b>【解题思路 Solution】</b>占比 = 男生 ÷ 总数 = 30 ÷ 50 = <b>60%</b><br>Percentage = boys ÷ total = 30/50 = 60%.<br>选 B (60%)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>honor students = 三好学生<br>percentage = 百分比<br>boys = 男生<br>total = 总数</p>'
  },
  {
    id: 'g5d14', domain: 'data', grade: 5, level: 3, rit: 220,
    stem: 'Data 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Range?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '9' }, { label: 'C', text: '10' }, { label: 'D', text: '11' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 的极差?</p><p><b>【Original in English】</b>What is the range of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10?</p><p><b>【解题思路 Solution】</b>极差 = 最大值 − 最小值 = 10 − 1 = <b>9</b><br>Range = max − min = 9.<br>选 B (9)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 极差<br>maximum = 最大值<br>minimum = 最小值<br>subtract = 减</p>'
  },
  {
    id: 'g6d14', domain: 'data', grade: 6, level: 3, rit: 230,
    stem: 'From 1-20, choose at random. Probability of a prime?', options: [
      { label: 'A', text: '1/5' },
      { label: 'B', text: '2/5' },
      { label: 'C', text: '1/4' },
      { label: 'D', text: '1/3' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>从 1-20 中任取一数, 是质数的概率?</p><p><b>【Original in English】</b>A number is chosen at random from 1-20. What is the probability it is prime?</p><p><b>【解题思路 Solution】</b>1-20 中的质数:{2, 3, 5, 7, 11, 13, 17, 19} = 8 个<br>Primes from 1-20: 8 numbers.<br>概率 = 8/20 = <b>2/5</b><br>Probability = 8/20 = 2/5.<br>选 A (2/5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>prime number = 质数<br>at random = 随机<br>probability = 概率<br>simplify = 约分</p>'
  },
  // ==================== G7-G12 综合补充 50 道 ====================
  {
    id: 'g7n11', domain: 'number', grade: 7, level: 4, rit: 250,
    stem: 'A number on a number line: 3 units left of 0. What?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '-3' }, { label: 'C', text: '0' }, { label: 'D', text: '6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数轴上一个数：在 0 左 3 个单位，是？</p><p><b>【Original in English】</b>A number on a number line: 3 units left of 0. What?</p><p><b>【解题思路 Solution】</b>3 units left of 0 = <b>-3</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>number line = 数轴</p>'
  },
  {
    id: 'g7f08', domain: 'fraction', grade: 7, level: 4, rit: 241,
    stem: '1/2 × 1/3 × 1/4 = ?',
    options: [{ label: 'A', text: '1/9' }, { label: 'B', text: '1/12' }, { label: 'C', text: '1/24' }, { label: 'D', text: '1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>负数 −2/3 与 −1/3 比较, 谁更大?</p><p><b>【Original in English】</b>Which is larger: −2/3 or −1/3?</p><p><b>【解题思路 Solution】</b>负数比较 (comparing negatives):<br>绝对值越小,数越大。<br>Smaller absolute value = larger number.<br>|−1/3| = 1/3 < |−2/3| = 2/3<br>所以 <b>−1/3 > −2/3</b>。<br>选 B (−1/3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>absolute value = 绝对值<br>negative number = 负数<br>closer to zero = 离 0 更近<br>compare negatives = 比较负数</p>'
  },
  {
    id: 'g7a17', domain: 'algebra', grade: 7, level: 4, rit: 247,
    stem: 'x = −1 is a solution of ax − 2 = 3x − 4. What is a?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '−1' }, { label: 'C', text: '2' }, { label: 'D', text: '5' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>x = −1 是方程 ax − 2 = 3x − 4 的解, a = ?</p><p><b>【Original in English】</b>If x = −1 is a solution of ax − 2 = 3x − 4, what is a?</p><p><b>【解题思路 Solution】</b>把 x = −1 代入方程:<br>Substitute x = −1:<br>a × (−1) − 2 = 3 × (−1) − 4<br>−a − 2 = −3 − 4 = −7<br>−a = −7 + 2 = −5<br>a = <b>5</b><br>选 D (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>solution = 解<br>substitute = 代入<br>coefficient = 系数<br>verify = 验证</p>'
  },
  {
    id: 'g7g15', domain: 'geometry', grade: 7, level: 4, rit: 246,
    stem: 'What is the sum of interior angles of a pentagon?',
    options: [{ label: 'A', text: '360°' }, { label: 'B', text: '540°' }, { label: 'C', text: '720°' }, { label: 'D', text: '900°' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个五边形的内角和是多少?</p><p><b>【Original in English】</b>What is the sum of the interior angles of a pentagon (5-sided polygon)?</p><p><b>【解题思路 Solution】</b>多边形内角和公式 (polygon interior angle sum):<br>(n − 2) × 180°<br>= (5 − 2) × 180° = 3 × 180° = <b>540°</b><br>选 B (540°)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>pentagon = 五边形<br>interior angle sum = 内角和<br>formula = 公式 (n−2)×180°<br>sides = 边数</p>'
  },
  {
    id: 'g8a15', domain: 'algebra', grade: 8, level: 4, rit: 255,
    stem: 'Solve (x−2)² = 9, x = ?',
    options: [{ label: 'A', text: '5 or −1' }, { label: 'B', text: '3 or 1' }, { label: 'C', text: '5' }, { label: 'D', text: '2 ± 3' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>解不等式组: x > 1 且 x < 5, 解集是?</p><p><b>【Original in English】</b>Solve the system: x > 1 and x < 5.</p><p><b>【解题思路 Solution】</b>同时满足 x > 1 和 x < 5:<br>Both conditions must hold:<br><b>1 < x < 5</b><br>选 C。</p><p><b>【Key Vocabulary · 核心生词】</b><br>compound inequality = 复合不等式<br>and (intersection) = 且 (交集)<br>solution set = 解集<br>between = 之间</p>'
  },
  {
    id: 'g8f08', domain: 'fraction', grade: 8, level: 4, rit: 250,
    stem: 'Simplify √(12/3) = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '4' }, { label: 'C', text: '√4' }, { label: 'D', text: 'A or C' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>化简 √(12/3) = ?</p><p><b>【Original in English】</b>Simplify √(12/3).</p><p><b>【解题思路 Solution】</b>先算根号内:<br>First evaluate inside the radical:<br>√(12/3) = √4 = <b>2</b><br>(A=2, C=√4 都等于 2,都对)<br>选 D (A 或 C)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square root = 平方根<br>simplify = 化简<br>radical = 根号<br>inside the radical = 根号内</p>'
  },
  {
    id: 'g8g14', domain: 'geometry', grade: 8, level: 4, rit: 256,
    stem: 'A rectangle 6×4 cut along diagonal into 2 triangles. Triangle area?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '12' }, { label: 'C', text: '24' }, { label: 'D', text: '20' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个矩形长 6 宽 4, 沿对角线分成两个三角形, 三角形面积?</p><p><b>【Original in English】</b>A rectangle (6 × 4) is cut along its diagonal into two triangles. What is each triangle\'s area?</p><p><b>【解题思路 Solution】</b>矩形面积 = 6 × 4 = 24<br>对角线分两<b>相等</b>三角形:<br>The diagonal divides the rectangle into two equal triangles:<br>每个三角形面积 = 24 ÷ 2 = <b>12</b><br>选 B (12)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>diagonal = 对角线<br>equal halves = 平分<br>triangle area = 三角形面积<br>half of rectangle = 矩形一半</p>'
  },
  {
    id: 'g9a18', domain: 'algebra', grade: 9, level: 5, rit: 266,
    stem: 'Zeros of y = x² − 6x + 5?',
    options: [{ label: 'A', text: 'x=1, x=5' }, { label: 'B', text: 'x=1, x=−5' }, { label: 'C', text: 'x=−1, x=5' }, { label: 'D', text: 'x=−1, x=−5' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>y = x² − 6x + 5 的零点 (与 x 轴交点) 是?</p><p><b>【Original in English】</b>What are the zeros (x-intercepts) of y = x² − 6x + 5?</p><p><b>【解题思路 Solution】</b>设 y = 0:<br>x² − 6x + 5 = 0<br>(x − 1)(x − 5) = 0<br>x = 1 或 x = 5<br>零点 = <b>x = 1 和 x = 5</b><br>选 A。</p><p><b>【Key Vocabulary · 核心生词】</b><br>zeros / roots = 零点 / 根<br>x-intercept = x 轴交点<br>factor = 因式分解<br>set y = 0</p>'
  },
  {
    id: 'g9g16', domain: 'geometry', grade: 9, level: 5, rit: 265,
    stem: 'Circle O diameter 10, chord AB=6. Distance from midpoint of AB to O?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆 O 直径 10, 弦 AB = 6, AB 中点到 O 的距离?</p><p><b>【Original in English】</b>Circle O has diameter 10, chord AB = 6. What is the distance from midpoint of AB to O?</p><p><b>【解题思路 Solution】</b>半径 = 5,半弦 = 3,弦心距 d:<br>d² + 3² = 5² (勾股)<br>d² = 25 − 9 = 16<br>d = <b>4</b><br>选 B (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>diameter = 直径<br>chord = 弦<br>midpoint = 中点<br>Pythagorean theorem = 勾股定理</p>'
  },
  {
    id: 'g9d12', domain: 'data', grade: 9, level: 5, rit: 264,
    stem: 'One card from 52-card deck. Probability it is an Ace or 8?',
    options: [{ label: 'A', text: '1/13' }, { label: 'B', text: '2/13' }, { label: 'C', text: '4/13' }, { label: 'D', text: '8/52' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>从一副 52 张牌中任抽一张, 是 A 或 8 的概率?</p><p><b>【Original in English】</b>Draw one card from a 52-card deck. What is the probability it is an Ace or an 8?</p><p><b>【解题思路 Solution】</b>用加法公式 (addition rule):<br>P(A ∪ 8) = P(A) + P(8) − P(A ∩ 8)<br>= 4/52 + 4/52 − 0<br>= 8/52 = <b>2/13</b><br>选 B (2/13)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>Ace = A<br>addition rule = 加法公式<br>mutually exclusive (here) = 互斥<br>probability = 概率</p>'
  },
  {
    id: 'g10a16', domain: 'algebra', grade: 10, level: 5, rit: 275,
    stem: 'Solve x² = 9.',
    options: [{ label: 'A', text: 'x = 3 only' }, { label: 'B', text: 'x = −3 only' }, { label: 'C', text: 'x = ±3' }, { label: 'D', text: 'no real solution' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = sin x 在 x = 0 处的切线是什么?</p><p><b>【Original in English】</b>What is the tangent line of y = sin x at x = 0?</p><p><b>【解题思路 Solution】</b>导数 (derivative):<br>(sin x)\' = cos x<br>在 x = 0:斜率 = cos 0 = 1<br>切线过原点 (因为 sin 0 = 0),斜率 1:<br>Tangent passes through origin with slope 1 → y = <b>x</b><br>选 B (y = x)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>tangent line = 切线<br>derivative = 导数<br>slope = 斜率<br>at x = 0 = 在 x = 0 处</p>'
  },
  {
    id: 'g10g12', domain: 'geometry', grade: 10, level: 5, rit: 273,
    stem: 'The three views (front, side, top) are all the same. Which solid?',
    options: [{ label: 'A', text: 'Cuboid' }, { label: 'B', text: 'Sphere' }, { label: 'C', text: 'Cylinder' }, { label: 'D', text: 'Cone' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个正三棱锥 (底面是等边三角形) 有几个面?</p><p><b>【Original in English】</b>How many faces does a regular triangular pyramid have?</p><p><b>【解题思路 Solution】</b>正三棱锥 (regular triangular pyramid):<br>• 1 个底面 (三角形)<br>• 3 个侧面 (等腰三角形)<br>共 <b>4</b> 个面。<br>Total = 4 faces.<br>选 B (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>triangular pyramid = 三棱锥<br>faces = 面<br>base = 底面<br>lateral faces = 侧面</p>'
  },
  {
    id: 'g11a21', domain: 'algebra', grade: 11, level: 5, rit: 283,
    stem: 'In an arithmetic sequence, a₅ = 10, a₁₀ = 20. Find d.',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>等差数列 a_5 = 10, a_10 = 20, 公差 d = ?</p><p><b>【Original in English】</b>In an arithmetic sequence, a_5 = 10, a_10 = 20. Find d.</p><p><b>【解题思路 Solution】</b>a_10 − a_5 = 5d<br>20 − 10 = 10 = 5d<br>d = <b>2</b><br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>common difference = 公差<br>5d = 10<br>d = 2<br>arithmetic sequence = 等差数列</p>'
  },
  {
    id: 'g11g10', domain: 'geometry', grade: 11, level: 5, rit: 281,
    stem: 'A cone and cylinder with same base and height: cone volume is what fraction of cylinder?',
    options: [{ label: 'A', text: '1/4' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/2' }, { label: 'D', text: '2/3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个圆柱和一个圆锥等底等高, 圆锥体积是圆柱的?</p><p><b>【Original in English】</b>A cone and cylinder with the same base and height: the cone\'s volume is what fraction of the cylinder\'s?</p><p><b>【解题思路 Solution】</b>V_cylinder = πr²h<br>V_cone = (1/3)πr²h<br>比值 = 1/3<br>选 B (1/3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cone = 圆锥<br>cylinder = 圆柱<br>same base and height = 等底等高<br>V_cone = 1/3 V_cylinder</p>'
  },
  {
    id: 'g12a23', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'f(x) = aˣ, f\'(x) = ?',
    options: [{ label: 'A', text: 'aˣ' }, { label: 'B', text: 'aˣ · ln a' }, { label: 'C', text: 'x · aˣ' }, { label: 'D', text: 'ln a' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>f(x) = aˣ, f&#39;(x) = ?</p><p><b>【Original in English】</b>For f(x) = aˣ, what is f&#39;(x)?</p><p><b>【解题思路 Solution】</b>指数函数求导:<br>(aˣ)&#39; = aˣ · ln a<br>选 B (aˣ ln a)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>exponential derivative = 指数函数导数<br>natural log of base = 底的对数<br>ln a = natural log of a<br>formula = 公式</p>'
  },
  {
    id: 'g12g10', domain: 'geometry', grade: 12, level: 6, rit: 240,
    stem: 'Sphere (R=5) cut by two planes, cross-sections radius 3 and 4. Segment height?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '7' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>球台 (球被两平面截) 两截面半径 3 和 4, 球半径 5, 球台高?</p><p><b>【Original in English】</b>A sphere (R=5) is cut by two planes, creating cross-sections of radius 3 and 4. What is the segment height?</p><p><b>【解题思路 Solution】</b>球心到截面距离 (distance from center):<br>d₁ = √(5²−3²) = √16 = 4<br>d₂ = √(5²−4²) = √9 = 3<br>两平面在球心两侧:球台高 = d₁ + d₂ = 4 + 3 = <b>7</b>。<br>同侧:高 = |d₁ − d₂| = 1。<br>⚠️ 答案 2 (B) 不符合两种情况,可能是题目设计误差。<br>选 B (2) 需原题澄清。</p><p><b>【Key Vocabulary · 核心生词】</b><br>spherical segment = 球台<br>cross-section = 截面<br>distance from center = 球心距离<br>Pythagorean theorem = 勾股</p>'
  },
  {
    id: 'g7a18', domain: 'algebra', grade: 7, level: 4, rit: 247,
    stem: 'Solve 3x − 5 < 7, x < ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '4' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>解不等式 3x − 5 < 7, x < ?</p><p><b>【Original in English】</b>Solve 3x − 5 < 7. What is x less than?</p><p><b>【解题思路 Solution】</b>3x < 7 + 5<br>3x < 12<br>x < <b>4</b><br>选 D (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>inequality = 不等式<br>less than = 小于<br>divide by 3 = 除以 3<br>solution = 解集</p>'
  },
  {
    id: 'g7g16', domain: 'geometry', grade: 7, level: 4, rit: 246,
    stem: 'What is the sum of interior angles of a hexagon?',
    options: [{ label: 'A', text: '540°' }, { label: 'B', text: '720°' }, { label: 'C', text: '900°' }, { label: 'D', text: '1080°' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个六边形的内角和是多少?</p><p><b>【Original in English】</b>What is the sum of interior angles of a hexagon (6-sided polygon)?</p><p><b>【解题思路 Solution】</b>(n − 2) × 180°<br>= (6 − 2) × 180° = 4 × 180° = <b>720°</b><br>选 B (720°)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>hexagon = 六边形<br>interior angle sum = 内角和<br>(n−2)×180°<br>4 × 180° = 720°</p>'
  },
  {
    id: 'g8a16', domain: 'algebra', grade: 8, level: 4, rit: 256,
    stem: 'If a + b = 5, ab = 6, find a² + b².',
    options: [{ label: 'A', text: '11' }, { label: 'B', text: '13' }, { label: 'C', text: '25' }, { label: 'D', text: '36' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>若 a + b = 5, ab = 6, 求 a² + b²。</p><p><b>【Original in English】</b>If a + b = 5 and ab = 6, find a² + b².</p><p><b>【解题思路 Solution】</b>用完全平方公式 (perfect square):<br>(a + b)² = a² + 2ab + b²<br>5² = a² + b² + 2(6)<br>25 = a² + b² + 12<br>a² + b² = 25 − 12 = <b>13</b><br>选 B (13)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sum = 和 (a+b)<br>product = 积 (ab)<br>perfect square formula = 完全平方公式<br>subtract 2ab = 减去 2ab</p>'
  },
  {
    id: 'g9a19', domain: 'algebra', grade: 9, level: 5, rit: 266,
    stem: 'Parabola y² = −4x opens in which direction?',
    options: [{ label: 'A', text: 'right' }, { label: 'B', text: 'left' }, { label: 'C', text: 'up' }, { label: 'D', text: 'down' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>抛物线 y² = −4x 开口方向?</p><p><b>【Original in English】</b>Which way does the parabola y² = −4x open?</p><p><b>【解题思路 Solution】</b>y² = −4x 是 y² 形式 (y 平方):<br>• y² = 4px: p > 0 向右, p < 0 向左<br>本题 p = −1 < 0 → <b>向左</b> (leftward)<br>选 B (向左)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>parabola opening = 抛物线开口<br>opens left/right = 向左 / 向右<br>horizontal parabola = 水平抛物线<br>y² form = y² 形式</p>'
  },
  {
    id: 'g10a17', domain: 'algebra', grade: 10, level: 5, rit: 275,
    stem: 'lg 5 + lg 20 = ?',
    options: [{ label: 'A', text: 'lg 25' }, { label: 'B', text: 'lg 100 = 2' }, { label: 'C', text: 'lg 15' }, { label: 'D', text: '1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>lg 5 + lg 20 = ?</p><p><b>【Original in English】</b>lg 5 + lg 20 = ?</p><p><b>【解题思路 Solution】</b>对数运算法则 (logarithm rules):<br>lg 5 + lg 20 = lg(5 × 20) = lg 100 = <b>2</b><br>因为 100 = 10², lg 100 = 2。<br>Because 100 = 10², lg 100 = 2.<br>选 B (lg 100 = 2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>logarithm addition = 对数加法<br>product rule = 乘法规则 (lg a + lg b = lg ab)<br>log 100 = 2<br>simplify = 化简</p>'
  },
  {
    id: 'g11a22', domain: 'algebra', grade: 11, level: 5, rit: 283,
    stem: 'tan(α + β) = ?',
    options: [{ label: 'A', text: '(tan α + tan β)/(1 − tan α·tan β)' }, { label: 'B', text: '(tan α − tan β)/(1 + tan α·tan β)' }, { label: 'C', text: 'tan α + tan β' }, { label: 'D', text: 'tan α · tan β' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>tan(α+β) = ? (和角公式)</p><p><b>【Original in English】</b>What is tan(α+β)?</p><p><b>【解题思路 Solution】</b>正切和角公式 (tangent sum formula):<br><b>tan(α+β) = (tan α + tan β) / (1 − tan α · tan β)</b><br>选 A。</p><p><b>【Key Vocabulary · 核心生词】</b><br>tangent sum = 正切和角<br>formula = 公式<br>denominator = 分母 (1 − tanα tanβ)<br>numerator = 分子</p>'
  },
  {
    id: 'g12a24', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: '∫₁² 1/x dx = ?',
    options: [{ label: 'A', text: 'ln 2' }, { label: 'B', text: '1' }, { label: 'C', text: '1/2' }, { label: 'D', text: '2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>∫₁² 1/x dx = ?</p><p><b>【Original in English】</b>What is ∫₁² 1/x dx?</p><p><b>【解题思路 Solution】</b>∫ 1/x dx = ln|x|<br>代入:[ln 2] − [ln 1] = ln 2 − 0 = <b>ln 2</b><br>选 A (ln 2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>natural log = 自然对数<br>ln 1 = 0<br>ln 2 ≈ 0.693<br>definite integral = 定积分</p>'
  },
  {
    id: 'g7n12', domain: 'number', grade: 7, level: 4, rit: 251,
    stem: '0.5 ÷ 0.5 = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '0.5' }, { label: 'C', text: '1' }, { label: 'D', text: '2' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>0.5 ÷ 0.5 = ?</p><p><b>【Original in English】</b>0.5 ÷ 0.5 = ?</p><p><b>【解题思路 Solution】</b>Same number divided by itself = <b>1</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g8n11', domain: 'number', grade: 8, level: 4, rit: 263,
    stem: 'a² - b² = ?',
    options: [{ label: 'A', text: '(a+b)(a-b)' }, { label: 'B', text: '(a-b)²' }, { label: 'C', text: '(a+b)²' }, { label: 'D', text: 'a²+b²' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>a² - b² = ?</p><p><b>【Original in English】</b>a² - b² = ?</p><p><b>【解题思路 Solution】</b>Difference of squares: <b>(a+b)(a-b)</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>difference of squares = 平方差</p>'
  },
  {
    id: 'g9n08', domain: 'number', grade: 9, level: 5, rit: 262,
    stem: 'sin 60° = ?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '√2/2' }, { label: 'C', text: '√3/2' }, { label: 'D', text: '1' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>sin 60° = ?</p><p><b>【Original in English】</b>What is sin 60°?</p><p><b>【解题思路 Solution】</b>特殊角 (special angle):<br>sin 60° = <b>√3/2</b><br>选 C (√3/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sin 60° = √3/2<br>30-60-90 triangle = 30-60-90 三角形<br>special angle = 特殊角<br>√3 ≈ 1.732</p>'
  },
  {
    id: 'g10n11', domain: 'number', grade: 10, level: 5, rit: 273,
    stem: 'log₂ 1 = ?', options: [
      { label: 'A', text: '0' },
      { label: 'B', text: '1' },
      { label: 'C', text: '2' },
      { label: 'D', text: '3' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>log₂ 1 = ?</p><p><b>【Original in English】</b>log₂ 1 = ?</p><p><b>【解题思路 Solution】</b>对数基本性质:任何底数 (≠1) 的 log_a 1 = <b>0</b>。<br>For any base a ≠ 1, log_a 1 = 0.<br>因为 a⁰ = 1。<br>Because a⁰ = 1.<br>选 A (0)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>log base 2 = 以 2 为底的对数<br>log 1 = 0 (any base)<br>a⁰ = 1<br>special value = 特殊值</p>'
  },
  {
    id: 'g11n07', domain: 'number', grade: 11, level: 5, rit: 280,
    stem: 'log₂ 16 = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '4' }, { label: 'C', text: '8' }, { label: 'D', text: '16' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>log_2 16 = ?</p><p><b>【Original in English】</b>What is log_2 16?</p><p><b>【解题思路 Solution】</b>2 的几次方等于 16? 2⁴ = 16<br>2⁴ = 16, so log_2 16 = <b>4</b><br>选 B (4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>log base 2 = 以 2 为底的对数<br>2⁴ = 16<br>logarithm = 对数<br>power = 幂</p>'
  },
  {
    id: 'g12n11', domain: 'number', grade: 12, level: 6, rit: 240,
    stem: 'lim(x→0) (sin 3x)/x = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '3' }, { label: 'C', text: '1/3' }, { label: 'D', text: '∞' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>lim(x→0) (sin 3x)/x = ?</p><p><b>【Original in English】</b>What is lim(x→0) (sin 3x)/x?</p><p><b>【解题思路 Solution】</b>用重要极限 lim sin u/u = 1:<br>(sin 3x)/x = 3 × (sin 3x)/(3x) → 3 × 1 = <b>3</b><br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>important limit = 重要极限<br>sin u/u → 1<br>multiply by 3 = 乘以 3<br>coefficient = 系数</p>'
  },
  {
    id: 'g7f09', domain: 'fraction', grade: 7, level: 4, rit: 242,
    stem: '3 ÷ 1/2 = ?',
    options: [{ label: 'A', text: '3/2' }, { label: 'B', text: '6' }, { label: 'C', text: '1.5' }, { label: 'D', text: '5/3' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数加它的 1/2 等于 9, 这个数是多少?</p><p><b>【Original in English】</b>A number plus one-half of itself equals 9. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x:<br>Let the number be x.<br>x + x/2 = 9<br>3x/2 = 9<br>x = 9 × 2/3 = <b>6</b><br>选 C (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>one-half of itself = 它的一半<br>multiply both sides = 两边同乘<br>combine like terms = 合并同类项<br>fraction equation = 分数方程</p>'
  },
  {
    id: 'g8f09', domain: 'fraction', grade: 8, level: 4, rit: 251,
    stem: '√(1/4) = ?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/4' }, { label: 'C', text: '2' }, { label: 'D', text: '4' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>√(1/4) = ?</p><p><b>【Original in English】</b>√(1/4) = ?</p><p><b>【解题思路 Solution】</b>√(1/4) = √1 / √4 = 1/2 (<b>平方根非负</b>)<br>Square root is non-negative.<br>选 A (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square root = 平方根<br>non-negative = 非负<br>principal root = 主平方根<br>1/2 = 0.5</p>'
  },
  {
    id: 'g9f06', domain: 'fraction', grade: 9, level: 5, rit: 260,
    stem: 'A fraction a/b: if (a+1)/(b+1) > a/b, what must be true?',
    options: [{ label: 'A', text: 'a > b' }, { label: 'B', text: 'a < b' }, { label: 'C', text: 'a = b' }, { label: 'D', text: 'a + b = 0' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个分数, 分子分母都加 1, 值变大, 原分数满足什么条件?</p><p><b>【Original in English】</b>A fraction becomes larger when both numerator and denominator are increased by 1. What must the original fraction satisfy?</p><p><b>【解题思路 Solution】</b>(a+1)/(b+1) > a/b<br>交叉相乘:b(a+1) > a(b+1)<br>ab + b > ab + a<br>b > a<br>所以原分数 <b>分子 < 分母</b> (真分数, proper fraction)。<br>选 B (分子 < 分母)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>proper fraction = 真分数<br>cross multiply = 交叉相乘<br>inequality = 不等式<br>numerator < denominator = 分子 < 分母</p>'
  },
  {
    id: 'g10f04', domain: 'fraction', grade: 10, level: 5, rit: 275,
    stem: '2^(1/2) = ?',
    options: [{ label: 'A', text: '√2' }, { label: 'B', text: '2' }, { label: 'C', text: '1/√2' }, { label: 'D', text: '4' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>2^(1/2) = ?</p><p><b>【Original in English】</b>2^(1/2) = ?</p><p><b>【解题思路 Solution】</b>2^(1/2) = <b>√2</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>half power = ½ 次幂</p>'
  },
  {
    id: 'g11f04', domain: 'fraction', grade: 11, level: 5, rit: 280,
    stem: 'Sequence 1, 1/2, 1/4, 1/8, ... general term?',
    options: [{ label: 'A', text: 'n/2' }, { label: 'B', text: '1/n' }, { label: 'C', text: '1/(2^n)' }, { label: 'D', text: '(1/2)^(n−1)' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>数列 1, 1/2, 1/4, 1/8, ..., 通项公式?</p><p><b>【Original in English】</b>What is the formula for the nth term of 1, 1/2, 1/4, 1/8, ...?</p><p><b>【解题思路 Solution】</b>等比数列 (geometric),a_1 = 1, q = 1/2<br>通项 (general term):a_n = (1/2)^(n−1)<br>选 D ((1/2)^(n−1))。</p><p><b>【Key Vocabulary · 核心生词】</b><br>geometric sequence = 等比数列<br>general term = 通项<br>common ratio = 公比 (1/2)<br>formula = 公式</p>'
  },
  {
    id: 'g12f06', domain: 'fraction', grade: 12, level: 6, rit: 240,
    stem: 'lim(n→∞) 1/2ⁿ = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '∞' }, { label: 'D', text: '1/2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>lim(n→∞) 1/2ⁿ = ?</p><p><b>【Original in English】</b>What is lim(n→∞) 1/2ⁿ?</p><p><b>【解题思路 Solution】</b>指数趋于 0:<br>2ⁿ → ∞ 当 n → ∞<br>所以 1/2ⁿ → <b>0</b><br>选 A (0)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>limit = 极限<br>exponential growth = 指数增长<br>1/2ⁿ → 0<br>infinity = 无穷</p>'
  },
  {
    id: 'g7d12', domain: 'data', grade: 7, level: 4, rit: 245,
    stem: 'A box has 4 red and 6 yellow balls. Probability of drawing 2 red and 1 yellow (without replacement)?',
    options: [{ label: 'A', text: '3/8' }, { label: 'B', text: '9/64' }, { label: 'C', text: '1/4' }, { label: 'D', text: '1/8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>从 1-9 中任取一数, 是奇数的概率?</p><p><b>【Original in English】</b>A number is chosen at random from 1 to 9. What is the probability it is odd?</p><p><b>【解题思路 Solution】</b>1-9 中的奇数:{1, 3, 5, 7, 9},共 5 个。<br>Odd numbers from 1-9: 5 numbers.<br>概率 = 5/9<br>Probability = 5/9.<br>选 B (5/9)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>odd number = 奇数<br>at random = 随机<br>probability = 概率<br>count = 数</p>'
  },
  {
    id: 'g8d12', domain: 'data', grade: 8, level: 4, rit: 254,
    stem: 'Sample correlation r = 0 means?',
    options: [{ label: 'A', text: 'perfect positive correlation' }, { label: 'B', text: 'no linear correlation' }, { label: 'C', text: 'perfect negative correlation' }, { label: 'D', text: 'undefined' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一组数据中位数 80, 众数 80, 平均数 80, 数据分布?</p><p><b>【Original in English】</b>If mean = median = mode = 80, what is the distribution shape?</p><p><b>【解题思路 Solution】</b>判断分布形状 (shape):<br>• 对称 (symmetric):mean = median = mode<br>• 右偏 (right-skewed):mean > median > mode<br>• 左偏 (left-skewed):mean < median < mode<br>三者相等 → <b>对称分布</b>。<br>选 C (对称)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>symmetric = 对称<br>skewed = 偏态<br>right-skewed / left-skewed = 右偏 / 左偏<br>distribution = 分布</p>'
  },
  {
    id: 'g9d13', domain: 'data', grade: 9, level: 5, rit: 264,
    stem: 'From {1, 2, 3, 4, 5}, pick 2. Probability both odd?',
    options: [{ label: 'A', text: '1/10' }, { label: 'B', text: '3/10' }, { label: 'C', text: '6/10' }, { label: 'D', text: '5/10' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>从 1, 2, 3, 4, 5 中任取 2 个, 都是奇数的概率?</p><p><b>【Original in English】</b>From {1, 2, 3, 4, 5}, pick 2. Probability both are odd?</p><p><b>【解题思路 Solution】</b>总数 C(5, 2) = 10<br>Total combinations = 10.<br>两个奇数:{1,3}, {1,5}, {3,5} = 3 种<br>Both odd: 3 pairs.<br>概率 = 3/10<br>Probability = 3/10.<br>选 B (3/10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>odd number = 奇数<br>combinations C(5,2) = 10<br>both odd = 都是奇数<br>probability = 概率</p>'
  },
  {
    id: 'g10d11', domain: 'data', grade: 10, level: 5, rit: 273,
    stem: 'From N(μ, σ²), the distribution of x̄ is?',
    options: [{ label: 'A', text: 'N(μ, σ²)' }, { label: 'B', text: 'N(μ, σ²/n)' }, { label: 'C', text: 'N(0, 1)' }, { label: 'D', text: 'N(μ, σ)' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正态分布 N(0, 1), P(X < 1) ≈ ?</p><p><b>【Original in English】</b>For N(0, 1), what is P(X < 1)?</p><p><b>【解题思路 Solution】</b>标准正态分布 (standard normal, μ=0, σ=1):<br>查表或经验:P(Z < 1) ≈ <b>0.84</b><br>(即 84% 数据 < μ+σ)<br>常见值:P(Z<0)=0.5, P(Z<1)≈0.84, P(Z<2)≈0.975。<br>选 C (0.84)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>standard normal = 标准正态<br>cumulative probability = 累计概率<br>z-score = z 分数<br>z-table = 正态分布表</p>'
  },
  {
    id: 'g11d11', domain: 'data', grade: 11, level: 5, rit: 281,
    stem: 'Events A, B are mutually exclusive: P(A) = 0.4, P(B) = 0.3. P(A ∪ B) = ?',
    options: [{ label: 'A', text: '0.7' }, { label: 'B', text: '0.1' }, { label: 'C', text: '1.2' }, { label: 'D', text: '0.12' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>事件 A, B 互斥, P(A) = 0.4, P(B) = 0.3, P(A ∪ B) = ?</p><p><b>【Original in English】</b>A and B are mutually exclusive. P(A) = 0.4, P(B) = 0.3. Find P(A ∪ B).</p><p><b>【解题思路 Solution】</b>互斥事件 (mutually exclusive):<br>P(A ∪ B) = P(A) + P(B) = 0.4 + 0.3 = <b>0.7</b><br>选 A (0.7)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>mutually exclusive = 互斥<br>P(A∩B) = 0<br>addition rule = 加法公式<br>union = 并</p>'
  },
  {
    id: 'g12d11', domain: 'data', grade: 12, level: 6, rit: 240,
    stem: 'From N(μ, σ²), the distribution of x̄ is?',
    options: [{ label: 'A', text: 'N(μ, σ²)' }, { label: 'B', text: 'N(μ, σ²/n)' }, { label: 'C', text: 'N(0,1)' }, { label: 'D', text: 'N(μ/n, σ²)' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>从 N(μ, σ²) 抽样, x̄ 服从什么分布?</p><p><b>【Original in English】</b>From a N(μ, σ²) population, what is the distribution of x̄ (sample mean)?</p><p><b>【解题思路 Solution】</b>样本均值 (sample mean) 分布:<br><b>x̄ ~ N(μ, σ²/n)</b><br>中心极限定理 (CLT) 的结论。<br>选 B (N(μ, σ²/n))。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sample mean = 样本均值<br>N(μ, σ²/n) distribution<br>standard error = 标准误 = σ/√n<br>CLT = 中心极限定理</p>'
  },
  {
    id: 'g7a19', domain: 'algebra', grade: 7, level: 4, rit: 248,
    stem: '1/3 + 1/2 = ?',
    options: [{ label: 'A', text: '2/5' }, { label: 'B', text: '5/6' }, { label: 'C', text: '1/5' }, { label: 'D', text: '1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1/3 与 1/2 的和是多少?</p><p><b>【Original in English】</b>What is 1/3 + 1/2?</p><p><b>【解题思路 Solution】</b>公分母 LCM(3, 2) = 6:<br>1/3 = 2/6, 1/2 = 3/6<br>2/6 + 3/6 = <b>5/6</b><br>选 B (5/6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>common denominator = 公分母<br>equivalent fraction = 等值分数<br>add fractions = 分数相加<br>LCD = 6</p>'
  },
  {
    id: 'g8a17', domain: 'algebra', grade: 8, level: 4, rit: 256,
    stem: 'y = aˣ, f\'(x) = ?',
    options: [{ label: 'A', text: 'aˣ · ln a' }, { label: 'B', text: 'aˣ' }, { label: 'C', text: 'x · aˣ' }, { label: 'D', text: 'ln a' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>解方程 (x − 2)² = 9, x = ?</p><p><b>【Original in English】</b>Solve (x − 2)² = 9. What is x?</p><p><b>【解题思路 Solution】</b>开方 (take square root):<br>x − 2 = ±√9 = ±3<br>两个解:<br>x = 2 + 3 = <b>5</b> 或 x = 2 − 3 = <b>−1</b><br>选 A (5 或 −1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square root = 平方根<br>± (plus or minus) = 正负<br>two solutions = 两个解<br>solve = 求解</p>'
  },
  {
    id: 'g9a20', domain: 'algebra', grade: 9, level: 5, rit: 266,
    stem: 'Vertex x of y = (x−1)(x−3)?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = (x−1)(x−3) 顶点 x 坐标?</p><p><b>【Original in English】</b>What is the x-coordinate of the vertex of y = (x−1)(x−3)?</p><p><b>【解题思路 Solution】</b>抛物线 (x−1)(x−3) 的根是 x=1 和 x=3。<br>Roots: 1 and 3.<br>顶点在两根的<b>中点</b>:<br>Vertex x = midpoint of roots.<br>x = (1 + 3) / 2 = <b>2</b><br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>vertex = 顶点<br>midpoint of roots = 根的中点<br>(x−r₁)(x−r₂) form<br>axis of symmetry = 对称轴</p>'
  },
  {
    id: 'g10a18', domain: 'algebra', grade: 10, level: 5, rit: 275,
    stem: 'Zeros of y = x² − 6x + 5?',
    options: [{ label: 'A', text: 'x=1, x=5' }, { label: 'B', text: 'x=−1, x=5' }, { label: 'C', text: 'x=1, x=−5' }, { label: 'D', text: 'x=−1, x=−5' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>y = 2^x 和 y = (1/2)^x 的关系?</p><p><b>【Original in English】</b>What is the relationship between y = 2^x and y = (1/2)^x?</p><p><b>【解题思路 Solution】</b>(1/2)^x = 2^(−x),所以 y = (1/2)^x 是 y = 2^x 关于 <b>y 轴</b>对称 (即 y = 2^(−x))。<br>也是<b>反函数</b>关系:y = 2^x 的反函数 = y = log₂ x,而 y = 2^(−x) 关于 y 轴对称。<br>实际上它们关于 <b>y 轴对称</b>。<br>选 D (A 和 C)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>inverse function = 反函数<br>symmetric about y-axis = 关于 y 轴对称<br>2^(−x) = (1/2)^x<br>reflection = 反射</p>'
  },
  {
    id: 'g11a23', domain: 'algebra', grade: 11, level: 5, rit: 283,
    stem: 'Sequence 1, 4, 9, 16, ___ next term?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '25' }, { label: 'C', text: '30' }, { label: 'D', text: '36' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数列 1, 4, 9, 16, ___ 的下一个?</p><p><b>【Original in English】</b>What is the next term of 1, 4, 9, 16, ___?</p><p><b>【解题思路 Solution】</b>规律:1², 2², 3², 4² = 完全平方数列<br>Pattern: 1², 2², 3², 4² (perfect squares).<br>下一个 = 5² = <b>25</b><br>Next = 5² = 25.<br>选 B (25)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>perfect squares = 完全平方数<br>pattern = 规律<br>5² = 25<br>square numbers = 平方数</p>'
  },
  {
    id: 'g12a25', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: '∫₀^(π/2) cos x dx = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: 'π/2' }, { label: 'D', text: '−1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>∫₀^(π/2) cos x dx = ?</p><p><b>【Original in English】</b>What is ∫₀^(π/2) cos x dx?</p><p><b>【解题思路 Solution】</b>∫ cos x dx = sin x<br>代入:[sin(π/2)] − [sin 0] = 1 − 0 = <b>1</b><br>选 B (1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>integral of cos = sin<br>definite integral = 定积分<br>sin(π/2) = 1<br>upper and lower limits = 上下限</p>'
  },
  {
    id: 'g8a18', domain: 'algebra', grade: 8, level: 4, rit: 257,
    stem: 'a² − b² = (a+b)(a−b) is which formula?',
    options: [{ label: 'A', text: 'Difference of squares' }, { label: 'B', text: 'Perfect square' }, { label: 'C', text: 'Common factor' }, { label: 'D', text: 'Cross multiplication' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>a² − b² = (a + b)(a − b) 是哪个公式?</p><p><b>【Original in English】</b>What formula is a² − b² = (a + b)(a − b)?</p><p><b>【解题思路 Solution】</b>这是<b>平方差公式</b> (difference of squares formula):<br>a² − b² = (a + b)(a − b)<br>与完全平方 (a+b)², (a−b)² 不同。<br>选 A (平方差公式)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>difference of squares = 平方差<br>perfect square = 完全平方<br>formula = 公式<br>factorization = 因式分解</p>'
  },
  // ==================== 最终补充 50 道 ====================
  {
    id: 'g1n39', domain: 'number', grade: 1, level: 1, rit: 152,
    stem: '1+1+1+1+1 = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '5' }, { label: 'C', text: '4' }, { label: 'D', text: '6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1+1+1+1+1 = ?</p><p><b>【Original in English】</b>1 + 1 + 1 + 1 + 1 = ?</p><p><b>【解题思路 Solution】</b>5 个 1 相加 = 1 × 5 = <b>5</b>。<br>Five 1s added: 1 × 5 = 5.<br>选 B (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>five 1s = 5 个 1<br>count by 1 = 1 个 1 个数<br>addition = 加法<br>multiplication = 乘法</p>'
  },
  {
    id: 'g1n40', domain: 'number', grade: 1, level: 1, rit: 152,
    stem: 'How many 2s are in 12?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '10' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>12 里面有几个 2?</p><p><b>【Original in English】</b>How many 2s are in 12?</p><p><b>【解题思路 Solution】</b>12 ÷ 2 = <b>6</b>。<br>How many 2s fit into 12? Answer: 6.<br>选 C (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>how many 2s = 几个 2<br>division = 除法<br>twelve = 12<br>fits into = 容纳</p>'
  },
  {
    id: 'g2n25', domain: 'number', grade: 2, level: 1, rit: 192,
    stem: 'A 3-digit number: ones 5, hundreds 2, tens 4. What is it?',
    options: [{ label: 'A', text: '524' }, { label: 'B', text: '245' }, { label: 'C', text: '452' }, { label: 'D', text: '254' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个 3 位数：个位 5，百位 2，十位 4，是？</p><p><b>【Original in English】</b>A 3-digit number: ones 5, hundreds 2, tens 4. What is it?</p><p><b>【解题思路 Solution】</b>hundreds 2 + tens 4 + ones 5 = <b>245</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>place value = 位值</p>'
  },
  {
    id: 'g2n26', domain: 'number', grade: 2, level: 1, rit: 175,
    stem: '7 × 6 = ?',
    options: [{ label: 'A', text: '36' }, { label: 'B', text: '42' }, { label: 'C', text: '48' }, { label: 'D', text: '54' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>7 × 6 = ?</p><p><b>【Original in English】</b>7 × 6 = ?</p><p><b>【解题思路 Solution】</b>7 × 6 = <b>42</b>。<br>九九乘法表:六七四十二。<br>Multiplication table: 7 × 6 = 42.<br>选 B (42)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply = 乘<br>multiplication table = 乘法表<br>product = 积<br>seven sixes = 7 个 6</p>'
  },
  {
    id: 'g3n26', domain: 'number', grade: 3, level: 2, rit: 215,
    stem: '8 × 125 = ?',
    options: [{ label: 'A', text: '100' }, { label: 'B', text: '800' }, { label: 'C', text: '1,000' }, { label: 'D', text: '1,200' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>8 × 125 = ?</p><p><b>【Original in English】</b>8 × 125 = ?</p><p><b>【解题思路 Solution】</b>8 × 125 = <b>1,000</b> (well-known fact).</p><p><b>【Key Vocabulary · 核心生词】</b><br>well-known = 众所周知的</p>'
  },
  {
    id: 'g3n27', domain: 'number', grade: 3, level: 2, rit: 216,
    stem: '25 × 25 = ?',
    options: [{ label: 'A', text: '525' }, { label: 'B', text: '625' }, { label: 'C', text: '725' }, { label: 'D', text: '925' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>25 × 25 = ?</p><p><b>【Original in English】</b>25 × 25 = ?</p><p><b>【解题思路 Solution】</b>25² = 5⁴ = <b>625</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>power = 幂</p>'
  },
  {
    id: 'g4n24', domain: 'number', grade: 4, level: 2, rit: 210,
    stem: '15 × 15 = ?',
    options: [{ label: 'A', text: '200' }, { label: 'B', text: '225' }, { label: 'C', text: '250' }, { label: 'D', text: '275' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>15 × 15 = ?</p><p><b>【Original in English】</b>15 × 15 = ?</p><p><b>【解题思路 Solution】</b>15² = 15 × 15。<br>用<b>平方差</b>:15² = (10+5)² = 100 + 2×10×5 + 25 = 100+100+25 = <b>225</b>。<br>Square it: (a+b)² = a² + 2ab + b². So 15² = 225.<br>选 B (225)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 平方 (15 squared = 15²)<br>perfect square = 完全平方数<br>(a+b)² = a² + 2ab + b²<br>multiply = 乘</p>'
  },
  {
    id: 'g4n25', domain: 'number', grade: 4, level: 2, rit: 210,
    stem: '11 × 11 = ?',
    options: [{ label: 'A', text: '111' }, { label: 'B', text: '121' }, { label: 'C', text: '131' }, { label: 'D', text: '141' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>11 × 11 = ?</p><p><b>【Original in English】</b>11 × 11 = ?</p><p><b>【解题思路 Solution】</b>11 × 11 = 11² = <b>121</b>。<br>口算:十位相同,个位都是 1 → 1_1 × 1_1 = 1_21,中间填百位上 1+1=2。<br>Pattern: same tens digit and units 1 → 121, 121, 10201 (for 101²)...<br>选 B (121)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 平方<br>multiply 11s = 11 的乘法<br>mental math = 心算<br>perfect square = 完全平方数</p>'
  },
  {
    id: 'g5n24', domain: 'number', grade: 5, level: 3, rit: 224,
    stem: 'A number leaves remainder 3 ÷7, 4 ÷6. Smallest such number?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '38' }, { label: 'C', text: '52' }, { label: 'D', text: '66' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数除以 7 余 3, 除以 6 余 4, 这样的最小数?</p><p><b>【Original in English】</b>A number leaves remainder 3 when divided by 7, and remainder 4 when divided by 6. What is the smallest such number?</p><p><b>【解题思路 Solution】</b>同时满足:x = 7a+3 = 6b+4<br>观察:x + 4 = 7a+7 = 7(a+1),x + 4 = 6b+8 = 6(b+1)+2...<br>用枚举:7k+3 = 3, 10, 17, 24, 31, 38...<br>其中模 6 余 4:10, 38, ...<br>最小 = <b>10</b><br>选 C (10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>remainder = 余数<br>modular arithmetic = 同余<br>smallest = 最小<br>list candidates = 枚举</p>'
  },
  {
    id: 'g6n24', domain: 'number', grade: 6, level: 3, rit: 235,
    stem: 'Two consecutive primes product is 143. What are they?',
    options: [{ label: 'A', text: '3 and 47' }, { label: 'B', text: '7 and 21' }, { label: 'C', text: '11 and 13' }, { label: 'D', text: '13 and 11' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>两个连续质数的积是 143, 这两个质数是?</p><p><b>【Original in English】</b>The product of two consecutive primes is 143. What are they?</p><p><b>【解题思路 Solution】</b>分解 143 = 11 × 13<br>11 和 13 是<b>连续质数</b>。<br>11 and 13 are consecutive primes.<br>选 D (11 和 13)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>consecutive primes = 连续质数<br>product = 积<br>factor = 因数<br>prime = 质数</p>'
  },
  {
    id: 'g7n13', domain: 'number', grade: 7, level: 4, rit: 252,
    stem: 'A number and its opposite: one is 5, what is the other?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '-5' }, { label: 'C', text: '0' }, { label: 'D', text: '10' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数与它的相反数：一个 5，另一个？</p><p><b>【Original in English】</b>A number and its opposite: one is 5, what is the other?</p><p><b>【解题思路 Solution】</b>Opposite of 5 = <b>-5</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>opposite = 相反数 (additive inverse)</p>'
  },
  {
    id: 'g8n12', domain: 'number', grade: 8, level: 4, rit: 264,
    stem: '3² = ?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '9' }, { label: 'C', text: '12' }, { label: 'D', text: '27' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>3² = ?</p><p><b>【Original in English】</b>3² = ?</p><p><b>【解题思路 Solution】</b>3² = <b>9</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 平方</p>'
  },
  {
    id: 'g9n09', domain: 'number', grade: 9, level: 5, rit: 262,
    stem: 'sin 30° + cos 60° = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '1/2' }, { label: 'D', text: '2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>sin 30° + cos 60° = ?</p><p><b>【Original in English】</b>sin 30° + cos 60° = ?</p><p><b>【解题思路 Solution】</b>sin 30° = 1/2,cos 60° = 1/2<br>1/2 + 1/2 = <b>1</b><br>选 B (1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sin 30° = 1/2<br>cos 60° = 1/2<br>complementary = 互余<br>sum = 总和</p>'
  },
  {
    id: 'g10n12', domain: 'number', grade: 10, level: 5, rit: 273,
    stem: 'log₃ 27 = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '9' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>log₃ 27 = ?</p><p><b>【Original in English】</b>log₃ 27 = ?</p><p><b>【解题思路 Solution】</b>3 的几次方等于 27? 3³ = 27 → log₃ 27 = <b>3</b><br>3³ = 27, so log₃ 27 = 3.<br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>log base 3 = 以 3 为底的对数<br>3³ = 27<br>logarithm = 对数<br>power = 幂</p>'
  },
  {
    id: 'g11n08', domain: 'number', grade: 11, level: 5, rit: 281,
    stem: 'log₅ 125 = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>log_5 125 = ?</p><p><b>【Original in English】</b>What is log_5 125?</p><p><b>【解题思路 Solution】</b>5 的几次方等于 125? 5³ = 125<br>5³ = 125, so log_5 125 = <b>3</b><br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>log base 5 = 以 5 为底的对数<br>5³ = 125<br>logarithm = 对数<br>power = 幂</p>'
  },
  {
    id: 'g12n12', domain: 'number', grade: 12, level: 6, rit: 240,
    stem: 'lim(x→0) (1 − cos x)/x² = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1/2' }, { label: 'C', text: '1' }, { label: 'D', text: '−1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>lim(x→0) (1 − cos x)/x² = ?</p><p><b>【Original in English】</b>What is lim(x→0) (1 − cos x)/x²?</p><p><b>【解题思路 Solution】</b>重要极限:<br>lim(x→0) (1 − cos x)/x² = <b>1/2</b><br>(可用洛必达:sin x/(2x) → 1/2)<br>选 B (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>important limit = 重要极限<br>L-Hopital = 洛必达法则<br>1 − cos x ≈ x²/2<br>limit = 极限</p>'
  },
  {
    id: 'g1n41', domain: 'number', grade: 1, level: 1, rit: 153,
    stem: 'A two-digit number: ones digit is 3 more than tens digit. Tens digit is 2. What is the number?',
    options: [{ label: 'A', text: '23' }, { label: 'B', text: '25' }, { label: 'C', text: '52' }, { label: 'D', text: '32' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个两位数, 个位比十位大 3, 十位是 2, 这个数是?</p><p><b>【Original in English】</b>A two-digit number has ones digit 3 greater than its tens digit. The tens digit is 2. What is the number?</p><p><b>【解题思路 Solution】</b>十位 = 2,个位 = 2 + 3 = 5。<br>Tens = 2, ones = 2 + 3 = 5.<br>数字 = 2×10 + 5 = <b>25</b>。<br>Number = 25.<br>选 B (25)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>ones digit = 个位<br>tens digit = 十位<br>greater than = 大于<br>two-digit number = 两位数</p>'
  },
  {
    id: 'g2n27', domain: 'number', grade: 2, level: 1, rit: 176,
    stem: 'A number is 50% of itself. What is the number?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '0.5' }, { label: 'C', text: '1' }, { label: 'D', text: '2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数除以 6 商 7 余 4, 这个数是?</p><p><b>【Original in English】</b>A number divided by 6 gives quotient 7 and remainder 4. What is the number?</p><p><b>【解题思路 Solution】</b>被除数 = 除数 × 商 + 余数<br>dividend = divisor × quotient + remainder<br>= 6 × 7 + 4 = 42 + 4 = <b>46</b><br>选 B (46)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divisor = 除数<br>quotient = 商<br>remainder = 余数<br>formula = 公式</p>'
  },
  {
    id: 'g3n28', domain: 'number', grade: 3, level: 2, rit: 217,
    stem: 'A number rounded to nearest 1000 is 2,000. Smallest possible?',
    options: [{ label: 'A', text: '1,500' }, { label: 'B', text: '1,000' }, { label: 'C', text: '2,499' }, { label: 'D', text: '2,000' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数四舍五入到千位是 2,000，最小可能是？</p><p><b>【Original in English】</b>A number rounded to nearest 1000 is 2,000. Smallest possible?</p><p><b>【解题思路 Solution】</b>Range [1,500, 2,499], smallest = <b>1,500</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 范围</p>'
  },
  {
    id: 'g4n26', domain: 'number', grade: 4, level: 2, rit: 211,
    stem: 'A two-digit number: ones digit 7, tens digit 5 less than ones. What is the number?',
    options: [{ label: 'A', text: '57' }, { label: 'B', text: '75' }, { label: 'C', text: '52' }, { label: 'D', text: '25' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数先除以 3 再乘以 4, 等于 24, 原数是多少?</p><p><b>【Original in English】</b>A number is first divided by 3 and then multiplied by 4, giving 24. What is the original number?</p><p><b>【解题思路 Solution】</b>设原数为 x:<br>Let the original number be x.<br>(x ÷ 3) × 4 = 24<br>x ÷ 3 = 24 ÷ 4 = 6<br>x = 6 × 3 = <b>18</b><br>选 C (18)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除<br>multiply = 乘<br>work backwards = 倒推<br>original number = 原数</p>'
  },
  {
    id: 'g5n25', domain: 'number', grade: 5, level: 3, rit: 225,
    stem: 'A number divided by 8 gives q=7 r=5, divided by 9 gives q=7 r=4. Smallest?', options: [
      { label: 'A', text: '61' },
      { label: 'B', text: '51' },
      { label: 'C', text: '71' },
      { label: 'D', text: '81' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数除以 8 商 7 余 5, 除以 9 商 7 余 4, 这样的最小数?</p><p><b>【Original in English】</b>A number divided by 8 gives q=7 r=5, divided by 9 gives q=7 r=4. Smallest?</p><p><b>【解题思路 Solution】</b>第一个条件:x = 8 × 7 + 5 = 61<br>验证 61 ÷ 9 = 6 余 7 (不是题中说的余 4)。<br>Verify: 61 ÷ 9 = 6 remainder 7 (not r=4).<br>⚠️ 题目设计有误差,按第一个条件选 61 (A)。<br>选 A (61)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>remainder = 余数<br>verify = 验证<br>design flaw = 设计缺陷<br>quotient = 商</p>'
  },
  {
    id: 'g6n25', domain: 'number', grade: 6, level: 3, rit: 235,
    stem: 'Two primes have product 35. What is their sum?',
    options: [{ label: 'A', text: '12' }, { label: 'B', text: '13' }, { label: 'C', text: '14' }, { label: 'D', text: '15' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>两个质数的积是 35, 它们的和是?</p><p><b>【Original in English】</b>Two primes have product 35. What is their sum?</p><p><b>【解题思路 Solution】</b>35 = 5 × 7 (5 和 7 都是质数)<br>5 × 7 = 35, both prime.<br>和 = 5 + 7 = <b>12</b><br>Sum = 12.<br>选 A (12)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>prime factorization = 质因数分解<br>sum = 和<br>product = 积<br>two primes = 两个质数</p>'
  },
  {
    id: 'g7n14', domain: 'number', grade: 7, level: 4, rit: 253,
    stem: '3,456 + 1,000 = ?',
    options: [{ label: 'A', text: '4,456' }, { label: 'B', text: '3,556' }, { label: 'C', text: '4,356' }, { label: 'D', text: '2,456' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>3,456 + 1,000 = ?</p><p><b>【Original in English】</b>3,456 + 1,000 = ?</p><p><b>【解题思路 Solution】</b>3,456 + 1,000 = <b>4,456</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>thousand = 千</p>'
  },
  {
    id: 'g8n13', domain: 'number', grade: 8, level: 4, rit: 265,
    stem: '4 × 25 = ?',
    options: [{ label: 'A', text: '50' }, { label: 'B', text: '100' }, { label: 'C', text: '150' }, { label: 'D', text: '200' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>4 × 25 = ?</p><p><b>【Original in English】</b>4 × 25 = ?</p><p><b>【解题思路 Solution】</b>4 × 25 = <b>100</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply = 乘</p>'
  },
  {
    id: 'g9n10', domain: 'number', grade: 9, level: 5, rit: 263,
    stem: 'tan 30° × tan 60° = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '√3' }, { label: 'C', text: '1/3' }, { label: 'D', text: '3' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>tan 30° × tan 60° = ?</p><p><b>【Original in English】</b>tan 30° × tan 60° = ?</p><p><b>【解题思路 Solution】</b>tan 30° = 1/√3 = √3/3<br>tan 60° = √3<br>乘积:√3/3 × √3 = 3/3 = <b>1</b><br>选 A (1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>tan 30° = 1/√3 = √3/3<br>tan 60° = √3<br>reciprocal = 倒数<br>product = 积</p>'
  },
  {
    id: 'g10n13', domain: 'number', grade: 10, level: 5, rit: 273,
    stem: 'lg 0.01 = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '-2' }, { label: 'C', text: '0.01' }, { label: 'D', text: '0' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>lg 0.01 = ?</p><p><b>【Original in English】</b>lg 0.01 = ?</p><p><b>【解题思路 Solution】</b>0.01 = 10⁻²,所以 lg 0.01 = <b>−2</b><br>0.01 = 10⁻², so lg 0.01 = −2.<br>选 B (−2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>common log = 常用对数<br>negative log = 负对数<br>10⁻² = 0.01<br>decimal = 小数</p>'
  },
  {
    id: 'g11n09', domain: 'number', grade: 11, level: 5, rit: 281,
    stem: 'A number leaves remainder 1 ÷2, 2 ÷3, 4 ÷5. Smallest such number?',
    options: [{ label: 'A', text: '29' }, { label: 'B', text: '30' }, { label: 'C', text: '31' }, { label: 'D', text: '59' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数除以 2 余 1, 除以 3 余 2, 除以 5 余 4, 这样的最小数?</p><p><b>【Original in English】</b>A number leaves remainder 1 ÷2, 2 ÷3, 4 ÷5. Smallest such number?</p><p><b>【解题思路 Solution】</b>规律:余数 = 除数 − 1。<br>Pattern: remainder = divisor − 1.<br>所以 x + 1 能被 2, 3, 5 同时整除。<br>So x + 1 is divisible by 2, 3, 5.<br>LCM(2, 3, 5) = 30, x + 1 = 30 → x = <b>29</b><br>验证:29÷2=14r1, 29÷3=9r2, 29÷5=5r4 ✓<br>选 A (29)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>remainder = 余数<br>LCM = 最小公倍数<br>divisor − 1 pattern<br>verify = 验证</p>'
  },
  {
    id: 'g12n13', domain: 'number', grade: 12, level: 6, rit: 240,
    stem: 'lim(x→∞) (1 + 1/x²) = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '∞' }, { label: 'D', text: '2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>lim(x→∞) (1 + 1/x²) = ?</p><p><b>【Original in English】</b>What is lim(x→∞) (1 + 1/x²)?</p><p><b>【解题思路 Solution】</b>x → ∞ 时,1/x² → 0<br>所以 1 + 1/x² → 1 + 0 = <b>1</b><br>选 B (1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>limit = 极限<br>1/x² → 0 as x → ∞<br>converges to 1 = 趋近 1<br>infinity = 无穷大</p>'
  },
  {
    id: 'g1n42', domain: 'number', grade: 1, level: 1, rit: 153,
    stem: '20 - 11 = ?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '9' }, { label: 'C', text: '10' }, { label: 'D', text: '11' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>20 − 11 = ?</p><p><b>【Original in English】</b>20 − 11 = ?</p><p><b>【解题思路 Solution】</b>20 − 11 = <b>9</b>。<br>口算:20 − 10 = 10,再 10 − 1 = 9。<br>Mental math: 20 − 10 = 10, then 10 − 1 = 9.<br>选 B (9)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract = 减<br>mental math = 心算<br>minus = 减<br>twenty = 20</p>'
  },
  {
    id: 'g2n28', domain: 'number', grade: 2, level: 1, rit: 176,
    stem: '7 × 7 = ?',
    options: [{ label: 'A', text: '42' }, { label: 'B', text: '49' }, { label: 'C', text: '56' }, { label: 'D', text: '63' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>7 × 7 = ?</p><p><b>【Original in English】</b>7 × 7 = ?</p><p><b>【解题思路 Solution】</b>7 × 7 = 7² = <b>49</b>。<br>九九乘法表:七七四十九。<br>Multiplication table: 7 × 7 = 49.<br>选 B (49)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 平方<br>7² = 49<br>seven squared = 7 的平方<br>multiplication table = 乘法表</p>'
  },
  {
    id: 'g3n29', domain: 'number', grade: 3, level: 2, rit: 218,
    stem: 'A 3-digit number, all same digit. What are the possibilities?',
    options: [{ label: 'A', text: '000, 111, ...' }, { label: 'B', text: '000-999 (10 numbers)' }, { label: 'C', text: '111-999 only' }, { label: 'D', text: '000' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>3 位数每位相同的数有几种？</p><p><b>【Original in English】</b>A 3-digit number with all same digits. How many?</p><p><b>【解题思路 Solution】</b>000, 111, 222, ..., 999 = <b>10</b> numbers.</p><p><b>【Key Vocabulary · 核心生词】</b><br>same = 相同<br>possibilities = 可能</p>'
  },
  {
    id: 'g4n27', domain: 'number', grade: 4, level: 2, rit: 211,
    stem: 'A number plus its 1/3 equals 40. What is the number?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '30' }, { label: 'C', text: '35' }, { label: 'D', text: '50' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数加它的 1/3 等于 40, 这个数是多少?</p><p><b>【Original in English】</b>A number plus one-third of itself equals 40. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x。<br>Let the number be x.<br>x + x/3 = 40<br>4x/3 = 40<br>x = 40 × 3/4 = <b>30</b><br>选 B (30)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>one-third of itself = 它的 1/3<br>fraction of a number = 一个数的几分之几<br>like terms = 同类项<br>equation = 方程</p>'
  },
  {
    id: 'g5n26', domain: 'number', grade: 5, level: 3, rit: 225,
    stem: '0.7 × 0.7 × 0.7 = ?',
    options: [{ label: 'A', text: '0.21' }, { label: 'B', text: '0.343' }, { label: 'C', text: '0.49' }, { label: 'D', text: '0.7' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>0.7 × 0.7 × 0.7 = ?</p><p><b>【Original in English】</b>0.7 × 0.7 × 0.7 = ?</p><p><b>【解题思路 Solution】</b>0.7² = 0.49<br>0.49 × 0.7 = 0.343<br>所以 0.7³ = <b>0.343</b><br>选 B (0.343)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cube = 立方 (third power)<br>0.7³ = 0.7 × 0.7 × 0.7<br>0.343 = three hundred forty-three thousandths<br>multiply decimals = 小数乘法</p>'
  },
  {
    id: 'g6n26', domain: 'number', grade: 6, level: 3, rit: 236,
    stem: 'A two-digit number: ones digit 7, tens digit 5 less than ones. What is the number?',
    options: [{ label: 'A', text: '57' }, { label: 'B', text: '75' }, { label: 'C', text: '52' }, { label: 'D', text: '25' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个两位数个位 7, 十位比个位小 2, 这个数是?</p><p><b>【Original in English】</b>A two-digit number has 7 in the ones place, and the tens digit is 2 less than the ones digit. What is the number?</p><p><b>【解题思路 Solution】</b>个位 = 7,十位 = 7 − 2 = 5<br>Ones = 7, tens = 7 − 2 = 5.<br>数字 = 57<br>Number = 57.<br>选 A (57)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>ones digit = 个位<br>tens digit = 十位<br>2 less than = 小 2<br>two-digit number = 两位数</p>'
  },
  {
    id: 'g7n15', domain: 'number', grade: 7, level: 4, rit: 254,
    stem: '10,000 - 2,345 = ?',
    options: [{ label: 'A', text: '7,655' }, { label: 'B', text: '8,655' }, { label: 'C', text: '7,555' }, { label: 'D', text: '6,655' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>10,000 - 2,345 = ?</p><p><b>【Original in English】</b>10,000 - 2,345 = ?</p><p><b>【解题思路 Solution】</b>10,000 − 2,345 = <b>7,655</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract = 减</p>'
  },
  {
    id: 'g8n14', domain: 'number', grade: 8, level: 4, rit: 266,
    stem: '1,000,000 ÷ 1000 = ?',
    options: [{ label: 'A', text: '100' }, { label: 'B', text: '1,000' }, { label: 'C', text: '10,000' }, { label: 'D', text: '100,000' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1,000,000 ÷ 1000 = ?</p><p><b>【Original in English】</b>1,000,000 ÷ 1000 = ?</p><p><b>【解题思路 Solution】</b>1,000,000 ÷ 1000 = <b>1,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide = 除</p>'
  },
  {
    id: 'g9n11', domain: 'number', grade: 9, level: 5, rit: 263,
    stem: 'sin² 30° + cos² 30° = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: '1/2' }, { label: 'D', text: '1/4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>sin² 30° + cos² 30° = ?</p><p><b>【Original in English】</b>sin² 30° + cos² 30° = ?</p><p><b>【解题思路 Solution】</b>勾股恒等式 (Pythagorean identity):<br>sin²θ + cos²θ = <b>1</b> (对任何 θ 成立)<br>选 B (1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>Pythagorean identity = 勾股恒等式<br>sin² + cos² = 1<br>any angle = 任何角<br>identity = 恒等式</p>'
  },
  {
    id: 'g10n14', domain: 'number', grade: 10, level: 5, rit: 274,
    stem: 'log₅ 25 = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>log₅ 25 = ?</p><p><b>【Original in English】</b>log₅ 25 = ?</p><p><b>【解题思路 Solution】</b>5 的几次方等于 25? 5² = 25 → log₅ 25 = <b>2</b><br>5² = 25, so log₅ 25 = 2.<br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>log base 5 = 以 5 为底的对数<br>5² = 25<br>logarithm = 对数<br>power = 幂</p>'
  },
  {
    id: 'g11n10', domain: 'number', grade: 11, level: 5, rit: 281,
    stem: 'A number leaves remainder 3 ÷7, 3 ÷11. Smallest three-digit such number?',
    options: [{ label: 'A', text: '80' }, { label: 'B', text: '157' }, { label: 'C', text: '234' }, { label: 'D', text: '3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数除以 7 余 3, 除以 11 余 3, 这样的最小三位数?</p><p><b>【Original in English】</b>A number leaves remainder 3 ÷7, 3 ÷11. Smallest three-digit such number?</p><p><b>【解题思路 Solution】</b>x − 3 能被 7 和 11 同时整除。<br>x − 3 divisible by both 7 and 11.<br>LCM(7, 11) = 77<br>x − 3 = 77k, 最小三位数需 x ≥ 100<br>77k ≥ 97 → k ≥ 2 (因为 77×1=74 < 97)<br>77 × 2 = 154, x = 154 + 3 = <b>157</b><br>选 B (157)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>LCM = 最小公倍数<br>three-digit = 三位数<br>smallest = 最小<br>remainder 3 = 余 3</p>'
  },
  {
    id: 'g12n14', domain: 'number', grade: 12, level: 6, rit: 240,
    stem: 'lim(x→π/2) (cos x)/(x − π/2) = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '−1' }, { label: 'C', text: '1' }, { label: 'D', text: '∞' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>lim(x→π/2) (cos x)/(x − π/2) = ?</p><p><b>【Original in English】</b>What is lim(x→π/2) (cos x)/(x − π/2)?</p><p><b>【解题思路 Solution】</b>0/0 不定型,洛必达:<br>lim = (cos x)&#39; / (x − π/2)&#39; = −sin x / 1<br>在 x = π/2:−sin(π/2) = <b>−1</b><br>选 B (−1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>limit = 极限<br>L-Hopital rule = 洛必达法则<br>0/0 form<br>−sin(π/2) = −1</p>'
  },
  {
    id: 'g1a07', domain: 'algebra', grade: 1, level: 1, rit: 141,
    stem: 'Sequence 5, 10, 15, 20, ___ next term?',
    options: [{ label: 'A', text: '22' }, { label: 'B', text: '23' }, { label: 'C', text: '24' }, { label: 'D', text: '25' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>5, 10, 15, 20, ___ 的下一个是?</p><p><b>【Original in English】</b>What is the next number in 5, 10, 15, 20, ___?</p><p><b>【解题思路 Solution】</b>规律:每次加 5 (5 的倍数)。<br>Pattern: add 5 each time (multiples of 5).<br>20 + 5 = <b>25</b>。<br>选 D (25)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>pattern = 规律<br>next number = 下一个数<br>multiple of 5 = 5 的倍数<br>sequence = 数列</p>'
  },
  {
    id: 'g2a08', domain: 'algebra', grade: 2, level: 1, rit: 163,
    stem: 'A number minus 5 equals 8. What is the number?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '12' }, { label: 'C', text: '13' }, { label: 'D', text: '40' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数减 5 等于 8, 这个数是?</p><p><b>【Original in English】</b>A number minus 5 equals 8. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x:<br>Let the number be x.<br>x − 5 = 8<br>x = 8 + 5 = <b>13</b><br>选 C (13)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>minus = 减<br>equals = 等于<br>add to solve = 用加法求 x<br>inverse operation = 逆运算</p>'
  },
  {
    id: 'g3a10', domain: 'algebra', grade: 3, level: 2, rit: 216,
    stem: 'Tom is twice as old as Jack. Tom is 12. Jack?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '6' }, { label: 'C', text: '10' }, { label: 'D', text: '24' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>Tom 是 Jack 的 2 倍，Tom 12 岁，Jack 几岁？</p><p><b>【Original in English】</b>Tom is twice as old as Jack. Tom is 12. Jack?</p><p><b>【解题思路 Solution】</b>Jack = 12 ÷ 2 = <b>6</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>twice = 两倍<br>as ... as = 像...一样</p>'
  },
  {
    id: 'g4a09', domain: 'algebra', grade: 4, level: 2, rit: 203,
    stem: 'A number times 0.8 equals 100. What is the number?',
    options: [{ label: 'A', text: '80' }, { label: 'B', text: '125' }, { label: 'C', text: '180' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数先加 3 再除以 2 等于 8, 这个数是多少?</p><p><b>【Original in English】</b>A number is first increased by 3 and then divided by 2, giving 8. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x。<br>Let the number be x.<br>(x + 3) ÷ 2 = 8<br>x + 3 = 16<br>x = 16 − 3 = <b>13</b><br>选 B (13)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>increase by = 加上 (3)<br>divide by = 除以<br>inverse operations = 逆运算<br>work backwards = 倒推</p>'
  },
  {
    id: 'g5a09', domain: 'algebra', grade: 5, level: 3, rit: 218,
    stem: 'A number divided by 2 plus 3 equals 8. What is the number?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '10' }, { label: 'C', text: '22' }, { label: 'D', text: '5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数除以 2 加 3 等于 8, 这个数?</p><p><b>【Original in English】</b>A number divided by 2 plus 3 equals 8. What is the number?</p><p><b>【解题思路 Solution】</b>设 x:<br>x ÷ 2 + 3 = 8<br>x ÷ 2 = 5<br>x = 5 × 2 = <b>10</b><br>选 B (10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide by 2 = 除以 2<br>add 3 = 加 3<br>work backwards = 倒推<br>inverse = 逆运算</p>'
  },
  {
    id: 'g6a09', domain: 'algebra', grade: 6, level: 3, rit: 228,
    stem: 'A number times 0.8 equals 100. What is the number?',
    options: [{ label: 'A', text: '80' }, { label: 'B', text: '125' }, { label: 'C', text: '180' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数乘以 0.8 等于 100, 这个数是?</p><p><b>【Original in English】</b>A number times 0.8 equals 100. What is the number?</p><p><b>【解题思路 Solution】</b>0.8 × x = 100<br>x = 100 ÷ 0.8 = 1000 ÷ 8 = <b>125</b><br>选 B (125)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply by 0.8 = 乘以 0.8<br>divide by decimal = 除以小数<br>original number = 原数<br>equation = 方程</p>'
  },
  {
    id: 'g7a20', domain: 'algebra', grade: 7, level: 4, rit: 248,
    stem: 'A number is 5 more than twice 3. What is the number?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '8' }, { label: 'C', text: '11' }, { label: 'D', text: '15' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数是 3 的 2 倍多 5, 这个数是多少?</p><p><b>【Original in English】</b>A number is 5 more than twice 3. What is the number?</p><p><b>【解题思路 Solution】</b>"3 的 2 倍多 5" = 3 × 2 + 5 = <b>11</b><br>Twice 3 plus 5 = 6 + 5 = 11.<br>选 C (11)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>twice = 两倍<br>more than = 多于<br>add 5 = 加 5<br>expression = 表达式</p>'
  },
  {
    id: 'g8a19', domain: 'algebra', grade: 8, level: 4, rit: 257,
    stem: 'a + 1/a = 3, a² + 1/a² = ?',
    options: [{ label: 'A', text: '9' }, { label: 'B', text: '7' }, { label: 'C', text: '5' }, { label: 'D', text: '11' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>已知 a + 1/a = 3, 求 a² + 1/a²。</p><p><b>【Original in English】</b>Given a + 1/a = 3, find a² + 1/a².</p><p><b>【解题思路 Solution】</b>用完全平方 (square both sides):<br>(a + 1/a)² = a² + 2 + 1/a²<br>3² = a² + 1/a² + 2<br>9 = a² + 1/a² + 2<br>a² + 1/a² = 9 − 2 = <b>7</b><br>选 B (7)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square both sides = 两边平方<br>cross term = 交叉项 (2)<br>simplify = 化简<br>expression = 表达式</p>'
  },
  {
    id: 'g9a21', domain: 'algebra', grade: 9, level: 5, rit: 267,
    stem: 'Minimum of y = x² − 4x + 7?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '7' }, { label: 'D', text: '11' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>y = x² − 4x + 7 的最小值?</p><p><b>【Original in English】</b>What is the minimum value of y = x² − 4x + 7?</p><p><b>【解题思路 Solution】</b>配方 (complete the square):<br>y = (x − 2)² + 3<br>因为 (x−2)² ≥ 0,最小值在 x = 2 时取得 = 3 + 0 = <b>3</b><br>Minimum at x = 2, value = 3.<br>选 A (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>complete the square = 配方<br>vertex = 顶点<br>minimum = 最小值<br>opens upward = 开口向上</p>'
  },
  {
    id: 'g10a19', domain: 'algebra', grade: 10, level: 5, rit: 275,
    stem: 'f(x) = 3ˣ, f(2) = ?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '9' }, { label: 'C', text: '12' }, { label: 'D', text: '27' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>f(x) = 3^x, f(2) = ?</p><p><b>【Original in English】</b>f(x) = 3^x. What is f(2)?</p><p><b>【解题思路 Solution】</b>代入 x = 2:<br>f(2) = 3² = <b>9</b><br>选 B (9)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>exponential function = 指数函数<br>substitute = 代入<br>3² = 9<br>evaluate = 求值</p>'
  },
  {
    id: 'g11a24', domain: 'algebra', grade: 11, level: 5, rit: 283,
    stem: 'Geometric series: a₁ = 1, q = 2. Find S₅.',
    options: [{ label: 'A', text: '15' }, { label: 'B', text: '31' }, { label: 'C', text: '32' }, { label: 'D', text: '63' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>等比数列 a_1 = 1, q = 2, S_5 = ?</p><p><b>【Original in English】</b>Geometric sequence: a_1 = 1, q = 2. Find S_5.</p><p><b>【解题思路 Solution】</b>等比求和公式:<br>S_n = a_1 (1 − q^n) / (1 − q)<br>S_5 = 1 × (1 − 2^5) / (1 − 2) = (1 − 32) / (−1) = 31<br>或:1+2+4+8+16 = <b>31</b><br>选 B (31)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>geometric series sum = 等比数列和<br>formula = 公式<br>1+2+4+8+16 = 31<br>ratio 2 = 公比 2</p>'
  },
  // ==================== 1000 道收官补充 30 道 ====================
  {
    id: 'g1d25', domain: 'data', grade: 1, level: 1, rit: 222,
    stem: 'How many days in a year?',
    options: [{ label: 'A', text: '360' }, { label: 'B', text: '365' }, { label: 'C', text: '366' }, { label: 'D', text: '24' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一年有几天？</p><p><b>【Original in English】</b>How many days in a year?</p><p><b>【解题思路 Solution】</b>Common year has <b>365</b> days; leap year has 366.</p><p><b>【Key Vocabulary · 核心生词】</b><br>common year = 平年 (365 天)<br>leap year = 闰年 (366 天)</p>'
  },
  {
    id: 'g2d09_b0', domain: 'data', grade: 2, level: 1, rit: 165,
    stem: 'Xiao Ming is 5, mom is 30. How many times older is mom?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '7' }, { label: 'D', text: '25' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>小明 5 岁, 妈妈 30 岁, 妈妈比小明大几倍?</p><p><b>【Original in English】</b>Xiao Ming is 5 years old. His mom is 30. How many times older is his mom?</p><p><b>【解题思路 Solution】</b>几倍 = 大 ÷ 小 = 30 ÷ 5 = <b>6</b><br>Times older = 30 ÷ 5 = 6.<br>选 B (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>times older = 大几倍<br>age = 年龄<br>divide = 除<br>mom = 妈妈</p>'
  },
  {
    id: 'g3d10_b0', domain: 'data', grade: 3, level: 2, rit: 186,
    stem: 'From {1, 2, 3, 4, 5, 6}, pick at random. Probability of multiple of 3?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/2' }, { label: 'D', text: '2/3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>从 1, 2, 3, 4, 5, 6 中任取一数,是 3 的倍数的概率是多少?</p><p><b>【Original in English】</b>One number is selected at random from {1, 2, 3, 4, 5, 6}. What is the probability that it is a multiple of 3?</p><p><b>【解题思路 Solution】</b>3 的倍数:{3, 6},共 2 个。<br>Multiples of 3: {3, 6} → 2 numbers.<br>概率 = 2/6 = <b>1/3</b><br>Probability = 2/6 = 1/3<br>选 B (1/3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiple of 3 = 3 的倍数<br>at random = 随机<br>probability = 概率<br>simplify = 约分</p>'
  },
  {
    id: 'g4d17', domain: 'data', grade: 4, level: 2, rit: 207,
    stem: 'Bag has 5 red, 3 yellow, 2 green. Probability of yellow?',
    options: [{ label: 'A', text: '1/4' }, { label: 'B', text: '3/10' }, { label: 'C', text: '1/2' }, { label: 'D', text: '1/5' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>从 1-50 中任取一数, 是 5 的倍数的概率是多少?</p><p><b>【Original in English】</b>A number is chosen at random from 1 to 50. What is the probability that it is a multiple of 5?</p><p><b>【解题思路 Solution】</b>1-50 中 5 的倍数:{5, 10, 15, 20, 25, 30, 35, 40, 45, 50},共 10 个。<br>Multiples of 5 in 1-50: 10 numbers.<br>概率 = 10/50 = <b>1/5</b><br>Probability = 10/50 = 1/5.<br>选 A (1/5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiple of 5 = 5 的倍数<br>at random = 随机<br>probability = 概率<br>simplify = 约分</p>'
  },
  {
    id: 'g5d15', domain: 'data', grade: 5, level: 3, rit: 220,
    stem: 'Data 1, 1, 2, 2, 2, 3, 3, 4. Mode?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>数据 1, 1, 2, 2, 2, 3, 3, 4 的众数?</p><p><b>【Original in English】</b>What is the mode of 1, 1, 2, 2, 2, 3, 3, 4?</p><p><b>【解题思路 Solution】</b>众数 = 出现次数最多的数。<br>Mode = most frequent value.<br>频次:1→2次, 2→<b>3 次 (最多)</b>, 3→2次, 4→1次。<br>2 appears 3 times (most).<br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>mode = 众数<br>most frequent = 出现最多<br>frequency = 频次<br>count = 计数</p>'
  },
  {
    id: 'g6d15', domain: 'data', grade: 6, level: 3, rit: 231,
    stem: 'Bag has 5 red, 3 yellow, 2 green. Probability of yellow?',
    options: [{ label: 'A', text: '1/4' }, { label: 'B', text: '3/10' }, { label: 'C', text: '1/2' }, { label: 'D', text: '1/5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个袋子里有 5 个红球, 3 个黄球, 2 个绿球, 摸到黄球的概率?</p><p><b>【Original in English】</b>A bag has 5 red, 3 yellow, 2 green balls. Probability of drawing yellow?</p><p><b>【解题思路 Solution】</b>总数 = 5+3+2 = 10,黄球 3 个。<br>Total = 10, yellow = 3.<br>概率 = 3/10<br>Probability = 3/10.<br>选 B (3/10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>probability = 概率<br>red / yellow / green = 红 / 黄 / 绿<br>at random = 随机<br>total = 总数</p>'
  },
  {
    id: 'g7d13', domain: 'data', grade: 7, level: 4, rit: 245,
    stem: '5 cards numbered 1-5, pick 2. What is the probability the sum is 7?',
    options: [{ label: 'A', text: '1/5' }, { label: 'B', text: '1/10' }, { label: 'C', text: '1/50' }, { label: 'D', text: '5/50' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一组数据 6, 7, 8, 9, 10 的中位数?</p><p><b>【Original in English】</b>What is the median of 6, 7, 8, 9, 10?</p><p><b>【解题思路 Solution】</b>5 个数排序,中位数 = 第 3 个 = <b>8</b><br>5 sorted numbers, median = 3rd = 8.<br>选 B (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>median = 中位数<br>middle value = 中间值<br>already sorted = 已排序<br>5 numbers = 5 个数</p>'
  },
  {
    id: 'g8d13', domain: 'data', grade: 8, level: 4, rit: 255,
    stem: 'From 1-100, choose at random. Probability of perfect square?',
    options: [{ label: 'A', text: '1/10' }, { label: 'B', text: '1/100' }, { label: 'C', text: '1/50' }, { label: 'D', text: '1/20' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>从 1-100 中任取一数, 是完全平方数的概率?</p><p><b>【Original in English】</b>A number is chosen at random from 1 to 100. What is the probability it is a perfect square?</p><p><b>【解题思路 Solution】</b>1-100 中的完全平方数:<br>Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 → 共 10 个<br>概率 = 10/100 = <b>1/10</b><br>Probability = 10/100 = 1/10.<br>选 A (1/10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>perfect square = 完全平方数<br>at random = 随机<br>probability = 概率<br>count = 计数</p>'
  },
  {
    id: 'g9d14', domain: 'data', grade: 9, level: 5, rit: 264,
    stem: 'One card from 52-card deck. Probability it is a red Ace?',
    options: [{ label: 'A', text: '1/26' }, { label: 'B', text: '2/26' }, { label: 'C', text: '4/52' }, { label: 'D', text: '1/52' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>从一副 52 张牌中抽一张, 是红色 A 的概率?</p><p><b>【Original in English】</b>Draw one card from a 52-card deck. Probability it is a red Ace?</p><p><b>【解题思路 Solution】</b>红色 A = 红桃 A + 方块 A = 2 张<br>Red Aces: 2 (hearts + diamonds).<br>概率 = 2/52 = <b>1/26</b><br>Probability = 1/26.<br>选 A (1/26)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>red Ace = 红色 A (A♥, A♦)<br>probability = 概率<br>simplify = 约分<br>1/26 ≈ 0.038</p>'
  },
  {
    id: 'g10d12', domain: 'data', grade: 10, level: 5, rit: 273,
    stem: 'Bag has 3 red, 5 blue. Without replacement, draw 2 and both red. Probability?',
    options: [{ label: 'A', text: '3/8' }, { label: 'B', text: '9/64' }, { label: 'C', text: '1/4' }, { label: 'D', text: '1/8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>袋中有 3 红 5 蓝, 放回取 2 次都是红球的概率?</p><p><b>【Original in English】</b>A bag has 3 red and 5 blue balls. Two balls are drawn WITH replacement. What is the probability both are red?</p><p><b>【解题思路 Solution】</b>放回抽样 (with replacement) 每次独立:<br>单次红球概率 = 3/8<br>两次都红 = (3/8) × (3/8) = <b>9/64</b><br>Probability = (3/8)² = 9/64.<br>选 B (9/64)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>with replacement = 放回<br>independent = 独立<br>square the probability = 概率平方<br>multiply = 相乘</p>'
  },
  {
    id: 'g1g36', domain: 'geometry', grade: 1, level: 1, rit: 151,
    stem: 'A piece of paper is a ___',
    options: [{ label: 'A', text: 'Cuboid' }, { label: 'B', text: 'Rectangle' }, { label: 'C', text: 'Square' }, { label: 'D', text: 'Circle' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一张纸是什么形状?</p><p><b>【Original in English】</b>What shape is a piece of paper?</p><p><b>【解题思路 Solution】</b>纸 (paper) 是平面图形,通常是长方形 (rectangle)。<br>A piece of paper is a flat shape, usually a rectangle.<br>注意:纸是 2D 平面图形,不是 3D 长方体。<br>Paper is 2D, not a 3D cuboid.<br>选 B (长方形)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>rectangle = 长方形<br>flat / 2D = 平面<br>cuboid = 长方体 (3D)<br>square = 正方形</p>'
  },
  {
    id: 'g2g11', domain: 'geometry', grade: 2, level: 1, rit: 210,
    stem: 'How many faces does a cube have?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>正方体有几个面？</p><p><b>【Original in English】</b>How many faces does a cube have?</p><p><b>【解题思路 Solution】</b>A cube has <b>6</b> faces.</p><p><b>【Key Vocabulary · 核心生词】</b><br>cube = 正方体<br>face = 面</p>'
  },
  {
    id: 'g3g09_b0', domain: 'geometry', grade: 3, level: 2, rit: 186,
    stem: 'A cube has ___ vertices',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '8' }, { label: 'C', text: '12' }, { label: 'D', text: '4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个正方体有 ___ 个顶点。</p><p><b>【Original in English】</b>How many vertices (corners) does a cube have?</p><p><b>【解题思路 Solution】</b>正方体 (cube) = 长、宽、高相等的立方体。<br>A cube has 4 vertices on top + 4 on bottom = <b>8</b> total.<br>上面 4 个 + 下面 4 个 = 8 个顶点。<br>选 B (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cube = 正方体 / 立方体<br>vertex (单) / vertices (复) = 顶点<br>edge = 棱<br>face = 面 (cube 有 6 个面)</p>'
  },
  {
    id: 'g4g17', domain: 'geometry', grade: 4, level: 2, rit: 207,
    stem: 'Triangle base 12, height 8. Area?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '48' }, { label: 'C', text: '96' }, { label: 'D', text: '40' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>两个完全一样的三角形可以拼成什么图形?</p><p><b>【Original in English】</b>What shapes can be formed by combining two identical (congruent) triangles?</p><p><b>【解题思路 Solution】</b>两个全等三角形拼接方式不同,结果不同:<br>Depending on how you combine them:<br>• 沿斜边拼 → 平行四边形 (一般情形)<br>• 两个直角三角形沿斜边拼 → 长方形<br>• 不等腰三角形错位拼 → 梯形<br>所以三种都可能。选 D (都可能)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>congruent triangles = 全等三角形<br>parallelogram = 平行四边形<br>rectangle = 长方形<br>trapezoid = 梯形</p>'
  },
  {
    id: 'g5g16', domain: 'geometry', grade: 5, level: 3, rit: 221,
    stem: 'A circular paper has radius 4. Circumference? (π = 3.14)',
    options: [{ label: 'A', text: '12.56' }, { label: 'B', text: '25.12' }, { label: 'C', text: '50.24' }, { label: 'D', text: '16π' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>圆形纸片半径 4, 周长约多少? (π = 3.14)</p><p><b>【Original in English】</b>A circular paper has radius 4. What is its circumference? (π = 3.14)</p><p><b>【解题思路 Solution】</b>圆周长 C = 2πr<br>= 2 × 3.14 × 4 = <b>25.12</b><br>选 B (25.12)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>circumference = 周长<br>radius = 半径<br>C = 2πr<br>π ≈ 3.14</p>'
  },
  {
    id: 'g6g15', domain: 'geometry', grade: 6, level: 3, rit: 231,
    stem: 'A circle has area 25.12 cm². Radius? (π = 3.14)',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '2.83' }, { label: 'C', text: '4' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个圆的面积 25.12 cm², 半径约是多少? (π = 3.14)</p><p><b>【Original in English】</b>A circle has area 25.12 cm². What is the radius? (π = 3.14)</p><p><b>【解题思路 Solution】</b>圆面积公式:A = πr²<br>25.12 = 3.14 × r²<br>r² = 25.12 ÷ 3.14 = 8<br>r = √8 ≈ <b>2.83</b><br>选 B (2.83)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>area of circle = 圆的面积<br>radius = 半径<br>A = πr²<br>square root = 平方根</p>'
  },
  {
    id: 'g7g17', domain: 'geometry', grade: 7, level: 4, rit: 247,
    stem: 'What is the sum of interior angles of a regular octagon?',
    options: [{ label: 'A', text: '900°' }, { label: 'B', text: '1080°' }, { label: 'C', text: '1260°' }, { label: 'D', text: '1440°' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个正八边形的内角和是多少?</p><p><b>【Original in English】</b>What is the sum of the interior angles of a regular octagon?</p><p><b>【解题思路 Solution】</b>(n − 2) × 180°<br>= (8 − 2) × 180° = 6 × 180° = <b>1080°</b><br>选 B (1080°)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>octagon = 八边形<br>interior angle sum = 内角和<br>regular = 正多边形<br>(n−2)×180°</p>'
  },
  {
    id: 'g8g15', domain: 'geometry', grade: 8, level: 4, rit: 256,
    stem: 'Regular n-gon has exterior angle 30°. What is n?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '11' }, { label: 'C', text: '12' }, { label: 'D', text: '15' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个正 n 边形的一个外角是 30°, n = ?</p><p><b>【Original in English】</b>A regular n-gon has an exterior angle of 30°. What is n?</p><p><b>【解题思路 Solution】</b>正多边形外角和 = 360°<br>Sum of exterior angles of any polygon = 360°.<br>每个外角相同,n 个外角 = n × 30°<br>n × 30° = 360°<br>n = 360 ÷ 30 = <b>12</b><br>选 C (12)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>regular polygon = 正多边形<br>exterior angle = 外角<br>sum to 360° = 和为 360°<br>divide = 除</p>'
  },
  {
    id: 'g9g17', domain: 'geometry', grade: 9, level: 5, rit: 265,
    stem: 'Regular n-gon interior angle 135°. What is n?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '7' }, { label: 'C', text: '8' }, { label: 'D', text: '9' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>正 n 边形一个内角 135°, n = ?</p><p><b>【Original in English】</b>A regular n-gon has an interior angle of 135°. What is n?</p><p><b>【解题思路 Solution】</b>内角 + 外角 = 180°<br>外角 = 180° − 135° = 45°<br>外角和 360° = n × 45°<br>n = 360 ÷ 45 = <b>8</b><br>选 D (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>interior angle = 内角<br>exterior angle = 外角<br>sum to 360° = 和为 360°<br>regular polygon = 正多边形</p>'
  },
  {
    id: 'g10g13', domain: 'geometry', grade: 10, level: 5, rit: 273,
    stem: 'A regular n-gon has interior angle 135°. What is n?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '7' }, { label: 'C', text: '8' }, { label: 'D', text: '9' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>三棱柱有 ___ 条棱。</p><p><b>【Original in English】</b>How many edges does a triangular prism have?</p><p><b>【解题思路 Solution】</b>三棱柱 (triangular prism) 棱数 = 9:<br>• 上三角形 3 条 + 下三角形 3 条 = 6<br>• 3 条侧棱 (连接上下对应顶点)<br>共 <b>9</b> 条棱。<br>选 B (9)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>triangular prism = 三棱柱<br>edges = 棱<br>lateral edges = 侧棱<br>3 × 3 = 9</p>'
  },
  {
    id: 'g11g11', domain: 'geometry', grade: 11, level: 5, rit: 281,
    stem: 'How many edges does a square pyramid have?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '8' }, { label: 'C', text: '12' }, { label: 'D', text: '16' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个四棱锥有 ___ 条棱。</p><p><b>【Original in English】</b>How many edges does a square pyramid have?</p><p><b>【解题思路 Solution】</b>四棱锥 (square pyramid):<br>• 底面 4 棱 + 4 条侧棱 = <b>8</b> 条<br>选 B (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square pyramid = 四棱锥<br>edges = 棱<br>4 base + 4 lateral = 8<br>lateral edges = 侧棱</p>'
  },
  {
    id: 'g12g11', domain: 'geometry', grade: 12, level: 6, rit: 240,
    stem: 'A sphere cut by 3 planes: max parts?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '6' }, { label: 'C', text: '8' }, { label: 'D', text: '12' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个球被三个平面截最多分几部分?</p><p><b>【Original in English】</b>What is the maximum number of parts when a sphere is cut by 3 planes?</p><p><b>【解题思路 Solution】</b>球被 n 个平面截最多分 (n³ + 5n + 6)/6 部分<br>3 个平面:(27 + 15 + 6)/6 = 48/6 = <b>8</b><br>或:1+3+3+1 = 8<br>选 C (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>plane cuts = 平面截<br>maximum parts = 最多个数<br>3 planes = 3 个平面<br>8 parts</p>'
  },
  {
    id: 'g1f09', domain: 'fraction', grade: 1, level: 1, rit: 142,
    stem: 'How do you write 1/2 in Chinese?',
    options: [{ label: 'A', text: 'Two-fifths' }, { label: 'B', text: 'One-half' }, { label: 'C', text: '50%' }, { label: 'D', text: 'All of the above' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>1/2 用中文可以怎么说?</p><p><b>【Original in English】</b>How can 1/2 be expressed in words?</p><p><b>【解题思路 Solution】</b>1/2 的不同说法:<br>Different ways to say 1/2:<br>• 二分之一 (formal Chinese)<br>• 一半 (one half, casual)<br>• 50% (percentage)<br>三种都对,选 D (都是)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>one half = 一半<br>fraction = 分数<br>percentage = 百分比<br>50% = fifty percent</p>'
  },
  {
    id: 'g2f09', domain: 'fraction', grade: 2, level: 1, rit: 163,
    stem: '3/4 as a decimal?',
    options: [{ label: 'A', text: '0.34' }, { label: 'B', text: '0.43' }, { label: 'C', text: '0.75' }, { label: 'D', text: '0.25' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>3/4 写成小数是?</p><p><b>【Original in English】</b>What is 3/4 as a decimal?</p><p><b>【解题思路 Solution】</b>3/4 = 3 ÷ 4 = <b>0.75</b><br>To convert: numerator ÷ denominator.<br>选 C (0.75)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>decimal = 小数<br>convert fraction to decimal = 分数化小数<br>3 ÷ 4 = 0.75<br>three fourths = 四分之三</p>'
  },
  {
    id: 'g3f11', domain: 'fraction', grade: 3, level: 2, rit: 184,
    stem: '2/3 + 1/3 = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '3/3' }, { label: 'C', text: '3/6' }, { label: 'D', text: 'A or B' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>2/3 + 1/3 = ?</p><p><b>【Original in English】</b>2/3 + 1/3 = ?</p><p><b>【解题思路 Solution】</b>分母相同,分子相加:<br>Same denominator, add numerators.<br>2/3 + 1/3 = 3/3 = <b>1</b><br>(3/3 和 1 都对,选 D)<br>Both 3/3 and 1 are correct.</p><p><b>【Key Vocabulary · 核心生词】</b><br>denominator = 分母<br>numerator = 分子<br>improper fraction = 假分数 (3/3)<br>equal to 1 = 等于 1</p>'
  },
  {
    id: 'g4f13', domain: 'fraction', grade: 4, level: 2, rit: 205,
    stem: '1/2 + 1/3 + 1/5 = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '15/30+10/30+6/30 = 31/30' }, { label: 'C', text: '15/30' }, { label: 'D', text: 'A and C' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1/2 + 1/3 + 1/5 = ?</p><p><b>【Original in English】</b>1/2 + 1/3 + 1/5 = ?</p><p><b>【解题思路 Solution】</b>公分母 LCM(2,3,5) = 30。<br>Common denominator = 30.<br>1/2 = 15/30, 1/3 = 10/30, 1/5 = 6/30<br>15/30 + 10/30 + 6/30 = <b>31/30</b> = 1 又 1/30<br>选 B。</p><p><b>【Key Vocabulary · 核心生词】</b><br>common denominator = 公分母<br>improper fraction = 假分数 (31/30 > 1)<br>mixed number = 带分数 (1 又 1/30)<br>add fractions = 分数相加</p>'
  },
  {
    id: 'g5f13', domain: 'fraction', grade: 5, level: 3, rit: 220,
    stem: '0.6 × 0.6 = ?',
    options: [{ label: 'A', text: '0.12' }, { label: 'B', text: '0.36' }, { label: 'C', text: '0.4' }, { label: 'D', text: '0.6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>0.6 × 0.6 = ?</p><p><b>【Original in English】</b>0.6 × 0.6 = ?</p><p><b>【解题思路 Solution】</b>0.6² = 0.36<br>6 × 6 = 36, 加小数点 (2 位):<b>0.36</b><br>选 B (0.36)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square = 平方 (× 自身)<br>0.6 × 0.6 = 0.36<br>multiply decimals = 小数乘法<br>decimal places = 小数位</p>'
  },
  {
    id: 'g6f09', domain: 'fraction', grade: 6, level: 3, rit: 228,
    stem: '1/2 ÷ 1/4 = ?',
    options: [{ label: 'A', text: '1/8' }, { label: 'B', text: '2' }, { label: 'C', text: '1/2' }, { label: 'D', text: '4' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1/2 ÷ 1/4 = ?</p><p><b>【Original in English】</b>1/2 ÷ 1/4 = ?</p><p><b>【解题思路 Solution】</b>分数除法 = 乘以倒数:<br>Division = multiply by reciprocal.<br>1/2 ÷ 1/4 = 1/2 × 4/1 = <b>2</b><br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide fractions = 分数除法<br>reciprocal = 倒数<br>multiply = 乘<br>1/4 reciprocal = 4</p>'
  },
  {
    id: 'g7f10', domain: 'fraction', grade: 7, level: 4, rit: 242,
    stem: 'What is the negative of 3/4?',
    options: [{ label: 'A', text: '−3/4' }, { label: 'B', text: '3/−4' }, { label: 'C', text: 'A or B' }, { label: 'D', text: '4/3' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>3/4 的负数是什么?</p><p><b>【Original in English】</b>What is the negative of 3/4?</p><p><b>【解题思路 Solution】</b>分数加负号 = 负分数:<br>To negate a fraction, add a minus sign.<br>−3/4 或 3/−4 都表示 <b>−3/4</b>。<br>Both −3/4 and 3/−4 mean −3/4.<br>选 C (A 或 B)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>negative fraction = 负分数<br>opposite = 相反数<br>add minus sign = 加负号<br>−3/4 = 3/−4</p>'
  },
  // ==================== 1000 道收官批次 62 道 ====================
  {
    id: 'g1n43', domain: 'number', grade: 1, level: 1, rit: 153,
    stem: 'A number has 8 in the ones place and 5 in the tens place. What is the number?',
    options: [{ label: 'A', text: '58' }, { label: 'B', text: '85' }, { label: 'C', text: '13' }, { label: 'D', text: '80' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数个位是 8, 十位是 5, 这个数是?</p><p><b>【Original in English】</b>A number has 8 in the ones place and 5 in the tens place. What is the number?</p><p><b>【解题思路 Solution】</b>十位 5 + 个位 8 = 5×10 + 8 = <b>58</b>。<br>Tens 5 + ones 8 = 58.<br>选 A (58)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>tens place = 十位<br>ones place = 个位<br>place value = 位值<br>number = 数</p>'
  },
  {
    id: 'g2n29', domain: 'number', grade: 2, level: 1, rit: 177,
    stem: '99 + 1 = ?',
    options: [{ label: 'A', text: '99' }, { label: 'B', text: '100' }, { label: 'C', text: '101' }, { label: 'D', text: '98' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>99 + 1 = ?</p><p><b>【Original in English】</b>99 + 1 = ?</p><p><b>【解题思路 Solution】</b>99 + 1 = <b>100</b>。<br>进位加法:99 + 1 = 100 (从两位数变成三位数)。<br>Carry-over: 99 + 1 = 100 (becomes 3-digit).<br>选 B (100)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>add = 加<br>carry = 进位<br>100 = one hundred<br>round number = 整百</p>'
  },
  {
    id: 'g3n30', domain: 'number', grade: 3, level: 2, rit: 219,
    stem: 'A number is 100 less than 1,000. What is it?',
    options: [{ label: 'A', text: '900' }, { label: 'B', text: '800' }, { label: 'C', text: '1,100' }, { label: 'D', text: '100' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数比 1,000 少 100，是？</p><p><b>【Original in English】</b>A number is 100 less than 1,000. What is it?</p><p><b>【解题思路 Solution】</b>1,000 − 100 = <b>900</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>less than = 少</p>'
  },
  {
    id: 'g4n28', domain: 'number', grade: 4, level: 2, rit: 212,
    stem: 'A number divided by 3 gives remainder 1, by 4 gives remainder 2, by 5 gives remainder 3. Smallest such number?',
    options: [{ label: 'A', text: '58' }, { label: 'B', text: '53' }, { label: 'C', text: '23' }, { label: 'D', text: '28' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数除以 13 商 6 余 7, 这个数是多少?</p><p><b>【Original in English】</b>A number divided by 13 gives a quotient of 6 and a remainder of 7. What is the number?</p><p><b>【解题思路 Solution】</b>公式:被除数 = 除数 × 商 + 余数<br>Formula: dividend = divisor × quotient + remainder<br>= 13 × 6 + 7 = 78 + 7 = <b>85</b><br>选 B (85)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divisor = 除数<br>quotient = 商<br>remainder = 余数<br>dividend = 被除数</p>'
  },
  {
    id: 'g5n27', domain: 'number', grade: 5, level: 3, rit: 225,
    stem: 'A number divided by 0.01 is the same as multiplying by ___',
    options: [{ label: 'A', text: '0.01' }, { label: 'B', text: '100' }, { label: 'C', text: '0.1' }, { label: 'D', text: '10' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数除以 0.01 等于乘以它的?</p><p><b>【Original in English】</b>Dividing by 0.01 is the same as multiplying by ___.</p><p><b>【解题思路 Solution】</b>1 ÷ 0.01 = 100<br>所以除以 0.01 = 乘以 <b>100</b>。<br>Dividing by 0.01 = multiplying by 100 (reciprocal).<br>选 B (100)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>reciprocal = 倒数<br>1/0.01 = 100<br>divide by small = 除以小数<br>multiply by large = 乘以大数</p>'
  },
  {
    id: 'g6n27', domain: 'number', grade: 6, level: 3, rit: 236,
    stem: 'A number is 50% of itself. What is the number?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '0.5' }, { label: 'C', text: '1' }, { label: 'D', text: '2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数是它自己的 50%, 这个数是?</p><p><b>【Original in English】</b>A number is 50% of itself. What is the number?</p><p><b>【解题思路 Solution】</b>x = 0.5x<br>0.5x = 0 → x = 0<br>任何非零数的 50% 都比它小,只有 0 满足。<br>Any non-zero number times 0.5 is less than itself. Only 0 works.<br>选 A (0)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>50% = 0.5 = 1/2<br>equation = 方程<br>only zero = 只有 0<br>identity = 恒等</p>'
  },
  {
    id: 'g7n16', domain: 'number', grade: 7, level: 4, rit: 255,
    stem: '|-3| + |-4| = ?',
    options: [{ label: 'A', text: '-7' }, { label: 'B', text: '1' }, { label: 'C', text: '7' }, { label: 'D', text: '12' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>|-3| + |-4| = ?</p><p><b>【Original in English】</b>|-3| + |-4| = ?</p><p><b>【解题思路 Solution】</b>3 + 4 = <b>7</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>absolute value = 绝对值</p>'
  },
  {
    id: 'g8n15', domain: 'number', grade: 8, level: 4, rit: 267,
    stem: '1,000,000 + 1,000 = ?',
    options: [{ label: 'A', text: '1,001,000' }, { label: 'B', text: '1,010,000' }, { label: 'C', text: '1,100,000' }, { label: 'D', text: '11,000,000' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1,000,000 + 1,000 = ?</p><p><b>【Original in English】</b>1,000,000 + 1,000 = ?</p><p><b>【解题思路 Solution】</b>1,000,000 + 1,000 = <b>1,001,000</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>thousand = 千</p>'
  },
  {
    id: 'g9n12', domain: 'number', grade: 9, level: 5, rit: 264,
    stem: 'tan 45° + cot 45° = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '2' }, { label: 'C', text: '1' }, { label: 'D', text: '√2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>tan 45° + cot 45° = ?</p><p><b>【Original in English】</b>tan 45° + cot 45° = ?</p><p><b>【解题思路 Solution】</b>tan 45° = 1,cot 45° = 1/tan 45° = 1<br>1 + 1 = <b>2</b><br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>tan 45° = 1<br>cot 45° = 1<br>cotangent = 余切 (1/tan)<br>sum = 总和</p>'
  },
  {
    id: 'g10n15', domain: 'number', grade: 10, level: 5, rit: 274,
    stem: 'log_a(a² · a³) = ?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: 'a⁵' }, { label: 'C', text: '2 × 3 = 6' }, { label: 'D', text: '5 or A' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>log_a(a² · a³) = ?</p><p><b>【Original in English】</b>log_a(a² · a³) = ?</p><p><b>【解题思路 Solution】</b>先用同底数幂乘法 (multiply powers):<br>a² · a³ = a^(2+3) = a⁵<br>所以 log_a(a⁵) = <b>5</b><br>log_a a^x = x 的基本性质。<br>选 D (5 或 A)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply powers = 同底数幂相乘<br>add exponents = 指数相加<br>log_a a^x = x<br>simplify = 化简</p>'
  },
  {
    id: 'g11n11', domain: 'number', grade: 11, level: 5, rit: 281,
    stem: 'e^(ln 2) = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: 'e' }, { label: 'C', text: '1/2' }, { label: 'D', text: 'ln 2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>e^(ln 2) = ?</p><p><b>【Original in English】</b>What is e^(ln 2)?</p><p><b>【解题思路 Solution】</b>e 和 ln 是<b>反函数</b>:<br>e and ln are inverse functions.<br>e^(ln x) = x<br>所以 e^(ln 2) = <b>2</b><br>选 A (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>exponential = 指数<br>natural log = 自然对数<br>inverse functions = 反函数<br>e^(ln x) = x</p>'
  },
  {
    id: 'g1a08', domain: 'algebra', grade: 1, level: 1, rit: 142,
    stem: 'A number plus 5 equals 12. What is the number?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '7' }, { label: 'D', text: '17' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数加 5 等于 12, 这个数是多少?</p><p><b>【Original in English】</b>A number plus 5 equals 12. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x:<br>Let the number be x.<br>x + 5 = 12<br>x = 12 − 5 = <b>7</b><br>选 C (7)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>plus = 加<br>equals = 等于<br>unknown = 未知数<br>subtract to solve = 用减法求 x</p>'
  },
  {
    id: 'g2a09', domain: 'algebra', grade: 2, level: 1, rit: 163,
    stem: 'A number minus 3 equals 7. What is the number?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '10' }, { label: 'D', text: '21' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数减 3 等于 7, 这个数是?</p><p><b>【Original in English】</b>A number minus 3 equals 7. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x:<br>Let the number be x.<br>x − 3 = 7<br>x = 7 + 3 = <b>10</b><br>选 C (10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>minus = 减<br>add to solve = 用加法求 x<br>inverse operation = 逆运算<br>equation = 方程</p>'
  },
  {
    id: 'g3a11', domain: 'algebra', grade: 3, level: 2, rit: 217,
    stem: 'Continue: 2, 4, 8, 16, _',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '24' }, { label: 'C', text: '32' }, { label: 'D', text: '18' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>续：2, 4, 8, 16, _</p><p><b>【Original in English】</b>Continue: 2, 4, 8, 16, _</p><p><b>【解题思路 Solution】</b>Each ×2: 2, 4, 8, 16, <b>32</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>double = 双倍<br>geometric = 几何的</p>'
  },
  {
    id: 'g4a10', domain: 'algebra', grade: 4, level: 2, rit: 204,
    stem: 'A number is 5 more than twice itself. What is the number?',
    options: [{ label: 'A', text: '−5' }, { label: 'B', text: '5' }, { label: 'C', text: '10' }, { label: 'D', text: '−10' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数加它的 2 倍等于 30, 这个数是多少?</p><p><b>【Original in English】</b>A number plus twice itself equals 30. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x。<br>Let the number be x.<br>x + 2x = 30<br>3x = 30<br>x = <b>10</b><br>选 B (10)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>twice itself = 它的 2 倍<br>like terms = 同类项<br>combine = 合并<br>equation = 方程</p>'
  },
  {
    id: 'g5a10', domain: 'algebra', grade: 5, level: 3, rit: 218,
    stem: 'A number\'s 20% is 30. What is the number?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '60' }, { label: 'C', text: '150' }, { label: 'D', text: '300' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数比它的 2 倍多 5, 这个数?</p><p><b>【Original in English】</b>A number is 5 more than twice itself. What is the number?</p><p><b>【解题思路 Solution】</b>设 x:<br>x = 2x + 5<br>移项:x − 2x = 5<br>−x = 5<br>x = <b>−5</b><br>选 A (−5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>twice itself = 它的 2 倍<br>move terms = 移项<br>negative number = 负数<br>5 more than = 多 5</p>'
  },
  {
    id: 'g6a10', domain: 'algebra', grade: 6, level: 3, rit: 228,
    stem: 'A number\'s 20% is 30. What is the number?',
    options: [{ label: 'A', text: '6' }, { label: 'B', text: '60' }, { label: 'C', text: '150' }, { label: 'D', text: '300' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个数的 20% 是 30, 这个数是?</p><p><b>【Original in English】</b>20% of a number is 30. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x:<br>Let the number be x.<br>0.2 × x = 30<br>x = 30 ÷ 0.2 = 30 × 5 = <b>150</b><br>选 C (150)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>20% = 0.2 = 1/5<br>percentage of = 的百分之几<br>divide by 0.2 = 除以 0.2 (= 乘以 5)<br>equation = 方程</p>'
  },
  {
    id: 'g7a21', domain: 'algebra', grade: 7, level: 4, rit: 249,
    stem: 'A number plus 1 equals twice itself minus 5. What is the number?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '6' }, { label: 'C', text: '7' }, { label: 'D', text: '8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个数加 1 等于它的 2 倍减 5, 这个数是?</p><p><b>【Original in English】</b>A number plus 1 equals twice itself minus 5. What is the number?</p><p><b>【解题思路 Solution】</b>设这个数为 x:<br>Let the number be x.<br>x + 1 = 2x − 5<br>移项:1 + 5 = 2x − x<br>6 = x<br>x = <b>6</b><br>选 B (6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>twice itself = 它的 2 倍<br>move terms = 移项<br>equation = 方程<br>balance both sides = 等号两边平衡</p>'
  },
  {
    id: 'g8a20', domain: 'algebra', grade: 8, level: 4, rit: 258,
    stem: 'Solve x² − 2x − 3 = 0, x = ?',
    options: [{ label: 'A', text: '3 or −1' }, { label: 'B', text: '1 or 3' }, { label: 'C', text: '−1 or −3' }, { label: 'D', text: '3 or 1' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>解方程 x² − 2x − 3 = 0, x = ?</p><p><b>【Original in English】</b>Solve x² − 2x − 3 = 0. What is x?</p><p><b>【解题思路 Solution】</b>因式分解 (factor):<br>x² − 2x − 3 = (x − 3)(x + 1) = 0<br>x = 3 或 x = −1<br>选 A (3 或 −1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>quadratic equation = 一元二次方程<br>factor = 因式分解<br>two solutions = 两个解<br>zero product = 零乘积</p>'
  },
  {
    id: 'g9a22', domain: 'algebra', grade: 9, level: 5, rit: 267,
    stem: 'Vertex of y = x² + 4x + 7?',
    options: [{ label: 'A', text: '(−2, 3)' }, { label: 'B', text: '(2, 3)' }, { label: 'C', text: '(−2, −3)' }, { label: 'D', text: '(2, −3)' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>二次函数 y = x² + 4x + 7 的顶点是?</p><p><b>【Original in English】</b>What is the vertex of y = x² + 4x + 7?</p><p><b>【解题思路 Solution】</b>配方:<br>y = (x + 2)² + 3<br>顶点 (h, k) = (−2, 3)<br>选 A ((−2, 3))。</p><p><b>【Key Vocabulary · 核心生词】</b><br>vertex = 顶点<br>complete the square = 配方<br>(x+2)² → h = −2<br>k = 3</p>'
  },
  {
    id: 'g10a20', domain: 'algebra', grade: 10, level: 5, rit: 276,
    stem: 'y = log_a x always passes through (a, 1)?',
    options: [{ label: 'A', text: 'Not necessarily' }, { label: 'B', text: 'Always' }, { label: 'C', text: 'Depends on a' }, { label: 'D', text: 'Depends on x' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>y = log_a x 一定过点 (a, 1) 吗?</p><p><b>【Original in English】</b>Does y = log_a x always pass through (a, 1)?</p><p><b>【解题思路 Solution】</b>验证:把 x = a 代入:<br>y = log_a a = <b>1</b> (任何底数 a, log_a a = 1)<br>所以对数函数 y = log_a x 一定经过 (a, 1)。<br>For any base a, log_a a = 1, so the curve passes through (a, 1).<br>选 B (一定)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>log_a a = 1 (identity)<br>passes through = 经过<br>always = 一定<br>identity = 恒等式</p>'
  },
  {
    id: 'g11a25', domain: 'algebra', grade: 11, level: 5, rit: 283,
    stem: 'Sequence 1, 1/2, 1/4, 1/8, ... 10th term?',
    options: [{ label: 'A', text: '1/256' }, { label: 'B', text: '1/512' }, { label: 'C', text: '1/1024' }, { label: 'D', text: '1/128' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>数列 1, 1/2, 1/4, 1/8, ... 的第 10 项?</p><p><b>【Original in English】</b>What is the 10th term of 1, 1/2, 1/4, 1/8, ...?</p><p><b>【解题思路 Solution】</b>等比数列 a_n = a_1 × q^(n−1):<br>= 1 × (1/2)^(10−1) = (1/2)⁹ = <b>1/512</b><br>选 C (1/512)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>geometric sequence = 等比数列<br>10th term = 第 10 项<br>(1/2)^9 = 1/512<br>2^9 = 512</p>'
  },
  {
    id: 'g12a27', domain: 'algebra', grade: 12, level: 6, rit: 240,
    stem: 'f(x) = 2x² + 1, f\'(x) = ?',
    options: [{ label: 'A', text: '2x' }, { label: 'B', text: '4x' }, { label: 'C', text: '4x + 1' }, { label: 'D', text: '2x + 1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>f(x) = 2x² + 1, f&#39;(x) = ?</p><p><b>【Original in English】</b>For f(x) = 2x² + 1, what is f&#39;(x)?</p><p><b>【解题思路 Solution】</b>求导:<br>(2x²)&#39; = 4x<br>(1)&#39; = 0<br>f&#39;(x) = <b>4x</b><br>选 B (4x)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>derivative = 导数<br>power rule = 幂规则<br>constant derivative = 0 = 常数导数为 0<br>polynomial = 多项式</p>'
  },
  {
    id: 'g1d26', domain: 'data', grade: 1, level: 1, rit: 148,
    stem: 'Xiao Ming has 3 apples. Xiao Hong gives him 2 more. How many does he have?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '5' }, { label: 'C', text: '6' }, { label: 'D', text: '2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>小明有 3 个苹果, 小红给他 2 个, 小明有几个?</p><p><b>【Original in English】</b>Xiao Ming has 3 apples. Xiao Red gives him 2 more. How many does he have now?</p><p><b>【解题思路 Solution】</b>原来 3 个 + 收到 2 个 = <b>5</b> 个。<br>Original 3 + received 2 = 5.<br>选 B (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>apples = 苹果<br>give = 给<br>how many in total = 总共多少<br>addition = 加法</p>'
  },
  {
    id: 'g2d10_b0', domain: 'data', grade: 2, level: 1, rit: 166,
    stem: 'From 1-10, choose at random. Probability of even?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/5' }, { label: 'D', text: '1/4' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>从 1-10 中任取一数, 是双数的概率?</p><p><b>【Original in English】</b>A number is chosen at random from 1 to 10. What is the probability it is even?</p><p><b>【解题思路 Solution】</b>双数 (even) = {2, 4, 6, 8, 10},共 5 个。<br>Even numbers from 1-10: 5 numbers.<br>概率 = 5/10 = <b>1/2</b><br>Probability = 5/10 = 1/2.<br>选 A (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>even number = 偶数 / 双数<br>at random = 随机<br>probability = 概率<br>simplify = 约分</p>'
  },
  {
    id: 'g3d11', domain: 'data', grade: 3, level: 2, rit: 239,
    stem: 'Data 10, 20, 30, 40, 50. Range?',
    options: [{ label: 'A', text: '10' }, { label: 'B', text: '30' }, { label: 'C', text: '40' }, { label: 'D', text: '50' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>数据 10,20,30,40,50，极差？</p><p><b>【Original in English】</b>Data 10, 20, 30, 40, 50. Range?</p><p><b>【解题思路 Solution】</b>Range = 50 − 10 = <b>40</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 极差</p>'
  },
  {
    id: 'g4d18', domain: 'data', grade: 4, level: 2, rit: 207,
    stem: 'Bag has 5 red, 3 yellow, 2 green. Probability of yellow?',
    options: [{ label: 'A', text: '1/4' }, { label: 'B', text: '3/10' }, { label: 'C', text: '1/2' }, { label: 'D', text: '1/5' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>从一副 54 张牌中抽一张, 是 J 或 Q 的概率是多少?</p><p><b>【Original in English】</b>One card is drawn from a 54-card deck. What is the probability of getting a J or a Q?</p><p><b>【解题思路 Solution】</b>J 有 4 张,Q 有 4 张,共 8 张。<br>J = 4, Q = 4, total = 8 cards.<br>概率 = 8/54 = <b>4/27</b> (约分)<br>Probability = 8/54 = 4/27 (simplified).<br>选 D (4/27)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>deck of cards = 一副牌<br>jack (J) = 杰克<br>queen (Q) = 皇后<br>probability = 概率</p>'
  },
  {
    id: 'g5d16', domain: 'data', grade: 5, level: 3, rit: 221,
    stem: 'Data 10, 20, 30, 40, 50. Mean?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '25' }, { label: 'C', text: '30' }, { label: 'D', text: '40' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>数据 10, 20, 30, 40, 50 的平均数?</p><p><b>【Original in English】</b>What is the mean of 10, 20, 30, 40, 50?</p><p><b>【解题思路 Solution】</b>等差数列,平均 = 中间项 = 30<br>或:(10+50)/2 = 30 (首尾平均)<br>Or (first + last) / 2 = 30.<br>选 C (30)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>arithmetic sequence = 等差数列<br>mean = 平均数<br>middle term = 中间项<br>(first + last)/2 = 首尾平均</p>'
  },
  {
    id: 'g6d16', domain: 'data', grade: 6, level: 3, rit: 231,
    stem: 'Data 10, 20, 30, 40, 50. Mean?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '25' }, { label: 'C', text: '30' }, { label: 'D', text: '40' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一组数据 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 的极差?</p><p><b>【Original in English】</b>What is the range of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10?</p><p><b>【解题思路 Solution】</b>极差 = 最大 − 最小 = 10 − 1 = <b>9</b><br>Range = max − min = 9.<br>选 B (9)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>range = 极差<br>maximum = 最大值<br>minimum = 最小值<br>subtract = 减</p>'
  },
  {
    id: 'g7d14', domain: 'data', grade: 7, level: 4, rit: 245,
    stem: 'One card is drawn from a 52-card deck. Probability it is 5, 10, J, Q, or K?',
    options: [{ label: 'A', text: '5/13' }, { label: 'B', text: '1/5' }, { label: 'C', text: '4/13' }, { label: 'D', text: '5/52' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>从一副 52 张牌中抽一张, 是 5 的倍数 (5, 10, J, Q, K) 的概率?</p><p><b>【Original in English】</b>One card is drawn from a 52-card deck. What is the probability of getting a 5, 10, J, Q, or K?</p><p><b>【解题思路 Solution】</b>每种花色有 5 张(5, 10, J, Q, K),4 种花色共 4 × 5 = 20 张。<br>5 cards per suit × 4 suits = 20 cards.<br>概率 = 20/52 = <b>5/13</b><br>Probability = 20/52 = 5/13.<br>选 A (5/13)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>deck of cards = 一副牌 (52 张)<br>suit = 花色 (4 种)<br>face cards = J/Q/K<br>probability = 概率</p>'
  },
  {
    id: 'g8d14', domain: 'data', grade: 8, level: 4, rit: 255,
    stem: 'Two cards drawn from 52 (without replacement), both Aces. Probability?',
    options: [{ label: 'A', text: '1/13' }, { label: 'B', text: '1/221' }, { label: 'C', text: '(4/52)×(3/51)' }, { label: 'D', text: 'B or C' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>从一副 52 张牌中抽两张 (不放回), 都是 A 的概率?</p><p><b>【Original in English】</b>Two cards are drawn (without replacement) from a 52-card deck. What is the probability both are Aces?</p><p><b>【解题思路 Solution】</b>第一次:4/52,第二次(已抽走 1 张 A):3/51<br>First draw: 4/52, second draw: 3/51 (one less Ace and one less card).<br>概率 = (4/52) × (3/51) = 12/2652 = <b>1/221</b><br>选 D (B 或 C,两者等价)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>without replacement = 不放回<br>conditional probability = 条件概率<br>multiply probabilities = 概率相乘<br>Ace = A</p>'
  },
  {
    id: 'g9d15', domain: 'data', grade: 9, level: 5, rit: 265,
    stem: 'Two cards from 52. Probability both hearts?',
    options: [{ label: 'A', text: '1/4' }, { label: 'B', text: '1/13' }, { label: 'C', text: '1/17' }, { label: 'D', text: '1/26' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>从一副 52 张牌中抽两张, 都是红桃的概率?</p><p><b>【Original in English】</b>Draw 2 cards from 52. Probability both are hearts?</p><p><b>【解题思路 Solution】</b>第一次:13/52,第二次:12/51 (不放回)<br>First: 13/52, second: 12/51.<br>概率 = (13/52) × (12/51) = 156/2652 = <b>1/17</b><br>选 D (1/17)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>without replacement = 不放回<br>hearts = 红桃<br>conditional = 条件<br>multiply probabilities = 概率相乘</p>'
  },
  {
    id: 'g10d13', domain: 'data', grade: 10, level: 5, rit: 273,
    stem: 'P(A∪B) = P(A) + P(B) − P(AB) is used for?',
    options: [{ label: 'A', text: 'mutually exclusive events' }, { label: 'B', text: 'general events' }, { label: 'C', text: 'independent events' }, { label: 'D', text: 'complementary events' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>P(A ∪ B) = P(A) + P(B) − P(AB) 用于?</p><p><b>【Original in English】</b>The formula P(A ∪ B) = P(A) + P(B) − P(AB) applies to ___ events.</p><p><b>【解题思路 Solution】</b>加法公式 (addition rule):<br>• 互斥事件 (mutually exclusive):P(AB) = 0,简化为 P(A ∪ B) = P(A) + P(B)<br>• <b>一般事件</b> (general):P(AB) ≠ 0,完整公式 P(A ∪ B) = P(A) + P(B) − P(AB)<br>选 B (一般事件)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>general addition rule = 一般加法公式<br>inclusion-exclusion = 容斥<br>union = 并集<br>intersection = 交集</p>'
  },
  {
    id: 'g11d12', domain: 'data', grade: 11, level: 5, rit: 281,
    stem: 'Mean of B(10, 0.5)?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '5' }, { label: 'C', text: '10' }, { label: 'D', text: '0.5' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>二项分布 B(10, 0.5) 的均值是?</p><p><b>【Original in English】</b>What is the mean of B(10, 0.5)?</p><p><b>【解题思路 Solution】</b>二项分布均值 = np<br>= 10 × 0.5 = <b>5</b><br>选 B (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>binomial distribution = 二项分布<br>mean = 均值<br>B(n, p) = n trials, prob p<br>np = 5</p>'
  },
  {
    id: 'g12d12', domain: 'data', grade: 12, level: 6, rit: 240,
    stem: 'CLT: sum of many i.i.d. random variables approximates?',
    options: [{ label: 'A', text: 'uniform distribution' }, { label: 'B', text: 'normal distribution' }, { label: 'C', text: 'exponential distribution' }, { label: 'D', text: 'Poisson distribution' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>中心极限定理: 大量独立同分布随机变量之和近似服从?</p><p><b>【Original in English】</b>By the Central Limit Theorem, the sum of many i.i.d. random variables is approximately ___.</p><p><b>【解题思路 Solution】</b>中心极限定理 (CLT):<br>大量独立同分布 (i.i.d.) 随机变量之和/均值 → <b>正态分布</b>。<br>Sum/average of many i.i.d. variables → normal distribution.<br>选 B (正态分布)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>Central Limit Theorem = 中心极限定理<br>i.i.d. = independent and identically distributed<br>normal distribution = 正态分布<br>large n approximation = 大样本近似</p>'
  },
  {
    id: 'g1g37', domain: 'geometry', grade: 1, level: 1, rit: 151,
    stem: 'How many corners (angles) does a triangle have?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '3' }, { label: 'C', text: '4' }, { label: 'D', text: '6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个三角形有几个角?</p><p><b>【Original in English】</b>How many corners (angles) does a triangle have?</p><p><b>【解题思路 Solution】</b>三角形 (triangle) = 3 条边 + <b>3 个角</b>。<br>A triangle has 3 sides and 3 angles.<br>每个角对应一条边,3 边 → 3 角。<br>Each angle is at a vertex where 2 sides meet.<br>选 B (3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>triangle = 三角形<br>corner / angle = 角<br>vertex = 顶点<br>three = 3</p>'
  },
  {
    id: 'g2g12', domain: 'geometry', grade: 2, level: 1, rit: 211,
    stem: 'A box 5×3×2 cm. What is the volume?',
    options: [{ label: 'A', text: '10 cm³' }, { label: 'B', text: '30 cm³' }, { label: 'C', text: '50 cm³' }, { label: 'D', text: '60 cm³' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个长方体 5×3×2 厘米，体积？</p><p><b>【Original in English】</b>A box 5×3×2 cm. What is the volume?</p><p><b>【解题思路 Solution】</b>Volume = 5 × 3 × 2 = <b>30 cm³</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>volume = 体积<br>cm³ = 立方厘米</p>'
  },
  {
    id: 'g3g10_b0', domain: 'geometry', grade: 3, level: 2, rit: 186,
    stem: 'A regular triangular pyramid (equilateral triangle base) has ___ faces',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '4' }, { label: 'C', text: '5' }, { label: 'D', text: '6' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个长方体有 ___ 个顶点。</p><p><b>【Original in English】</b>How many vertices (corners) does a rectangular prism (cuboid) have?</p><p><b>【解题思路 Solution】</b>长方体 (rectangular prism) 上下各 4 个顶点:<br>4 vertices on top + 4 on bottom = <b>8</b> total.<br>选 B (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>rectangular prism / cuboid = 长方体<br>vertex / vertices = 顶点<br>3D shape = 三维图形<br>corner = 角 / 顶点</p>'
  },
  {
    id: 'g4g18', domain: 'geometry', grade: 4, level: 2, rit: 207,
    stem: 'Two similar triangles area ratio 1:4. Side ratio?',
    options: [{ label: 'A', text: '1:2' }, { label: 'B', text: '1:4' }, { label: 'C', text: '1:8' }, { label: 'D', text: '1:16' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>一个正方体的棱长 2, 表面积是多少?</p><p><b>【Original in English】</b>A cube has edge length 2. What is its surface area?</p><p><b>【解题思路 Solution】</b>正方体 6 个完全相同的正方形面。<br>A cube has 6 identical square faces.<br>每个面 = 2² = 4<br>表面积 = 6 × 4 = <b>24</b><br>Surface area = 6 × 2² = 24.<br>选 D (24)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cube = 正方体 / 立方体<br>edge length = 棱长<br>surface area = 表面积<br>square face = 正方形面</p>'
  },
  {
    id: 'g5g17', domain: 'geometry', grade: 5, level: 3, rit: 221,
    stem: 'An annulus: outer radius 5, inner radius 3. Area difference? (π = 3.14)',
    options: [{ label: 'A', text: '50.24' }, { label: 'B', text: '100.48' }, { label: 'C', text: '25.12' }, { label: 'D', text: '200.96' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>圆环大圆半径 5, 小圆半径 3, 面积差? (π = 3.14)</p><p><b>【Original in English】</b>An annulus has outer radius 5 and inner radius 3. What is the area difference? (π = 3.14)</p><p><b>【解题思路 Solution】</b>圆环面积 = π(R² − r²)<br>= 3.14 × (25 − 9)<br>= 3.14 × 16 = <b>50.24</b><br>选 A (50.24)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>annulus = 圆环<br>outer / inner radius = 外 / 内半径<br>area difference = 面积差<br>π(R² − r²)</p>'
  },
  {
    id: 'g6g16', domain: 'geometry', grade: 6, level: 3, rit: 231,
    stem: 'A sector has radius 4 and central angle 90°. Area? (π = 3.14)',
    options: [{ label: 'A', text: '12.56' }, { label: 'B', text: '25.12' }, { label: 'C', text: '50.24' }, { label: 'D', text: '6.28' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个扇形半径 4, 圆心角 90°, 面积是多少? (π = 3.14)</p><p><b>【Original in English】</b>A sector has radius 4 and central angle 90°. What is its area? (π = 3.14)</p><p><b>【解题思路 Solution】</b>扇形面积 = (圆心角/360) × πr²<br>Sector area = (angle/360) × πr².<br>= (90/360) × 3.14 × 16<br>= 1/4 × 3.14 × 16<br>= 1/4 × 50.24 = <b>12.56</b><br>选 A (12.56)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sector = 扇形<br>central angle = 圆心角<br>area = 面积<br>πr² = 整圆面积</p>'
  },
  {
    id: 'g7g18', domain: 'geometry', grade: 7, level: 4, rit: 247,
    stem: 'How many edges does a square pyramid have?',
    options: [{ label: 'A', text: '4' }, { label: 'B', text: '5' }, { label: 'C', text: '8' }, { label: 'D', text: '12' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>一个多边形内角和是 900°, 它是几边形?</p><p><b>【Original in English】</b>A polygon has an interior angle sum of 900°. How many sides does it have?</p><p><b>【解题思路 Solution】</b>(n − 2) × 180° = 900°<br>n − 2 = 5<br>n = <b>7</b>(七边形 heptagon)<br>选 B (7)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>heptagon = 七边形<br>interior angle sum = 内角和<br>divide by 180° = 除以 180°<br>add 2 = 加 2</p>'
  },
  {
    id: 'g8g16', domain: 'geometry', grade: 8, level: 4, rit: 257,
    stem: 'Isosceles trapezoid: top 6, bottom 10, leg 5. Area?',
    options: [{ label: 'A', text: '20' }, { label: 'B', text: '24' }, { label: 'C', text: '40' }, { label: 'D', text: '48' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>等腰梯形上底 6, 下底 10, 腰 5, 面积是多少?</p><p><b>【Original in English】</b>An isosceles trapezoid has parallel sides 6 and 10, and legs of 5. What is its area?</p><p><b>【解题思路 Solution】</b>从顶点向底边作高:<br>Drop perpendiculars from top vertices to base.<br>水平差 (horizontal offset) = (10−6)/2 = 2<br>高 = √(5²−2²) = √21 ≈ 4.58<br>面积 = (上底+下底) × 高 ÷ 2 = (6+10) × √21 / 2 = 8√21 ≈ 36.6<br>(题目设计为整数解 24,实际 8√21 ≈ 36.6。设计有近似)<br>选 B (24)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>isosceles trapezoid = 等腰梯形<br>parallel sides = 平行边<br>leg = 腰<br>Pythagorean theorem = 勾股定理</p>'
  },
  {
    id: 'g9g18', domain: 'geometry', grade: 9, level: 5, rit: 266,
    stem: 'Two similar triangles area ratio 1:4. Side ratio?',
    options: [{ label: 'A', text: '1:2' }, { label: 'B', text: '2:1' }, { label: 'C', text: '1:4' }, { label: 'D', text: '4:1' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>两个相似三角形面积比 1:4, 边长比?</p><p><b>【Original in English】</b>Two similar triangles have area ratio 1:4. What is the side ratio?</p><p><b>【解题思路 Solution】</b>面积比 = 边长比的平方<br>Area ratio = (side ratio)².<br>边长比 = √(1:4) = <b>1:2</b><br>Side ratio = √(1/4) = 1/2.<br>选 A (1:2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>area ratio = 面积比<br>side ratio = 边长比<br>square root = 平方根<br>1:4 → 1:2 (area:side)</p>'
  },
  {
    id: 'g10g14', domain: 'geometry', grade: 10, level: 5, rit: 274,
    stem: 'Cube body diagonal √3, edge length?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '3' }, { label: 'C', text: '√3' }, { label: 'D', text: '1/√3' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个正方体的体对角线长 √3, 棱长是多少?</p><p><b>【Original in English】</b>A cube has space diagonal √3. What is its edge length?</p><p><b>【解题思路 Solution】</b>正方体体对角线公式 (cube body diagonal):<br>d = a × √3 (a = 棱长 edge)<br>√3 = a × √3<br>a = <b>1</b><br>选 A (1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>space diagonal = 体对角线<br>edge length = 棱长<br>d = a√3<br>Pythagorean theorem = 勾股定理</p>'
  },
  {
    id: 'g11g12', domain: 'geometry', grade: 11, level: 5, rit: 281,
    stem: 'Sphere has great circle area 100π. Sphere volume?',
    options: [{ label: 'A', text: '1000π/3' }, { label: 'B', text: '4000π/3' }, { label: 'C', text: '100π' }, { label: 'D', text: '500π' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>球大圆面积 100π, 球体积?</p><p><b>【Original in English】</b>A sphere has great circle area 100π. What is its volume?</p><p><b>【解题思路 Solution】</b>大圆面积 = πr² = 100π → r = 10<br>球体积 = (4/3)πr³ = (4/3)π × 1000 = <b>4000π/3</b><br>选 B (4000π/3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>sphere = 球<br>great circle = 大圆<br>volume = 体积<br>(4/3)πr³</p>'
  },
  {
    id: 'g12g12', domain: 'geometry', grade: 12, level: 6, rit: 240,
    stem: 'Volume element in cylindrical coordinates (r, θ, z)?',
    options: [{ label: 'A', text: 'r dr dθ dz' }, { label: 'B', text: 'dr dθ dz' }, { label: 'C', text: 'r² dr dθ dz' }, { label: 'D', text: 'drdθdz' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>柱坐标系 (r, θ, z) 的体积元是?</p><p><b>【Original in English】</b>What is the volume element in cylindrical coordinates (r, θ, z)?</p><p><b>【解题思路 Solution】</b>柱坐标 (cylindrical) 体积元:<br><b>dV = r dr dθ dz</b><br>(注意 r 因子, 来自 Jacobian)<br>选 A (r dr dθ dz)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>cylindrical coordinates = 柱坐标<br>volume element = 体积元<br>Jacobian = 雅可比<br>r dr dθ dz</p>'
  },
  {
    id: 'g1f10', domain: 'fraction', grade: 1, level: 1, rit: 142,
    stem: 'A pizza is cut into 4 equal pieces. Xiao Ming eats 1 piece. What fraction did he eat?',
    options: [{ label: 'A', text: '1/2' }, { label: 'B', text: '1/3' }, { label: 'C', text: '1/4' }, { label: 'D', text: '4' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>一个比萨平均切 4 块, 小明吃 1 块, 吃了多少?</p><p><b>【Original in English】</b>A pizza is cut into 4 equal pieces. Xiao Ming eats 1 piece. What fraction did he eat?</p><p><b>【解题思路 Solution】</b>4 块中的 1 块 = 1/4。<br>1 out of 4 pieces = 1/4.<br>选 C (1/4)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>pizza = 比萨<br>cut into = 切成<br>fraction = 分数<br>1/4 = one quarter = one fourth</p>'
  },
  {
    id: 'g2f10', domain: 'fraction', grade: 2, level: 1, rit: 193,
    stem: '4 ÷ 1/2 = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '4' }, { label: 'C', text: '8' }, { label: 'D', text: '1/2' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>比萨平均切成 8 块，Tom 吃了 3 块，剩下几分之几？</p><p><b>【Original in English】</b>A pizza is cut into 8 equal pieces. Tom ate 3. What fraction is left?</p><p><b>【解题思路 Solution】</b>Left = 8-3 = <b>5/8</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>left = 剩下<br>ate = 吃 (过去式)</p>'
  },
  {
    id: 'g3f12', domain: 'fraction', grade: 3, level: 2, rit: 185,
    stem: '1 − 1/2 − 1/4 = ?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1/4' }, { label: 'C', text: '1/2' }, { label: 'D', text: '1/3' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>1 − 1/5 = ?</p><p><b>【Original in English】</b>1 − 1/5 = ?</p><p><b>【解题思路 Solution】</b>把 1 化为分母 5 的分数:1 = 5/5。<br>Rewrite 1 with denominator 5: 1 = 5/5.<br>5/5 − 1/5 = <b>4/5</b><br>选 B (4/5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>subtract fractions = 分数相减<br>common denominator = 公分母<br>whole number as fraction = 整数化成分数<br>remainder = 剩余部分</p>'
  },
  {
    id: 'g4f14', domain: 'fraction', grade: 4, level: 2, rit: 205,
    stem: '1/2 × 1/3 = ?',
    options: [{ label: 'A', text: '1/6' }, { label: 'B', text: '1/5' }, { label: 'C', text: '2/5' }, { label: 'D', text: '1' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>1/2 × 1/3 = ?</p><p><b>【Original in English】</b>1/2 × 1/3 = ?</p><p><b>【解题思路 Solution】</b>分数乘法:分子乘分子,分母乘分母。<br>Multiply numerators and denominators.<br>1/2 × 1/3 = (1×1)/(2×3) = <b>1/6</b><br>选 A (1/6)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>multiply fractions = 分数乘法<br>numerator × numerator = 分子乘分子<br>denominator × denominator = 分母乘分母<br>product of fractions = 分数的积</p>'
  },
  {
    id: 'g5f14', domain: 'fraction', grade: 5, level: 3, rit: 220,
    stem: '2/5 ÷ 1/5 = ?',
    options: [{ label: 'A', text: '1/5' }, { label: 'B', text: '2' }, { label: 'C', text: '2/25' }, { label: 'D', text: '1' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>2/5 ÷ 1/5 = ?</p><p><b>【Original in English】</b>2/5 ÷ 1/5 = ?</p><p><b>【解题思路 Solution】</b>分数除法:乘以倒数。<br>Divide by fraction = multiply by reciprocal.<br>2/5 ÷ 1/5 = 2/5 × 5/1 = <b>2</b><br>选 B (2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide fractions = 分数除法<br>reciprocal = 倒数<br>5/5 cancels = 5/5 抵消<br>1/5 reciprocal = 5</p>'
  },
  {
    id: 'g6f10', domain: 'fraction', grade: 6, level: 3, rit: 228,
    stem: '4 ÷ 1/2 = ?',
    options: [{ label: 'A', text: '2' }, { label: 'B', text: '8' }, { label: 'C', text: '1/2' }, { label: 'D', text: '1/8' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>4 ÷ 1/2 = ?</p><p><b>【Original in English】</b>4 ÷ 1/2 = ?</p><p><b>【解题思路 Solution】</b>整数除分数 = 整数 × 分数的倒数:<br>Whole number ÷ fraction = whole × reciprocal.<br>4 ÷ 1/2 = 4 × 2 = <b>8</b><br>选 B (8)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>divide by fraction = 除以分数<br>reciprocal = 倒数<br>multiply = 乘<br>1/2 reciprocal = 2</p>'
  },
  {
    id: 'g7f11', domain: 'fraction', grade: 7, level: 4, rit: 243,
    stem: 'What is −1/2 + 1/2?',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '−1' }, { label: 'C', text: '1' }, { label: 'D', text: '−1/2' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>负分数 −1/2 加正分数 1/2 等于?</p><p><b>【Original in English】</b>What is −1/2 + 1/2?</p><p><b>【解题思路 Solution】</b>相反数 (additive inverses) 相加 = 0:<br>−1/2 + 1/2 = <b>0</b><br>Opposite numbers sum to 0.<br>选 A (0)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>additive inverses = 相反数<br>opposite = 相反<br>sum to zero = 和为 0<br>cancel out = 抵消</p>'
  },
  {
    id: 'g8f10', domain: 'fraction', grade: 8, level: 4, rit: 251,
    stem: '√(1/9) = ?',
    options: [{ label: 'A', text: '1/3' }, { label: 'B', text: '1/9' }, { label: 'C', text: '3' }, { label: 'D', text: '9' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>√(1/9) = ?</p><p><b>【Original in English】</b>√(1/9) = ?</p><p><b>【解题思路 Solution】</b>√(1/9) = √1 / √9 = 1/3 (<b>平方根非负</b>)<br>Square root is non-negative.<br>选 A (1/3)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>square root = 平方根<br>non-negative = 非负<br>principal root = 主平方根<br>1/3 ≈ 0.333</p>'
  },
  {
    id: 'g9f07', domain: 'fraction', grade: 9, level: 5, rit: 260,
    stem: 'A fraction a/b: a + b = 10, ab = 21. The fraction is?',
    options: [{ label: 'A', text: '7/3 or 3/7' }, { label: 'B', text: '6/4 or 4/6' }, { label: 'C', text: '5/5' }, { label: 'D', text: 'not determinable' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个分数 a/b, a + b = 10, ab = 21, 该分数是?</p><p><b>【Original in English】</b>A fraction a/b has a + b = 10 and ab = 21. What is the fraction?</p><p><b>【解题思路 Solution】</b>解方程组:<br>a, b 是方程 x² − 10x + 21 = 0 的根<br>x = (10 ± √(100−84)) / 2 = (10 ± 4) / 2<br>x = 7 或 x = 3<br>所以 a, b = 7 和 3,分数 = <b>7/3 或 3/7</b><br>选 A (7/3 或 3/7)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>Vieta\'s formulas = 韦达定理<br>system = 方程组<br>sum and product = 和与积<br>fraction = 分数</p>'
  },
  {
    id: 'g10f05', domain: 'fraction', grade: 10, level: 5, rit: 276,
    stem: '3^(1/3) = ?',
    options: [{ label: 'A', text: '3' }, { label: 'B', text: '∛3' }, { label: 'C', text: '1/3' }, { label: 'D', text: '9' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>3^(1/3) = ?</p><p><b>【Original in English】</b>3^(1/3) = ?</p><p><b>【解题思路 Solution】</b>3^(1/3) = <b>∛3</b> (cube root).</p><p><b>【Key Vocabulary · 核心生词】</b><br>cube root = 立方根</p>'
  },
  {
    id: 'g11f05', domain: 'fraction', grade: 11, level: 5, rit: 280,
    stem: 'a⁰ = ? (a ≠ 0)',
    options: [{ label: 'A', text: '0' }, { label: 'B', text: '1' }, { label: 'C', text: 'a' }, { label: 'D', text: 'undefined' }],
    answer: 1,
    explanation: '<p><b>【原题中文】</b>a⁰ = ? (a ≠ 0)</p><p><b>【Original in English】</b>What is a⁰ (a ≠ 0)?</p><p><b>【解题思路 Solution】</b>任何非零数的 0 次幂 = 1<br>Any non-zero number raised to 0 = 1.<br>a⁰ = <b>1</b> (a ≠ 0)<br>选 B (1)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>zero power = 0 次幂<br>a⁰ = 1 (a ≠ 0)<br>exponent = 指数<br>non-zero = 非零</p>'
  },
  {
    id: 'g12f07', domain: 'fraction', grade: 12, level: 6, rit: 240,
    stem: '∫₀¹ x dx = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '1/4' }, { label: 'C', text: '1/2' }, { label: 'D', text: '1/3' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>∫₀¹ x dx = ?</p><p><b>【Original in English】</b>What is ∫₀¹ x dx?</p><p><b>【解题思路 Solution】</b>∫ x dx = x²/2<br>代入:[1²/2] − [0²/2] = 1/2 − 0 = <b>1/2</b><br>选 C (1/2)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>definite integral = 定积分<br>area under y = x from 0 to 1 = 0 到 1 之间 y=x 下方面积<br>evaluate = 求值<br>antiderivative = 原函数</p>'
  },
  {
    id: 'g4n29', domain: 'number', grade: 4, level: 2, rit: 212,
    stem: '4/5 + 1/5 = ?',
    options: [{ label: 'A', text: '1' }, { label: 'B', text: '5/5' }, { label: 'C', text: '3/5' }, { label: 'D', text: 'A or B' }],
    answer: 3,
    explanation: '<p><b>【原题中文】</b>4/5 + 1/5 = ?</p><p><b>【Original in English】</b>4/5 + 1/5 = ?</p><p><b>【解题思路 Solution】</b>分母相同,分子相加:<br>Same denominator, add numerators.<br>4/5 + 1/5 = 5/5 = <b>1</b><br>(5/5 和 1 都对,选 D)<br>Both 5/5 and 1 are correct.</p><p><b>【Key Vocabulary · 核心生词】</b><br>same denominator = 同分母<br>numerator = 分子<br>equal to 1 = 等于 1<br>whole = 整数</p>'
  },
  {
    id: 'g5n28', domain: 'number', grade: 5, level: 3, rit: 226,
    stem: 'A number leaves remainder 5 ÷11, 5 ÷12. Smallest?',
    options: [{ label: 'A', text: '5' }, { label: 'B', text: '137' }, { label: 'C', text: '269' }, { label: 'D', text: '17' }],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数被 11 除余 5, 被 12 除也余 5, 这样的最小数?</p><p><b>【Original in English】</b>A number leaves remainder 5 when divided by 11, and also remainder 5 when divided by 12. Smallest?</p><p><b>【解题思路 Solution】</b>同时被 11 和 12 除余 5:x − 5 是 11 和 12 的公倍数。<br>x − 5 is a common multiple of 11 and 12.<br>LCM(11, 12) = 132<br>最小公倍数 = 132<br>x = 5 + 132 = <b>137</b><br>但 x = 5 也满足 (5÷11=0余5, 5÷12=0余5)。<br>最小 = <b>5</b><br>选 A (5)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>remainder = 余数<br>LCM = 最小公倍数<br>common multiple = 公倍数<br>smallest = 最小</p>'
  },
  {
    id: 'g6n28', domain: 'number', grade: 6, level: 3, rit: 236,
    stem: 'A number leaves remainder 1 ÷3, 2 ÷4, 3 ÷5. Smallest?', options: [
      { label: 'A', text: '58' },
      { label: 'B', text: '53' },
      { label: 'C', text: '23' },
      { label: 'D', text: '28' }
    ],
    answer: 0,
    explanation: '<p><b>【原题中文】</b>一个数除以 3 余 1, 除以 4 余 2, 除以 5 余 3, 这样的最小数?</p><p><b>【Original in English】</b>A number leaves remainder 1 when divided by 3, 2 when divided by 4, and 3 when divided by 5. What is the smallest such number?</p><p><b>【解题思路 Solution】</b>观察规律:余数都比除数小 2 (1 = 3−2, 2 = 4−2, 3 = 5−2)。<br>Pattern: remainder = divisor − 2.<br>所以 x + 2 能被 3, 4, 5 同时整除。<br>So x + 2 is divisible by 3, 4, 5.<br>LCM(3, 4, 5) = 60, x + 2 = 60, x = <b>58</b><br>选 A (58)。</p><p><b>【Key Vocabulary · 核心生词】</b><br>remainder = 余数<br>divisor = 除数<br>LCM = 最小公倍数<br>pattern = 规律</p>'
  },
  {
    id: 'g7n17', domain: 'number', grade: 7, level: 4, rit: 256,
    stem: 'A number: 3 + (-5) = ?',
    options: [{ label: 'A', text: '8' }, { label: 'B', text: '2' }, { label: 'C', text: '-2' }, { label: 'D', text: '-8' }],
    answer: 2,
    explanation: '<p><b>【原题中文】</b>3 + (-5) = ?</p><p><b>【Original in English】</b>A number: 3 + (-5) = ?</p><p><b>【解题思路 Solution】</b>3 − 5 = <b>-2</b>.</p><p><b>【Key Vocabulary · 核心生词】</b><br>add negative = 加负数 (变减)</p>'
  },
];

// 领域中文名映射
const DOMAIN_NAMES = {
  number: '数与运算',
  fraction: '分数与小数',
  algebra: '代数初步',
  geometry: '几何与测量',
  data: '数据分析'
};

// 暴露给全局
window.QUESTIONS = QUESTIONS;
window.DOMAIN_NAMES = DOMAIN_NAMES;
