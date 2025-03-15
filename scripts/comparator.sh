#!/bin/bash

path="packages"
packages_release=$(git diff --name-only HEAD~1 HEAD)

echo "packages_release: $packages_release"

for package in "$path"/*; do
    echo "package: $package"
    cd "$package"
    pwd
    cd -
done