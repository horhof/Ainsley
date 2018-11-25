const siteConfig = {
  title: 'Apipecto',
  url: 'https://horhof.github.io/Apipecto/',
  baseUrl: '/',
  projectName: 'apipecto',
  organizationName: 'horhof-research',
  headerLinks: [
    { doc: 'introduction', label: 'Docs' }
  ],
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  fonts: {
    heading: ['Allegreya'],
    paragraph: ['Open Sans'],
    code: ['Fira Code Retina']
  },
  highlight: {
    theme: 'monokai',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',
};

module.exports = siteConfig;
