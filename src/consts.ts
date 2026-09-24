/*
  Language-independent facts only. Anything with wording that belongs to the
  page furniture lives in src/i18n/ui.ts; the structured content below carries
  its Chinese alongside the English so the two cannot drift apart.

  Two shapes are used:
  - `{ en, zh }` for a plain string, read as `value[lang]`
  - a record with a `zh` block of overrides, merged with `localize(item, lang)`
*/
export const SITE = {
  name: 'Hello, I\'m Ace :D',
  /*
    The masthead wordmark, kept separate from `name` so the display name can
    change without rewriting the nameplate. Not translated: it is set in
    blackletter, which carries no CJK glyphs, so a Chinese string here would
    drop to a fallback face and lose the whole effect.
  */
  nameplate: 'The Résumé of Ace',
  role: 'Software Engineer',
  title: 'Ace — Software Engineer',
  description:
    'Backend and infrastructure engineer. Distributed systems, database internals, compilers and runtimes.',
  email: 'wow.itsme.ace@gmail.com',
} as const;

export const NAV = [
  { href: '/', key: 'nav.home' },
  { href: '/education', key: 'nav.education' },
  { href: '/stack', key: 'nav.stack' },
  { href: '/experience', key: 'nav.experience' },
] as const;

export const SOCIAL = [
  { href: 'https://github.com/', label: 'GitHub' },
  { href: 'https://x.com/', label: 'X' },
] as const;

/**
 * Formal degree. `rankings` are the school's standing on the mainstream
 * lists — domestic (ShanghaiRanking's Best Chinese Universities Ranking) and
 * the four world rankings usually cited together. Cross-checked against each
 * ranker's own site rather than a single aggregator; sources noted inline.
 * Recheck before reuse — these move every year.
 */
export const EDUCATION = [
  {
    period: '2020 — 2024',
    crest: 'szu',
    school: 'Shenzhen University',
    degree: 'B.Eng., Computer Science and Technology',
    detail:
      'Four years of systematic training in the fundamentals. Data structures, operating systems, networking, database systems and compilers — the courses that felt abstract at the time and turned out to explain almost every hard production incident since.',
    // World rankings only — domestic (ShanghaiRanking's Best Chinese
    // Universities Ranking) dropped at request. `short` is the label shown
    // under the number; QS/THE/ARWU are used as-is in Chinese higher-ed
    // writing too, so it is not translated. `body` and `year` are kept for
    // the hover title even though neither renders directly, so the source
    // stays one click away without cluttering the row.
    rankings: [
      {
        short: 'QS',
        body: { en: 'QS World University Rankings', zh: 'QS 世界大学排名' },
        rank: '#452',
        year: '2026', // mastersportal.com aggregation of topuniversities.com, cross-checked
      },
      {
        short: 'THE',
        body: { en: 'Times Higher Education World University Rankings', zh: '泰晤士高等教育世界大学排名' },
        // A band, not an exact rank — THE does not publish single positions
        // past #200. Do not shorten this to '#351'; that overstates the
        // precision THE actually reports. (This has reverted on its own
        // twice already — if you see '#351' again, something is restoring
        // an old copy of this file rather than a person editing it.)
        rank: '351–400',
        year: '2026', // timeshighereducation.com, fetched directly
      },
      {
        short: 'U.S. News',
        body: { en: 'U.S. News Best Global Universities', zh: 'U.S. News 全球最佳大学排名' },
        rank: '#156',
        year: '2026', // usnews.com, cross-checked against a second search
      },
      {
        short: 'ARWU',
        body: { en: 'Academic Ranking of World Universities', zh: '软科世界大学学术排名（ARWU）' },
        // Also a band, same reason as THE above — do not shorten to '#201'.
        rank: '201–300',
        year: '2025', // Shenzhen's first year in the global top 500; 2025 is the latest edition
      },
    ],
    zh: {
      school: '深圳大学',
      degree: '工学学士 · 计算机科学与技术',
      detail:
        '四年系统的基础训练：数据结构、操作系统、计算机网络、数据库系统、编译原理。当时觉得这些课挺抽象，后来才发现，线上出的每次大问题基本都能从这几门课里找到解释。',
    },
  },
] as const;

/** Coursework from the degree. */
export const COURSEWORK = [
  { en: 'Data Structures & Algorithms', zh: '数据结构与算法' },
  { en: 'Operating Systems', zh: '操作系统' },
  { en: 'Computer Networking', zh: '计算机网络' },
  { en: 'Database Systems', zh: '数据库系统' },
  { en: 'Compilers', zh: '编译原理' },
  { en: 'Computer Organization', zh: '计算机组成原理' },
  { en: 'Discrete Mathematics', zh: '离散数学' },
  { en: 'Probability & Statistics', zh: '概率论与数理统计' },
  { en: 'Software Engineering', zh: '软件工程' },
  { en: 'Distributed Systems', zh: '分布式系统' },
] as const;

