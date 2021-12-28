const CopyPlugin = require("copy-webpack-plugin");
const { description } = require("../../package");

const config = {
  title: "Guests Guide Docs",
  description: description,
  base: "/",
  head: [
    ["meta", { name: "theme-color", content: "#000000" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["meta", { name: "robots", content: "index,follow" }],
  ],
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
  },
  themeConfig: {
    // repo: "nerdchandise/ndsf-guide",
    editLinks: false,
    docsDir: "",
    sidebarDepth: 1,
    editLinks: false,
    lastUpdated: false,
    nav: [
      {
        text: "Docs",
        link: "/en/docs/",
      },
      {
        text: "Guests Guide",
        link: "https://guestsguide.com",
      },
    ],
    sidebar: {
      "/docs/": [
        {
          title: "Guide",
        },
      ],
    },
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      "/de/": {
        lang: "de-DE",
        title: "Guests Guide Docs",
        sidebar: {
          "/de/docs/": [
            {
              title: "Guide",
            },
          ],
        },
      },
      "/en/": {
        lang: "en-US",
        title: "Guests Guide Docs",
        sidebar: {
          "/en/docs/": [
            {
              title: "Guide",
            },
          ],
        },
      },
    },
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "english",
      title: "Guests Guide Docs",
    },
    "/de/": {
      lang: "deutsch",
      title: "Guests Guide Docs",
    },
  },
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [{ from: "src/.vuepress/static", to: "./" }],
      }),
    ],
    resolve: {
      alias: {
        "@": "../",
      },
    },
  },

  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-task-lists"));
    },
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};

for (const group of Object.values(config.themeConfig.sidebar)) {
  for (const section of group) {
    if (section.collapsable) continue;
    section.collapsable = false;
  }
}

module.exports = config;
