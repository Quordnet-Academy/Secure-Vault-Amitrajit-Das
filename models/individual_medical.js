import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import Vaccination_Record from './Medical/vaccination_record.js';

const individual_medical = new Schema({

    
    individual_medical : {
        vaccination_records : [Vaccination_Record],
        medical_illness_long_term : String
    },

});


const Individual_Medical = mongoose.model("individual_medical", individual_medical);

export default Individual_Medical;