/**
 * The stack. `slug` maps to a simple-icons slug; the official path and brand
 * colour are pulled at build time. `understanding` is what gets shown when a
 * logo is opened — write what you actually think, not a feature list.
 */
export interface Tech {
  slug: string;
  name: string;
  category: 'Languages' | 'Data' | 'Infrastructure' | 'Observability' | 'Web';
  years: string;
  tagline: string;
  understanding: string[];
  points: string[];
  /** Chinese edition. Merged over the English fields by localize(). */
  zh: {
    years: string;
    tagline: string;
    understanding: string[];
    points: string[];
  };
}

export const TECH: Tech[] = [
  {
    slug: 'go',
    name: 'Go',
    category: 'Languages',
    years: '5 years',
    tagline: 'A language designed for writing services, where concurrency stops being the hard part.',
    understanding: [
      'The value of Go is not that goroutines are cheap. It is that "one goroutine per request" — the most obvious thing you could write — actually holds up in production. The runtime hides M:N scheduling, the network poller and preemption; you write synchronous code and get asynchronous throughput.',
      'The cost is expressiveness. Before generics there was a great deal of duplicated code, and even now the language stays deliberately plain. For a service that several people maintain over years, that constraint lowers review cost more than it hurts: everyone ends up writing code that looks the same.',
    ],
    points: [
      'GMP scheduling hands the P to another M when a goroutine blocks in a syscall, so a blocking call does not stall the whole processor',
      'The collector is concurrent tri-colour marking with sub-millisecond pauses; high allocation rates still drive GC frequency, so reduce allocations rather than tune GOGC',
      'Channels are not universal — shared state is often clearer with a mutex; channels are for transferring ownership',
    ],
    zh: {
      years: '5 年',
      tagline: '一门为写服务而设计的语言，在这里并发不再是最难的那部分。',
      understanding: [
        'Go 的价值不在于 goroutine 便宜，而在于「一个请求一个 goroutine」这种最直白的写法，在生产环境里真的撑得住。运行时把 M:N 调度、网络轮询器和抢占都藏了起来；你写同步的代码，拿到的是异步的吞吐。',
        '代价是表达力。泛型出现之前有大量重复代码，即便有了泛型，这门语言依然刻意保持朴素。但对于一个由好几个人维护多年的服务来说，这种约束降低的评审成本，超过它带来的不便：所有人写出来的代码长得都差不多。',
      ],
      points: [
        'GMP 调度会在 goroutine 陷入系统调用时把 P 交给另一个 M，所以一次阻塞调用不会拖住整个处理器',
        '回收器是并发三色标记，停顿在亚毫秒级；但高分配率仍然会推高 GC 频率，所以该做的是减少分配，而不是去调 GOGC',
        'channel 不是万能的 —— 共享状态用互斥锁往往更清楚，channel 适合用来转移所有权',
      ],
    },
  },
  {
    slug: 'rust',
    name: 'Rust',
    category: 'Languages',
    years: '2 years',
    tagline: 'Turns concurrency safety from a matter of discipline into something the compiler enforces.',
    understanding: [
      'What ownership really solves is not leaks, it is data races. `Send` and `Sync` make "can this type cross a thread boundary" a fact in the type system rather than a convention in a comment. Anyone who has written multithreaded C++ knows what that is worth.',
      'The curve is steep because you have to think lifetimes through up front instead of discovering them by running the program. But the pain is front-loaded, and it pays: Rust code that compiles surprises you at runtime remarkably rarely.',
    ],
    points: [
      'Borrow checking is compile-time and costs nothing at runtime; reaching for Rc/RefCell moves the check to runtime and usually signals a design problem',
      'No GC means no long-tail pause jitter, which matters for latency-sensitive components',
      '`unsafe` does not disable checking — it transfers the proof obligation to you, so document the invariant',
    ],
    zh: {
      years: '2 年',
      tagline: '把并发安全从「靠自觉」变成编译器强制执行的事。',
      understanding: [
        '所有权真正解决的不是内存泄漏，而是数据竞争。`Send` 和 `Sync` 让「这个类型能不能跨线程」成为类型系统里的事实，而不是注释里的约定。写过多线程 C++ 的人知道这值多少钱。',
        '曲线陡峭，是因为你必须提前把生命周期想清楚，而不能靠跑一遍程序去发现。但这份痛苦是前置的，而且有回报：能编译通过的 Rust 代码，在运行期给你的意外少得出奇。',
      ],
      points: [
        '借用检查发生在编译期，运行时零开销；一旦频繁伸手去拿 Rc/RefCell，就是把检查推迟到了运行期，通常说明设计有问题',
        '没有 GC 意味着没有长尾的停顿抖动，这对延迟敏感的组件很重要',
        '`unsafe` 不是关掉检查，而是把证明责任转移给你 —— 所以要把不变量写进注释',
      ],
    },
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    category: 'Languages',
    years: '5 years',
    tagline: 'Documentation that the compiler is obliged to check.',
    understanding: [
      'The payoff is not while writing, it is while changing. Refactor an interface with thirty call sites and the compiler names every one of them — a kind of certainty that test coverage alone never buys you in plain JavaScript.',
      'But the type system is structural and erased entirely at runtime. Every external input — HTTP responses, database rows, environment variables — has to be validated at the boundary, or the types are just self-reassurance. That is exactly why the content schema on this site is defined with zod.',
    ],
    points: [
      'Turn on `strict`, especially `strictNullChecks` — without it most of the value is gone',
      '`any` spreads silently; prefer `unknown` and force yourself to narrow',
      'Keep type-level cleverness in check: an unreadable type is as much a maintenance burden as unreadable code',
    ],
    zh: {
      years: '5 年',
      tagline: '一份编译器有义务去校验的文档。',
      understanding: [
        '收益不在写的时候，而在改的时候。重构一个有三十处调用的接口，编译器会把每一处都点出来 —— 这种确定性，在纯 JavaScript 里靠测试覆盖率是买不到的。',
        '但它的类型系统是结构化的，而且在运行时被完全擦除。所有外部输入 —— HTTP 响应、数据库行、环境变量 —— 都必须在边界上校验，否则类型只是一种自我安慰。这也正是这个站点用 zod 定义内容 schema 的原因。',
      ],
      points: [
        '把 `strict` 打开，尤其是 `strictNullChecks` —— 不开的话大部分价值就没了',
        '`any` 会悄悄扩散；宁可用 `unknown`，逼自己去收窄',
        '类型层面的花招要克制：一个读不懂的类型和读不懂的代码一样，都是维护负担',
      ],
    },
  },
  {
    slug: 'python',
    name: 'Python',
    category: 'Languages',
    years: '5 years',
    tagline: 'The shortest path from an idea to a result, provided you know where its limits are.',
    understanding: [
      'Its strength is ecosystem and iteration speed: data work, scripts, prototypes. I treat it as the language for the exploratory phase, then decide whether the result deserves a rewrite in Go or Rust.',
      'The GIL rules out CPU parallelism, but that gets misread as "Python is slow". The real bottleneck is usually I/O, or a loop that should have been vectorised — NumPy is fast precisely because the loop moved down into C.',
    ],
    points: [
      'The GIL only blocks CPU parallelism; asyncio or a thread pool is fine for I/O-bound work',
      'Multiprocessing sidesteps the GIL at the cost of serialisation — use shared_memory for large objects',
      'Production services need type annotations and mypy, or they become unmanageable at scale',
    ],
    zh: {
      years: '5 年',
      tagline: '从想法到结果最短的一条路，前提是你知道它的边界在哪。',
      understanding: [
        '它的强项是生态和迭代速度：数据处理、脚本、原型。我把它当作探索阶段的语言，等结果站得住了，再决定值不值得用 Go 或 Rust 重写。',
        'GIL 排除了 CPU 并行，但这常被误读成「Python 慢」。真正的瓶颈通常在 I/O，或者在一个本该向量化的循环里 —— NumPy 快，正是因为循环下沉到了 C。',
      ],
      points: [
        'GIL 只挡住 CPU 并行；I/O 密集的活儿用 asyncio 或线程池完全够用',
        '多进程能绕开 GIL，代价是序列化开销 —— 大对象要用 shared_memory',
        '生产服务需要类型注解和 mypy，否则规模一上来就管不住了',
      ],
    },
  },
  {
    slug: 'postgresql',
    name: 'PostgreSQL',
    category: 'Data',
    years: '5 years',
    tagline: 'My default relational database, and the textbook I learned database internals from.',
    understanding: [
      "Postgres implements MVCC unusually: an update inserts a new row version and leaves the old one in place for VACUUM to reclaim. Understanding that one fact explains why heavily-updated tables bloat and why long transactions stall cleanup across the whole cluster — the two most common root causes I have seen in production.",
      'Its planner is cost-based, and cost comes from statistics. So "I added an index and it is not being used" is nine times out of ten stale statistics or a bad cardinality estimate, not a planner bug. Once reading `EXPLAIN (ANALYZE, BUFFERS)` becomes habit, tuning stops being guesswork.',
    ],
    points: [
      'Long-running transactions block VACUUM, causing bloat and eventually transaction ID wraparound — monitoring `xact_start` matters more than monitoring slow queries',
      'Pick the right index type: beyond B-tree there is GIN for full-text and JSONB, BRIN for naturally ordered columns on large tables',
      'When estimated and actual row counts differ by an order of magnitude in `EXPLAIN ANALYZE`, go look at the statistics',
    ],
    zh: {
      years: '5 年',
      tagline: '我默认的关系型数据库，也是我学数据库内核用的那本教材。',
      understanding: [
        'Postgres 的 MVCC 实现很特别：一次更新是插入一个新版本行，把旧的留在原地等 VACUUM 回收。理解了这一件事，就能解释为什么高频更新的表会膨胀，以及为什么长事务会拖住整个集群的清理 —— 这是我在生产环境里见过最多的两个根因。',
        '它的规划器是基于代价的，而代价来自统计信息。所以「我加了索引但它不走」十有八九是统计信息过期或者基数估算错了，而不是规划器有 bug。一旦读 `EXPLAIN (ANALYZE, BUFFERS)` 成了习惯，调优就不再是猜。',
      ],
      points: [
        '长事务会挡住 VACUUM，导致膨胀，最终引发事务 ID 回卷 —— 盯 `xact_start` 比盯慢查询更重要',
        '选对索引类型：除了 B-tree，还有用于全文和 JSONB 的 GIN，以及大表上天然有序列适用的 BRIN',
        '当 `EXPLAIN ANALYZE` 里的预估行数和实际差一个数量级时，去看统计信息',
      ],
    },
  },
  {
    slug: 'redis',
    name: 'Redis',
    category: 'Data',
    years: '5 years',
    tagline: 'Not a cache — a data structure server that happens to be reachable over the network.',
    understanding: [
      'Using Redis purely as a key-value cache throws away half of it. Sorted sets for leaderboards and delay queues, HyperLogLog for cardinality estimation, Streams for lightweight messaging — implementing any of those with other components is considerably heavier.',
      'The single-threaded model is both its strength and its trap: commands are atomic for free, but one `KEYS *` or a `DEL` on a large key stalls the entire instance. Nearly every Redis incident I have seen reduces to "that command was not O(1)".',
    ],
    points: [
      'Avoid O(N) commands in production: `KEYS`, `SMEMBERS`, and `DEL` on big keys (use `UNLINK` to free them asynchronously)',
      'RDB persistence forks, so leave enough memory headroom for copy-on-write',
      'Design for all three failure modes together: penetration (cache the empty result), stampede (rebuild under a mutex), avalanche (jitter the TTLs)',
    ],
    zh: {
      years: '5 年',
      tagline: '它不是缓存，而是一台恰好能通过网络访问的数据结构服务器。',
      understanding: [
        '只把 Redis 当键值缓存用，等于扔掉了它一半的能力。用有序集合做排行榜和延时队列、用 HyperLogLog 做基数估算、用 Stream 做轻量消息 —— 这些用别的组件实现都要重得多。',
        '单线程模型既是它的长处也是它的陷阱：命令天然原子，但一条 `KEYS *` 或者对大 key 的一次 `DEL` 就会卡住整个实例。我见过的几乎每一次 Redis 事故，最后都归结为「那条命令不是 O(1)」。',
      ],
      points: [
        '生产环境避开 O(N) 命令：`KEYS`、`SMEMBERS`，以及对大 key 的 `DEL`（用 `UNLINK` 异步释放）',
        'RDB 持久化会 fork，所以要给写时复制留足内存余量',
        '三种失效模式要一起设计：穿透（缓存空结果）、击穿（加锁重建）、雪崩（过期时间加抖动）',
      ],
    },
  },
  {
    slug: 'mysql',
    name: 'MySQL',
    category: 'Data',
    years: '4 years',
    tagline: "InnoDB's clustered index explains almost all of its performance behaviour.",
    understanding: [
      'The deepest difference from Postgres is physical layout: InnoDB tables are index-organised, with row data living in the leaves of the primary key B+ tree. That is why primary keys should be short and monotonically increasing — random keys cause page splits — and why secondary indexes need a lookback to the clustered index.',
      'Its MVCC builds version chains from the undo log, so reads take no locks. But gap locks under repeatable read will lock ranges that contain no rows at all, and that is the part most often missed when debugging deadlocks.',
    ],
    points: [
      'Use auto-increment primary keys rather than UUIDs: random insertion causes page splits and destroys locality',
      'A covering index avoids the lookback entirely — `Using index` in `EXPLAIN` means you hit one',
      'Gap locks under RR cause a lot of deadlocks; dropping to read-committed is sometimes the right answer',
    ],
    zh: {
      years: '4 年',
      tagline: 'InnoDB 的聚簇索引，几乎解释了它全部的性能表现。',
      understanding: [
        '和 Postgres 最本质的差别在物理布局：InnoDB 是索引组织表，行数据就住在主键 B+ 树的叶子里。这解释了为什么主键应该短而且单调递增 —— 随机主键会造成页分裂 —— 也解释了为什么二级索引需要回表。',
        '它的 MVCC 用 undo log 构造版本链，读不加锁。但在可重复读隔离级别下，间隙锁会锁住根本不存在行的区间，而这正是排查死锁时最容易漏掉的一环。',
      ],
      points: [
        '用自增主键而不是 UUID：随机插入会导致页分裂，并且毁掉局部性',
        '覆盖索引可以完全省掉回表 —— `EXPLAIN` 里出现 `Using index` 就说明命中了',
        'RR 下的间隙锁是很多死锁的来源；降到读已提交有时候才是对的答案',
      ],
    },
  },
  {
    slug: 'clickhouse',
    name: 'ClickHouse',
    category: 'Data',
    years: '3 years',
    tagline: 'Columnar storage and vectorised execution, taking analytical queries from minutes to seconds.',
    understanding: [
      'Columnar wins twice: you read only the columns you asked for, and storing one type per column compresses extremely well. On a wide table with ten billion rows, scanning two columns can touch a hundredth of the data. That is the fundamental split between OLAP and OLTP.',
      'It is not a replacement for a relational database, though. No real transactions, updates and deletes are asynchronous rewrites, and point lookups are far slower than a B+ tree. My pattern has always been the same: Postgres on the serving path, a copy synced through Kafka into ClickHouse for analytics, responsibilities kept apart.',
    ],
    points: [
      'The sorting key determines physical order on disk and is the single biggest factor in query performance',
      'Avoid frequent small writes — MergeTree has to merge, and too many small parts drag queries down',
      'Joins are the weak spot; pre-aggregate or denormalise rather than joining at query time',
    ],
    zh: {
      years: '3 年',
      tagline: '列式存储加向量化执行，把分析查询从几分钟压到几秒。',
      understanding: [
        '列式赢在两处：只读你要的列，以及一列一种类型带来的极高压缩比。一张百亿行的宽表，扫两列可能只碰到全部数据的百分之一。这就是 OLAP 和 OLTP 的根本分野。',
        '但它不是关系型数据库的替代品。没有真正的事务，更新和删除是异步重写，点查远慢于 B+ 树。我一直是同一套用法：在线链路用 Postgres，通过 Kafka 同步一份到 ClickHouse 做分析，职责分开。',
      ],
      points: [
        '排序键决定了数据在磁盘上的物理顺序，是查询性能的头号因素',
        '避免频繁的小批量写入 —— MergeTree 需要合并，小分片太多会拖垮查询',
        '连接是弱项；能预聚合或者反范式化，就不要在查询时做连接',
      ],
    },
  },
  {
    slug: 'apachekafka',
    name: 'Apache Kafka',
    category: 'Infrastructure',
    years: '4 years',
    tagline: 'Fundamentally a distributed, replayable commit log.',
    understanding: [
      'Treating Kafka as a message queue leads to using it wrong. It is a durable, re-readable log: consumers own their offsets, the same data can be read by several consumer groups at different positions, and any of them can rewind. Replayability is the dividing line between it and a traditional broker.',
      'Ordering only holds within a partition, so the partition key decides whether the business logic gets the ordering it needs. Partition count is also the ceiling on parallelism — consumers beyond that number simply idle.',
    ],
    points: [
      'Order is guaranteed per partition only; anything that must stay ordered has to share a key',
      'More consumers than partitions is waste — check partitioning before scaling out',
      'At-least-once is the default; consumers must be idempotent, and exactly-once is never free',
    ],
    zh: {
      years: '4 年',
      tagline: '它本质上是一个分布式的、可重放的提交日志。',
      understanding: [
        '把 Kafka 当消息队列用，就会用错。它是一份持久化、可重复读的日志：消费者自己持有位点，同一份数据可以被多个消费组以不同进度读取，任何一个都能回退。可重放，是它和传统消息中间件的分水岭。',
        '顺序只在分区内成立，所以分区键决定了业务逻辑能不能拿到它需要的顺序。分区数同时也是并行度的上限 —— 超出这个数的消费者只能闲着。',
      ],
      points: [
        '顺序只保证在分区内；任何需要保序的东西必须共用同一个 key',
        '消费者数超过分区数就是浪费 —— 扩容前先看分区',
        '默认语义是至少一次，消费端必须幂等；精确一次从来不是免费的',
      ],
    },
  },
  {
    slug: 'docker',
    name: 'Docker',
    category: 'Infrastructure',
    years: '5 years',
    tagline: 'Not a virtual machine — an ordinary process fenced off by namespaces and cgroups.',
    understanding: [
      "What runs in a container is a normal process on the host kernel; it just sees a different set of PIDs, network interfaces and mount points, with CPU and memory capped by cgroups. Once that lands, a lot of \"strange\" behaviour stops being strange — why `top` inside the container reports host memory, why kernel parameters are shared.",
      'Image layers are content-addressed, so the order of instructions in a Dockerfile directly determines cache hit rate: put what changes least — dependency installation — first, and what changes most — copying source — last.',
    ],
    points: [
      'Containers share the host kernel, so this is isolation rather than virtualisation and the security boundary is weaker than a VM',
      'Multi-stage builds separate the artefact from the toolchain and often cut image size by an order of magnitude',
      'Mind PID 1: a process that does not forward SIGTERM breaks graceful shutdown',
    ],
    zh: {
      years: '5 年',
      tagline: '它不是虚拟机，而是一个被命名空间和 cgroup 圈起来的普通进程。',
      understanding: [
        '容器里跑的就是宿主机内核上的一个普通进程，只不过它看到的是另一套 PID、网络接口和挂载点，CPU 与内存被 cgroup 限住。想通这一点，很多「怪事」就不怪了 —— 为什么容器里 `top` 报的是宿主机内存，为什么内核参数是共享的。',
        '镜像层是按内容寻址的，所以 Dockerfile 里指令的顺序直接决定缓存命中率：变得最少的（装依赖）放前面，变得最多的（拷源码）放最后。',
      ],
      points: [
        '容器共享宿主内核，所以这是隔离而非虚拟化，安全边界弱于虚拟机',
        '多阶段构建把产物和工具链分开，常常能把镜像体积降一个数量级',
        '注意 PID 1：一个不转发 SIGTERM 的进程会让优雅停机失效',
      ],
    },
  },
  {
    slug: 'kubernetes',
    name: 'Kubernetes',
    category: 'Infrastructure',
    years: '4 years',
    tagline: 'A set of control loops around etcd, continuously pushing actual state toward declared state.',
    understanding: [
      'The entire design reduces to one sentence: you declare the desired state, and controllers repeatedly compare it against reality and act. Once that clicks, the relationship between Deployment, ReplicaSet and Pod does not need memorising — they are the same idea at different levels of abstraction.',
      'The genuinely hard parts are never orchestration; they are resource limits and probes. Requests drive scheduling and limits drive eviction, and getting them wrong either wastes half the cluster or produces constant OOMKills. An aggressive liveness probe will restart a service that is merely slow, turning a small fault into an avalanche.',
    ],
    points: [
      'Requests affect scheduling, limits trigger throttling or kills — CPU over-limit throttles, memory over-limit is killed outright',
      'Liveness and readiness do different jobs: one restarts, the other removes from load balancing. Do not configure them identically',
      'All state lives in etcd, so etcd latency is control-plane latency',
    ],
    zh: {
      years: '4 年',
      tagline: '围绕 etcd 的一组控制循环，不断把实际状态推向声明的状态。',
      understanding: [
        '它的全部设计可以归结成一句话：你声明期望状态，控制器反复把它和现实比对并采取行动。想通这一点，Deployment、ReplicaSet 和 Pod 之间的关系就不需要背了 —— 它们是同一个想法在不同抽象层上的表现。',
        '真正难的从来不是编排，而是资源限制和探针。requests 决定调度、limits 触发驱逐，配错了要么浪费半个集群，要么不停地 OOMKill。一个过于激进的存活探针会把只是变慢的服务重启掉，把一次小故障放大成雪崩。',
      ],
      points: [
        'requests 影响调度，limits 触发限流或杀进程 —— CPU 超限是限流，内存超限是直接杀',
        '存活探针和就绪探针做的是不同的事：一个重启，一个摘流量。不要配成一样的',
        '所有状态都在 etcd 里，所以 etcd 的延迟就是控制平面的延迟',
      ],
    },
  },
  {
    slug: 'linux',
    name: 'Linux',
    category: 'Infrastructure',
    years: '6 years',
    tagline: 'The last layer of the investigation, and where every abstraction above it leaks.',
    understanding: [
      'When something higher up misbehaves, the answer is usually at the syscall boundary. `strace` to see what a process is waiting on, `/proc/<pid>/` for its real state, `ss` to check whether a connection queue is overflowing — these are closer to the truth than any APM dashboard.',
      'The page cache and the I/O model matter most. A database’s "memory hit rate" is substantially the kernel page cache doing its job, and the difference between `epoll` and `io_uring` sets the syscall overhead of a high-concurrency service.',
    ],
    points: [
      'Load average counts runnable plus uninterruptible (D state) processes, so high load can mean stuck I/O rather than busy CPUs',
      '`ss -lnt` and a growing Recv-Q tells you immediately whether the accept queue is overflowing',
      'The OOM killer picks by oom_score and logs to dmesg — check there first when a service "vanishes"',
    ],
    zh: {
      years: '6 年',
      tagline: '排查的最后一层，也是上面每一层抽象漏水的地方。',
      understanding: [
        '上层出问题时，答案通常在系统调用这一层。用 `strace` 看进程在等什么，用 `/proc/<pid>/` 看它的真实状态，用 `ss` 看连接队列有没有溢出 —— 这些比任何 APM 面板都更接近真相。',
        '最要紧的是页缓存和 I/O 模型。数据库的「内存命中率」很大程度上是内核页缓存在起作用；而 `epoll` 和 `io_uring` 的差别，决定了一个高并发服务的系统调用开销。',
      ],
      points: [
        'load average 统计的是可运行加不可中断（D 状态）的进程，所以高负载可能是 I/O 卡住，而不是 CPU 忙',
        '`ss -lnt` 里 Recv-Q 在涨，就立刻说明 accept 队列在溢出',
        'OOM killer 按 oom_score 挑目标并记录在 dmesg —— 服务「凭空消失」时先看这里',
      ],
    },
  },
  {
    slug: 'nginx',
    name: 'NGINX',
    category: 'Infrastructure',
    years: '4 years',
    tagline: 'An event-driven reverse proxy holding enormous connection counts with a fixed number of processes.',
    understanding: [
      'It runs an epoll event loop rather than a thread per connection, which is why it won the C10K problem: memory use is close to independent of connection count, and worker processes only need to match core count.',
      'Day to day, what actually matters is its role at the edge — timeouts, buffering, connection reuse. Most cases of "the backend is fast but users say it is slow" end up being a proxy timeout or a buffer setting.',
    ],
    points: [
      'Leave worker_processes on auto; raising it does not raise throughput',
      'Align `proxy_read_timeout` with real backend latency or long requests get cut off mid-flight',
      'Enable upstream keepalive to reuse backend connections and cut handshake overhead',
    ],
    zh: {
      years: '4 年',
      tagline: '事件驱动的反向代理，用固定数量的进程扛住巨大的连接数。',
      understanding: [
        '它跑的是 epoll 事件循环，而不是一个连接一个线程，这正是它赢下 C10K 的原因：内存占用几乎与连接数无关，worker 进程数只需要和核数对齐。',
        '日常真正起作用的是它在入口处的角色 —— 超时、缓冲、连接复用。大多数「后端很快但用户说慢」的情况，最后都落在某个代理超时或者缓冲区配置上。',
      ],
      points: [
        'worker_processes 保持 auto 就好；调大它不会提高吞吐',
        '`proxy_read_timeout` 要和后端真实延迟对齐，否则长请求会被从中间掐断',
        '打开 upstream keepalive 复用后端连接，能省下握手开销',
      ],
    },
  },
  {
    slug: 'prometheus',
    name: 'Prometheus',
    category: 'Observability',
    years: '4 years',
    tagline: 'Pull-based collection with multidimensional labels — the de facto standard for metrics.',
    understanding: [
      'Pulling puts the collector in control: a target being down is itself the signal (`up == 0`), with no separate heartbeat mechanism required. That is the most important difference from push-based systems.',
      'The easiest way to break it is label cardinality. Putting user IDs or request IDs into labels makes the time series count explode and takes the server down. That information belongs in logs or traces, never in metrics.',
    ],
    points: [
      'Cardinality is the lifeline: every combination of label values is a separate time series',
      'Histogram buckets should be designed around your SLO, or the computed P99 means nothing',
      'Use rate() on counters, with a window at least four times the scrape interval',
    ],
    zh: {
      years: '4 年',
      tagline: '拉取式采集加多维标签 —— 指标领域事实上的标准。',
      understanding: [
        '拉取让采集方掌握主动权：目标挂掉这件事本身就是信号（`up == 0`），不需要另外一套心跳机制。这是它和推送式系统最重要的差别。',
        '最容易把它搞垮的是标签基数。把用户 ID 或请求 ID 放进标签，时间序列数会爆炸并拖垮服务端。那类信息属于日志或链路追踪，绝不该进指标。',
      ],
      points: [
        '基数是生命线：每一种标签值的组合都是一条独立的时间序列',
        '直方图的分桶要围绕你的 SLO 设计，否则算出来的 P99 毫无意义',
        'rate() 用在 counter 上，时间窗口至少取抓取间隔的四倍',
      ],
    },
  },
  {
    slug: 'grafana',
    name: 'Grafana',
    category: 'Observability',
    years: '4 years',
    tagline: 'A dashboard earns its place by answering a question, not by displaying a metric.',
    understanding: [
      'I build dashboards under one rule: every panel must correspond to a specific decision. "Is the service healthy" is RED — rate, errors, duration. "Is it running out of room" is USE — utilisation, saturation, errors. Panels that fit neither are usually panels nobody looks at.',
      'On-call dashboards and investigation dashboards should be separate: the first has to show at a glance whether anything is wrong, and only the second needs the detail to drill into.',
    ],
    points: [
      'Keep the on-call view to the few SLO panels and push everything else into drill-downs',
      'Base alert thresholds on SLOs and error budget rather than an arbitrary 80% CPU',
      'Panels should link straight through to the matching logs and traces, or the investigation restarts from scratch',
    ],
    zh: {
      years: '4 年',
      tagline: '一块面板的价值在于回答问题，而不在于展示指标。',
      understanding: [
        '我做面板只守一条规矩：每一格都必须对应一个具体的判断。「服务健康吗」看 RED —— 速率、错误、时延；「资源还够吗」看 USE —— 使用率、饱和度、错误。两类都装不进去的格子，通常就是没人看的格子。',
        '值班面板和排查面板应该分开：前者要一眼看出有没有出事，只有后者才需要能下钻的细节。',
      ],
      points: [
        '值班视图只留那几块 SLO 面板，其余全部收进下钻页',
        '告警阈值要基于 SLO 和错误预算，而不是随手定的 80% CPU',
        '面板要能直接跳到对应的日志和链路，否则排查得从头再找一遍',
      ],
    },
  },
  {
    slug: 'react',
    name: 'React',
    category: 'Web',
    years: '4 years',
    tagline: 'UI as a function of state; the difficulty was always in organising the state.',
    understanding: [
      'Declarative rendering removes the drudgery of keeping the DOM in sync with state, but it relocates the complexity into state management. Deciding what is server state, what belongs in the URL and what is genuinely local is the decision that matters — get it wrong and no amount of good component design recovers it.',
      'Performance problems are nearly always unnecessary re-renders, and those usually come from unstable references. Understanding that `useMemo` and `useCallback` stabilise identity rather than cache computation is what keeps you out of that hole.',
    ],
    points: [
      'Server data does not belong in a global store — use a data layer that owns caching and invalidation',
      'Use stable IDs for `key`; array indices misplace state on insertion and deletion',
      'Not every page needs React — static content is better served by a zero-JS approach',
    ],
    zh: {
      years: '4 年',
      tagline: 'UI 是状态的函数；难的从来是怎么组织状态。',
      understanding: [
        '声明式渲染省掉了手工同步 DOM 的苦力活，但它把复杂度搬到了状态管理上。哪些是服务端状态、哪些该放进 URL、哪些才真正是组件本地的 —— 这个判断做错了，再好的组件设计也救不回来。',
        '性能问题几乎全是多余的重渲染，而重渲染多半来自不稳定的引用。理解 `useMemo` 和 `useCallback` 稳定的是引用身份而不是缓存计算，才不会掉进这个坑。',
      ],
      points: [
        '服务端数据不该放进全局 store —— 交给一个负责缓存与失效的数据层',
        '`key` 要用稳定的 ID；用数组下标会在增删时把状态错位',
        '不是每个页面都需要 React —— 静态内容用零 JS 的方案更合适',
      ],
    },
  },
  {
    slug: 'astro',
    name: 'Astro',
    category: 'Web',
    years: '2 years',
    tagline: 'Zero JavaScript by default; interactivity is opted into island by island.',
    understanding: [
      'On most content sites the interactivity is concentrated in a handful of components, yet the whole page pays the hydration cost anyway. The island architecture inverts that default: plain HTML unless you say otherwise.',
      'This site is the example. The only client-side script handles the theme toggle and the stack dialogs; everything else ships as static HTML.',
    ],
    points: [
      'Content collections validate frontmatter against a schema, so a typo fails the build instead of rendering as undefined',
      '`client:*` directives control hydration timing — `client:visible` defers below-the-fold JavaScript until it scrolls into view',
      'Reach for Next.js when you need SSR, API routes or a database; for a content site Astro is the better fit',
    ],
    zh: {
      years: '2 年',
      tagline: '默认零 JavaScript，交互按岛屿逐个选择性引入。',
      understanding: [
        '大多数内容型站点的交互只集中在少数几个组件上，整页却还是要为水合付出代价。岛屿架构把这个默认值反了过来：不特别声明，就是纯 HTML。',
        '这个站点就是例子。唯一的客户端脚本负责主题切换和技术栈弹层，其余一切都是静态 HTML。',
      ],
      points: [
        '内容集合会按 schema 校验 frontmatter，写错字段是构建失败，而不是渲染成 undefined',
        '`client:*` 指令控制水合时机 —— `client:visible` 会把首屏之外的 JavaScript 推迟到滚动进视口时',
        '需要 SSR、API 路由或数据库时再用 Next.js；内容站点用 Astro 更合适',
      ],
    },
  },
];
