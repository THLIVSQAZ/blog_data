module.exports = {
  title: 'THLIVSQAZ',
  description: 'THLIVSQAZ的github pages',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },
    authorAvatar: '/Avatar.jpg',
    noFoundPageByTencent: false,
    friendLink: [
      {
        title: 'gorquan',
        link: 'https://blogs.gorquan.cn/'
      },
      {
        title: 'smile',
        link: 'https://smilecli.kirarasmile.cn/'
      },
      {
        title: 'TYGX',
        link: 'https://tydaytygx.github.io/'
      }
    ]
  }
}