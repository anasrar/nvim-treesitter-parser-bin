# Neovim Tree Sitter Parser Binary

tree sitter parser binary for neovim, build nightly using github action until `nvim-treesitter` has proper precompile parser https://github.com/nvim-treesitter/nvim-treesitter/discussions/2419

# Usage

download `all.zip` and extract the parser `so` file to `nvim-treesitter/parser/`

## Example Packer using wget and unzip

```
wget https://github.com/anasrar/nvim-treesitter-parser-bin/releases/download/linux/all.zip
unzip -j all.zip rust.so json.so -d ~/.local/share/nvim/site/pack/packer/start/nvim-treesitter/parser/
```

# Platform

- linux `tested`
- alpine (linux) `tested`
- windows `untested`
