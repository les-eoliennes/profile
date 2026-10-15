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
    note: 'A rigorous, world-class course in distributed systems: read the classic papers (GFS, Spanner and others) and write four labs in Go — MapReduce, the Raft consensus protocol, and a fault-tolerant, sharded key-value store — to get at the design logic behind high concurrency, network fault tolerance and data consistency.',
    zh: {
      title: '分布式系统',
      note: '全球顶尖的分布式系统硬核课程，通过研读经典论文（如 GFS、Spanner）与用 Go 语言写四大实验 —— MapReduce、Raft 共识协议及容错/分片 KV 数据库，深挖高并发、网络容错与数据一致性背后的核心设计逻辑。',
    },
  },
  {
    category: 'cs',
    school: 'CMU',
    crest: 'cmu',
    code: '15-445',
    title: 'Database Systems',
    note: 'Build BusTub, a relational database storage engine, in C++, covering every core low-level component: buffer pool management, B+ tree indexes, concurrency control and transaction locking (2PL/OCC), and the SQL executor. A standout example of theory meeting engineering practice.',
    zh: {
      title: '数据库系统',
      note: '用 C++ 搭建一个名为 BusTub 的关系型数据库存储引擎，全面覆盖 Buffer Pool 管理、B+Tree 索引、并发控制与事务锁（2PL/OCC）以及 SQL 执行器等底层核心组件，是理论与工程实践结合的顶尖代表。',
    },
  },
  {
    category: 'cs',
    school: 'CMU',
    crest: 'cmu',
    code: '15-213',
    title: 'Introduction to Computer Systems',
    note: 'Taught in C and x86-64 assembly, it dissects the boundary between hardware and software. At its core are seven demanding labs (Bomb Lab, Cache Lab, Malloc Lab and Proxy Lab among them) that take students from bit manipulation and reverse-engineering assembly through the memory hierarchy to concurrent network programming, until they truly understand how a program actually runs on the machine.',
    zh: {
      title: '计算机系统导论',
      note: '以 C 语言和 x86-64 汇编为语言，直接剖析硬件与软件的交界面。其核心在于通过 7 个极具挑战性的实验（如 Bomb Lab、Cache Lab、Malloc Lab、Proxy Lab），让学生从位运算、汇编逆向、内存分级到并发网络编程，真正理解程序在计算机底层的实际运行机制。',
    },
  },
  {
    category: 'cs',
    school: 'MIT',
    crest: 'mit',
    code: '6.1810',
    title: 'Operating System Engineering',
    note: 'Build xv6, a Unix-like operating system, from scratch in C on RISC-V. Implementing process scheduling, virtual memory management, interrupt handling, the file system and system calls teaches the low-level mechanics and design choices of an operating system at the level of the code itself.',
    zh: {
      title: '操作系统工程',
      note: '基于 RISC-V 架构用 C 语言从零实现一个名为 xv6 的类 Unix 操作系统。通过实现进程调度、虚拟内存管理、中断处理、文件系统与系统调用等核心模块，让学生直接在代码层面掌握操作系统的底层运行机制与设计选择。',
    },
  },
  {
    category: 'cs',
    school: 'Stanford',
    crest: 'stanford',
    code: 'CS144',
    title: 'Computer Networking',
    note: 'Centred on the TCP/IP stack: implement a complete TCP stack in C++ (Sponge/Minnow), covering the ByteStream, the Reassembler, the TCP receiver and sender, and IP router forwarding, turning abstract network- and transport-layer protocols into working code.',
    zh: {
      title: '计算机网络',
      note: '以 TCP/IP 协议栈为核心，用 C++ 实现一个完整的 TCP 协议栈（Sponge/Minnow），涵盖 ByteStream、Reassembler、TCP Receiver/Sender 及 IP 路由器转发等模块，将抽象的网络层与传输层协议转化为具体的代码实现。',
    },
  },
  {
    category: 'cs',
    school: 'MIT',
    crest: 'mit',
    code: '6.006',
    title: 'Introduction to Algorithms',
    note: 'Built around the design and analysis of algorithms: data structures (binary search trees, hash tables), sorting and selection, graph algorithms (Dijkstra, BFS/DFS) and dynamic programming, with an emphasis on rigorous complexity analysis (Big-O) and reductions, training the computational thinking that turns real-world problems into efficient algorithms.',
    zh: {
      title: '算法导论',
      note: '围绕算法设计与分析展开，重点讲授数据结构（如二叉搜索树、哈希表）、排序与选择、图算法（如 Dijkstra、BFS/DFS）以及动态规划等核心内容，强调严格的复杂度分析（Big-O）与问题归约（Reduction），培养将现实问题转化为高效率算法的计算思维。',
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
