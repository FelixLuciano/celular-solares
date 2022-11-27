import katex from 'markdown-it-katex'
import footnote from 'markdown-it-footnote'


export default {
  base: '/celulas-solares/',

  lang: 'pt-BR',
  title: 'Células Solares',
  description: 'Células Solares sensibilizadas por corantes.',

  head: [
    ['link', { rel: 'icon', href: "/image/sun_with_face_color.svg" }],
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
    logo: 'public/image/sun_with_face_3d.png',

    nav: [
      { text: 'Insper', link: 'https://insper.edu.br' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FelixLuciano/celulas-solares' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Sobre', link: '/' },
          { text: 'Relatório', link: '/relatorio' },
        ],
      },
    ],

    outline: 'deep',
    outlineTitle: 'Tópicos',

    footer: {
      message: 'Publicado sob a Licença MIT.',
      copyright: 'Copyright © 2022'
    }
  }
}
