module.exports = {
    title: 'Pyqi文档',
    description: 'Python多版本安装器',
    lang: 'zh-CN',
    head: [
      ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      // ...其他标签
    ],
    themeConfig: {
        navbar: [
            {
                "text": '指南',
                "link": '/guide/install'
            },
            {
                "text": 'Github',
                "link": 'https://github.com/redish101/pyqi'
            }
        ],
        sidebar: {
            '/': getDemoSidebar(),
        },
    docsRepo: 'https://github.com/redish101/pyqi-docs',
    docsBranch: 'development',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: '在Github上编辑',
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新'
    },
    plugins: [
        [
          '@vuepress/plugin-search',
          {
            locales: {
              '/': {
                placeholder: '搜索',
              },
              '/': {
                placeholder: '搜索',
              },
            },
          },
        ],
        [
            '@vuepress/plugin-external-link-icon',
            {
              locales: {
                '/': {
                  openInNewWindow: '在新窗口打开',
                },
                '/zh/': {
                  openInNewWindow: '在新窗口打开',
                },
              },
            },
          ],
          [
            '@vuepress/pwa',
            {
              skipWaiting: true,
            },
          ],
      ]
}
function getDemoSidebar() {
    return [
      {
        text: "介绍",
        link: "/guide"
      },
      {
        text: "入门",
        children: [{
          text: "安装",
          link: "/guide/install"
        }]
      },
    ]
}