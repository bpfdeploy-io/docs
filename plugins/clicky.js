module.exports = (context, options) => {
  return {
    name: "clicky-plugin",
    injectHtmlTags() {
      if (
        process.env.NODE_ENV === "production" &&
        process.env.CLICKY_ANALYTICS_ID
      ) {
        return {
          postBodyTags: [
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
