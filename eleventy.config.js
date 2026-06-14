import path from "node:path";
import fs from "node:fs";
import { HtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin)
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    outputDir: ".cache/@11ty/img/",
    urlPath: "/img/built",
    formats: ["avif", "webp", "jpeg", "svg"],
    svgShortCircuit: true,
    transformOnRequest: false,

    htmlOptions: {
      imgAttributes: {
        alt: "",
      }
    }
  });
  
  eleventyConfig.on("eleventy.after", () => {
    fs.cpSync(".cache/@11ty/img/", path.join(eleventyConfig.directories.output, "/img/built/"), {
      recursive: true
    });
  });

  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
}

export const config = {
  pathPrefix: "",
}
