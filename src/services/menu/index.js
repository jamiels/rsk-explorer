export default async function getMenuData() {
  return [
    // VB:REPLACE-START:MENU-CONFIG
    {
      title: 'Dashboard',
      key: '__dashboard',
      url: '/dashboard',
      icon: 'fe fe-home',
    },
    {
      title: 'Prices',
      key: 'c1poxa',
      url: '/rskprice',
      icon: 'fe fe-dollar-sign',
    },
    {
      title: 'Liquidity Pools',
      key: 'z0tyaa',
      url: '/pools',
      icon: 'fe fe-droplet',
    },
    {
      title: 'Blocks',
      key: 'piwuf',
      url: '/blocks',
      icon: 'fe fe-package',
    },
    {
      title: 'Transactions',
      key: 'flqwam',
      url: '/transactions',
      icon: 'fe fe-minimize-2',
    },
    {
      title: 'Addresses',
      key: 'mc08xyl',
      url: '/addresses',
      icon: 'fe fe-at-sign',
    },
    {
      title: 'Nodes',
      key: 'd1yqvn',
      url: '/nodes',
      icon: 'fe fe-copy',
    },
    {
      title: 'Tokens',
      key: 'x0xri9',
      url: '/tokens',
      icon: 'fe fe-git-branch',
    },
    {
      title: 'Stats',
      key: 'i6av4',
      url: '/stats',
      icon: 'fe fe-activity',
    },
    {
      title: 'Block Details',
      key: 'eq2j1k',
      url: '/block',
    },
    {
      title: 'Address Details',
      key: '3hh5bj',
      url: '/address',
    },

    // VB:REPLACE-END:MENU-CONFIG
  ]
}
