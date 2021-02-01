import mongoose from 'mongoose';


const school_board = new mongoose.Schema({

    
    school_board : {
        marks : String,
        grade : String,
        admit_card : String,
        registration_card : String,
        pass_certificate : String
    },

});



const school_boards = mongoose.model("school_board", school_board);

export default school_boards;