#!/bin/bash

# Clean up
rm -rf output

# Build Node project
npm run build:ts

# Commit local changes
# Must be done before rest of script
# Could be dont manually, but this just makes it easier so that there's a one line deploy command
git add .
git commit -m "Pre-deploy commit"
git push origin main 

# Find modified files since last deploy
git diff --name-only --diff-filter=AM $(cat deploy/deploy.version)..HEAD -- content/ > deploy/add.file
git diff --name-only --diff-filter=D $(cat deploy/deploy.version)..HEAD -- content/ > deploy/remove.file

# Compile the new files
node dist/compile.js
