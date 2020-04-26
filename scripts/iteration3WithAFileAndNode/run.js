const exec = require('child_process').exec;

const command = 'node scripts/iteration3WithAFileAndNode/index.js --file=scripts/iteration3WithAFileAndNode/sampleIds.txt';
const runme = () => {
   const myShellScript = exec(command);
    myShellScript.stdout.on('data', (data)=>{
        console.log(data);
    });
    myShellScript.stderr.on('data', (data)=>{
        console.error(data);
    });
};

runme();
// node scripts/iteration2WithAFile/run.js

