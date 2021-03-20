// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '程序语言',
    link: '/code/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      { text: 'Go语言笔记', link: '/pages/05f204/' },
      { text: 'Java语言笔记', link: '/pages/0b69c8/' },
    ],
  },
  {
    text: '数据库',
    link: '/database/',
    items: [
      { text: 'MySQL', link: '/pages/1aef7c/' },
      { text: 'Redis', link: '/pages/cbd711/' },
      { text: 'MongoDB', link: '/pages/cbd711/' },
    ],
  },
  {
    text: '基础学科',
    link: '/base/',
    items: [
      { text: '操作系统', link: '/pages/5bfa72/' },
      { text: '计算机网咯', link: '/pages/6bb966/' },
    ],
  },
  {
    text: '框架',
    link: '/frame/',
    items: [
      { text: 'spring全家桶', link: '/pages/f2a556/' },
    ],
  },
  {
    text: '软件和系统',
    link: '/system/',
    items: [
      { text: 'Git使用', link: '/pages/6bf004/' },
      { text: 'Linux系统相关', link: '/pages/a5d462/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  }
]
