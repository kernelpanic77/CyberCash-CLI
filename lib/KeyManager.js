const Configstore = require('configstore');
const pkgJson = require('../package.json');

class KeyManager{
    constructor(){
        this.conf = new Configstore(pkgJson.name);
    }

    setKey(key){
        this.conf.set('apiKey', key);
        return key;
    }

    removeKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw new Error('No Api Key Found -- Pls Set API Key')
        }

        this.conf.delete('apiKey');
    }

    showKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw new Error('No Api Key Found -- Pls visit https://nomics.com')
        }
        return key;
    }
}

module.exports = KeyManager ; 