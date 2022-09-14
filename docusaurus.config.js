// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "bpfdeploy.io",
  tagline:
    "Visualize, monitor and debug your eBPF infrastructure from a single viewpoint",
  url:
    process.env.NODE_ENV === "production"
      ? "https://docs.bpfdeploy.io"
      : "http://localhost:3000",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    "./plugins/clicky.js"
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/bpfdeploy-io/docs/tree/main",
        },
        blog: {
          routeBasePath: "/blog",
          showReadingTime: true,
          editUrl: "https://github.com/bpfdeploy-io/docs/tree/main",
        },
        pages: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: "bpfdeploy.io",
        logo: {
          alt: "bpfdeploy.io",
          src: "img/logosmallwhite.svg",
          href: "https://bpfdeploy.io",
          target: "_blank"
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/bpfdeploy-io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/bpfdeploy",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/bpfdeploy-io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} • bpfdeploy.io • All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
