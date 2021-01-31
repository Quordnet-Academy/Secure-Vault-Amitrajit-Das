import mongoose from 'mongoose';
import vaccines from './Medical/vaccination_record.js';

const Individual_Medical = mongoose.Schema({

    //Level 2
    Individual_Medical :{
        vaccination_records : [vaccines], //Sub parent
        medical_illness_long_term : String
    },

});


const Individual_Medicals = mongoose.model("Individual_Medical", Individual_Medical);

export default Individual_Medicals;