# Commit local changes so I don't forget
git add .
git commit -m "Pre-deploy commit"
git push origin main 

# Build the site
npm run build

# Remove upstream and local site branches
git push origin --delete site
git branch -D site

# Create a "site" orphan branch. Not sure if this will work with GitHub Actions trigger yet.
git checkout --orphan site

# Write over .gitignore file with the one for the site
cp .gitignore_site .gitignore

# Remove all files from the new branch
git reset

# Copy the contents of the "output" directory to the root o
mv output site

# Move the assets folder to the root of the repository
cp -r assets site/

# Add new files and push to site branch
git add site/* .github/*

# Commit and push
git commit -m "Deploy commit"
git push origin site --force

# Cleanup
rm -rf site

# Go back to main
git checkout main --force

## #########################################################
## TODO
## #########################################################

# #!/bin/bash

# # Detect changed Markdown files
# changed_files=$(git diff --name-only HEAD~1 HEAD -- '*.md')

# # Compile changed Markdown files
# if [[ -n "$changed_files" ]]; then
#     node compile.js $changed_files
# else
#     echo "No changes to compile."
#     exit 0
# fi

# # Switch to the site branch
# git checkout site || git checkout -b site

# # Copy changed files to the site directory
# for file in $changed_files; do
#     output_path="output/${file%.md}.html"
#     cp "$output_path" .
# done

# # Commit and push changes
# git add *.html
# git commit -m "Deploy updated pages"
# git push origin site
