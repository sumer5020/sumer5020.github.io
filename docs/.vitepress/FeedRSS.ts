import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const hostname = 'https://sumer5020.me'
const currentYear = new Date().getFullYear()

export async function FeedRSS(config: SiteConfig) {
  const feed = new Feed({
    title: 'Sumer Ahmed - sumer5020',
    description: 'A passionate full stack web developer, interested in developing, managing websites, APIs, databases and data analysis with 5 years experience.I provide services such website development, website Design, SPA, PWA, and API services, specializes in SEO Web Design and Search Engine Optimization.',
    id: hostname,
    link: hostname,
    language: 'en',
    image: `${hostname}/image/sumer5020.svg`,
    favicon: `${hostname}/favicon.ico`,
    copyright: `Copyright (c) 2023-${currentYear}, sumer5020`
  })

  const blog = await createContentLoader('blog/*.md', {
    excerpt: true,
    render: true
  }).load()

  const contact = await createContentLoader('contact/*.md', {
    excerpt: true,
    render: true
  }).load()

  const about = await createContentLoader('about/*.md', {
    excerpt: true,
    render: true
  }).load()

  const projects = await createContentLoader('projects/*.md', {
    excerpt: true,
    render: true
  }).load()

  blog.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  contact.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  about.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  projects.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, excerpt, frontmatter, html } of [...blog, ...contact, ...about, ...projects]) {
    feed.addItem({
      title: frontmatter.title,
      id: `${hostname}${url}`,
      link: `${hostname}${url}`,
      description: excerpt,
      content: html,
      author: [
        {
          name: frontmatter.author,
          link: frontmatter.twitter
            ? `https://twitter.com/${frontmatter.twitter}`
            : undefined
        }
      ],
      date: frontmatter.date
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
