const
  dev  = global.dev  = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date();

module.exports = eleventyConfig => {

  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js/isotope.pkgd.min.js');
  eleventyConfig.addPassthroughCopy('./src/js/jquery.lazyload.min.js');
  eleventyConfig.addPassthroughCopy('./src/js/wow.min.js');
  eleventyConfig.addPassthroughCopy('./src/js/morphext.js');
  eleventyConfig.addPassthroughCopy('./src/js/typed.min.js');
  eleventyConfig.addPassthroughCopy('./src/js/contact-form.js');
  eleventyConfig.addPassthroughCopy('./src/js/jquery.ajaxchimp.min.js');
  eleventyConfig.addPassthroughCopy('./src/js/objectFitPolyfill.min.js');
  eleventyConfig.addPassthroughCopy('./src/js/splitting.min.js');
  eleventyConfig.addPassthroughCopy('./src/js/imagesloaded.pkgd.min.js');
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
