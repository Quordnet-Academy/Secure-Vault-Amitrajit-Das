import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import finances from './finance.js'


const career_instance = new Schema({

    
    career_instances :{
        company_name : String,
        company_post : String,
        finance : [finances] 
    },

});



const Career_Instance = mongoose.model("career_instance", career_instance);

export default Career_Instance;