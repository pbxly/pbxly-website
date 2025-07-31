import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        // { text: 'Services', href: getPermalink('/services') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Supported Devices', href: getPermalink('/supported-devices') },
      ],
    },
    {
      text: 'Company',
      links: [
        { text: 'About us', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Terms', href: getPermalink('/terms') },
      ],
    },
    // {
    //   text: 'Blog',
    //   links: [
    //     { text: 'Blog List', href: getBlogPermalink() },
    //     { text: 'Article', href: getPermalink('get-started-website-with-astro-tailwind-css', 'post') },
    //     { text: 'Article (with MDX)', href: getPermalink('markdown-elements-demo-post', 'post') },
    //     { text: 'Category Page', href: getPermalink('tutorials', 'category') },
    //     { text: 'Tag Page', href: getPermalink('astro', 'tag') },
    //   ],
    // },
  ],
  actions: [{ text: 'Signup', href: 'https://pbxly.com/signup', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'SaaS', href: getPermalink('/saas') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About us', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Terms', href: getPermalink('/terms') },
      ],
    },
    {
      title: 'Blog',
      links: [
        { text: 'Blog List', href: getBlogPermalink() },
        { text: 'Article', href: getPermalink('get-started-website-with-astro-tailwind-css', 'post') },
        { text: 'Article (with MDX)', href: getPermalink('markdown-elements-demo-post', 'post') },
        { text: 'Category Page', href: getPermalink('tutorials', 'category') },
        { text: 'Tag Page', href: getPermalink('astro', 'tag') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/pbxly' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/pbxly' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/pbxly' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/pbxly' },
  ],
  footNote: `© ${new Date().getFullYear()} PBXly. All rights reserved.`,
};
