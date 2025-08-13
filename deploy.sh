#!/bin/bash

# Get deploy mode from command line
deploy_mode=$1

if [ "$deploy_mode" == "full" ]; then
    deploy_mode="full"
else
    deploy_mode="partial"
fi

# Clean up
npm run clean

# Build Node project
npm run build

# Commit local changes
# Must be done before rest of script
# Could be dont manually, but this just makes it easier so that there's a one line deploy command
git add .
git commit -m "Pre-deploy commit"
git push origin main 

if [ "$deploy_mode" == "full" ]; then
    node dist/compile_all.js
fi

if [ "$deploy_mode" == "partial" ]; then
    # Find modified files since last deploy
    git diff --name-only --diff-filter=AM $(cat deploy/deploy.version)..HEAD -- content/ > deploy/add.file
    git diff --name-only --diff-filter=D $(cat deploy/deploy.version)..HEAD -- content/ > deploy/remove.file

    # Compile the new files
    node dist/compile.js
fi

# Checkout the site branch
git checkout site

# Copy the output to the site directory
if [ -d output ]; then
    cp -r output/* site/
fi

# If there are any removed files, remove them from the site directory
if [ -s deploy/remove.file ]; then
    while read -r file; do
        # Rename content/ dir to site/
        site_file="${file/content/site}"
        rm -rf "$site_file"
    done < deploy/remove.file
fi

# Commit the changes
git add .
git commit -m "Deploy commit"
git push origin site

# Switch back to main branch
git checkout main

# Update the deploy version
echo $(git rev-parse HEAD) > deploy/deploy.version

# Commit the changes
git add .
git commit -m "Post-deploy commit"
git push origin main