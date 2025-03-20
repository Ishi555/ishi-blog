/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://slate-blog-demo.vercel.app',
  avatar: '/blog.png',
  title: 'blog',
  description: 'a blog.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 blog Design',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/SlateDesign/slate-blog'
    },
]
});