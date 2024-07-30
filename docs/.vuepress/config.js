import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    // theme: defaultTheme(),

    lang: 'zh-CN',
    title: 'Z',
    description: '这是我的第一个 VuePress 站点',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    repo: 'Zeil2008/mywebsite',


    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '主页',
                link: '/',
                // 该元素将一直处于激活状态
                activeMatch: '/',
            },
            //两层嵌套
            {
                text: '语言',
                children:
                    [
                        {
                            text: '编程',
                            children:
                                [
                                    { text: 'C', link: 'https://code.iglooblog.top/c/1.html' },
                                    { text: 'Js', link: '/js/' }
                                ]
                        },
                        {
                            text: '标记',
                            children:
                                [
                                    { text: 'HTML', link: 'https://code.iglooblog.top/html/1.html' },
                                    { text: 'Markdown', link: 'https://1m29yg5p67.k.topthink.com/@markdown' },
                                    { text: 'CSS', link: 'https://code.iglooblog.top/css/1.html' }
                                ]
                        },
                    ],
            },
            //多个条目
            {
                text: '课程',
                children: [
                    { text: '政治', link: 'politics' },
                    { text: '英语', link: 'english' }
                ],
            },
            {
                text: '关于',
                link: '/about',
            },
        ],
    }),
})

