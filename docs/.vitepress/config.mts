import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hackathon Weekly",
  description: "Hackathon Weekly",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: { light: "/light-logo.png", dark: "dark-logo.png", alt: "logo" },
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: '线上活动', link: 'https://hackathonweekly.feishu.cn/wiki/W5oAwI9o4irrBIkpYdxcQvSQnfK' },
      { text: '线下活动', link: 'https://hackathonweekly.feishu.cn/wiki/XVnTw947riOQJckIVsZcUVRln2c' },
      { text: '关于我们', link: '/about-us' },
      { text: '飞书知识库', link: 'https://hackathonweekly.feishu.cn/wiki/WQ7EwFC7BijePAkMkAHcajkNnae' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hackathonweekly/hackathonweekly' }
    ]
  }
})
