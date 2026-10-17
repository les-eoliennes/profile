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
 *
 * Two shapes, mid-migration: the newer entries split the old single `note`
 * into `lectures` and `labs` (with `labsIn` for the lab language and an
 * optional `instructor` on the kicker line), which the page sets as run-in
 * paragraphs. Entries still carrying `note` render it as one paragraph.
 */
export const OPEN_COURSES = [
  {
    category: 'cs',
    school: 'MIT',
    crest: 'mit',
    code: '6.5840',
    title: 'Distributed Systems',
    instructor: 'Robert Morris',
    lectures: 'A close reading of the classic papers — MapReduce, GFS, Raft, ZooKeeper, Spanner — each weighed for its trade-offs in replication, consistency and fault tolerance.',
    labs: 'MapReduce, then Raft (leader election, log replication, persistence, snapshots), a fault-tolerant key-value service on top of it and finally a sharded store, all passing randomised tests of partitions, crashes and reordered messages.',
    labsIn: 'Go',
    zh: {
      title: '分布式系统',
      lectures: '精读 MapReduce、GFS、Raft、ZooKeeper、Spanner 等经典论文，逐篇剖析复制、一致性与容错之间的取舍。',
      labs: '依次实现 MapReduce、Raft（领导者选举、日志复制、持久化与快照）、构建于其上的容错键值服务与分片键值存储，全部通过网络分区、节点崩溃与消息乱序的随机化测试。',
    },
  },
  {
    category: 'cs',
    school: 'CMU',
    crest: 'cmu',
    code: '15-445',
    title: 'Database Systems',
    instructor: 'Andy Pavlo',
    lectures: 'A relational database taken apart from the bottom up: page layout and the buffer pool, B+ tree and hash indexes, sort and join algorithms, query optimisation, concurrency control (2PL, OCC, MVCC) and ARIES recovery.',
    labs: 'On the BusTub teaching database: a buffer pool manager with LRU-K replacement, an index, query executors and transactional concurrency control.',
    labsIn: 'C++',
    zh: {
      title: '数据库系统',
      lectures: '自底向上拆解关系型数据库：页布局与缓冲池、B+ 树与哈希索引、排序与连接算法、查询优化、并发控制（2PL、OCC、MVCC）与 ARIES 故障恢复。',
      labs: '在教学数据库 BusTub 上实现带 LRU-K 替换策略的缓冲池管理器、索引、查询执行器与事务并发控制。',
    },
  },
  {
    category: 'cs',
    school: 'CMU',
    crest: 'cmu',
    code: '15-213',
    title: 'Introduction to Computer Systems',
    lectures: "The hardware–software boundary from the programmer's side, following CS:APP: bit-level data, x86-64 machine code, caches, linking, processes and signals, virtual memory, allocation, I/O and concurrency.",
    labs: 'Data, Bomb and Attack Labs (bit manipulation, reverse-engineering assembly, buffer overflows), then Cache, Shell, Malloc and Proxy Labs.',
    labsIn: 'C',
    zh: {
      title: '计算机系统导论',
      lectures: '以《深入理解计算机系统》（CS:APP）为教材，从程序员视角看软硬件交界：位级表示、x86-64 机器码、缓存、链接、进程与信号、虚拟内存、内存分配、I/O 与并发。',
      labs: 'Data Lab、Bomb Lab 与 Attack Lab（位运算、汇编逆向、缓冲区溢出），再到 Cache、Shell、Malloc 与 Proxy Lab。',
    },
  },
  {
    category: 'cs',
    school: 'MIT',
    crest: 'mit',
    code: '6.1810',
    title: 'Operating System Engineering',
    lectures: 'xv6, a Unix V6 descendant running on RISC-V, read line by line: system calls, page tables, traps and interrupts, scheduling, locking, file systems and crash recovery.',
    labs: 'Extending xv6 with new system calls, copy-on-write fork, an E1000 network driver, a finer-grained memory allocator, large files, symbolic links and mmap.',
    labsIn: 'C',
    zh: {
      title: '操作系统工程',
      lectures: '逐行研读 xv6（仿照 Unix V6 编写、运行于 RISC-V 的教学操作系统）源码：系统调用、页表、陷阱与中断、调度、锁、文件系统与崩溃恢复。',
      labs: '为 xv6 扩展新的系统调用、写时复制 fork、E1000 网卡驱动、更细粒度的内存分配器、大文件、符号链接与 mmap。',
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
    note: 'Taught by Jonathan Gruber: from supply and demand, it derives consumer demand from utility maximisation under a budget constraint and models firm decisions through production functions and cost curves, then analyses perfect competition, monopoly and oligopoly and their welfare consequences (consumer and producer surplus). The second half turns to factor markets (labour and capital), choice under uncertainty and international trade, then externalities, public goods, taxation and redistribution, showing when markets work, when they fail, and what justifies government intervention and what it costs.',
    zh: {
      title: '微观经济学原理',
      note: '由 Jonathan Gruber 主讲：从供需模型出发，以效用最大化与预算约束推导消费者需求，以生产函数与成本曲线刻画企业决策，再分析完全竞争、垄断与寡头的市场结构及其福利后果（消费者剩余与生产者剩余）；后半程转向要素市场（劳动与资本）、不确定性下的选择、国际贸易，以及外部性、公共物品、税收与收入再分配，理解市场何时有效、何时失灵，以及政府干预的依据与代价。',
    },
  },
  {
    category: 'econ',
    school: 'MIT',
    crest: 'mit',
    code: '14.02',
    title: 'Principles of Macroeconomics',
    note: "Taught by Ricardo Caballero from Blanchard's Macroeconomics: from the goods and financial markets it builds the IS-LM model, adds the labour market and the Phillips curve to derive AS-AD, and traces how monetary and fiscal policy act differently in the short, medium and long run. It then covers the Solow growth model and technological progress, the role of expectations in consumption and investment, and exchange rates and the Mundell–Fleming model in the open economy, applying these tools to financial crises and the liquidity trap, building a complete framework for analysing macroeconomic fluctuations and policy.",
    zh: {
      title: '宏观经济学原理',
      note: '由 Ricardo Caballero 主讲，以 Blanchard《宏观经济学》为教材：从商品市场与金融市场出发构建 IS-LM 模型，结合劳动力市场与菲利普斯曲线推导 AS-AD 模型，分析货币政策与财政政策在短期、中期与长期的不同效果；再讲授 Solow 增长模型与技术进步、预期在消费与投资中的作用，以及开放经济中的汇率与 Mundell–Fleming 模型，并用这些工具解读金融危机与流动性陷阱，建立分析宏观经济波动与政策的完整框架。',
    },
  },
  {
    category: 'econ',
    school: 'MIT',
    crest: 'mit',
    code: '14.771',
    title: 'Development Economics: Microeconomic Issues and Policy Models',
    note: "MIT's graduate course in development economics, in the J-PAL tradition of studying poverty through randomised controlled trials: from agricultural household models and market imperfections, it covers human capital (education and health), intrahousehold allocation, credit markets and microfinance, risk sharing and consumption smoothing, savings, land and labour markets and technology adoption, extending to governance, corruption and political economy. Built around close reading of current empirical papers, it stresses causal identification through randomised trials, instrumental variables and natural experiments, showing how households in developing countries actually behave and which policies genuinely improve the lives of the poor.",
    zh: {
      title: '发展经济学：微观问题与政策模型',
      note: 'MIT 研究生阶段的发展经济学课程，延续 J-PAL 以随机对照实验研究贫困的传统：从农户模型与市场不完善出发，系统讲授人力资本（教育与健康）、家庭内部资源配置、信贷市场与小额信贷、风险分担与消费平滑、储蓄、土地与劳动力市场以及技术采纳，并延伸至治理、腐败与政治经济学。课程以研读前沿实证论文为主，强调随机对照实验、工具变量与自然实验等因果识别方法，理解发展中国家的家庭究竟如何决策，以及哪些政策真正改善了贫困人口的生活。',
    },
  },
  {
    category: 'econ',
    school: 'Yale',
    crest: 'yale',
    code: 'ECON 251',
    title: 'Financial Theory',
    note: "Taught by John Geanakoplos, it builds finance from the ground up on general equilibrium: from Irving Fisher's intertemporal model it derives interest rates and present value, applying them to bond pricing, the yield curve, mortgages and prepayment, and social security. Uncertainty follows, with risk aversion, portfolio choice, the capital asset pricing model (CAPM) and dynamic hedging, closing with the leverage cycle, Geanakoplos's own theory of how leverage and collateral amplify boom and crash, applied to the 2008 financial crisis, recasting Wall Street practice as rigorous economic models.",
    zh: {
      title: '金融理论',
      note: '由 John Geanakoplos 主讲，以一般均衡为基础自底向上搭建金融学：从 Irving Fisher 的跨期模型推导利率与现值，讲授债券定价、收益率曲线、抵押贷款与提前还款、社会保障等应用；再引入不确定性，讲授风险厌恶、资产组合、资本资产定价模型（CAPM）与动态对冲；最后以主讲人本人提出的杠杆周期理论收尾，分析杠杆与抵押品如何放大繁荣与崩溃，并用于解读 2008 年金融危机，把华尔街的实践还原为严格的经济学模型。',
    },
  },
  {
    category: 'econ',
    school: 'Yale',
    crest: 'yale',
    code: 'ECON 252',
    title: 'Financial Markets',
    note: 'Taught by Robert Shiller, 2013 Nobel laureate in economics, it examines the financial system as a machine for managing risk: from probability, diversification and the principles of insurance, it weighs the efficient-markets hypothesis against behavioural finance, then works through the markets for bonds, stocks, real estate, forwards and futures, and options, and the institutional design of banks, investment banks, central banks and monetary policy, and financial regulation, with guest lectures from practitioners, showing how finance serves society and why it produces bubbles and crises.',
    zh: {
      title: '金融市场',
      note: '由 2013 年诺贝尔经济学奖得主 Robert Shiller 主讲，从风险管理的视角审视金融体系：从概率、风险分散与保险原理出发，讨论有效市场假说与行为金融的分歧，再逐一讲授债券、股票、房地产、远期与期货、期权等市场，以及银行、投资银行、中央银行与货币政策、金融监管的制度设计，辅以业界嘉宾讲座，理解金融如何服务于社会，以及它为何会出现泡沫与危机。',
    },
  },
  {
    category: 'econ',
    school: 'Yale',
    crest: 'yale',
    code: 'ECON 159',
    title: 'Game Theory',
    note: 'Taught by Ben Polak, who introduces each idea through games played in the lecture hall: from strict dominance and the iterated deletion of dominated strategies, it covers Nash equilibrium and its application to Cournot and Bertrand competition, mixed strategies and evolutionarily stable strategies, then sequential games, with backward induction, the Stackelberg model, information sets and subgame-perfect equilibrium, extending to cooperation in repeated games, bargaining, signalling and auctions under asymmetric information, training the ability to formalise and solve real strategic interaction.',
    zh: {
      title: '博弈论',
      note: '由 Ben Polak 主讲，以大量课堂博弈实验引入概念：从严格占优与重复剔除劣策略出发，讲授纳什均衡及其在 Cournot 与 Bertrand 竞争中的应用、混合策略与演化稳定策略；再转向序贯博弈，讲授逆向归纳、Stackelberg 模型、信息集与子博弈精炼纳什均衡，并延伸至重复博弈中的合作、议价、信号传递与拍卖等信息不对称问题，培养把现实中的策略互动形式化并求解的能力。',
    },
  },
  {
    category: 'psych',
    school: 'MIT',
    crest: 'mit',
    code: '9.13',
    title: 'The Human Brain',
    note: "Taught by Nancy Kanwisher, who discovered the fusiform face area: starting from neuroanatomy and a real brain dissection, it lays out the methods of cognitive neuroscience (fMRI, EEG and MEG, TMS, studies of patients with brain damage, intracranial recording) and asks of each what it can and cannot show. It then works through the brain's functional specialisation, region by region: face recognition, scene perception and navigation, bodies and visual motion, number, music, language, and the network that represents other minds, extending to how plasticity and development shape that division of labour and to deep networks as models of visual cortex, building an understanding of how the mind is organised in the brain from the experimental evidence up.",
    zh: {
      title: '人类大脑',
      note: '由梭状回面孔区（FFA）的发现者 Nancy Kanwisher 主讲：从神经解剖与真实的大脑解剖演示出发，系统讲授认知神经科学的研究方法（fMRI、EEG 与 MEG、TMS、脑损伤患者研究、颅内记录），并追问每种方法能证明什么、不能证明什么；再逐个剖析大脑的功能特异化：面孔识别、场景知觉与空间导航、身体与视觉运动、数量、音乐、语言，以及理解他人心智的脑网络，并延伸至可塑性与发育如何塑造这种分工、深度神经网络作为视觉皮层模型的可能，从实验证据出发理解心智在大脑中如何组织。',
    },
  },
  {
    category: 'psych',
    school: 'MIT',
    crest: 'mit',
    code: '9.00SC',
    title: 'Introduction to Psychology',
    note: 'Taught by John Gabrieli: from the research methods of psychology and the biological basis of behaviour, it covers perception and attention, consciousness and sleep, learning (classical and operant conditioning), memory (the amnesic patient H.M. among the cases), language, thinking and intelligence, then emotion and motivation, development across the lifespan, personality, social psychology (conformity and obedience in the Asch and Milgram experiments), stress and health, and psychological disorders and their treatment, reading every claim against the experiments behind it and building a full map of the mind from neurons to society.',
    zh: {
      title: '心理学导论',
      note: '由 John Gabrieli 主讲：从心理学的研究方法与行为的生物学基础出发，覆盖知觉与注意、意识与睡眠、学习（经典条件反射与操作性条件反射）、记忆（如失忆症患者 H.M. 的案例）、语言、思维与智力，再到情绪与动机、毕生发展、人格、社会心理学（Asch 从众实验与 Milgram 服从实验）、压力与健康，以及心理障碍及其治疗，结合支撑每个结论的经典实验，建立从神经元到社会的完整心智图景。',
    },
  },
  {
    category: 'psych',
    school: 'MIT',
    crest: 'mit',
    code: '9.35',
    title: 'Sensation and Perception',
    note: "From psychophysics (thresholds, Weber's law, signal detection theory), it follows the visual pathway from the optics of the eye through the retina, lateral inhibition and receptive fields to the lateral geniculate nucleus and primary visual cortex, then covers colour vision (trichromacy and opponent processes), lightness constancy and illusions, spatial vision and contrast sensitivity, motion, depth and stereopsis, and object recognition and attention, extending to hearing (the cochlea, pitch and sound localisation), touch, taste and smell. It shows that perception is not a recording of the world but an inference the brain makes from incomplete signals, and sets human vision against computer vision.",
    zh: {
      title: '感觉与知觉',
      note: '从心理物理学（感觉阈限、韦伯定律、信号检测论）出发，沿视觉通路从眼的光学成像、视网膜、侧抑制与感受野，经外侧膝状体到初级视觉皮层，再讲授颜色视觉（三色理论与拮抗过程）、明度恒常性与视错觉、空间视觉与对比敏感度、运动知觉、深度与立体视觉、物体识别与注意，并延伸至听觉（耳蜗、音高与声源定位）、触觉、味觉与嗅觉，理解知觉并非对世界的被动记录，而是大脑基于不完整信号做出的推断，也为对照人类视觉与计算机视觉提供了基础。',
    },
  },
  {
    category: 'psych',
    school: 'MIT',
    crest: 'mit',
    code: '9.40',
    title: 'Introduction to Neural Computation',
    note: 'Taught by Michale Fee: from the biophysics of a single neuron, it builds the equivalent-circuit model of the membrane, the Hodgkin–Huxley model of the action potential, integrate-and-fire neurons, dendrites and cable theory, and synaptic transmission, then turns to the neural code, with spike trains and firing rates, receptive fields and the spike-triggered average. Along the way it teaches the mathematics of data analysis (convolution and filtering, Fourier and spectral analysis, matrices, eigenvectors and principal component analysis), closing with network models: rate models, feed-forward networks and the perceptron, recurrent networks, line attractors as neural integrators, and Hopfield networks for memory. MATLAB problem sets simulate and analyse each model, showing how computation emerges from biological neural circuits and how they compare with artificial ones.',
    zh: {
      title: '神经计算导论',
      note: '由 Michale Fee 主讲：从单个神经元的生物物理出发，依次建立细胞膜的等效电路模型、动作电位的 Hodgkin–Huxley 模型、积分发放神经元、树突与电缆理论以及突触传递；再转向神经编码，讲授动作电位序列与发放率、感受野与脉冲触发平均。课程同时系统讲授数据分析的数学工具（卷积与滤波、傅里叶与频谱分析、矩阵、特征向量与主成分分析），最后以网络模型收尾：发放率模型、前馈网络与感知机、循环网络、作为神经积分器的线吸引子，以及用于记忆的 Hopfield 网络。习题用 MATLAB 模拟和分析每个模型，理解计算如何从生物神经回路中涌现，以及它与人工神经网络的异同。',
    },
  },
  {
    category: 'ling',
    school: 'MIT',
    crest: 'mit',
    code: '24.900',
    title: 'Introduction to Linguistics',
    note: "Grounded in MIT's generative tradition, it studies language as a property of the human mind: from the distinctions between description and prescription and between competence and performance, it covers morphology (morphemes and the hierarchical structure of words), phonetics and phonology (the IPA, phonemes and allophones, distinctive features, syllable structure and phonological rules), syntax (constituency, phrase structure, movement and wh-questions, binding) and semantics (compositionality, quantification and entailment), extending to language acquisition and the poverty-of-the-stimulus argument, variation and change, and sign languages. Problem sets ask for rules induced from real data in unfamiliar languages, training the habit of analysing language like a scientist, and giving a linguist's view to set beside the formal grammars of 18.404J and the language models of CS224N.",
    zh: {
      title: '语言学导论',
      note: '以 MIT 生成语言学的传统为底色，把语言当作人类心智的一种属性来研究：从描写与规定、语言能力与语言运用的区分出发，依次讲授形态学（语素与词的层级结构）、语音学与音系学（国际音标、音位与音位变体、区别特征、音节结构与音系规则）、句法学（成分结构、短语结构、移位与 wh 疑问句、约束理论）以及语义学（组合性、量化与蕴涵），并延伸至语言习得与刺激贫乏论证、语言变异与演变、手语。习题集要求从陌生语言的真实语料中归纳规则，培养像科学家一样分析语言数据的能力，也为对照 18.404J 的形式文法与 CS224N 的语言模型提供了语言学的视角。',
    },
  },
  {
    category: 'philo',
    school: 'Harvard',
    crest: 'harvard',
    code: 'ER 22',
    title: 'Justice',
    note: "Taught by Michael Sandel through Socratic debate with a lecture hall of a thousand students: from hard cases (the runaway trolley, the shipwrecked crew driven to cannibalism), it sets out utilitarianism (Bentham and Mill), libertarianism (Nozick) and Locke on property and consent, then tests the limits of markets against military service and surrogacy, before turning to Kant's categorical imperative, Rawls's veil of ignorance and difference principle, and Aristotle's teleological justice, carrying each into affirmative action, patriotism and same-sex marriage. It trains the habit of naming the principle behind an intuition and following it through to its consequences.",
    zh: {
      title: '公正',
      note: '由 Michael Sandel 主讲，在千人大课堂上以苏格拉底式的辩论推进：从电车难题、海难求生等疑难案例出发，依次讲授边沁与密尔的功利主义、诺齐克的自由至上主义、洛克的财产权与同意理论，并以兵役制度与代孕检验市场的道德边界；再转向康德的绝对命令、罗尔斯的无知之幕与差异原则，以及亚里士多德的目的论正义观，把每种理论带入平权法案、爱国主义与同性婚姻等争议中，培养把直觉背后的原则说清楚、并推演其全部后果的能力。',
    },
  },
  {
    category: 'philo',
    school: 'Yale',
    crest: 'yale',
    code: 'PHIL 176',
    title: 'Death',
    note: "Taught by Shelly Kagan, who argues a physicalist position openly rather than surveying views: from the case for and against an immaterial soul (Plato's Phaedo among the texts), it moves to personal identity (the body, soul and personality views, and the puzzles of duplication and fission) and what it is to be dead, then asks why death is bad, through the deprivation account and Epicurus' and Lucretius' arguments that it is not, whether immortality would be desirable, and whether fear of death is appropriate, closing with the rationality and morality of suicide. It shows how far careful argument can take a question most people answer by instinct alone.",
    zh: {
      title: '死亡',
      note: '由 Shelly Kagan 主讲，他不做观点罗列，而是明确为物理主义立场辩护：从支持与反对非物质灵魂的论证出发（包括柏拉图的《斐多篇》），讨论人格同一性（身体论、灵魂论与人格论，以及复制与分裂的思想实验）以及「死亡」究竟意味着什么；再追问死亡为何是坏事，审视剥夺论以及伊壁鸠鲁与卢克莱修认为死亡并不可怕的论证、永生是否值得向往、对死亡的恐惧是否恰当，最后以自杀的理性与道德问题收尾，展示严谨的论证能把一个多数人只凭本能回答的问题推进到多远。',
    },
  },
  {
    category: 'philo',
    school: 'Oxford',
    crest: 'oxford',
    // Oxford's first-year course runs under its title alone, with no number.
    code: null,
    title: 'General Philosophy',
    note: "Oxford's first-year introduction, as taught by Peter Millican in lectures now freely available: from Descartes' Meditations and the sceptical arguments that open modern philosophy, it covers Locke and Berkeley on perception and the external world, Hume's problem of induction and his account of causation, then free will and determinism (and whether the two are compatible), personal identity, the mind–body problem from dualism to functionalism, and the arguments for the existence of God, especially the design argument and Hume's critique of it. Reading the primary texts closely, it trains the analytic habit of reconstructing an argument premise by premise and finding where it fails.",
    zh: {
      title: '哲学概论',
      note: '牛津哲学本科一年级的入门课，由 Peter Millican 主讲并公开了课程录音：从笛卡尔的《第一哲学沉思集》与开启近代哲学的怀疑论论证出发，讲授洛克与贝克莱关于知觉与外部世界的理论、休谟的归纳问题与因果理论，再到自由意志与决定论（以及二者能否相容）、人格同一性、从二元论到功能主义的心身问题，以及上帝存在的论证，尤其是设计论证与休谟对它的批判。课程紧扣原典精读，训练把一个论证逐条拆解为前提、并找出它在哪里失效的分析哲学功底。',
    },
  },
] as const;

/**
 * Languages studied in a classroom, shown below the open courseware. `crest`
 * is a key in src/data/schools.ts like the courses above.
 */
export const LANGUAGES = [
  {
    crest: 'af',
    school: 'Alliance Française',
    language: 'French',
    period: 'Sept 2026 — Present',
    note: 'Studying French in the classroom at the Alliance Française, the network of French language and cultural centres founded in Paris in 1883: grammar, vocabulary and pronunciation built up alongside listening, speaking, reading and writing, structured around the Common European Framework of Reference for Languages (CEFR).',
    zh: {
      school: '法语联盟',
      language: '法语',
      period: '2026年9月 — 至今',
      note: '在法语联盟（Alliance Française，1883 年创立于巴黎的法语与法国文化推广机构）系统学习法语：在语法、词汇与发音的基础上同步训练听、说、读、写，课程对标欧洲语言共同参考框架（CEFR）。',
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
  { key: 'stats.tokens', value: '1B' },
  { key: 'stats.incidents', value: '40+' },
] as const;
