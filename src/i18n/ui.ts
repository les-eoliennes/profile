export const LANGUAGES = {
  en: 'English',
  zh: '中文',
} as const;

export type Lang = keyof typeof LANGUAGES;

export const DEFAULT_LANG: Lang = 'en';

/**
 * Every route exists in both editions, so the language toggle is always
 * offered. Kept as a named constant because the toggle asks about it.
 */
export const ALL_ROUTES_TRANSLATED = true;

export const UI = {
  en: {
    'site.role': 'Software Engineer',
    'site.city': 'Kaohsiung, TW',
    'site.edition': 'Vol. I',
    'site.description':
      'Backend and infrastructure engineer. Distributed systems, database internals, compilers and runtimes.',

    'nav.home': 'Front Page',
    'nav.education': 'Education',
    'nav.stack': 'Stack',
    'nav.experience': 'Experience',

    'a11y.skip': 'Skip to content',
    'a11y.sections': 'Sections',
    'a11y.lang': 'Read this page in Chinese',
    'lang.other': '中文',

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
      '{n} marks, each one something I run in production. Open any of them and it becomes a short piece on what the tool solves, what it costs, and where it has caught me out.',
    'trailer.cta.stack': 'Open the Stack',
    'trailer.cta.education': 'Education',

    'colophon.reach': 'Reach the desk —',
    'colophon.imprint': 'Set in Bodoni Moda and Source Serif · Printed with Astro',

    'cat.Languages': 'Languages',
    'cat.Data': 'Data',
    'cat.Infrastructure': 'Infrastructure',
    'cat.Observability': 'Observability',
    'cat.Web': 'Web',

    'edu.section': 'Section II',
    'edu.title': 'Education',
    'edu.description':
      'Shenzhen University, open courseware from MIT, Stanford and CMU, and the fundamentals behind the engineering.',
    'edu.standfirst':
      'A degree, then a habit of going back to the source material. The courses below are the ones that keep proving useful.',
    'edu.degree': 'The Degree',
    'edu.coursework': 'Coursework',
    'edu.open': 'Open Courseware',
    'edu.openStandfirst':
      'Worked through outside of work, in evenings and weekends. Lecture videos on their own do not stick — every course here was done with its problem sets and labs.',
    'edu.fundamentals': 'Fundamentals',
    'edu.fundamentalsStandfirst':
      'Textbook knowledge only counts once it explains something you have seen in production. These are the parts that genuinely come up.',
    'edu.cta': 'See where the theory lands',

    'stack.section': 'Section III',
    'stack.title': 'The Stack',
    'stack.description':
      'The tools I use in production, and what I actually think about each one.',
    'stack.standfirst':
      'Every entry below is something I run in production. Open one and it becomes a piece on what the tool is for, what it costs, and where it has caught me out.',
    'stack.entries': 'entries',
    'stack.close': 'Close',
    'stack.learned': "What I've learned",

    'experience.section': 'Section IV',
    'experience.title': 'Experience',
    'experience.headline': 'The ceiling on your engineering is how deep you can read.',
    'experience.body1':
      'I am Ace, a software engineer working mainly on backend systems and infrastructure. The hard production problems I have dealt with were rarely a matter of business logic being wrong; they came from a wrong assumption about the operating system, the network or the storage engine.',
    'experience.body2':
      'That is why I keep going back to the fundamentals, and why after an incident I want the actual root cause rather than a retry that makes the symptom disappear.',
    'experience.body3':
      'I read Computer Science at Shenzhen University and have kept working through open courseware since — the distributed systems and database internals courses in particular changed how I work.',
    'experience.body4':
      'Currently open to conversations about backend and infrastructure roles, and always happy to talk about database internals with anyone who will sit still for it.',
    'experience.record': 'Record of Service',
    'experience.contact': 'Write to the desk',
    'experience.email': 'Email',

    'report.no': 'Report No.',
    'report.facts': 'The facts',
    'report.year': 'Year',
    'report.role': 'Role',
    'report.team': 'Team',
    'report.stack': 'Stack',
    'report.visit': 'Visit the site',
    'report.source': 'Read the source',
    'report.next': 'Next report',
    'report.continue': 'Continue',

    'nf.title': 'Page not found — 404',
    'nf.description': 'No content at this address.',
    'nf.error': 'Error 404',
    'nf.headline': 'Off the press',
    'nf.body':
      'No edition was ever printed at this address. The link may be mistyped, or the page has been pulled.',
    'nf.cta': 'Back to the front page',
  },

  zh: {
    'site.role': '软件工程师',
    'site.city': '高雄 | 台湾',
    'site.edition': '第一卷',
    'site.description': '后端与基础设施工程师，专注分布式系统、数据库内核与编译运行时。',

    'nav.home': '头版',
    'nav.education': '教育',
    'nav.stack': '技术栈',
    'nav.experience': '经历',

    'a11y.skip': '跳到正文',
    'a11y.sections': '版面导航',
    'a11y.lang': '以英文阅读本页',
    'lang.other': 'English',

    'front.kicker': '后端 · 分布式系统 · 数据库',
    'front.headline': '那些杀不死我的难题，必使我更强大。',
    'front.cta.work': '看作品',
    'front.cta.stack': '看技术栈',
    'front.standfirst':
      '我专注于高复杂度后端工程。不被特定的框架或方向绑定，我的核心优势在于对操作系统、网络、数据库与运行时行为的深刻理解，以及极强的跨领域攻坚能力。',
    'front.body1':
      '大部分复杂的系统故障，本质上都是对底层机制的认知偏差。拥有深刻的系统理解力，意味着能迅速跨越技术栈壁垒，直击复杂现象背后的底层病灶。',
    'front.body2':
      '所以我把时间花在两件事上：把基础打牢，出问题时刨到根因，而不是随手加个重试就翻篇。说到底就是这套方法，后面的内容都是证据。',

    'stats.years': '工作年资',
    'stats.languages': '偏好语言',
    'stats.courses': '公开课程',
    'stats.incidents': '经手故障',

    'work.heading': '精选作品',
    'work.readMore': '阅读全文',

    'trailer.heading': '我在用什么，又是怎么看的',
    'trailer.body':
      '一共 {n} 个标记，每个都跑在我的生产环境里。点开随便哪一个，会展开一篇短文，讲这工具解决什么问题、代价在哪，还有它在哪儿坑过我。',
    'trailer.cta.stack': '打开技术栈',
    'trailer.cta.education': '教育背景',

    'colophon.reach': '联系本报：',
    'colophon.imprint': '正文使用 Bodoni Moda 与 Source Serif · 由 Astro 排印',

    'cat.Languages': '编程语言',
    'cat.Data': '数据',
    'cat.Infrastructure': '基础设施',
    'cat.Observability': '可观测性',
    'cat.Web': '前端',

    'edu.section': '第二版',
    'edu.title': '教育背景',
    'edu.description': '深圳大学的学位，MIT、斯坦福和 CMU 的公开课，还有撑起这些工程判断的理论基础。',
    'edu.standfirst':
      '先是拿到一个学位，后来又养成一个习惯：什么都想刨根问底，找源头材料重学一遍。下面这些课，到现在都还在起作用。',
    'edu.degree': '学历',
    'edu.coursework': '主修课程',
    'edu.open': '公开课程',
    'edu.openStandfirst':
      '都是工作之外、晚上周末啃下来的。光看视频是记不住东西的，所以每一门都跟着做了配套的习题和实验。',
    'edu.fundamentals': '理论基础',
    'edu.fundamentalsStandfirst':
      '书上学的东西，得真能解释你在生产环境里见过的怪现象，才算数。下面这些是我确实反复用得上的部分。',
    'edu.cta': '看这些理论落在哪儿',

    'stack.section': '第三版',
    'stack.title': '技术栈',
    'stack.description': '我在生产环境里真正用的工具，还有我对每一件的实话实说。',
    'stack.standfirst':
      '下面每一样都在我的生产环境里跑着。点开哪个都行，会跳出一篇短文，聊聊这工具解决什么问题、代价是什么，还有它怎么坑过我。',
    'stack.entries': '项',
    'stack.close': '关闭',
    'stack.learned': '关键认识',

    'experience.section': '第四版',
    'experience.title': '经历',
    'experience.headline': '工程能力这东西，说到底比的是你肯往下挖多深。',
    'experience.body1':
      '我是 Ace，软件工程师，平时主要写后端和基础设施相关的东西。干这行时间长了会发现，线上真正难缠的问题很少是代码逻辑写错，多半是自己对系统、网络或者存储引擎的脾气摸得不够透。',
    'experience.body2':
      '所以我才总是回去啃基础，也才会在出故障之后非要挖到真正的根因，而不是加个重试把症状糊弄过去。',
    'experience.body3':
      '计算机科学是在深圳大学读的，毕业之后也一直在啃各种公开课，里面分布式系统和数据库内核那几门，是真的改变了我做事的方式。',
    'experience.body4':
      '目前对后端和基础设施方向的机会都愿意聊聊。数据库内核这个话题，只要你坐得住，我随时奉陪。',
    'experience.record': '履历',
    'experience.contact': '联系本报',
    'experience.email': '邮件',

    'report.no': '第',
    'report.facts': '概要',
    'report.year': '年份',
    'report.role': '角色',
    'report.team': '团队',
    'report.stack': '技术栈',
    'report.visit': '访问线上',
    'report.source': '查看源码',
    'report.next': '下一篇报道',
    'report.continue': '继续阅读',

    'nf.title': '页面不存在 — 404',
    'nf.description': '该地址没有内容。',
    'nf.error': '错误 404',
    'nf.headline': '查无此版',
    'nf.body': '这个地址上从未印过任何一版。可能是链接拼错了，也可能是该页已经撤下。',
    'nf.cta': '返回头版',
  },
} as const;

export type UIKey = keyof (typeof UI)['en'];
