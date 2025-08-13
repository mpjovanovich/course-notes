import fs from "fs-extra";
import path from "path";
import { compileAssets, compileBootstrap } from "./compileUtility.js";
import { config } from "./config.js";
import { processFile } from "./parseUtility.js";

/* **********************************
 * Functions
 * ********************************** */

async function processDirectory(directoryPath: string): Promise<void> {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });
  console.log(`PROCESSING DIRECTORY: ${directoryPath}`);

  for (const entry of entries) {
    const filePath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(filePath);
    } else if (entry.isFile()) {
      try {
        console.log(`Processing file: ${filePath}`);
        await processFile(filePath);
      } catch (error) {
        console.error(
          `Error processing file ${filePath}: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    }
  }
}

/* **********************************
 * Main
 * ********************************** */

await compileBootstrap();
await compileAssets();
await processDirectory(config.paths.content);
