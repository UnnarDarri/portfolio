import { HtmlBasePlugin } from '@11ty/eleventy';

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
}

export const config = {
    pathPrefix: '/portfolio',
}
