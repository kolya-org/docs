/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  asset: [
      'account-asset/intro',
    {
      type: 'category',
      label: 'Transfer Endpoint',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'account-asset/transfer'
        }
      ]
    },
    {
      type: 'category',
      label: 'Withdraw and Deposit endpoint',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'account-asset/withdraw-deposit'
        }
      ]
    },
    {
      type: 'category',
      label: 'Master-Sub User Endpoint',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'account-asset/user'
        }
      ]
    },
    'account-asset/rate-limit',
  ],
  v3SideBar: [
      'v3/intro',
    {
      type: 'category',
      label: 'Derivatives',
      link: {
        type: 'generated-index',
        title: 'Derivatives Guides',
        description:
            "Let's learn about derivatives concepts!",
        image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          label: 'REST API',
          link: {
            type: 'generated-index',
            title: 'Rest API Guides',
            description:
                "Let's learn about rest api modules!",
            image: '/img/docusaurus.png',
          },
          items: [
            {
              type: 'category',
              label: 'Market data',
              link: {
                type: 'generated-index',
                title: 'Market collections',
                description:
                    "Let's learn about market!",
                image: '/img/docusaurus.png',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/derivatives/rest-public'
                }
              ]
            },
            {
              type: 'category',
              label: 'Unified Margin',
              link: {
                type: 'generated-index',
                title: 'Unified Margin Guides',
                description:
                    "Let's learn about unified concepts!",
                image: '/img/docusaurus.png',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/derivatives/rest-unified'
                }
              ]
            },
            {
              type: 'category',
              label: 'Contract',
              link: {
                type: 'generated-index',
                title: 'Contract Guides',
                description:
                    "Let's learn about contract concepts!",
                image: '/img/docusaurus.png',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/derivatives/rest-contract'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'WebSocket Stream',
          items: [
            {
              type: 'category',
              label: 'Public Channel',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/derivatives/wss-public'
                }
              ]
            },
            {
              type: 'category',
              label: 'Private Channel (UM)',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/derivatives/wss-unified'
                }
              ]
            },
            {
              type: 'category',
              label: 'Private Channel (contract)',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/derivatives/wss-contract'
                }
              ]
            }
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Spot',
      link: {
        type: 'generated-index',
        title: 'Spot Guides',
        description:
            "Let's learn about spot concepts!",
        image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          label: 'REST API',
          link: {
            type: 'generated-index',
            title: 'Rest API Guides',
            description:
                "Let's learn about rest api modules!",
            image: '/img/docusaurus.png',
          },
          items: [
            {
              type: 'category',
              label: 'Market data',
              link: {
                type: 'generated-index',
                title: 'Market collections',
                description:
                    "Let's learn about market!",
                image: '/img/docusaurus.png',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/rest-public'
                }
              ]
            },
            {
              type: 'category',
              label: 'Trade',
              link: {
                type: 'generated-index',
                title: 'Spot Trade Guides',
                description:
                    "Let's learn about spot trade concepts!",
                image: '/img/docusaurus.png',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/rest-spot'
                }
              ]
            },
              'v3/spot/wallet',
            {
              type: 'category',
              label: 'Cross Margin Trade',
              link: {
                type: 'generated-index',
                title: 'Spot Margin Guides',
                description:
                    "Let's learn about margin concepts!",
                image: '/img/docusaurus.png',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/rest-spot-margin'
                }
              ]
            },
            {
              type: 'category',
              label: 'Leveraged Token',
              link: {
                type: 'generated-index',
                title: 'ETP Guides',
                description:
                    "Let's learn about ETP concepts!",
                image: '/img/docusaurus.png',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/rest-etp'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'WebSocket Stream',
          items: [
            {
              type: 'category',
              label: 'Public Channel',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/wss-public'
                }
              ]
            },
            {
              type: 'category',
              label: 'Private Channel',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/wss-private'
                }
              ]
            }
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Copy Trade',
      link: {
        type: 'generated-index',
        title: 'Copy Trade Guides',
        description:
            "Let's learn about copy trade concepts!",
        image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          label: 'REST API',
          link: {
            type: 'generated-index',
            title: 'Rest API Guides',
            description:
                "Let's learn about rest api modules!",
            image: '/img/docusaurus.png',
          },
          items: [
            {
              type: 'category',
              label: 'Market data',
              link: {
                type: 'generated-index',
                title: 'Market collections',
                description:
                    "Let's learn about market!",
                image: '/img/docusaurus.png',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/copy-trade/rest-public'
                }
              ]
            },
            {
              type: 'category',
              label: 'Trade',
              link: {
                type: 'generated-index',
                title: 'Copy Trade Trade Endpoint Guides',
                description:
                    "Let's learn about trade concepts!",
                image: '/img/docusaurus.png',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/copy-trade/rest-trade'
                }
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'WebSocket Stream',
          items: [
            {
              type: 'category',
              label: 'Public Channel',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/copy-trade/wss-public'
                }
              ]
            },
            {
              type: 'category',
              label: 'Private Channel',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/copy-trade/wss-private'
                }
              ]
            }
          ]
        },
      ]
    }
  ],
  accountAssetV1SideBar: [
      'pre-version/account-asset/intro',
    {
      type: "category",
      label: "Transfer Endpoints",
      items: [
        {
          type: "autogenerated",
          dirName: "pre-version/account-asset/transfer"
        }
      ]
    },
    {
      type: "category",
      label: "Withdraw and Deposit Endpoints",
      items: [
        {
          type: "autogenerated",
          dirName: "pre-version/account-asset/withdraw-deposit"
        }
      ]
    }
  ],
  futureV2SideBar: [
    'pre-version/future/intro',
    {
      type: "category",
      label: "USDT Perpetual",
      items: [
        {
          type: "autogenerated",
          dirName: "pre-version/future/usdt-perp"
        }
      ]
    },
    {
      type: "category",
      label: "Inverse Perpetual",
      items: [
        {
          type: "autogenerated",
          dirName: "pre-version/future/inverse-perp"
        }
      ]
    },
    {
      type: "category",
      label: "Inverse Future",
      items: [
        {
          type: "autogenerated",
          dirName: "pre-version/future/inverse-future"
        }
      ]
    },
  ],
  spotV1SideBar: [
    {
      type: 'autogenerated',
      dirName: 'pre-version/spot'
    }
  ],
  usdcContractSideBar: [
    'pre-version/usdc-contract/intro',
    {
      type: "category",
      label: "USDC Option",
      items: [
        {
          type: "autogenerated",
          dirName: "pre-version/usdc-contract/option"
        }
      ]
    },
    {
      type: "category",
      label: "USDC Perpetual",
      items: [
        {
          type: "autogenerated",
          dirName: "pre-version/usdc-contract/usdc-perp"
        }
      ]
    },
  ],
  v5SideBar: [
      'v5/intro',
    {
      type: 'category',
      label: 'Market',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/market'
        }
      ]
    },
    {
      type: 'category',
      label: 'Trade',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/order'
        }
      ]
    },
    {
      type: 'category',
      label: 'Position',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/position'
        }
      ]
    },
    {
      type: 'category',
      label: 'Account',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/account'
        }
      ]
    },
    {
      type: 'category',
      label: 'Spot Leverage Token',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/spot-lever-token'
        }
      ]
    },
    {
      type: 'category',
      label: 'Spot Margin Trade',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/spot-margin-trade'
        }
      ]
    },
    'v5/enum'
  ],
  apiExplorerSideBar: [
    {
      type: "category",
      label: "Derivatives",
      link: {
        type: "generated-index",
        title: "Derivatives API",
        slug: "/api-explorer/category/"
      },
      // @ts-ignore
      items: [
        require("./docs/api-explorer/derivatives/market/sidebar.js"),
        {
          type: "category",
          label: "Unified",
          items: require("./docs/api-explorer/derivatives/trade/unified/sidebar.js")
        }
      ]
    }
  ],
};

module.exports = sidebars;