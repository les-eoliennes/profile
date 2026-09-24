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
    year: '2023',
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
    year: '2023',
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
    year: '2022',
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
    year: '2022',
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
    year: '2022',
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
    year: '2021',
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
    year: '2021',
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
    year: null,
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
    year: null,
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
    year: null,
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
    year: null,
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
    year: null,
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
    year: null,
    note: "The full language model pipeline: tokenisation, transformer implementation, training efficiency, data curation and evaluation.",
    zh: {
      title: "从零构建语言模型",
      note: "从分词、Transformer 实现到训练效率、数据整理与评估，完整走过语言模型的构建流程。",
    },
  },
] as const;

/**
 * Fundamentals. These are where engineering judgement comes from — they decide
 * whether you can reason your way to an answer when there is no existing one.
 */
export const FOUNDATIONS = [
  {
    area: { en: 'Data Structures & Algorithms', zh: '数据结构与算法' },
    items: [
      { en: 'Balanced trees, skip lists, B+ trees, LSM-trees', zh: '平衡树、跳表、B+ 树、LSM-tree' },
      { en: 'Hashing, consistent hashing, Bloom filters', zh: '哈希、一致性哈希、布隆过滤器' },
      { en: 'Graph algorithms, dynamic programming, amortised analysis', zh: '图算法、动态规划、摊还分析' },
      { en: 'Complexity analysis and cache-friendly data layout', zh: '复杂度分析与对缓存友好的数据布局' },
    ],
  },
  {
    area: { en: 'Operating Systems', zh: '操作系统' },
    items: [
      { en: 'Process and thread scheduling, context-switch cost', zh: '进程与线程调度、上下文切换的开销' },
      { en: 'Virtual memory, page tables, mmap and the page cache', zh: '虚拟内存、页表、mmap 与页缓存' },
      { en: 'I/O models: blocking, multiplexed, io_uring', zh: 'I/O 模型：阻塞、多路复用、io_uring' },
      { en: 'Locks, atomics and memory ordering', zh: '锁、原子操作与内存序' },
    ],
  },
  {
    area: { en: 'Computer Networking', zh: '计算机网络' },
    items: [
      { en: 'TCP congestion control, head-of-line blocking, RTT effects', zh: 'TCP 拥塞控制、队头阻塞、RTT 的影响' },
      { en: 'HTTP/1.1, HTTP/2, HTTP/3 and QUIC', zh: 'HTTP/1.1、HTTP/2、HTTP/3 与 QUIC' },
      { en: 'TLS handshakes, certificate chains, mTLS', zh: 'TLS 握手、证书链、mTLS' },
      { en: 'DNS, load balancing and service discovery', zh: 'DNS、负载均衡与服务发现' },
    ],
  },
  {
    area: { en: 'Database Systems', zh: '数据库系统' },
    items: [
      { en: 'Storage engines: heap tables, index-organised tables, columnar', zh: '存储引擎：堆表、索引组织表、列式存储' },
      { en: 'Transactions: ACID, MVCC, isolation levels, phantom reads', zh: '事务：ACID、MVCC、隔离级别、幻读' },
      { en: 'Query processing: parse, rewrite, optimise, execute', zh: '查询处理：解析、重写、优化、执行' },
      { en: 'Cost-based optimisation, join algorithms, reading plans', zh: '基于代价的优化、连接算法、读执行计划' },
      { en: 'Write-ahead logging, checkpoints and crash recovery', zh: '预写日志、检查点与崩溃恢复' },
    ],
  },
  {
    area: { en: 'Distributed Systems', zh: '分布式系统' },
    items: [
      { en: 'CAP and PACELC as practical trade-offs, not slogans', zh: '把 CAP 和 PACELC 当作实际取舍，而不是口号' },
      { en: 'Consensus: Raft and Paxos, leases, split brain', zh: '共识：Raft 与 Paxos、租约、脑裂' },
      { en: 'Replication, sharding, rebalancing', zh: '复制、分片、再平衡' },
      { en: 'Idempotency, retries, backpressure, sagas and 2PC', zh: '幂等、重试、背压、Saga 与两阶段提交' },
      { en: 'Observability: metrics, logs, distributed tracing', zh: '可观测性：指标、日志、分布式追踪' },
    ],
  },
  {
    area: { en: 'Compilers & Runtimes', zh: '编译与运行时' },
    items: [
      { en: 'Lexing, parsing, ASTs and intermediate representations', zh: '词法分析、语法分析、AST 与中间表示' },
      { en: 'Type systems and static analysis', zh: '类型系统与静态分析' },
      { en: 'Garbage collection: generational, tri-colour marking, pause control', zh: '垃圾回收：分代、三色标记、停顿控制' },
      { en: 'Profiling: flame graphs, pprof, perf', zh: '性能剖析：火焰图、pprof、perf' },
    ],
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
