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
      'Shenzhen University and open courseware from MIT, Stanford, Harvard, Yale, Oxford and CMU.',
    'edu.headline': 'Learning for life runs on curiosity, not on being handed a syllabus.',
    'edu.standfirst':
      'A degree is where it starts. What actually determines how far you get is whether you keep teaching yourself things after it ends.',
    'edu.body1':
      'A school hands you a framework, and a set of professors who make sure the homework gets done. What it cannot hand you is the willingness to open a course on a Saturday, ten years after graduating, and relearn something you already thought you knew.',
    'edu.body2':
      'That kind of curiosity is not something you are born with, and nobody can install it for you. It gets built one incident at a time — a course picked up after a production failure, a textbook worked through because a paper made no sense on its own. Everything below is what that adds up to.',
    'edu.degree': 'The Degree',
    'edu.coursework': 'Coursework',
    'edu.open': 'Open Courseware',
    'edu.category.cs': 'Computer Science',
    'edu.category.ai': 'Artificial Intelligence',
    'edu.category.math': 'Mathematics',
    'edu.category.physics': 'Physics',
    'edu.category.econ': 'Economics',
    'edu.category.psych': 'Psychology',
    'edu.category.philo': 'Philosophy',
    'edu.openStandfirst': 'Best universities but free, what can I say?',
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
    'edu.description': '深圳大学的学位，以及 MIT、斯坦福、哈佛、耶鲁、牛津和 CMU 的公开课。',
    'edu.headline': '终生学习驱动力来自于内部的好奇心与热情，而非被动的知识灌输。',
    'edu.standfirst': '文凭只是个开始。真正决定你能走多远的，是毕业以后还愿不愿意自己找东西学。',
    'edu.body1':
      '学校能给你的，是一套完整的知识框架，和一群逼着你交作业的教授。学校给不了的，是毕业十年之后，你还愿不愿意在某个周末打开一门公开课，重新学一遍自己早就以为学过的东西。',
    'edu.body2':
      '这份好奇心不是天生自带的，也不是谁能塞给你的。它是每次线上故障之后自己去补一门课、每次读不懂一篇论文之后自己去啃一本教材，一点一点攒出来的。下面这些，就是这么攒出来的。',
    'edu.degree': '学历',
    'edu.coursework': '主修课程',
    'edu.open': '公开课程',
    'edu.category.cs': '计算机科学',
    'edu.category.ai': '人工智能',
    'edu.category.math': '数学',
    'edu.category.physics': '物理学',
    'edu.category.econ': '经济学',
    'edu.category.psych': '心理学',
    'edu.category.philo': '哲学',
    'edu.openStandfirst': '好的大学没有围墙',
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
