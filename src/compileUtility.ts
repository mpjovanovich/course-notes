import fs from "fs-extra";
import path from "path";
import { config } from "./config.js";

export async function compileAssets() {
  // Add static assets to the output directory
  await fs.copy(config.paths.assets, config.paths.output + "assets");
}

export async function compileBootstrap() {
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
}
