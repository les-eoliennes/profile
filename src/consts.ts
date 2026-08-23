export const SITE = {
  name: 'Ace',
  role: 'Software Engineer',
  title: 'Ace — Software Engineer',
  description:
    'Backend and infrastructure engineer. Distributed systems, database internals, compilers and runtimes.',
  email: 'wow.itsme.ace@gmail.com',
  locale: 'en',
  /* Printed in the masthead, the way a paper prints its city of publication. */
  city: 'Shenzhen, CN',
  edition: 'Vol. I',
} as const;

export const NAV = [
  { href: '/', label: 'Front Page' },
  { href: '/education', label: 'Education' },
  { href: '/stack', label: 'Stack' },
  { href: '/about', label: 'About' },
] as const;

export const SOCIAL = [
  { href: 'https://github.com/', label: 'GitHub' },
  { href: 'https://x.com/', label: 'X' },
] as const;

/** Formal degree. */
export const EDUCATION = [
  {
    period: '2018 — 2022', // TODO: replace with your actual dates
    school: 'Shenzhen University',
    degree: 'B.Eng., Computer Science and Technology',
    detail:
      'Four years of systematic training in the fundamentals. Data structures, operating systems, networking, database systems and compilers — the courses that felt abstract at the time and turned out to explain almost every hard production incident since.',
  },
] as const;

/** Coursework from the degree. */
export const COURSEWORK = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Computer Networks',
  'Database Systems',
  'Compilers',
  'Computer Organization',
  'Discrete Mathematics',
  'Probability & Statistics',
  'Software Engineering',
  'Distributed Systems',
] as const;

/**
 * Open courseware worked through outside of work. These are the well-known
 * public course numbers; verify them against the current catalogue before
 * publishing, since MIT renumbered several of these in 2022.
 */
export const OPEN_COURSES = [
  {
    school: 'MIT',
    code: '6.824',
    title: 'Distributed Systems',
    year: '2023',
    note: 'The lab series is the real content: build a MapReduce, then Raft, then a sharded fault-tolerant key-value store on top of it. Nothing else I have done taught me as much about what "consensus" actually costs.',
  },
  {
    school: 'CMU',
    code: '15-445',
    title: 'Database Systems',
    year: '2023',
    note: 'Writing a buffer pool manager, a B+ tree index and a query executor by hand is what turned EXPLAIN output from a wall of jargon into something I can read.',
  },
  {
    school: 'CMU',
    code: '15-213',
    title: 'Introduction to Computer Systems',
    year: '2022',
    note: 'The CSAPP labs. Bomb lab and malloc lab in particular changed how I read a stack trace and how I think about memory layout.',
  },
  {
    school: 'MIT',
    code: '6.828',
    title: 'Operating System Engineering',
    year: '2022',
    note: 'Implementing xv6 pieces made system calls, page tables and context switches concrete rather than diagrams in a slide deck.',
  },
  {
    school: 'Stanford',
    code: 'CS144',
    title: 'Computer Networking',
    year: '2022',
    note: 'Building a working TCP implementation from the socket layer down. Retransmission and flow control stop being trivia once you have had to make them correct.',
  },
  {
    school: 'MIT',
    code: '6.006',
    title: 'Introduction to Algorithms',
    year: '2021',
    note: 'Went back through it properly rather than relying on interview-prep pattern matching. Amortised analysis finally clicked here.',
  },
] as const;

/**
 * Fundamentals. These are where engineering judgement comes from — they decide
 * whether you can reason your way to an answer when there is no existing one.
 */
export const FOUNDATIONS = [
  {
    area: 'Data Structures & Algorithms',
    items: [
      'Balanced trees, skip lists, B+ trees, LSM-trees',
      'Hashing, consistent hashing, Bloom filters',
      'Graph algorithms, dynamic programming, amortised analysis',
      'Complexity analysis and cache-friendly data layout',
    ],
  },
  {
    area: 'Operating Systems',
    items: [
      'Process and thread scheduling, context-switch cost',
      'Virtual memory, page tables, mmap and the page cache',
      'I/O models: blocking, multiplexed, io_uring',
      'Locks, atomics and memory ordering',
    ],
  },
  {
    area: 'Computer Networks',
    items: [
      'TCP congestion control, head-of-line blocking, RTT effects',
      'HTTP/1.1, HTTP/2, HTTP/3 and QUIC',
      'TLS handshakes, certificate chains, mTLS',
      'DNS, load balancing and service discovery',
    ],
  },
  {
    area: 'Database Systems',
    items: [
      'Storage engines: heap tables, index-organised tables, columnar',
      'Transactions: ACID, MVCC, isolation levels, phantom reads',
      'Query processing: parse, rewrite, optimise, execute',
      'Cost-based optimisation, join algorithms, reading plans',
      'Write-ahead logging, checkpoints and crash recovery',
    ],
  },
  {
    area: 'Distributed Systems',
    items: [
      'CAP and PACELC as practical trade-offs, not slogans',
      'Consensus: Raft and Paxos, leases, split brain',
      'Replication, sharding, rebalancing',
      'Idempotency, retries, backpressure, sagas and 2PC',
      'Observability: metrics, logs, distributed tracing',
    ],
  },
  {
    area: 'Compilers & Runtimes',
    items: [
      'Lexing, parsing, ASTs and intermediate representations',
      'Type systems and static analysis',
      'Garbage collection: generational, tri-colour marking, pause control',
      'Profiling: flame graphs, pprof, perf',
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
  },
  {
    period: '2021 — 2023',
    title: 'Backend Engineer',
    org: 'Data Platform',
    detail:
      'Maintained the real-time warehouse pipeline handling billions of events per day.',
  },
] as const;

/** Numbers for the masthead stats strip. */
export const STATS = [
  { label: 'Years shipping', value: '5' },
  { label: 'Languages in prod', value: '4' },
  { label: 'Open courses', value: '6' },
  { label: 'Incidents owned', value: '40+' },
] as const;
