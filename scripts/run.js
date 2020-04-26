const shell = require('shelljs');

const runme = () => {
    if (shell.exec('node scripts/index.js --ids=1 2 3 4 5 6 7 8 9').code !== 0) {
        shell.echo('Error: running the script failed');
        shell.exit(1);
    }
};

runme();
