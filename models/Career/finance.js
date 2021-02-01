import mongoose from 'mongoose';

const finance = new mongoose.Schema({

    
    finance : {
        in_hand : String,
        ctc : String,
        salary_slips : String
    },

});


const finances = mongoose.model("finance", finance);

export default finances;