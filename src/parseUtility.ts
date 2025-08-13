import { parseDotmark } from "@mpjovanovich/dotmark";
import fs from "fs-extra";
import path from "path";
import prettier from "prettier";
import { config } from "./config.js";

/* **********************************
 * Constants and Types
 * ********************************** */

export type Frontmatter = { [key: string]: string };

export const PRETTIER_OPTIONS = {
  parser: "html",
  printWidth: 80,
  tabWidth: 2,
} as const;

async function compileMarkdownFileToHtml(
  markdownFilePath: string,
  outputFilePath: string,
  outputFileDepth: number
): Promise<void> {
  if (!markdownFilePath.endsWith(".md")) {
    // Copy the file to the output directory
    await fs.copy(markdownFilePath, outputFilePath);
    return;
  }

  let markdown = await fs.readFile(markdownFilePath, "utf-8");
  let { frontmatter, content } = extractFrontmatter(markdown);
  let html = await parseDotmark(content);
  html = getSiteHtml(html, outputFileDepth, frontmatter);
  html = await prettier.format(html, PRETTIER_OPTIONS);
  await fs.writeFile(outputFilePath, html);
}

function extractFrontmatter(markdown: string): {
  frontmatter: Frontmatter;
  content: string;
} {
  const frontmatter: Frontmatter = {};
  let content = markdown;

  const frontmatterRegex = /^---\s*[\s\S]+?---/;
  const match = markdown.match(frontmatterRegex);
  if (match) {
    // Extract the content of the frontmatter, excluding the delimiters
    const frontmatterContent = match[0].replace(/---/g, "").trim();

    // Split the content into lines and then into key-value pairs
    frontmatterContent.split("\n").forEach((line) => {
      const [key, value] = line.split(":").map((part) => part.trim());
      if (key && value) {
        frontmatter[key] = value;
      }
    });

    // Remove the frontmatter from the content
    content = markdown.replace(frontmatterRegex, "").trim();
  }

  return { frontmatter, content };
}

function getFileDepth(filePath: string): number {
  return filePath.split("/").length - 2;
}

function getSiteHtml(
  html: string,
  outputFileDepth: number,
  frontmatter?: Frontmatter
): string {
  let title = "";
  if (frontmatter?.course) {
    title = frontmatter.course + ": ";
  }
  if (frontmatter?.title) {
    title += frontmatter.title;
  }

  html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" >
        <title>${title}</title>
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./${"../".repeat(outputFileDepth)}assets/images/favicon-32x32.png"
        >
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./${"../".repeat(outputFileDepth)}assets/images/favicon-16x16.png"
        >
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
        >
        <script src="./${"../".repeat(outputFileDepth)}assets/scripts/code_snippets.js" defer></script>
        <script src="./${"../".repeat(outputFileDepth)}assets/scripts/focus_content.js" defer></script>
        <script src="./${"../".repeat(outputFileDepth)}assets/scripts/table_of_contents.js" defer></script>

        <!-- Bootstrap / Sass -->
        <link rel="stylesheet" href="./${"../".repeat(outputFileDepth)}assets/css/${config.paths.sassFile}">
        <link rel="stylesheet" href="./${"../".repeat(outputFileDepth)}assets/css/bootstrap-icons.css">
        <script src="./${"../".repeat(outputFileDepth)}assets/scripts/${config.paths.bootstrapJsFile}" defer></script>
    </head>
    <body class="bg-light">
        <div class="content-wrapper">
            ${html}
        </div>
    </body>
    </html>
  `;
  return html;
}

export async function processFile(filePath: string): Promise<void> {
  let outputFilePath = filePath.replace("content/", "output/");
  await fs.mkdir(path.dirname(outputFilePath), { recursive: true });

  if (filePath.endsWith(".md")) {
    outputFilePath = outputFilePath.replace(/\.md$/, ".html");
    const depth = getFileDepth(filePath);
    await compileMarkdownFileToHtml(filePath, outputFilePath, depth);
  } else {
    await fs.copy(filePath, outputFilePath);
  }
}
