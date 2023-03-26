import { defaultTheme } from "vuepress"
import env from 'env-smart'

env.load()

function getEnv(key, envDefault) {
  if (process.env[key])
      return process.env[key]

  if (envDefault !== undefined)
      return envDefault

  console.error(`Required env '${key}' not set`)

  // Abort, this is critical for CI builds
  process.exit(1)
}

export default {
  title: 'FPGA Arcade',
  description: 'Documentation for FPGA Arcade projects.',

  theme: defaultTheme({
    // GitHub Integration
    repo: 'FPGAArcade',
    docsRepo: 'FPGAArcade/replay_webdocs',
    docsDir: 'docs',
    editLinks: true,

    // Misc
    logo: '/images/logo.png',
    poweredby: '/images/powered-by-vercel.png',
    poweredbylink: 'https://vercel.com?utm_source=fpgaarcade&utm_campaign=oss',
    lastUpdated: true,
    displayAllHeaders: false,

    replayAPI: getEnv('VUE_APP_REPLAY_API'),

    // Menus
    navbar: [
      {
        text: 'Get Started',
        children: [
          {text: 'Replay 1 (R1)', link: '/guide/replay1/'},
          {text: 'MKR Vidor 4000 (V4)', link: '/guide/vidor/'}
        ]
      },
      {
        text: 'DIY',
        children: [
          {text: 'Wireless Controllers', link: '/diy/wireless-controller-adapter'}
        ]
      },
      {
        text: 'Cores', link: '/cores/'
      },
      // {text: 'User Manual', items: [
      //    {text: 'Replay 1', link: '/manual/replay1/'},
      //    {text: 'MKR Vidor 4000', link: '/manual/vidor/'}
      // ]},
      {
        text: 'Links',
        children: [
          {text: 'Community', link: '/community'},
          {text: 'Contribute', link: '/contributing'},
          {text: 'FAQ', link: 'https://www.fpgaarcade.com/kbtopic/all/'},
          {text: 'News', link: 'https://www.fpgaarcade.com/news'},
          {text: 'Releases', link: 'https://build.fpgaarcade.com/releases/'}
        ]
      }
    ],

    sidebarDepth: 2,
    sidebar: {
      // Getting Started Guides
      '/guide/replay1/': [
        {
          title: 'Get Started (R1)',
          collapsable: true,

          children: [
            '/guide/replay1/',
            '/guide/replay1/accessories',
            '/guide/replay1/sd-setup',
            '/guide/replay1/firmware-upgrade',
            '/guide/replay1/troubleshooting',
          ]
        },
        {
          title: '68K Daughterboard',
          collapsable: true,

          children: [
            '/guide/replay1/daughterboard/',
            '/guide/replay1/daughterboard/hardware',
            '/guide/replay1/daughterboard/software'
          ]
        }
      ],

      '/guide/vidor/': [
        {
          title: 'Get Started (V4)',
          collapsable: false,

          children: [
            '/guide/vidor/',
            '/guide/vidor/accessories',
            '/guide/vidor/firmware',
            '/guide/vidor/sd-setup',
            '/guide/vidor/troubleshooting'
          ]
        }
      ],

      // User Manual
      '/manual/replay1/': [
        {
          title: 'User Manual',
        }
      ],

      // Fallback
      '/': [
        '/community',
        '/contributing'
      ]
    }
  }),

  // Plugins
  plugins: [
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],

    ['vuepress-plugin-medium-zoom', {
      selector: 'img.zoom-custom-img',
      delay: 1000,
      options: {
        margin: 24,
        background: '#222222',
        scrollOffset: 0,
      },
    }],
  ],


}
