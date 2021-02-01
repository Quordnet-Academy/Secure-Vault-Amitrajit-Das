import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const asset = new Schema({

    
    asset : {
        commodities : String,
        cryptocurrencies : String,
        stocks : String,
        mutual_funds : String,
        ipos : String
      },

});


const assets = mongoose.model("asset", asset);

export default assets;