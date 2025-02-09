import fs from "fs-extra";
import path from "path";
import prettier from "prettier";
import { parseDotmark } from "@mpjovanovich/dotmark";
import { config } from "./config.js";

/* **********************************
 * Constants and Types
 * ********************************** */

type Frontmatter = { [key: string]: string };

const prettierOptions = {
  parser: "html",
  printWidth: 80,
  tabWidth: 2,
};

/* **********************************
 * Functions
 * ********************************** */

async function compileMarkdownToHtml(
  markdownFilePath: string,
  outputFilePath: string,
  outputFileDepth: number
): Promise<void> {
  let markdown = await fs.readFile(markdownFilePath, "utf-8");
  let { frontmatter, content } = extractFrontmatter(markdown);
  let html = await parseDotmark(content);
  html = getSiteHtml(html, outputFileDepth, frontmatter);
  html = await prettier.format(html, prettierOptions);
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

async function processDirectory(
  markdownDirectory: string,
  outputFileDepth: number
): Promise<void> {
  // Copy Bootstrap JS
  const bootstrapSourceFile = path.join(
    config.paths.bootstrapJsDir,
    config.paths.bootstrapJsFile
  );
  const bootstrapDestFile = path.join(
    config.paths.output,
    config.paths.assets,
    "scripts",
    config.paths.bootstrapJsFile
  );
  await fs.copy(bootstrapSourceFile, bootstrapDestFile);

  // Copy Bootstrap Icons CSS
  const bootstrapIconsSource = path.join(
    config.paths.bootstrapFontsDir,
    "bootstrap-icons.min.css"
  );
  const bootstrapIconsDest = path.join(
    config.paths.output,
    config.paths.assets,
    "css",
    "bootstrap-icons.css"
  );
  await fs.copy(bootstrapIconsSource, bootstrapIconsDest);

  // Copy Bootstrap Icons fonts directory
  const bootstrapIconsFontSource = path.join(
    config.paths.bootstrapFontsDir,
    "fonts"
  );
  const bootstrapIconsFontDest = path.join(
    config.paths.output,
    config.paths.assets,
    "css/fonts"
  );
  await fs.copy(bootstrapIconsFontSource, bootstrapIconsFontDest);

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
          await compileMarkdownToHtml(
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

// Add static assets to the output directory
await fs.copy(config.paths.assets, config.paths.output + "assets");

// Process the files
await processDirectory(config.paths.content, 0);
