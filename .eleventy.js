const pluginSass = require("eleventy-plugin-sass")

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginSass)

  // copy the following items to _site
  eleventyConfig.setTemplateFormats(['md', 'html', 'css', 'ejs'])
  eleventyConfig.addPassthroughCopy('favicon.ico')
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('videos')
  eleventyConfig.addPassthroughCopy('fonts')
  eleventyConfig.addPassthroughCopy('js')

  // deep merge computed properties
  eleventyConfig.setDataDeepMerge(true)
}
