const pluginsConf = require('./config/pluginsConf.js');
module.exports = {
  base: '/', //设置站点根路径
  title: 'xustudyxu\'s Blog',
  description: '一起学习编程!',
  dest: 'docs/.vuepress/dist',
  port: '7777',
  plugins: pluginsConf,
  head: [
    ['link', { rel: 'icon', href: './img/02.png' }],
    ['link', { rel: 'stylesheet', href: './css/style.css' }],
    ['script', { charset: 'utf-8', href: './js/main.js' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],

  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4']
  },
  theme: 'vdoing',
  themeConfig: {
    nav: require("./nav.js"),
    sidebar: require("./sidebar.js"),
    sidebarDepth: 0,
    lastUpdated: '上次更新',
    search: true,
    searchMaxSuggestions: 6,

    // algolia: {
    //     apiKey: '685c8fc1740599abf382c782da3717a8',
    //     indexName: 'xustudyxu-blog',
    //     // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
    //     appId: '4YPBTYO9VH',
    // },
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'xustudyxu/xustudyxu.github.io',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Github',

    // 以下为可选的编辑链接选项
    // 以下为可选的编辑链接选项

    // // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'xustudyxu/xustudyxu.github.io',
    // // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // // 默认是 false, 设置为 true 来启用


    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '帮助我改善此页面',
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:1812903531@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/xustudyxu',
        },
        {
          iconClass: 'icon-weixin',
          title: '微信',
          link: 'https://raw.githubusercontent.com/xustudyxu/xustudyxu.github.io/master/docs/.vuepress/public/img/wx.png',
        },
      ],
    },
    author: {
      name: '冯荣旭', // 必需
    },
    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://raw.githubusercontent.com/xustudyxu/xustudyxu.github.io/master/docs/.vuepress/public/img/01.png',
      name: 'xustudyxu',
      slogan: '一起学习编程!',
    },
    footer: {
      createYear: 2021, // 博客创建年份
      copyrightInfo:
        'xustudyxu', // 博客版权信息，支持a标签或换行标签</br>
    },
  }

}
