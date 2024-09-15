# Github

## Releases and versioning

It is professional use of github to introduce a versioning system to your repository showing what is the current version and how is the history of your repository. Some of the commands used to do it are:

```bash
git tag -a tag-name
git tag -l
git log --pretty=oneline

git push origin master --tags => envia los tag al repositorio remoto.
git push origin master :refs/tags/tag-name => elimina un tag de forma remota.
```

### Cases to create a release

-   First version
    Stage: New product
    Example: 1.0.0
-   New functionality compatible with the previous version
    Stage: minor
    Example: 1.1.0
-   Fix compatible with the previous version
    Stage: patch
    Example: 1.0.1
-   Updated latest
    Stage: main
    Example: 1.0.0

### How to create a branch based in a remote branch

This command is useful if you have worked in a remote branch or a branch that is in another computer but this branch is in the remote repository.

```bash
git remote -a
git checkout -b new-branch origin/name-remote-branch
git pull origin name-remote-branch
```
