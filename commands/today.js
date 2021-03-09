const colors = require('colors');
const inquirer = require('inquirer');
const NomicsAPI = require('../lib/NomicsAPI');
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation');


const today = {

    async prices(cmd) {
        const keyM = new KeyManager();
        const key = keyM.showKey();
        
        const Api = new NomicsAPI(key);

        const outData = await Api.getPriceDetails(cmd.coin, cmd.curr);

        console.log(outData);
    }

};

module.exports = today;