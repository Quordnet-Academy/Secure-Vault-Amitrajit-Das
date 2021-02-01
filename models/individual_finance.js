import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import Asset from './Finance/asset.js';

const individual_finance = new Schema({

    
    individual_finance : {
        itr_forms : String,
        bank_transaction : String,
        assets : [Asset], 
        pan_card : String
    },

});


const Individual_Finance = mongoose.model("individual_finance", individual_finance);

export default Individual_Finance;