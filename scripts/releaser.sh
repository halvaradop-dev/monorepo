#!/bin/bash

path="packages"

# Get the previous commit hash based on master (this assumes master branch exists)
previous_commit=$(git rev-parse master~1 2>/dev/null || echo "no_previous_commit")

if [ "$previous_commit" == "no_previous_commit" ]; then
    echo "No previous commit found for master, checking changes from the current commit."
    packages_release=$(git diff --name-only HEAD)
else
    packages_release=$(git diff --name-only master~1 HEAD)
fi

echo -e "packages_release: $packages_release\n"

for package in "$path"/*; do
    package_json="$package/package.json"
    if echo "$packages_release" | grep -q "$package_json"; then
        echo "Building and publishing $package"
        (
            cd "$package" || exit
            pnpm build:all
            pnpm publish --access public --no-git-checks
        )
    fi
done
