import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const finance = new Schema({

    
    finance : {
        in_hand : String,
        ctc : String,
        salary_slips : String
    },

});


const Finance = mongoose.model("finance", finance);

export default Finances;