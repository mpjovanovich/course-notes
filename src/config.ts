export const config = {
  // Paths relative to the root of the project
  paths: {
    bootstrapFontsDir: "./node_modules/bootstrap-icons/font",
    bootstrapJsDir: "./node_modules/bootstrap/dist/js",
    bootstrapJsFile: "bootstrap.bundle.min.js",
    sassFile: "styles.css",
    content: "./content/",
    output: "./output/",
    assets: "./assets/",
    addFile: "./deploy/add.file",
    removeFile: "./deploy/remove.file",
  },
} as const;
