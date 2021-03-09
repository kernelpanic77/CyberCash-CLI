const colors = require('colors');
const inquirer = require('inquirer');
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation');


const key = {

    async set(){
        const keyM = new KeyManager();
        const inp = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key from -- https://nomics.com :'.yellow,
                validate: isRequired
            }
        ]);

        const key = keyM.setKey(inp.key);

        if(key){
            console.log('API key set'.green)
        }

    },
    remove(){

        try {  
            const keyM = new KeyManager();
            const key = keyM.removeKey();
            console.log('API Key has been Removed'.blue);
        } 
        catch (err) {
            console.error(err.message.red);
        }   

    },
    show(){

        try {  
            const keyM = new KeyManager();
            const key = keyM.showKey();
            console.log(`Current API Key -- ${key}`.green);
        } 
        catch (err) {
            console.error(err.message.red);
        }   
    }

};

module.exports = key;


