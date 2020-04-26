const experiment = () => {
    const myArg = process.argv.slice(2);
    console.log('myArg***', myArg);
};

experiment();

// run on command line node scripts/pureNode/index.js 1 2 3 4
