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
    code: '6.5840',
    title: 'Distributed Systems',
    note: 'Taught by Robert Morris around a close reading of the classic papers (MapReduce, GFS, Raft, ZooKeeper, Spanner and others), each examined for its trade-offs in replication, consistency and fault tolerance. The labs, in Go, build MapReduce, the Raft consensus protocol (leader election, log replication, persistence and snapshots), a fault-tolerant key-value service on top of Raft and finally a sharded key-value store, all verified under randomised tests of network partitions, crashes and reordered messages, building a working grasp of the fundamental trade-off between linearisability, fault tolerance and performance.',
    zh: {
      title: '分布式系统',
      note: '由 Robert Morris 主讲，以研读经典论文为主线（MapReduce、GFS、Raft、ZooKeeper、Spanner 等），逐篇剖析复制、一致性与容错的工程取舍；实验用 Go 依次实现 MapReduce、Raft 共识协议（领导者选举、日志复制、持久化与快照）、构建于 Raft 之上的容错键值服务，以及分片键值存储，并在网络分区、节点崩溃与消息乱序的随机化测试下验证正确性，深入理解线性一致性、容错与性能之间的根本权衡。',
    },
  },
  {
    category: 'cs',
    school: 'CMU',
    crest: 'cmu',
    code: '15-445',
    title: 'Database Systems',
    note: 'Taught by Andy Pavlo, it takes a relational database apart from the bottom up: from on-disk page layout and buffer pool management, it covers index structures (B+ trees, hash tables), sorting and join algorithms, query execution and optimisation, concurrency control (2PL, OCC, MVCC) and ARIES-style logging and recovery. The projects, in C++ on the BusTub teaching database, build a buffer pool manager (with an LRU-K replacement policy), an index, query executors and transactional concurrency control, showing how a SQL statement becomes disk I/O and how it stays correct under concurrency and crashes.',
    zh: {
      title: '数据库系统',
      note: '由 Andy Pavlo 主讲，自底向上拆解关系型数据库的内部实现：从磁盘页布局与缓冲池管理出发，覆盖索引结构（B+ 树、哈希表）、排序与连接算法、查询执行与优化、并发控制（2PL、OCC、MVCC）以及基于 ARIES 的日志与故障恢复。项目用 C++ 在教学数据库 BusTub 中依次实现缓冲池管理器（LRU-K 替换策略）、索引、查询执行器与事务并发控制，理解一条 SQL 如何被翻译成磁盘 I/O，又如何在并发与崩溃之下保持正确。',
    },
  },
  {
    category: 'cs',
    school: 'CMU',
    crest: 'cmu',
    code: '15-213',
    title: 'Introduction to Computer Systems',
    note: "Built on Bryant and O'Hallaron's Computer Systems: A Programmer's Perspective (CS:APP), it examines the boundary between hardware and software from the programmer's side: from bit-level representations of integers and floating point, through x86-64 machine-level programs, the memory hierarchy and caches, and linking, to exceptional control flow (processes and signals), virtual memory, dynamic memory allocation, system-level I/O, and network and concurrent programming. The labs work through Data Lab (bit manipulation), Bomb Lab and Attack Lab (reverse-engineering assembly and buffer-overflow exploits), Cache Lab, Shell Lab, Malloc Lab and Proxy Lab, showing how a C program actually runs on a real machine, and why it slows down or crashes.",
    zh: {
      title: '计算机系统导论',
      note: "以 Bryant 与 O'Hallaron 合著的《深入理解计算机系统》（CS:APP）为教材，从程序员视角剖析硬件与软件的交界面：从整数与浮点数的位级表示出发，经由 x86-64 机器级程序、存储器层次结构与缓存、链接，到异常控制流（进程与信号）、虚拟内存、动态内存分配、系统级 I/O、网络与并发编程。实验依次完成 Data Lab（位运算）、Bomb Lab 与 Attack Lab（汇编逆向与缓冲区溢出攻击）、Cache Lab、Shell Lab、Malloc Lab 与 Proxy Lab，理解一个 C 程序在真实机器上究竟如何运行，以及它为什么会变慢、会崩溃。",
    },
  },
  {
    category: 'cs',
    school: 'MIT',
    crest: 'mit',
    code: '6.1810',
    title: 'Operating System Engineering',
    note: 'Built around xv6, a teaching operating system modelled on Unix V6 and running on RISC-V, whose source is read line by line in lecture to explain system calls, page tables and virtual memory, traps and interrupts, scheduling and context switches, locking and concurrency, and file systems and crash recovery. The labs, in C, extend xv6 with new system calls, page-table inspection, copy-on-write fork, an E1000 network driver, a finer-grained memory allocator, large files and symbolic links, and mmap, teaching how an operating system works, and the design choices behind it, inside real kernel code.',
    zh: {
      title: '操作系统工程',
      note: '以 xv6（一个运行在 RISC-V 上、仿照 Unix V6 编写的教学操作系统）为蓝本，课上逐行研读其源码，讲授系统调用、页表与虚拟内存、陷阱与中断、进程调度与上下文切换、锁与并发、文件系统与崩溃恢复等核心机制。实验用 C 语言为 xv6 扩展新功能：新增系统调用、检查页表、写时复制 fork、E1000 网卡驱动、更细粒度加锁的内存分配器、大文件与符号链接、mmap 等，在真实的内核代码中掌握操作系统的运行机制与设计取舍。',
    },
  },
  {
    category: 'cs',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS144',
    title: 'Computer Networking',
    note: 'Taught by Keith Winstein, it starts from layering and the end-to-end principle and covers the core mechanisms of the internet: packet switching, reliable delivery, flow and congestion control, IP addressing and routing, ARP, NAT and DNS. The labs, in C++, build a working TCP/IP stack from the bottom up (Sponge/Minnow): a byte stream and an out-of-order reassembler, a TCP receiver that handles sequence-number wraparound, a TCP sender with a retransmission timer and sliding window, an ARP-backed network interface and a longest-prefix-match IP router, turning textbook protocols into code that talks to real hosts.',
    zh: {
      title: '计算机网络',
      note: '由 Keith Winstein 主讲，从分层模型与端到端原则出发，讲授分组交换、可靠传输、流量控制与拥塞控制、IP 寻址与路由、ARP、NAT 与 DNS 等互联网核心机制。实验用 C++ 自底向上搭建一个能真正联网的 TCP/IP 协议栈（Sponge/Minnow）：字节流与乱序重组器、处理序号回绕的 TCP 接收端、带重传计时器与滑动窗口的 TCP 发送端、基于 ARP 的网络接口，以及最长前缀匹配的 IP 路由器，把教科书中的协议变成能与真实主机通信的代码。',
    },
  },
  {
    category: 'cs',
    school: 'MIT',
    crest: 'mit',
    code: '6.006',
    title: 'Introduction to Algorithms',
    note: "Taught by Erik Demaine, Jason Ku and Justin Solomon around the split between interface and implementation: from models of computation and asymptotic analysis, it covers data structures (hash tables, AVL trees, binary heaps), merge and radix sort, graph algorithms (BFS, DFS, topological sort, Bellman–Ford, Dijkstra, Johnson's all-pairs shortest paths) and dynamic programming through the SRTBOT framework, closing with reductions and NP-completeness. Problem sets pair proofs of correctness and complexity analysis with Python implementations, training the habit of modelling a real problem as a graph or a recurrence and then giving a provably efficient solution.",
    zh: {
      title: '算法导论',
      note: '由 Erik Demaine、Jason Ku 与 Justin Solomon 主讲，以「接口与实现」的区分为主线：从计算模型与渐近分析出发，覆盖数据结构（哈希表、AVL 平衡树、二叉堆）、归并排序与基数排序、图算法（BFS、DFS、拓扑排序、Bellman–Ford、Dijkstra、Johnson 全源最短路），并以 SRTBOT 框架系统讲授动态规划，最后引入归约与 NP 完全性。习题集兼顾正确性证明、复杂度分析与 Python 实现，训练把实际问题建模为图或递推、再给出可证明高效解法的能力。',
    },
  },
  {
    category: 'ai',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS221',
    title: "Artificial Intelligence: Principles and Techniques",
    note: "Organised around the modelling–inference–learning paradigm, it climbs from reflex models through state-based and variable-based models to logic, covering search (UCS, A*), Markov decision processes and reinforcement learning, games (Minimax, Expectimax), constraint satisfaction and Bayesian networks. Python assignments such as a Pac-Man adversarial agent and car tracking with particle filters train the habit of formalising real problems as computable models.",
    zh: {
      title: "人工智能：原理与技术",
      note: "以「建模—推断—学习」为主线，从反射模型、状态模型、变量模型到逻辑逐层推进，覆盖搜索（UCS、A*）、马尔可夫决策过程与强化学习、博弈（Minimax、Expectimax）、约束满足与贝叶斯网络等核心内容。作业用 Python 实现吃豆人对抗搜索、车辆追踪（粒子滤波）等项目，培养将现实问题形式化为可计算模型的能力。",
    },
  },
  {
    category: 'ai',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS229',
    title: "Machine Learning",
    note: "Stanford's classic machine learning course, built on rigorous derivation: starting from linear regression, logistic regression and generalised linear models (GLMs), it covers generative learning algorithms (GDA, Naive Bayes), kernel methods and SVMs, the bias–variance trade-off and learning theory, and unsupervised methods such as k-means, EM and PCA, before extending into reinforcement learning. Problem sets pair derivations with NumPy implementations, turning machine learning from a library call back into mathematics you can derive and prove.",
    zh: {
      title: "机器学习",
      note: "斯坦福经典的机器学习课程，以严格的数学推导为核心：从线性回归、逻辑回归与广义线性模型（GLM）出发，覆盖生成学习算法（GDA、朴素贝叶斯）、核方法与 SVM、偏差-方差权衡与学习理论，以及 K-means、EM、PCA 等无监督方法，并延伸至强化学习。习题集兼顾公式推导与 NumPy 实现，把机器学习从调包工具还原为可推导、可证明的数学对象。",
    },
  },
  {
    category: 'ai',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS230',
    title: "Deep Learning",
    note: "Run as a flipped classroom alongside the deeplearning.ai modules, it starts by hand-writing forward and backward propagation in NumPy, then covers initialisation, regularisation (Dropout, BatchNorm), optimisers (Momentum, Adam), CNNs and RNNs/LSTMs, with dedicated teaching on engineering method: error analysis, train/dev/test splits and hyperparameter tuning. A full deep learning project closes the course, building a systematic path from prototype to deployment.",
    zh: {
      title: "深度学习",
      note: "采用翻转课堂模式，配合 deeplearning.ai 系列模块，从用 NumPy 手写前向与反向传播起步，覆盖参数初始化、正则化（Dropout、BatchNorm）、优化算法（Momentum、Adam）、CNN 与 RNN/LSTM 等核心结构，并专门讲授误差分析、数据集划分与超参数调优等工程方法论，最后以完整的深度学习项目收尾，培养从原型到落地的系统化实践能力。",
    },
  },
  {
    category: 'ai',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS231N',
    title: "Deep Learning for Computer Vision",
    note: "Using image classification as the way in, it hand-writes the forward and backward passes of kNN, Softmax, fully connected and convolutional networks in Python/NumPy, then moves to PyTorch for BatchNorm, Dropout, image captioning (RNN/Transformer), GANs and self-supervised learning, extending to object detection, semantic segmentation and Vision Transformers. It connects the design and training of deep vision models end to end, from pixels to semantics.",
    zh: {
      title: "计算机视觉中的深度学习",
      note: "以图像分类为切入点，先在 Python/NumPy 中手写 kNN、Softmax、全连接网络与卷积网络的前向与反向传播，再过渡到 PyTorch，依次实现 BatchNorm、Dropout、图像描述（RNN/Transformer）、GAN 与自监督学习，并延伸至目标检测、语义分割与 Vision Transformer 等现代视觉架构，从像素到语义完整打通深度视觉模型的设计与训练。",
    },
  },
  {
    category: 'ai',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS224N',
    title: "Natural Language Processing with Deep Learning",
    note: "From word2vec embeddings and dependency parsing, through RNNs/LSTMs and sequence-to-sequence translation with attention, to Transformers, pretraining (BERT/GPT) and fine-tuning, it traces how modern NLP evolved. PyTorch assignments derive word vectors and implement a neural dependency parser, neural machine translation and Transformer pretraining, bringing the core mechanisms behind large language models down to runnable code.",
    zh: {
      title: "自然语言处理与深度学习",
      note: "从 word2vec 词向量与依存句法分析出发，经由 RNN/LSTM、带注意力机制的 Seq2Seq 机器翻译，到 Transformer、预训练（BERT/GPT）与微调，系统梳理现代 NLP 的演进脉络。作业用 PyTorch 推导词向量、实现神经依存句法分析器、神经机器翻译与 Transformer 预训练，让大语言模型背后的核心机制落到可运行的代码上。",
    },
  },
  {
    category: 'ai',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS336',
    title: "Language Modeling from Scratch",
    note: "Built on a from-scratch principle: hand-write a BPE tokeniser, a Transformer and the AdamW optimiser in PyTorch, then work through five assignments — the base model, systems optimisation (FlashAttention in Triton, distributed data parallelism), fitting scaling laws, filtering and deduplicating web-scale data, and alignment with SFT and reinforcement learning (GRPO). Together they span the full engineering of a large language model, from data through training to alignment.",
    zh: {
      title: "从零构建语言模型",
      note: "以「从零构建」为原则，用 PyTorch 手写 BPE 分词器、Transformer 与 AdamW 优化器，并依次完成五大作业：基础模型、系统优化（用 Triton 实现 FlashAttention、分布式数据并行）、Scaling Laws 拟合、海量网页数据的清洗与去重，以及基于 SFT 与强化学习（GRPO）的对齐，完整贯穿大语言模型从数据、训练到对齐的全流程工程实践。",
    },
  },
  {
    category: 'math',
    school: 'MIT',
    crest: 'mit',
    code: '18.100B',
    title: 'Real Analysis',
    note: "MIT's more abstract, more rigorous track of real analysis, following Rudin's Principles of Mathematical Analysis: from the least-upper-bound property and the construction of the reals, it develops open and closed sets, compactness and connectedness in the setting of metric spaces, then sequences and series, continuity and uniform continuity, differentiation, the Riemann integral and uniform convergence of sequences of functions (the Weierstrass approximation theorem among them). Proof-only problem sets build the discipline of reasoning rigorously from definitions.",
    zh: {
      title: '实分析',
      note: 'MIT 实分析中更抽象、更严格的版本，以 Rudin《数学分析原理》为蓝本：从确界性质与实数构造出发，在度量空间的框架下系统讲授开集、闭集、紧性与连通性，再展开数列与级数、连续与一致连续、微分、Riemann 积分以及函数列的一致收敛（如 Weierstrass 逼近定理），以纯证明式习题训练从定义出发严密推理的数学功底。',
    },
  },
  {
    category: 'math',
    school: 'MIT',
    crest: 'mit',
    code: '18.102',
    title: 'Introduction to Functional Analysis',
    note: 'Linear algebra and analysis carried into infinite dimensions: from normed and Banach spaces, through the construction of the Lebesgue integral and L² spaces, to Hilbert spaces, orthonormal bases and the Riesz representation theorem, alongside the pillars of functional analysis (the Baire category theorem, uniform boundedness, the open mapping and closed graph theorems, Hahn–Banach). It closes with the spectral theorem for compact self-adjoint operators and Fourier series, laying a rigorous foundation for the Hilbert-space and operator language of quantum mechanics.',
    zh: {
      title: '泛函分析导论',
      note: '将线性代数与分析推广到无穷维：从赋范空间与 Banach 空间出发，经由 Lebesgue 积分与 L² 空间的构造，到 Hilbert 空间、正交基与 Riesz 表示定理，并讲授 Baire 纲定理、一致有界原理、开映射与闭图像定理、Hahn–Banach 定理等泛函分析支柱，最后以紧自伴算子的谱定理与 Fourier 级数收尾，为量子力学中的 Hilbert 空间与算子语言打下严格的数学基础。',
    },
  },
  {
    category: 'math',
    school: 'MIT',
    crest: 'mit',
    code: 'RES.6-012',
    title: 'Introduction to Probability',
    note: "Taught by John Tsitsiklis alongside the classic Bertsekas and Tsitsiklis text: from the axioms of probability and conditioning (Bayes' rule), it covers discrete and continuous random variables, joint and derived distributions, conditional expectation, Bayesian inference (MAP, LMS) and classical statistics (maximum likelihood, confidence intervals), then limit theorems (the law of large numbers, the central limit theorem), Bernoulli and Poisson processes and Markov chains, building the probabilistic intuition and computational fluency that machine learning and reasoning under uncertainty rest on.",
    zh: {
      title: '概率论导论',
      note: '由 John Tsitsiklis 主讲、配套 Bertsekas 与 Tsitsiklis 经典教材：从概率公理与条件概率（贝叶斯法则）出发，覆盖离散与连续随机变量、联合分布与导出分布、条件期望，以及贝叶斯推断（MAP、LMS）与经典统计（极大似然、置信区间），再到极限定理（大数定律、中心极限定理）、Bernoulli/Poisson 过程与马尔可夫链，为机器学习与不确定性推理打下概率直觉与计算功底。',
    },
  },
  {
    category: 'math',
    school: 'MIT',
    crest: 'mit',
    code: '18.650',
    title: 'Statistics for Applications',
    note: 'Taught by Philippe Rigollet: starting from statistical modelling and parametric estimation, it develops maximum likelihood and the method of moments, M-estimation, Fisher information and asymptotic normality (the delta method), then hypothesis testing (Wald, likelihood-ratio, chi-squared goodness-of-fit and Kolmogorov–Smirnov tests) and Bayesian statistics (conjugate and Jeffreys priors), extending to linear regression, generalised linear models and principal component analysis. Rigorous derivations answer how to draw trustworthy conclusions from data, closing the loop from probability models to inference.',
    zh: {
      title: '应用统计学',
      note: '由 Philippe Rigollet 主讲：从统计建模与参数估计出发，系统讲授极大似然与矩估计、M 估计、Fisher 信息与渐近正态性（Delta 方法），再到假设检验（Wald 检验、似然比检验、卡方拟合优度检验、Kolmogorov–Smirnov 检验）与贝叶斯统计（共轭先验、Jeffreys 先验），并延伸至线性回归、广义线性模型与主成分分析，以严格的数学推导回答「如何从数据中得出可信的结论」，与概率论形成从模型到推断的完整闭环。',
    },
  },
  {
    category: 'math',
    school: 'MIT',
    crest: 'mit',
    code: '18.404J',
    title: 'Theory of Computation',
    note: "Taught by Michael Sipser from his own Introduction to the Theory of Computation: from finite automata, regular languages and the pumping lemma, through context-free grammars and pushdown automata, to Turing machines, the Church–Turing thesis, undecidability and reductions. The second half turns to complexity: P versus NP, the Cook–Levin theorem and NP-completeness, space complexity (Savitch's theorem, PSPACE-completeness), the hierarchy theorems and probabilistic computation, answering the field's founding question of what can be computed, and at what cost.",
    zh: {
      title: '计算理论',
      note: '由 Michael Sipser 本人以其经典教材《计算理论导引》主讲：从有限自动机、正则语言与泵引理，到上下文无关文法与下推自动机，再到图灵机、Church–Turing 论题、不可判定性与归约；后半程转入复杂性理论，讲授 P 与 NP、Cook–Levin 定理与 NP 完全性、空间复杂性（Savitch 定理、PSPACE 完全性）、层级定理与概率计算，回答「什么能被计算、要付出多少代价」这一计算机科学的根本问题。',
    },
  },
  {
    category: 'math',
    school: 'MIT',
    crest: 'mit',
    code: '18.200',
    title: 'Principles of Discrete Applied Mathematics',
    note: 'Discrete mathematics as a tool for real problems: from counting and generating functions, probability and Chernoff bounds, it covers linear programming and duality, number theory and RSA, entropy and data compression (Huffman coding) and error-correcting codes (Hamming codes among them), showing how discrete structures underpin core techniques in algorithms, communication and cryptography.',
    zh: {
      title: '离散应用数学原理',
      note: '以离散数学为工具解决实际问题：从计数与生成函数、概率与 Chernoff 界出发，覆盖线性规划与对偶理论、数论与 RSA 加密、信息熵与数据压缩（Huffman 编码）以及纠错码（如 Hamming 码），展示离散结构如何支撑算法、通信与密码学中的核心技术。',
    },
  },
  {
    category: 'physics',
    school: 'MIT',
    crest: 'mit',
    code: '8.04',
    title: 'Quantum Physics I',
    note: 'Taught by Barton Zwiebach, it starts from the experiments that broke classical physics (the photoelectric effect, Compton scattering, electron diffraction), introduces wave–particle duality and the de Broglie relations, and builds the probabilistic interpretation of the wavefunction, Fourier analysis and the uncertainty principle. It then solves the Schrödinger equation in earnest: stationary states and one-dimensional potentials (infinite and finite wells, the delta function, barriers and tunnelling), the harmonic oscillator through ladder-operator algebra, and finally central potentials in three dimensions, angular momentum and the hydrogen atom, laying down both the computational backbone and the physical intuition of quantum mechanics.',
    zh: {
      title: '量子物理 I',
      note: '由 Barton Zwiebach 主讲，从光电效应、康普顿散射与电子衍射等动摇经典物理的实验出发，引入波粒二象性与德布罗意关系，建立波函数的概率诠释、傅里叶分析与不确定性原理，再系统求解薛定谔方程：定态与一维势（无限深与有限深势阱、δ 势、势垒与隧穿）、用升降算符代数求解谐振子，最后推广到三维中心势、角动量与氢原子，搭起量子力学的计算骨架与物理直觉。',
    },
  },
  {
    category: 'physics',
    school: 'MIT',
    crest: 'mit',
    code: '8.05',
    title: 'Quantum Physics II',
    note: "The second part of Barton Zwiebach's quantum trilogy, rebuilding quantum mechanics on linear algebra: from the Stern–Gerlach experiment and spin one-half, it develops vector spaces, linear operators, inner products and the spectral theorem, introducing Dirac notation and the generalised uncertainty principle. It then applies them to coherent and squeezed states of the harmonic oscillator, two-state systems (nuclear magnetic resonance, the ammonia maser), time evolution in the Schrödinger and Heisenberg pictures, and finally the theory of angular momentum, central potentials and the addition of angular momentum (the fine structure of hydrogen), lifting wave mechanics into an abstract framework built on Hilbert space.",
    zh: {
      title: '量子物理 II',
      note: 'Barton Zwiebach 量子力学三部曲的第二部，以线性代数重建量子力学：从 Stern–Gerlach 实验与自旋 1/2 出发，系统讲授向量空间、线性算符、内积与谱定理，引入狄拉克符号与广义不确定性原理；再以此处理谐振子的相干态与压缩态、二能级系统（核磁共振、氨分子微波激射器）、薛定谔绘景与海森堡绘景下的时间演化，最后讲授角动量理论、中心势与角动量耦合（氢原子精细结构），把波动力学提升为基于 Hilbert 空间的抽象框架。',
    },
  },
  {
    category: 'physics',
    school: 'MIT',
    crest: 'mit',
    code: '8.06',
    title: 'Quantum Physics III',
    note: "The last part of the trilogy turns to realistic problems with no exact solution: from charged particles in electromagnetic fields and Landau levels, it develops non-degenerate and degenerate perturbation theory and applies it to the fine structure of hydrogen and the Zeeman and Stark effects, then covers the WKB approximation (tunnelling and connection formulas), time-dependent perturbation theory and Fermi's golden rule, and the adiabatic approximation and Berry's phase, closing with scattering theory (partial waves, the Born approximation), training the ability to extract physical conclusions from complicated systems by approximation.",
    zh: {
      title: '量子物理 III',
      note: '三部曲的最后一部，转向没有精确解的真实问题：从电磁场中的带电粒子与朗道能级出发，系统讲授非简并与简并微扰论，并用于计算氢原子精细结构、塞曼效应与斯塔克效应；再讲授 WKB 近似（隧穿与连接公式）、含时微扰论与费米黄金法则、绝热近似与 Berry 相位，最后以散射理论（分波法、Born 近似）收尾，培养用近似方法从复杂系统中提取物理结论的能力。',
    },
  },
  {
    category: 'physics',
    school: 'MIT',
    crest: 'mit',
    code: '8.323',
    title: 'Relativistic Quantum Field Theory I',
    note: "MIT's first graduate semester of quantum field theory, on how quantum mechanics and special relativity fit together: from classical field theory, Lagrangians and Noether's theorem, it covers the Lorentz group and its representations, then canonically quantises the free scalar, Dirac and gauge fields, explaining antiparticles and the spin–statistics connection. Interactions follow, with Wick's theorem and perturbative expansion leading to the Feynman rules, cross sections and decay rates, closing with tree-level QED processes (e⁺e⁻ → μ⁺μ⁻, Compton scattering), laying the theoretical groundwork for the Standard Model of particle physics.",
    zh: {
      title: '相对论性量子场论 I',
      note: 'MIT 研究生阶段量子场论的第一学期，研究量子力学与狭义相对论如何结合：从经典场论、拉格朗日量与 Noether 定理出发，讲授洛伦兹群及其表示，依次对自由标量场、狄拉克场与规范场做正则量子化，理解反粒子与自旋—统计关系；再引入相互作用，借助 Wick 定理与微扰展开推导费曼规则，计算散射截面与衰变率，最后以树图阶的量子电动力学过程（如 e⁺e⁻ → μ⁺μ⁻、康普顿散射）收尾，为粒子物理标准模型打下理论基础。',
    },
  },
  {
    category: 'physics',
    school: 'MIT',
    crest: 'mit',
    code: '8.962',
    title: 'General Relativity',
    note: "Taught by Scott Hughes with Carroll's text as reference: from special relativity restated in tensor language, it builds the tools of differential geometry (manifolds, the metric, covariant derivatives and parallel transport, geodesics, the Riemann curvature tensor) and derives the Einstein field equations, then covers the weak-field limit and linearised gravity, the generation and propagation of gravitational waves, the Schwarzschild solution and black holes, and FRW cosmology, turning gravity as the curvature of spacetime from a slogan into a geometric theory you can compute with.",
    zh: {
      title: '广义相对论',
      note: '由 Scott Hughes 主讲，参考 Carroll 教材：从用张量语言重述狭义相对论出发，系统建立微分几何工具（流形、度规、协变导数与平行移动、测地线、黎曼曲率张量），推导爱因斯坦场方程；再讲授弱场极限与线性化引力、引力波的产生与传播、Schwarzschild 解与黑洞，以及 FRW 宇宙学模型，把「引力即时空弯曲」从一句口号变成可以计算的几何理论。',
    },
  },
  {
    category: 'physics',
    school: 'MIT',
    crest: 'mit',
    code: '8.286',
    title: 'The Early Universe',
    note: 'Taught by Alan Guth, who proposed cosmic inflation: from Hubble expansion and the cosmological principle, it derives the Friedmann equations from Newtonian mechanics and covers matter- and radiation-dominated expansion, the non-Euclidean geometry of open and closed universes, black-body radiation and the cosmic microwave background, the thermal history of the universe and Big Bang nucleosynthesis, and the observational evidence for dark matter and dark energy (the cosmological constant). The second half turns to the flatness, horizon and magnetic monopole problems of the standard Big Bang model, how inflation resolves them and seeds the primordial density perturbations, extending to eternal inflation and the multiverse, building an understanding of the origin and evolution of the universe from the observational data up.',
    zh: {
      title: '早期宇宙',
      note: '由暴胀理论的提出者 Alan Guth 主讲：从哈勃膨胀与宇宙学原理出发，以牛顿力学推导 Friedmann 方程，讲授物质主导与辐射主导的宇宙演化、开放与封闭宇宙的非欧几何、黑体辐射与宇宙微波背景、宇宙热历史与太初核合成，以及暗物质与暗能量（宇宙学常数）的观测证据；后半程聚焦标准大爆炸模型的平坦性问题、视界问题与磁单极子问题，讲授暴胀理论如何解决它们并给出原初密度扰动的起源，最后延伸至永恒暴胀与多重宇宙，从观测数据出发理解宇宙的起源与演化。',
    },
  },
  {
    category: 'econ',
    school: 'MIT',
    crest: 'mit',
    code: '14.01',
    title: 'Principles of Microeconomics',
    note: 'How consumers and firms decide, how markets set prices, and where they fail: supply and demand, competition and monopoly, externalities, public goods and the case for intervention.',
    zh: {
      title: '微观经济学原理',
      note: '消费者和企业如何决策、市场如何定价、又在哪里失灵：供需、竞争与垄断、外部性、公共物品，以及政府干预的理由。',
    },
  },
  {
    category: 'econ',
    school: 'MIT',
    crest: 'mit',
    code: '14.02',
    title: 'Principles of Macroeconomics',
    note: 'Output, unemployment and inflation across the short, medium and long run: IS-LM and AS-AD, monetary and fiscal policy, growth, and open economies with exchange rates.',
    zh: {
      title: '宏观经济学原理',
      note: '从短期、中期到长期看产出、失业与通胀：IS-LM 与 AS-AD 模型、货币与财政政策、经济增长，以及汇率下的开放经济。',
    },
  },
  {
    category: 'econ',
    school: 'Yale',
    crest: 'yale',
    code: 'ECON 251',
    title: 'Financial Theory',
    note: 'Finance built up from general equilibrium: present value, bond pricing and the yield curve, uncertainty and hedging, CAPM, and how leverage and collateral drive boom and crash.',
    zh: {
      title: '金融理论',
      note: '从一般均衡出发搭建金融学：现值、债券定价与收益率曲线、不确定性与对冲、资本资产定价模型，以及杠杆与抵押品如何推动繁荣与崩溃。',
    },
  },
  {
    category: 'econ',
    school: 'Yale',
    crest: 'yale',
    code: 'ECON 252',
    title: 'Financial Markets',
    note: 'How the financial system manages risk: insurance, efficient markets and behavioural finance, banks and regulation, stocks, bonds, real estate and derivatives.',
    zh: {
      title: '金融市场',
      note: '金融体系如何管理风险：保险、有效市场与行为金融、银行与监管，以及股票、债券、房地产和衍生品。',
    },
  },
  {
    category: 'econ',
    school: 'Yale',
    crest: 'yale',
    code: 'ECON 159',
    title: 'Game Theory',
    note: 'Strategic thinking made precise: dominance, Nash equilibrium, mixed strategies, backward induction and subgame perfection, repeated games, bargaining, auctions and asymmetric information.',
    zh: {
      title: '博弈论',
      note: '把策略思维变得精确：占优策略、纳什均衡、混合策略、逆向归纳与子博弈精炼，以及重复博弈、议价、拍卖和信息不对称。',
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
  {
    category: 'philo',
    school: 'Harvard',
    crest: 'harvard',
    code: 'ER 22',
    title: 'Justice',
    note: 'What is the right thing to do? Utilitarianism, libertarianism, Kant, Rawls and Aristotle, each tested against hard cases from markets, war, affirmative action and the law.',
    zh: {
      title: '公正',
      note: '什么才是正确的做法？功利主义、自由至上主义、康德、罗尔斯与亚里士多德，逐一放到市场、战争、平权法案与法律中的疑难案例里检验。',
    },
  },
  {
    category: 'philo',
    school: 'Yale',
    crest: 'yale',
    code: 'PHIL 176',
    title: 'Death',
    note: 'What death is and whether it is bad: soul against physicalism, personal identity, whether immortality would be desirable, the fear of death, and the ethics of suicide.',
    zh: {
      title: '死亡',
      note: '死亡是什么、它是否是坏事：灵魂与物理主义之争、人格同一性、永生是否值得向往、对死亡的恐惧，以及自杀的伦理。',
    },
  },
  {
    category: 'philo',
    school: 'Oxford',
    crest: 'oxford',
    // Oxford's first-year course runs under its title alone, with no number.
    code: null,
    title: 'General Philosophy',
    note: "Oxford's first-year introduction: knowledge and scepticism, induction, free will, personal identity, mind and body, and the existence of God, read through Descartes, Locke, Berkeley and Hume.",
    zh: {
      title: '哲学概论',
      note: '牛津一年级的哲学入门：知识与怀疑论、归纳问题、自由意志、人格同一性、心身问题与上帝存在，围绕笛卡尔、洛克、贝克莱和休谟展开。',
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
