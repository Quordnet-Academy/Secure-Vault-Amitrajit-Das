import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const school_board = new Schema({

    
    school_board : {
        marks : String,
        grade : String,
        admit_card : String,
        registration_card : String,
        pass_certificate : String
    },

});



const School_Board = mongoose.model("school_board", school_board);

export default School_Board;