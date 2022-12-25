vim.cmd('packadd packer.nvim')

return require('packer').startup(function()
  use { 'wbthomason/packer.nvim' }

  use {
    'nvim-treesitter/nvim-treesitter',
    config = function()
      require('nvim-treesitter.install').compilers = {'x86_64-w64-mingw32-gcc-win32', 'gcc' }
      require("nvim-treesitter.install").prefer_git = true
      require('nvim-treesitter.configs').setup({
        ignore_install = { 'phpdoc' }, -- https://github.com/nvim-treesitter/nvim-treesitter/issues/2837
      })
    end
  }
end)
