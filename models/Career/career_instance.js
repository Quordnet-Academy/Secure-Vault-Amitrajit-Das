import mongoose from 'mongoose';
import finance from './finance.js'


const career_instance = new mongoose.Schema({

    
    career_instances :{
        company_name : String,
        company_post : String,
        finance : [finances] 
    },

});



const career_instances = mongoose.model("career_instance", career_instance);

export default career_instances;