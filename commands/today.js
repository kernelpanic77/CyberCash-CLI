const colors = require('colors');
const inquirer = require('inquirer');
const { isRequired } = require('../utils/validation');


const today = {

    prices(cmd) {
        console.log(cmd.coin, cmd.curr)
    }

};

module.exports = today;