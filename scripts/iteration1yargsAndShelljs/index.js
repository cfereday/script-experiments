const yargs = require('yargs');


const experiment = () => {
    const argv = yargs
        .option('ids', {
            alias: 'i',
            description: 'Pass in the ids',
            type: 'array'
        })
        .help()
        .argv;
    console.log('myArg***', argv.ids);
};

experiment();


