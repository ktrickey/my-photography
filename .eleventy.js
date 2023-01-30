const
  dev  = global.dev  = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date();

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('./src/css');
  //eleventyConfig.addPassthroughCopy('./src/js/isotopes.pkgd.min.js');
  eleventyConfig.addPassthroughCopy('./src/webfonts');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addWatchTarget('./src/js/');
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};