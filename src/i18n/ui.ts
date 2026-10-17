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
    'front.headline': 'From an idea to a product in users\' hands.',
    'front.cta.work': 'The Work',
    'front.cta.stack': 'The Stack',
    'front.standfirst':
      'Senior full-stack engineer. From scoping requirements and interaction design to web and app development and server deployment, I have built every layer of a product with my own hands. At my best building new products from scratch, and equally able to take over a legacy system that has grown unmanageable and rebuild it.',
    'front.body1':
      'Everything starts from the product. When a requirement comes in, I first work out what users actually need, then decide how the interface should work, how the API should be shaped and how the data should be stored — and only then start building. With both the front end and the back end in my hands, the design can start from the whole, instead of being dictated by the limits of any one layer.',
    'front.body2':
      'What comes out is one piece, interface and back end alike: interactions that feel natural, clean APIs, and data structures that hold up as the business changes. And once it is live, whichever layer a problem turns up in, I can pick it up.',

    'stats.years': 'Years shipping',
    'stats.languages': 'Languages in prod',
    'stats.tokens': 'tokens',
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
    'cat.AI': 'AI Tools',

    'edu.section': 'Section II',
    'edu.title': 'Education',
    'edu.description':
      'Shenzhen University and open courseware from MIT, Stanford, Harvard, Yale, Oxford and CMU.',
    'edu.headline': 'A computer science degree, and a habit of studying after it.',
    'edu.standfirst':
      'I studied Computer Science and Technology at Shenzhen University, and have kept studying since — filling the gaps the work exposes, and following whatever else interests me.',
    'edu.body1':
      'There is no fixed syllabus. A course usually starts from something at work: a system I do not fully understand sends me to the course that teaches how it works, and I take it from the first lecture to the last, labs included.',
    'edu.body2':
      'Since graduating, most of my studying has been open courseware. Computer science and AI are the day job; maths and physics shore up the foundations; economics, psychology, linguistics and philosophy are for interest. I am currently learning French at the Alliance Française.',
    'edu.degree': 'The Degree',
    'edu.coursework': 'Coursework',
    'edu.open': 'Open Courseware',
    'edu.category.cs': 'Computer Science',
    'edu.category.ai': 'Artificial Intelligence',
    'edu.category.math': 'Mathematics',
    'edu.category.physics': 'Physics',
    'edu.category.econ': 'Economics',
    'edu.category.psych': 'Psychology',
    'edu.category.ling': 'Linguistics',
    'edu.category.philo': 'Philosophy',
    'edu.openStandfirst': 'Best universities but free, what can I say?',
    'edu.language': 'Language',
    'edu.lectures': 'Lectures',
    'edu.labs': 'Labs',
    'edu.cta': 'See where the theory lands',

    'stack.section': 'Section III',
    'stack.title': 'The Stack',
    'stack.description':
      'The tools I use in production, and what I actually think about each one.',
    'stack.headline':
      'Every tool is a finite thing. The boundless was built entirely out of finite things.',
    'stack.standfirst':
      'An instrument has a shape; what you are reaching for does not. What you can hold is never quite the thing you were after.',
    'stack.body1':
      'A tool is a worldly object, and a bounded one: you can hold it, it wears out, it gets replaced, and not one of them does everything. What is strange is that nothing large has ever been built out of anything else. Databases, compilers, schedulers — each was stacked up by someone out of whatever limited instruments were on the bench at the time.',
    'stack.body2':
      'So choosing was never a matter of finding the best one. It is a matter of deciding which set of limits you are willing to live inside. Every instrument has already made part of the judgement on your behalf: whatever it renders easy, it also renders easy to stop questioning. What matters is not landing on the one that fits the hand, but keeping track of what you signed away — at what price, and for which kind of certainty.',
    'stack.entries': 'entries',
    'stack.close': 'Close',
    'stack.learned': "What I've learned",

    'experience.section': 'Section IV',
    'experience.title': 'Experience',
    'experience.headline': 'Depth is known by crossing.',
    'experience.body1':
      'The word comes from the Latin experiri, to try, and shares its root with periculum, danger. Where nothing was risked, nothing was learned. The Chinese 经验 says the same in two characters: one for passing through, one for putting to the test. Both ask you to go there yourself.',
    'experience.body2':
      'You cannot step into the same river twice. Systems are like that: the code, the traffic and the people are never quite the same ones tomorrow. So experience is never an answer to copy out. It is a kind of judgement — recognising a familiar current in water you have never seen.',
    'experience.body3':
      'We know more than we can tell. Most of what experience teaches settles into the hands: the log line that makes you stop, the graph that unsettles you before you can say why. The record below can give times and places. What it cannot tell is the part that matters.',
    'experience.body4':
      "So I hold my own experience with a little doubt. It saves me wrong turns, and it can also hide new roads. If you like, write and tell me about a river you have crossed — someone else's experience is a road I have not walked yet.",
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
    'nav.experience': '职涯',

    'a11y.skip': '跳到正文',
    'a11y.sections': '版面导航',
    'a11y.lang': '以英文阅读本页',
    'lang.other': 'English',

    'front.kicker': '后端 · 分布式系统 · 数据库',
    'front.headline': '从一个想法，到用户手中的产品。',
    'front.cta.work': '看作品',
    'front.cta.stack': '看技术栈',
    'front.standfirst':
      '资深全栈工程师。从需求梳理、交互设计，到 Web 与 App 开发、服务器部署，一个产品的每一层我都亲手做过。擅长从零搭建新产品，也能接手并重构积重难返的旧系统。',
    'front.body1':
      '对我来说，一切从产品本身出发。一个需求进来，先想清楚用户要什么，再决定界面怎么做、接口怎么设计、数据怎么存，最后才动手实现。前后端都在自己手里，方案可以从整体出发，而不是被某一层的限制牵着走。',
    'front.body2':
      '这样做出来的东西，界面和后台是一体的：交互顺手，接口简洁，数据结构经得起业务的变化。上线之后，无论问题出在哪一层，我都能接住。',

    'stats.years': '工作年资',
    'stats.languages': '偏好语言',
    'stats.tokens': 'Tokens',
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
    'cat.AI': 'AI 工具',

    'edu.section': '第二版',
    'edu.title': '教育背景',
    'edu.description': '深圳大学的学位，以及 MIT、斯坦福、哈佛、耶鲁、牛津和 CMU 的公开课。',
    'edu.headline': '计算机科学主修，毕业后接着自学。',
    'edu.standfirst': '在深圳大学读完计算机科学与技术，之后一直没停下：工作里缺什么就补什么，感兴趣的也会去学。',
    'edu.body1':
      '选课没有固定计划，通常从工作里碰到的问题出发：某个系统没完全弄懂，就去找讲它原理的那门课，从第一讲听到最后一讲，实验也一起做。',
    'edu.body2':
      '毕业后的学习主要靠公开课。计算机和人工智能是本行，数学和物理用来补底子，经济学、心理学、语言学和哲学则是出于兴趣。目前在法语联盟学法语。',
    'edu.degree': '学历',
    'edu.coursework': '主修课程',
    'edu.open': '公开课程',
    'edu.category.cs': '计算机科学',
    'edu.category.ai': '人工智能',
    'edu.category.math': '数学',
    'edu.category.physics': '物理学',
    'edu.category.econ': '经济学',
    'edu.category.psych': '心理学',
    'edu.category.ling': '语言学',
    'edu.category.philo': '哲学',
    'edu.openStandfirst': '好的大学没有围墙',
    'edu.language': '语言',
    'edu.lectures': '讲授',
    'edu.labs': '实验',
    'edu.cta': '看这些理论落在哪儿',

    'stack.section': '第三版',
    'stack.title': '技术栈',
    'stack.description': '我在生产环境里真正用的工具，还有我对每一件的实话实说。',
    'stack.headline': '器以载道：以有限之工具，构无涯之世界。',
    'stack.standfirst': '器有形，道无形。人手里能握住的永远是前者，想抵达的却始终是后者。',
    'stack.body1':
      '形而下者谓之器。工具都是器：摸得着、有边界、会老、会被替掉，没有哪一件是万能的。可人能造出多大的东西，偏偏就是靠这些有限的器一层层垒起来的——数据库、编译器、调度器，哪一样不是前人拿当时手上那点工具凑出来的。',
    'stack.body2':
      '所以选器从来不是挑最好的那件，而是选自己愿意活在哪一重限制里。每一件工具都替你预先做掉了一部分判断：它让某些事变得顺手，也就让另一些事变得几乎想不起来。要紧的不是找到那件称手的家伙，而是始终知道自己让渡了什么——用多大的代价，换来了哪一种确定。',
    'stack.entries': '项',
    'stack.close': '关闭',
    'stack.learned': '关键认识',

    'experience.section': '第四版',
    'experience.title': '职涯',
    'experience.headline': '涉过的水，才知深浅。',
    'experience.body1':
      '英文的 experience 来自拉丁文 experiri，意思是「去试」，和 periculum——「危险」——同出一个词根。没有冒过险的地方，就谈不上经验。中文说的是同一件事：经，是走过；验，是证过。两个字，都要你亲自去一趟。',
    'experience.body2':
      '人不能两次踏进同一条河流。系统也是这样：今天的代码、流量和人，明天都已不是原来那一批。所以经验从来不是一份可以照抄的答案，而是一种判断——在没见过的水里，认出熟悉的暗流。',
    'experience.body3':
      '我们知道的，总比我们说得出的多。经验大多沉在手上：读日志时让你停下的那一行，看监控时让你说不清缘由就不安的那条曲线。下面的履历写得出时间和地点，写不出的那部分，才是它真正的内容。',
    'experience.body4':
      '所以我对自己的经验，始终留着一点怀疑：它让我少走弯路，也可能让我看不见新路。如果你愿意，写信告诉我你涉过的那条河——别人的经验，是我还没走过的路。',
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
