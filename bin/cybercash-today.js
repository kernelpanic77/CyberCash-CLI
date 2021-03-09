const program = require('commander');
const today = require('../commands/today');

program
       .command('prices')
       .description('Check Prices of Cryptocurrencies')
       .option(
           '--coin <type>',
           'Add specific coin types in CSV format',
           'BTC,XRP,ETH'
        )
       .option(
            '--curr <type>',
            'Change the Currency INR',
            'INR,USD,EUR'
        )
       .action((cmd) => today.prices(cmd));

program.parse(process.argv);