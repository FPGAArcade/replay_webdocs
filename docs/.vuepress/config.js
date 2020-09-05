require('env-smart').load()

function getEnv(key, envDefault) {
  if (process.env[key])
      return process.env[key]

  if (envDefault !== undefined)
      return envDefault

  console.error(`Required env '${key}' not set`)

  // Abort, this is critical for CI builds
  process.exit(1)
}

module.exports = {
  title: 'FPGA Arcade',
  description: 'Documentation for FPGA Arcade projects.',

  themeConfig: {
    // GitHub Integration
    repo: 'fpgaarcade',
    docsRepo: 'FPGAArcade/replay_docs',
    docsDir: 'docs',
    editLinks: true,

    // Misc
    lastUpdated: true,
    displayAllHeaders: false,

    replayAPI: getEnv('VUE_APP_REPLAY_API'),

    // Menus
    nav: [
      {text: 'Get Started', items: [
        {text: 'Replay 1', link: '/guide/replay1/'},
        {text: 'MKR Vidor 4000', link: '/guide/vidor/'}
      ]},
      {text: 'User Manual', items: [
         {text: 'Replay 1', link: '/manual/replay1/'},
         {text: 'MKR Vidor 4000', link: '/manual/vidor/'}
      ]},
      {text: 'Community', link: '/community'},
      {text: 'Contribute', link: '/contributing'}
    ],

    sidebarDepth: 2,
    sidebar: {
      // Getting Started Guides
      '/guide/replay1/': [
        {
          title: 'Get Started (R1)',
          collapsable: true,

          // Replay1 and Vidor guides
          children: [
            '/guide/replay1/',
            '/guide/replay1/hardware',
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

          // Replay1 and Vidor guides
          children: [
          ]
        }
      ],

      // User Manual
      // '/manual/replay1/': [
      //   {
      //     title: 'User Manual',
      //   }
      // ],

      // Fallback
      '/': [
        '/community',
        '/contributing'
      ]
    }
  },

  // Plugins
  plugins: [

    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }]
    // ['container', {
    //   type: 'upgrade',
    //   before: info => `<UpgradePath title="${info}">`,
    //   after: '</UpgradePath>',
    // }]

  ],


}
