import katex from 'markdown-it-katex'
import footnote from 'markdown-it-footnote'


export default {
  base: '/celulas-solares/',

  lang: 'pt-BR',
  title: 'Células Solares sensibilizadas por corantes',
  description: 'Células Solares sensibilizadas por corantes.',

  head: [
    ['link', { rel: 'icon', href: "/celulas-solares/image/fluentui-emoji/sun_with_face_3d.png" }],
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
    logo: '/image/fluentui-emoji/sun_with_face_3d.png',

    nav: [
      { text: 'Insper', link: 'https://insper.edu.br' },
    ],
    
    localeLinks: {
      items: [
        {
          link: 'http://localhost:5173/celulas-solares/',
          text: '🇧🇷 pt-BR',
        },
      ]
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/FelixLuciano/celulas-solares'
      }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Introdução', link: '/' },
          { text: 'Relatório', link: '/relatorio' },
        ],
      },
    ],

    outline: 'deep',
    outlineTitle: 'Tópicos',

    footer: {
      message: 'Publicado sob a Licença MIT.<br/>Icones por <a href="https://github.com/microsoft/fluentui-emoji">microsoft/fluentui-emoji</a>.',
      copyright: 'Copyright © 2022'
    }
  }
}
