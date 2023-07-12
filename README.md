# Neovim Tree Sitter Parser Binary

tree sitter parser binary for neovim, build nightly using github action until `nvim-treesitter` has proper precompile parser https://github.com/nvim-treesitter/nvim-treesitter/discussions/2419

# Usage

download `all.zip` and extract the parser `so` file to `nvim-treesitter/parser/`

## Example Packer using wget and unzip

### Download

```bash
wget https://github.com/anasrar/nvim-treesitter-parser-bin/releases/download/linux/all.zip
```

### Packer

```bash
# extract specific parser
unzip -j all.zip rust.so json.so -d ~/.local/share/nvim/site/pack/packer/start/nvim-treesitter/parser/
# extract all parser
unzip -j all.zip *.so -d ~/.local/share/nvim/site/pack/packer/start/nvim-treesitter/parser/
```

### Lazy

```bash
# extract specific parser
unzip -j all.zip rust.so json.so -d ~/.local/share/nvim/lazy/nvim-treesitter/parser/
# extract all parser
unzip -j all.zip *.so -d ~/.local/share/nvim/lazy/nvim-treesitter/parser/
```

# Platform

- linux `tested`
- windows `untested`
- android-aarch64-termux `tested`
