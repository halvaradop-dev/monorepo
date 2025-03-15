#!/bin/bash

path="packages"
packages_release=$(git diff --name-only HEAD~1 HEAD)

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