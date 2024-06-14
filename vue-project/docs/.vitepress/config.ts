import { defineConfig } from 'vitepress'
import typedocSidebar from '../typedoc-api/typedoc-sidebar.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: typedocSidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qummy-RnD/frontend-template' }
    ]
  }
})
