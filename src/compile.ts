import fs from "fs-extra";
import { config } from "./config.js";
import { processFile } from "./parseUtility.js";

async function compile(files: string[]) {
  for (const file of files) {
    await processFile(file);
  }
}

const addFiles = (await fs.readFile(config.paths.addFile, "utf8"))
  .split(/\r?\n/)
  .filter(Boolean);
await compile(addFiles);
