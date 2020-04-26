const yargs = require('yargs');
const fs = require('fs');




const experiment = () => {
    try {
        const argv = yargs
            .coerce('file', (arg) => {
                const readFile = fs.readFileSync(arg, 'utf8');
                console.log('readFile', readFile);
                return readFile;
            })
            .help()
            .argv;
    } catch(err) {
        console.log('Something went wrong trying to read the file', err);
    }
};

experiment();
