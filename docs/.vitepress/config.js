import katex from 'markdown-it-katex'
import footnote from 'markdown-it-footnote'


export default {
  base: '/celulas-solares/',

  lang: 'pt-BR',
  title: 'Células Solares',
  description: 'Células Solares sensibilizadas por corantes.',

  head: [
    ['link', { rel: 'icon', href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22-0.1em%22 y=%22.90em%22 font-size=%2286%22>🌞</text></svg>" }],
    ['link', { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css" }]
  ],

  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(katex)
      md.use(footnote)
    }
  },

  themeConfig: {
    siteTitle: 'Células Solares',
    logo: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22-0.1em%22 y=%22.90em%22 font-size=%2286%22>🌞</text></svg>',

    nav: [
      { text: 'Insper', link: 'https://insper.edu.br' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FelixLuciano/celulas-solares' }
    ],

    // sidebar: [
    //   {
    //     text: 'Introdução',
    //     items: [
    //       { text: 'Sobre', link: '/sobre/' },
    //     ],
    //   },
    //   {
    //     text: 'Relatórios',
    //     items: [
    //       { text: '2022', link: '/relatorios/2022' },
    //     ],
    //   },
    // ],

    outline: 'deep',
    outlineTitle: 'Tópicos',

    footer: {
      message: 'Publicado sob a Licença MIT.',
      copyright: 'Copyright © 2022'
    }
  }
}
