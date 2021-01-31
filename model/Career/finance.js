import mongoose from 'mongoose';

const finance = mongoose.Schema({

    //Lvl 4
    finance : {
        in_hand : String,
        ctc : String,
        salary_slips : String
    },

});


const finances = mongoose.model("finance", finance);

export default finances;