/**
 * Open courseware worked through outside of work. These are the well-known
 * public course numbers; verify them against the current catalogue before
 * publishing, since MIT renumbered several of these in 2022.
 */
export const OPEN_COURSES = [
  {
    category: 'cs',
    school: 'MIT',
    crest: 'mit',
    code: '6.824',
    title: 'Distributed Systems',
    note: 'The lab series is the real content: build a MapReduce, then Raft, then a sharded fault-tolerant key-value store on top of it. Nothing else I have done taught me as much about what "consensus" actually costs.',
    zh: {
      title: '分布式系统',
      note: '真正的内容是那套实验：先写一个 MapReduce，再写 Raft，然后在它之上做一个分片的、可容错的键值存储。没有别的东西让我这么真切地明白「共识」到底要付出什么代价。',
    },
  },
  {
    category: 'cs',
    school: 'CMU',
    crest: 'cmu',
    code: '15-445',
    title: 'Database Systems',
    note: 'Writing a buffer pool manager, a B+ tree index and a query executor by hand is what turned EXPLAIN output from a wall of jargon into something I can read.',
    zh: {
      title: '数据库系统',
      note: '亲手写一遍缓冲池管理器、B+ 树索引和查询执行器之后，EXPLAIN 的输出才从一堵术语墙变成了我读得懂的东西。',
    },
  },
  {
    category: 'cs',
    school: 'CMU',
    crest: 'cmu',
    code: '15-213',
    title: 'Introduction to Computer Systems',
    note: 'The CSAPP labs. Bomb lab and malloc lab in particular changed how I read a stack trace and how I think about memory layout.',
    zh: {
      title: '计算机系统导论',
      note: 'CSAPP 配套的实验。尤其是 bomb lab 和 malloc lab，改变了我读调用栈的方式，也改变了我思考内存布局的方式。',
    },
  },
  {
    category: 'cs',
    school: 'MIT',
    crest: 'mit',
    code: '6.828',
    title: 'Operating System Engineering',
    note: 'Implementing xv6 pieces made system calls, page tables and context switches concrete rather than diagrams in a slide deck.',
    zh: {
      title: '操作系统工程',
      note: '动手实现 xv6 的各个部分之后，系统调用、页表和上下文切换才成了具体的东西，而不是幻灯片上的示意图。',
    },
  },
  {
    category: 'cs',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS144',
    title: 'Computer Networking',
    note: 'Building a working TCP implementation from the socket layer down. Retransmission and flow control stop being trivia once you have had to make them correct.',
    zh: {
      title: '计算机网络',
      note: '从 socket 层往下，做出一个真正能跑的 TCP 实现。当你必须让重传和流量控制真的正确时，它们就不再是背下来的知识点了。',
    },
  },
  {
    category: 'cs',
    school: 'MIT',
    crest: 'mit',
    code: '6.006',
    title: 'Introduction to Algorithms',
    note: 'Went back through it properly rather than relying on interview-prep pattern matching. Amortised analysis finally clicked here.',
    zh: {
      title: '算法导论',
      note: '认真重走了一遍，而不是靠面试题的套路匹配。摊还分析是在这里才真正想通的。',
    },
  },
  {
    category: 'cs',
    school: 'MIT',
    crest: 'mit',
    code: '6.064J',
    title: 'Design and Analysis of Algorithms',
    note: 'Went back through it properly rather than relying on interview-prep pattern matching. Amortised analysis finally clicked here.',
    zh: {
      title: '算法设计与分析',
      note: '认真重走了一遍，而不是靠面试题的套路匹配。摊还分析是在这里才真正想通的。',
    },
  },
  {
    category: 'ai',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS221',
    title: "Artificial Intelligence: Principles and Techniques",
    note: "Search, constraint satisfaction, Markov decision processes and probabilistic models: the foundations of reasoning and decision-making in AI.",
    zh: {
      title: "人工智能：原理与技术",
      note: "搜索、约束满足、马尔可夫决策过程与概率模型，串起人工智能中推理与决策的基础。",
    },
  },
  {
    category: 'ai',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS229',
    title: "Machine Learning",
    note: "Supervised and unsupervised learning, statistical learning theory and optimisation, with an emphasis on the mathematics behind the algorithms.",
    zh: {
      title: "机器学习",
      note: "从监督学习与无监督学习，到统计学习理论和优化，理解算法背后的数学原理。",
    },
  },
  {
    category: 'ai',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS230',
    title: "Deep Learning",
    note: "Neural network foundations, optimisation and practical strategies for building and evaluating deep learning systems.",
    zh: {
      title: "深度学习",
      note: "神经网络基础、优化方法，以及构建和评估深度学习系统的实践策略。",
    },
  },
  {
    category: 'ai',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS231N',
    title: "Deep Learning for Computer Vision",
    note: "Visual recognition through convolutional networks, attention and modern vision architectures, connecting model design with training and evaluation.",
    zh: {
      title: "计算机视觉中的深度学习",
      note: "从卷积网络、注意力机制到现代视觉架构，将模型设计、训练与评估串联起来，理解视觉识别。",
    },
  },
  {
    category: 'ai',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS224N',
    title: "Natural Language Processing with Deep Learning",
    note: "Word representations, sequence models and transformers, leading into language model pretraining and applications in natural language processing.",
    zh: {
      title: "自然语言处理与深度学习",
      note: "从词表示、序列模型到 Transformer，进一步理解语言模型预训练及其在自然语言处理中的应用。",
    },
  },
  {
    category: 'ai',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS336',
    title: "Language Modeling from Scratch",
    note: "The full language model pipeline: tokenisation, transformer implementation, training efficiency, data curation and evaluation.",
    zh: {
      title: "从零构建语言模型",
      note: "从分词、Transformer 实现到训练效率、数据整理与评估，完整走过语言模型的构建流程。",
    },
  },
  {
    category: 'math',
    school: 'MIT',
    crest: 'mit',
    code: '18.100B',
    title: 'Real Analysis',
    note: 'Real numbers, sequences, continuity, differentiation and integration, developed through rigorous proofs and the language of metric spaces.',
    zh: {
      title: '实分析',
      note: '从实数、数列到连续性、微分与积分，通过严格证明和度量空间的语言建立分析学基础。',
    },
  },
  {
    category: 'math',
    school: 'MIT',
    crest: 'mit',
    code: '18.102',
    title: 'Introduction to Functional Analysis',
    note: 'Normed spaces, Banach and Hilbert spaces, and linear operators: extending the ideas of linear algebra and analysis to infinite dimensions.',
    zh: {
      title: '泛函分析导论',
      note: '从赋范空间、巴拿赫空间和希尔伯特空间到线性算子，将线性代数与分析学的思想推广到无穷维。',
    },
  },
  {
    category: 'math',
    school: 'MIT',
    crest: 'mit',
    code: 'RES.6-012',
    title: 'Introduction to Probability',
    note: 'Probability models, conditioning, random variables, limit theorems and inference, building a mathematical framework for reasoning under uncertainty.',
    zh: {
      title: '概率论导论',
      note: '概率模型、条件概率、随机变量、极限定理与统计推断，为不确定性下的推理建立数学框架。',
    },
  },
  {
    category: 'math',
    school: 'MIT',
    crest: 'mit',
    code: '18.404J',
    title: 'Theory of Computation',
    note: 'Automata, formal languages, computability and computational complexity: understanding what can be computed and the resources computation requires.',
    zh: {
      title: '计算理论',
      note: '自动机、形式语言、可计算性与计算复杂性，理解哪些问题可以计算，以及计算所需的资源。',
    },
  },
  {
    category: 'math',
    school: 'MIT',
    crest: 'mit',
    code: '18.200',
    title: 'Principles of Discrete Applied Mathematics',
    note: 'Counting, generating functions, probability, linear optimisation, number theory and coding theory, connecting discrete structures with practical problems.',
    zh: {
      title: '离散应用数学原理',
      note: '从计数、生成函数、概率和线性优化，到数论与编码理论，将离散结构与实际问题联系起来。',
    },
  },
  {
    category: 'physics',
    school: 'MIT',
    crest: 'mit',
    code: '8.04',
    title: 'Quantum Physics I',
    note: 'The experiments that broke classical physics, then wavefunctions, the Schrödinger equation, one-dimensional potentials, the harmonic oscillator and the hydrogen atom.',
    zh: {
      title: '量子物理 I',
      note: '从动摇经典物理的实验出发，到波函数、薛定谔方程、一维势、谐振子与氢原子。',
    },
  },
  {
    category: 'physics',
    school: 'MIT',
    crest: 'mit',
    code: '8.05',
    title: 'Quantum Physics II',
    note: 'Quantum mechanics rebuilt on linear algebra: Dirac notation, spin, operator methods, time evolution, and the addition of angular momentum.',
    zh: {
      title: '量子物理 II',
      note: '以线性代数重建量子力学：狄拉克符号、自旋、算符方法、时间演化与角动量耦合。',
    },
  },
  {
    category: 'physics',
    school: 'MIT',
    crest: 'mit',
    code: '8.06',
    title: 'Quantum Physics III',
    note: 'Approximation methods for problems with no exact solution — perturbation theory, WKB, the variational and adiabatic methods — and scattering.',
    zh: {
      title: '量子物理 III',
      note: '处理没有精确解的问题的近似方法：微扰论、WKB、变分法与绝热近似，以及散射理论。',
    },
  },
  {
    category: 'physics',
    school: 'MIT',
    crest: 'mit',
    code: '8.323',
    title: 'Relativistic Quantum Field Theory I',
    note: 'Where quantum mechanics meets special relativity: classical fields and symmetries, quantising free scalar, Dirac and gauge fields, then interactions, Feynman diagrams and tree-level QED.',
    zh: {
      title: '相对论性量子场论 I',
      note: '量子力学与狭义相对论的结合：经典场与对称性，标量场、狄拉克场与规范场的量子化，再到相互作用、费曼图与树图阶的量子电动力学。',
    },
  },
  {
    category: 'physics',
    school: 'MIT',
    crest: 'mit',
    code: '8.962',
    title: 'General Relativity',
    note: 'Gravity as the curvature of spacetime: tensors and differential geometry, the Einstein field equations, black holes, gravitational waves and cosmology.',
    zh: {
      title: '广义相对论',
      note: '把引力理解为时空的弯曲：张量与微分几何、爱因斯坦场方程、黑洞、引力波与宇宙学。',
    },
  },
  {
    category: 'psych',
    school: 'MIT',
    crest: 'mit',
    code: '9.13',
    title: 'The Human Brain',
    note: 'How the brain divides its work into specialised regions for faces, places, language, music and other minds, and the methods — fMRI, lesions, recording — used to find them.',
    zh: {
      title: '人类大脑',
      note: '大脑如何分工出专门处理面孔、场景、语言、音乐和他人心智的区域，以及用来发现它们的方法：fMRI、脑损伤研究与神经记录。',
    },
  },
  {
    category: 'psych',
    school: 'MIT',
    crest: 'mit',
    code: '9.00SC',
    title: 'Introduction to Psychology',
    note: 'Perception, learning, memory, emotion, development, personality and social behaviour, read against their biological basis and the experiments behind each claim.',
    zh: {
      title: '心理学导论',
      note: '知觉、学习、记忆、情绪、发展、人格与社会行为，结合其生物学基础和支撑每个结论的实验来理解。',
    },
  },
] as const;

