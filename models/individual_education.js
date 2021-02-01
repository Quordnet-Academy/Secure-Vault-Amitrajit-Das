import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import School_Board from './Education/school_board.js';
import College from './Education/college,js';



const individual_education = new Schema({
   
    
    individual_education: {
        school_boards : [School_Board],
        college : [College] 
    },

});



const Individual_Education = mongoose.model("individual_education", individual_education);

export default Individual_Education;