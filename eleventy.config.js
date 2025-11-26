const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addWatchTarget("./src/assets/");
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/img");

  // Add markdown support
  eleventyConfig.addCollection("writing", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/writing/**/*.md");
  });

  // Add markdown filter for excerpts
  eleventyConfig.addFilter("excerpt", function(content) {
    const excerpt = content.split('<!--more-->')[0];
    return excerpt;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_includes/_layouts",
      data: "_data",
    },
    markdownTemplateEngine: "liquid",
  };
};
