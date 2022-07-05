import { spawn } from 'child_process';

let output = '';

const treesitter = spawn(process.platform === 'win32' ? `C:/tools/neovim/nvim-win64/bin/nvim` : 'nvim', ['--headless', '-c', 'TSInstall all']);

const stop = (msg) => {
  treesitter.stderr.pause();
  treesitter.kill();
  console.log(msg);
  process.exit(0);
}

setTimeout(() => {
  stop('ERROR: time out');
}, 1000 * 60 * 12);

treesitter.stderr.on('data', (data) => {
  data = data
    .toString()
  console.log(data);
  output +=data;
  if (output.length > 1000) {
    output.slice(-1000)
  }

  if (output.includes('Out of memory')) {
    stop('ERROR: out of memory');
  }

  if (output.includes('up-to-date')) {
    stop('DONE: all parser are up-to-date');
  }

  const installed = output.split('installed');
  if (installed.length > 1) {
    const installedParser = installed.at(-2).split('[nvim-treesitter]').at(-1);
    const resultRegex = /^\s\[([\d]+)\/([\d]+)/g.exec(installedParser);
    if (resultRegex === null) return;
    const [original, current, total] = resultRegex;
    if (current === total) {
      stop('DONE: all parse installed');
    }
  }
});
