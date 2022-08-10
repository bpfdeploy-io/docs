module.exports = (context, options) => {
  return {
    name: "clicky-plugin",
    injectHtmlTags() {
      if (process.env.CLICKY_ANALYTICS_ID) {
        return {
          postBodyTags: [
            {
              tagName: "script",
              attributes: {
                type: "text/javascript",
              },
              innerHTML:
                'var clicky_custom = clicky_custom || {}; clicky_custom.cookie_domain = ".bpfdeploy.io";',
            },
            {
              tagName: "script",
              attributes: {
                async: true,
                src: `//static.getclicky.com/${process.env.CLICKY_ANALYTICS_ID}.js`,
              },
            },
          ],
        };
      }
    },
  };
};
