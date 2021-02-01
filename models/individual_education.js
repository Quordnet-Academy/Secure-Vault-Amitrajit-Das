import mongoose from 'mongoose';
import school_boards from './Education/school_board.js';
import college from './Education/college,js';



const individual_education = new mongoose.Schema({
   
    
    individual_education: {
        school_boards : [school_boards],
        college : [college] 
    },

});



const individual_educations = mongoose.model("individual_education", individual_education);

export default individual_educations;