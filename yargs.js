const yargs = require('yargs');

console.log(yargs.argv);

// create a command line argument
yargs.command({
    command: 'add',
    describe: 'Add a new note',
});

// 6b743cb653f5a9be6c374e981242247d