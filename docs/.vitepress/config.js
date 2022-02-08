module.exports = {
    title: 'Pyqi文档',
    description: 'Python多版本安装器',
    lang: 'zh-CN',
    themeConfig: {
        nav: [
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
        }
    }
}
function getDemoSidebar() {
    return [
      {
        text: "入门",
        children: [{
          text: "安装",
          link: "/guide/install"
        }]
      },
    ]
}