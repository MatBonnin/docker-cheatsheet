// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docker Cheat Sheets',
  tagline: 'Mes notes rapides sur Docker',
  favicon: 'img/docker-logo.png',

  // URL de production de votre site
  url: 'https://votre-domaine.com',
  baseUrl: '/',

  // Config GitHub Pages (si nécessaire)
  organizationName: 'votre-org', // Nom de votre GitHub org ou utilisateur
  projectName: 'docker-cheatsheet', // Nom du repo GitHub

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalisation
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Pas de lien "Modifier cette page"
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DockerCS',
        logo: {
          alt: 'Logo Docker',
          src: 'img/docker-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Introduction',
          },
          { to: 'docs/installation', label: 'Installation', position: 'left' },
          { to: 'docs/commands', label: 'Commandes', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Docker Cheat Sheets`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
