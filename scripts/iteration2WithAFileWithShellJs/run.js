const shell = require('shelljs');

const runme = () => {
    if (shell.exec('node scripts/iteration2WithAFileWithShellJs/index.js --file=scripts/iteration2WithAFileWithShellJs/sampleIds.txt').code !== 0) {
        shell.echo('Error: running the script failed');
        shell.exit(1);
    }
};

runme();
// node scripts/iteration2WithAFile/run.js
