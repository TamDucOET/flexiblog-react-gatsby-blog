require('dotenv').config()
const fontFile = require('./src/@elegantstack/flow-ui-theme/theme/typography-fonts.json')

module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        token: "skcOx2h6oS98t49hDTlTWBp2NarzAv5uBD1edvXlLkZFzWaV9SIeunz1oVryJtAoMxR4hXAebouJYTjafjHHosHz9EZDV2UpV7ixEghCBldK6sJpnOxkDxeg4c8mnmaWBB0qKoudT7x7DBXDYj95Yywg4D2CbcBa3Mktsw5aUarG2CFAKsPg",
        projectId: "agrselsj",
        dataset: "production"
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-personal',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL,
        fonts: fontFile.fonts, 
        sources: {
          sanity: true,
          local: false
        }

      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'FlexiBlog Theme',
    name: 'FlexiBlog',
    description: 'My site description...',
    address: 'New York, NY',
    email: 'email@example.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'About Me',
        slug: '/about'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
