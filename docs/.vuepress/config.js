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

    nav: [
      {text: 'Guide', items: [
        {text: 'Replay 1', link: '/guide/replay1/'},
        {text: 'MKR Vidor 4000', link: '/guide/vidor/'}
      ]},
      // {text: 'User Manual', items: [
        //   {text: 'Replay 1', link: '/manual/replay1/'},
        //   {text: 'MKR Vidor 4000', link: '/manual/vidor/'}
        // ]}
      {text: 'Community', link: '/community'},
      {text: 'Contribute', link: '/contributing'}
    ],

    sidebar: {
      '/guide/': [
        {
          title: 'Getting Started',
          path: '/guide/',
          collapsable: false,

          // Getting Started Guides
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

  ]
}
