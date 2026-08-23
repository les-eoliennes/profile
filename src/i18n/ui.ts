export const LANGUAGES = {
  en: 'English',
  zh: '中文',
} as const;

export type Lang = keyof typeof LANGUAGES;

export const DEFAULT_LANG: Lang = 'en';

/**
 * Routes that exist in both editions. The language toggle only appears on
 * these; everywhere else there is nothing to switch to.
 */
export const TRANSLATED_ROUTES = ['/'] as const;

export const UI = {
  en: {
    'site.role': 'Software Engineer',
    'site.city': 'Shenzhen, CN',
    'site.edition': 'Vol. I',
    'site.description':
      'Backend and infrastructure engineer. Distributed systems, database internals, compilers and runtimes.',

    'nav.home': 'Front Page',
    'nav.education': 'Education',
    'nav.stack': 'Stack',
    'nav.about': 'About',

    'a11y.skip': 'Skip to content',
    'a11y.sections': 'Sections',
    'a11y.theme': 'Switch between the day and night edition',
    'a11y.lang': 'Read this page in Chinese',
    'theme.toDark': 'Night',
    'theme.toLight': 'Day',
    'lang.other': '中文',
    'lang.englishOnly': 'This section is in English only.',

    'front.kicker': 'Backend · Distributed Systems · Databases',
    'front.headline': 'I write the layer underneath, and I can read the layer under that.',
    'front.cta.work': 'The Work',
    'front.cta.stack': 'The Stack',
    'front.standfirst':
      'Software engineer working on backend systems and the infrastructure they sit on — distributed systems, database internals, and the runtimes in between.',
    'front.body1':
      'Most of the hard production problems I have worked on were never a matter of business logic being written incorrectly. They came from holding a wrong assumption about how the operating system, the network or the storage engine actually behaves.',
    'front.body2':
      'So I spend my time on two things: keeping the fundamentals sharp, and genuinely understanding the root cause after an incident rather than adding a retry and moving on. That is the whole of my method, and the rest of this paper is evidence for it.',

    'stats.years': 'Years shipping',
    'stats.languages': 'Languages in prod',
    'stats.courses': 'Open courses',
    'stats.incidents': 'Incidents owned',

    'work.heading': 'Selected Work',
    'work.readMore': 'Read the full report',

    'trailer.heading': 'What I use, and what I think of it',
    'trailer.body':
      'Seventeen marks, each one something I run in production. Open any of them and it becomes a short piece on what the tool solves, what it costs, and where it has caught me out.',
    'trailer.cta.stack': 'Open the Stack',
    'trailer.cta.education': 'Education',

    'colophon.reach': 'Reach the desk —',
    'colophon.imprint': 'Set in Bodoni Moda and Source Serif · Printed with Astro',
  },

  zh: {
    'site.role': '软件工程师',
    'site.city': '中国 · 深圳',
    'site.edition': '第一卷',
    'site.description': '后端与基础设施工程师。分布式系统、数据库内核、编译与运行时。',

    'nav.home': '头版',
    'nav.education': '教育',
    'nav.stack': '技术栈',
    'nav.about': '关于',

    'a11y.skip': '跳到正文',
    'a11y.sections': '版面导航',
    'a11y.theme': '切换日间 / 夜间版',
    'a11y.lang': '以英文阅读本页',
    'theme.toDark': '夜间版',
    'theme.toLight': '日间版',
    'lang.other': 'English',
    'lang.englishOnly': '该版面目前仅有英文。',

    'front.kicker': '后端 · 分布式系统 · 数据库',
    'front.headline': '我写下面那一层，也读得懂再下面那一层。',
    'front.cta.work': '看作品',
    'front.cta.stack': '看技术栈',
    'front.standfirst':
      '软件工程师，做后端系统和支撑它们的基础设施 —— 分布式系统、数据库内核，以及夹在中间的运行时。',
    'front.body1':
      '我处理过的棘手线上问题，几乎没有一个真的是业务逻辑写错了。根源往往是对操作系统、网络或者存储引擎的实际行为，抱着一个错误的假设。',
    'front.body2':
      '所以我的时间花在两件事上：把基础打扎实，以及在故障之后真正把根因搞清楚，而不是加一个重试就翻篇。这就是我全部的方法，这份报纸剩下的部分都是它的佐证。',

    'stats.years': '交付年限',
    'stats.languages': '生产语言',
    'stats.courses': '公开课程',
    'stats.incidents': '经手故障',

    'work.heading': '精选作品',
    'work.readMore': '阅读全文',

    'trailer.heading': '我用什么，以及怎么看它们',
    'trailer.body':
      '十七个标记，每一个都跑在我的生产环境里。点开任意一个，会展开一篇短文：这件工具解决什么问题、代价在哪，以及它在哪里坑过我。',
    'trailer.cta.stack': '打开技术栈',
    'trailer.cta.education': '教育背景',

    'colophon.reach': '联系本报 ——',
    'colophon.imprint': '正文使用 Bodoni Moda 与 Source Serif · 由 Astro 排印',
  },
} as const;

export type UIKey = keyof (typeof UI)['en'];
