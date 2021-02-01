import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import Career_Instance from './Career/career_instance.js';
import Non_Service from './Career/non_service_pursuits.js';


const individual_career = new Schema({

     
    individual_career:{
        resume : String,
        career_instances : [Career_Instance],
        non_service_persuits : [Non_Service] 
    },

});



const Individual_Career = mongoose.model("individual_career", individual_career);

export default Individual_Career;