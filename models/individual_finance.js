import mongoose from 'mongoose';
import assets from './Finance/asset.js';

const individual_finance = new mongoose.Schema({

    
    individual_finance : {
        itr_forms : String,
        bank_transaction : String,
        assets : [assets], 
        pan_card : String
    },

});


const individual_finances = mongoose.model("individual_finance", individual_finance);

export default individual_finances;