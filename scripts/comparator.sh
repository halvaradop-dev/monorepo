#!/bin/bash

path="packages"

for package in "$path"/*; do
    echo "package: $package"
done