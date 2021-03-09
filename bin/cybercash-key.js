const program = require('commander');
const key = require('../commands/key');

program
       .command('set')
       .description('Set Api Key -- Get at https://nomics.com')
       .action(key.set);

program
       .command('remove')
       .description('Remove Api Key')
       .action(key.remove);

program
       .command('show')
       .description('Show Api Key')
       .action(key.show);

program.parse(process.argv);