const axios = require('axios');
const colors = require('colors');

class NomicsAPI {

    constructor(apiKey){
        this.apiCred = apiKey;
        this.apiEndpt = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceDetails(coinSel, currSel){
        try {   
            const res = await axios.get(`${this.apiEndpt}?key=${this.apiCred}&ids=${coinSel}&convert=${currSel}`);
            let output = '';

            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${coin.price.green} ${currSel.green} | Rank: ${coin.rank.blue}`;

            });
            return output;
        } catch (err) {
            HandleAPIerr(err);
        }
    }
}

HandleAPIerr = function(err){
      if(err.response.status === 401){
          throw new Error('Your API key is invalid');
      }
      else if(err.response.status === 404){
        throw new Error('API is not responding');
      }
}   


module.exports = NomicsAPI;
