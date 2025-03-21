/*vitepress config blog: https://laros.io/*/
import { createContentLoader, defineConfig, HeadConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { FeedRSS } from './FeedRSS'
import { englishThemeConfig, arabicThemeConfig } from './appThemeConfig'

const base = '/' // '/vite-plugin-pwa/'

export default withPwa(defineConfig({
    lastUpdated: true,
    transformHead: ({ pageData }) => {
        const head: HeadConfig[] = []
        head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
        head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])
        return head
    },
    vite: {
        logLevel: 'info',
        define: {
            __DATE__: `'${new Date().toISOString()}'`,
        },
    },
    base,
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
        ['meta', { name: 'robots', content: 'index, follow' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap' }],
        ['link', { rel: 'icon', href: '/icons/icon-512x512.png' }],
        ['meta', { name: 'theme-color', content: '#111827' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/image/sumer5020.svg' }],
        ['link', { rel: 'mask-icon', href: '/image/sumer5020.svg', color: '#111827' }],
        ['meta', { name: 'msapplication-TileColor', content: '#111827' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-512x512.png' }],
        ['meta', { name: 'google-site-verification', content: 'BBxJs4gm5grOCittFgrlj1Sa8FlKoaRAZiNUEvd0AsE' }],
    ],
    themeConfig: {
        logo: '/image/sumer5020.svg',
        //siteTitle: false,
        //colorMode: 'dark',
        //editLink: {
        //    pattern: 'https://github.com/sumer5020/sumer5020.github.io/edit/main/docs/:path',
        //    text: 'Edit this page on GitHub'
        //},
        //algolia: {
        //    appId: 'Z8NZAVZ5OU',
        //    apiKey: 'f077307c4e38a788baeabe75db1375ee',
        //    indexName: 'sumer5020',
        //},
        //carbonAds: {
        //    code: 'CEBDT27Y',
        //    placement: 'sumer5020'
        //},
        //carbon: 'CEBDT27Y',
        //carbonDark: 'CEBDT27Y',
        //carbonAd: 'CEBDT27Y',
        //carbonAdDark: 'CEBDT27Y',
        //sidebar: {
        //    '/': [
        //        {
        //            items: [
        //                { text: 'Home', link: '/' },
        //                { text: 'Blog', link: '/blog/' },
        //                { text: 'Projects', link: '/projects/' },
        //                { text: 'About', link: '/about' },
        //                { text: 'Contact', link: '/contact' }
        //            ]
        //        }
        //    ]
        //},
        socialLinks: [
            { icon: 'github', link: 'https://github.com/sumer5020' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/sumer5020' },
            { icon: 'instagram', link: 'https://www.instagram.com/sumer_5020/' },
            { icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>' }, link: 'https://wa.me/967772865158', ariaLabel: 'Whatsapp' },
        ],
        //footer: {
        //    //message: '',
        //    copyright: 'Copyright © 2023-present <a href="https://github.com/sumer5020">sumer5020</a>'
        //}
    },
    locales: {
        root: englishThemeConfig,
        ar: arabicThemeConfig
    },
    /* your VitePress options */
    /* Vite PWA Options */
    pwa: {
        mode: 'development',
        //base: '/',
        //scope: '/',
        registerType: 'autoUpdate',
        // injectRegister: 'inline',
        includeAssets: ['favicon.svg'],
        manifest: {
            name: 'Sumer Ahmed - sumer5020',
            start_url: '/',
            short_name: 'sumer5020',
            description: 'A personal profile site of sumer ahmed (sumer5020). A passionate full stack web developer, interested in developing, managing websites, APIs, databases and data analysis with 5 years experience.',
            theme_color: '#111827',
            background_color: '#F6F6F6',
            display: 'standalone',
            orientation: 'any',
            icons: [
                {
                    src: '/icons/icon-72x72.png',
                    sizes: '72x72',
                    type: 'image/png'
                },
                {
                    src: '/icons/icon-96x96.png',
                    sizes: '96x96',
                    type: 'image/png'
                },
                {
                    src: '/icons/icon-128x128.png',
                    sizes: '128x128',
                    type: 'image/png'
                },
                {
                    src: '/icons/icon-144x144.png',
                    sizes: '144x144',
                    type: 'image/png'
                },
                {
                    src: '/icons/icon-152x152.png',
                    sizes: '152x152',
                    type: 'image/png'
                },
                {
                    src: '/icons/icon-196x196.png',
                    sizes: '196x196',
                    type: 'image/png'
                },
                {
                    src: '/icons/icon-384x384.png',
                    sizes: '384x384',
                    type: 'image/png'
                },
                {
                    src: '/icons/icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any maskable'
                }
            ],
        },
        workbox: {
            globPatterns: ['**/*.{css,js,md,html,webp,svg,png,ico,txt,woff2}'],
        },
        experimental: {
            includeAllowlist: true,
        },
        devOptions: {
            enabled: true,
            suppressWarnings: true,
            navigateFallback: '/',
        },
    },
    buildEnd: FeedRSS,
    sitemap: {
        hostname: 'https://sumer5020.me/',
        lastmodDateOnly: false,
        /*
        transformItems: (items) => {
            // add new items or modify/filter existing items
            items.push({
                url: '/about',
                lastmod: new Date(),
                changefreq: 'daily',
                priority: 0.8,
            },
            {
                url: '/contact',
                lastmod: new Date(),
                changefreq: 'monthly',
                priority: 0.7,
            }
            return items
        }
        */
    }
}))
