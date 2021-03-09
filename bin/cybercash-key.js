const program = require('commander');

program
       .command('set')
       .description('Set Api Key -- Get at https://nomics.com')
       .action(() => console.log("Setting Api Key"));

program
       .command('remove')
       .description('Remove Api Key')
       .action(() => console.log("Removing Api Key"));

program.parse(process.argv);