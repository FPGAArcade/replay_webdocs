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
                '/guide/replay1/hardware',
              ]
            },
            '/guide/vidor/'
          ],
        } ],

      // Fallback
      '/': [
        '/contributing'
      ]
    }

  }
}