/**
 * Employment history, most recent first. `detail` is optional — the
 * internship entry has none, since there is nothing on record beyond the
 * fact of it, and a filler sentence would be worse than leaving it out.
 */
export const TIMELINE = [
  {
    period: 'Aug 2026 — Present',
    title: 'R&D Engineer',
    org: 'Hydrogen Valley Power Co., Ltd.',
    detail:
      'Embedded development on STM32 for hydrogen-powered vehicles, and the backend those vehicles report to: a monitoring service for live vehicle state, and a fault-traceback system that reconstructs the run-up to a failure from what was recorded.',
    zh: {
      period: '2026年8月 — 至今',
      title: '研发工程师',
      org: '氢谷动能股份有限公司',
      detail:
        '用 STM32 做氢能载具的嵌入式开发，以及车辆上报的后端：实时监控整车状态，并由故障回溯系统还原故障发生前的那一段记录。',
    },
  },
  {
    period: 'Jul 2024 — May 2025',
    title: 'Game Developer',
    org: 'Knowhow Technology Ltd.',
    detail: 'Developed online games.',
    zh: {
      period: '2024年7月 — 2025年5月',
      title: '游戏开发工程师',
      org: '代码科技有限公司',
      detail: '开发线上游戏。',
    },
  },
  {
    period: 'Feb 2024 — Jun 2024',
    title: 'Intern',
    org: 'Shekou International School',
    // Explicit undefined, not an omitted key: without it TypeScript infers
    // this entry's type without a `detail` property at all, and the union
    // across all three entries then rejects `item.detail` everywhere.
    detail: undefined,
    zh: {
      period: '2024年2月 — 2024年6月',
      title: '实习生',
      org: '深圳蛇口国际学校',
    },
  },
] as const;

/** Figures for the front-page strip. Labels are translated; values are not. */
export const STATS = [
  { key: 'stats.years', value: '3' },
  { key: 'stats.languages', value: '4' },
  { key: 'stats.courses', value: String(OPEN_COURSES.length) },
  { key: 'stats.incidents', value: '40+' },
] as const;
