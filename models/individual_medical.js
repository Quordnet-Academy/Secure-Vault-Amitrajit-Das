import mongoose from 'mongoose';
import vaccines from './Medical/vaccination_record.js';

const individual_medical = new mongoose.Schema({

    
    individual_medical : {
        vaccination_records : [vaccines],
        medical_illness_long_term : String
    },

});


const individual_medicals = mongoose.model("individual_medical", individual_medical);

export default individual_medicals;