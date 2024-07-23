import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HackathonWeekly",
  description: "HackathonWeekly",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: { light: "/light-logo.png", dark: "dark-logo.png", alt: "logo" },
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: '关于我们', link: '/about-us' },
      { text: '飞书协作文档', link: 'https://hackathonweekly.feishu.cn/wiki/WQ7EwFC7BijePAkMkAHcajkNnae' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hackathonweekly/hackathonweekly' }
    ]
  }
})
