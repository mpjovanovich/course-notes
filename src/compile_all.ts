import { parseDotmark } from "@mpjovanovich/dotmark";
import fs from "fs-extra";
import path from "path";
import prettier from "prettier";
import { compileAssets, compileBootstrap } from "./compileUtility.js";
import { config } from "./config.js";
import {
  extractFrontmatter,
  getSiteHtml,
  PRETTIER_OPTIONS,
} from "./parseUtility.js";

/* **********************************
 * Functions
 * ********************************** */

async function compileMarkdownFileToHtml(
  markdownFilePath: string,
  outputFilePath: string,
  outputFileDepth: number
): Promise<void> {
  let markdown = await fs.readFile(markdownFilePath, "utf-8");
  let { frontmatter, content } = extractFrontmatter(markdown);
  let html = await parseDotmark(content);
  html = getSiteHtml(html, outputFileDepth, frontmatter);
  html = await prettier.format(html, PRETTIER_OPTIONS);
  await fs.writeFile(outputFilePath, html);
}

async function processDirectory(
  markdownDirectory: string,
  outputFileDepth: number
): Promise<void> {
  const entries = await fs.readdir(markdownDirectory, { withFileTypes: true });

  for (const entry of entries) {
    const markdownFilePath = path.join(markdownDirectory, entry.name);

    if (entry.isDirectory()) {
      console.log(`Processing directory: ${markdownFilePath}`);

      // Create the corresponding directory in the output folder
      const outputDirectoryPath = markdownFilePath.replace(
        "content/",
        "output/"
      );
      await fs.mkdir(outputDirectoryPath, { recursive: true });

      // Recursively process the directory
      await processDirectory(markdownFilePath, outputFileDepth + 1);
    } else if (entry.isFile()) {
      if (entry.name.endsWith(".md")) {
        try {
          console.log(`Processing file: ${markdownFilePath}`);
          const htmlFileName = entry.name.replace(/\.md$/, ".html");
          const htmlFilePath = path
            .join(markdownDirectory, htmlFileName)
            .replace("content/", "output/");

          // Create the output directory if it doesn't exist
          await fs.mkdir(path.dirname(htmlFilePath), { recursive: true });

          // Process the markdown file
          await compileMarkdownFileToHtml(
            markdownFilePath,
            htmlFilePath,
            outputFileDepth
          );
        } catch (error) {
          throw new Error(
            `Error processing file ${markdownFilePath}: ${error instanceof Error ? error.message : String(error)}`
          );
        }
      } else {
        // Copy the file to the output directory
        const outputFilePath = markdownFilePath.replace("content/", "output/");
        await fs.copy(markdownFilePath, outputFilePath);
      }
    }
  }
}

/* **********************************
 * Main
 * ********************************** */

await compileBootstrap();
await compileAssets();
await processDirectory(config.paths.content, 0);
