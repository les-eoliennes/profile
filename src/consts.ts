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
  { href: '/about', key: 'nav.about' },
] as const;

export const SOCIAL = [
  { href: 'https://github.com/', label: 'GitHub' },
  { href: 'https://x.com/', label: 'X' },
] as const;

/** Formal degree. */
export const EDUCATION = [
  {
    period: '2018 — 2022', // TODO: replace with your actual dates
    crest: 'szu',
    school: 'Shenzhen University',
    degree: 'B.Eng., Computer Science and Technology',
    detail:
      'Four years of systematic training in the fundamentals. Data structures, operating systems, networking, database systems and compilers — the courses that felt abstract at the time and turned out to explain almost every hard production incident since.',
    zh: {
      school: '深圳大学',
      degree: '工学学士 · 计算机科学与技术',
      detail:
        '四年系统的基础训练。数据结构、操作系统、计算机网络、数据库系统与编译原理 —— 当时觉得抽象的那些课，后来几乎解释了此后每一次棘手的线上故障。',
    },
  },
] as const;

/** Coursework from the degree. */
export const COURSEWORK = [
  { en: 'Data Structures & Algorithms', zh: '数据结构与算法' },
  { en: 'Operating Systems', zh: '操作系统' },
  { en: 'Computer Networks', zh: '计算机网络' },
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
    area: { en: 'Computer Networks', zh: '计算机网络' },
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

/** Employment history. */
export const TIMELINE = [
  {
    period: '2023 — Present',
    title: 'Senior Backend Engineer',
    org: 'Trading Platform',
    detail:
      'Own the availability and performance of the order pipeline. Led the migration from a single-database monolith to a sharded architecture with no downtime.',
    zh: {
      period: '2023 — 至今',
      title: '高级后端工程师',
      org: '交易平台',
      detail:
        '负责订单链路的可用性与性能。主导了从单库单体架构到分片架构的迁移，全程不停机。',
    },
  },
  {
    period: '2021 — 2023',
    title: 'Backend Engineer',
    org: 'Data Platform',
    detail:
      'Maintained the real-time warehouse pipeline handling billions of events per day.',
    zh: {
      period: '2021 — 2023',
      title: '后端工程师',
      org: '数据平台',
      detail: '维护每天处理数十亿条事件的实时数仓链路。',
    },
  },
] as const;

/** Figures for the front-page strip. Labels are translated; values are not. */
export const STATS = [
  { key: 'stats.years', value: '5' },
  { key: 'stats.languages', value: '4' },
  { key: 'stats.courses', value: '6' },
  { key: 'stats.incidents', value: '40+' },
] as const;
