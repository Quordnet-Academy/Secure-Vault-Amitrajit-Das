import mongoose from 'mongoose';

const asset = mongoose.Schema({

    //Level 3
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