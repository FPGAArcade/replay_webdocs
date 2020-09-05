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
    displayAllHeaders: true,

    replayAPI: getEnv('VUE_APP_REPLAY_API'),

    // Menus
    nav: [
      {text: 'Get Started', items: [
        {text: 'Replay 1', link: '/guide/replay1/'},
        {text: 'MKR Vidor 4000', link: '/guide/vidor/'}
      ]},
      // {text: 'User Manual', items: [
      //   {text: 'Replay 1', link: '/manual/replay1/'},
      //   {text: 'MKR Vidor 4000', link: '/manual/vidor/'}
      // ]},
      {text: 'Community', link: '/community'},
      {text: 'Contribute', link: '/contributing'}
    ],

    sidebar: {
      // Getting Started Guides
      '/guide/': [
        {
          title: 'Get Started',
          path: '/guide/',
          collapsable: false,

          // Replay1 and Vidor guides
          children: [
            {
              title: 'Replay 1',
              path: '/guide/replay1/',
              children: [
                'replay1/',
                'replay1/hardware',
                'replay1/sd-setup',
                'replay1/firmware-upgrade',
                'replay1/troubleshooting',
                {
                  title: '68K Daughterboard',
                  path: '/guide/replay1/daughterboard/',
                  children: [
                    'replay1/daughterboard/',
                    'replay1/daughterboard/hardware',
                    'replay1/daughterboard/software'
                  ]
                },
              ]
            },
            '/guide/vidor/'
          ],
        }
      ],

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
