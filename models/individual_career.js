import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import career_instances from './Career/career_instance.js';
import non_services from './Career/non_service_pursuits.js';


const individual_career = new Schema({

     
    individual_career:{
        resume : String,
        career_instances : [career_instances], //Sub Parent from career
        non_service_persuits : [non_services] //Sub Parent from career
    },

});



const individual_careers = mongoose.model("individual_career", individual_career);

export default individual_careers;