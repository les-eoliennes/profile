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
  },
];
