module.exports = {
  base: '/VuePress-demo/',
  title: 'gupo-front-components',
  description: '前端组精心准备的 Vue 2.x 的组件库',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress', '@vuepress/active-header-links'],
  themeConfig: {
    logo: '/logo.jpg',
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/basic/button/' },
      { text: 'npm', link: 'https://www.npmjs.com/package/', target:'_blank' },
      { text: 'codeup', link: 'https://codeup.aliyun.com/gupo/gupo-front-components-vuepress', target:'_blank' },
    ],
    sidebar: {
      '/components/': [
        {
          path: '/components/introduce/',
          title: '开始',
        },
        {
          title: '通用',
          collapsable: false,
          children: [
            { title: 'Button 按钮', path: '/components/basic/button/' },
          ]
        },
      ],
    }
  }
}