import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import individual_details from './individual_detail.js';
import individual_documents from './individual_document.js';
import individual_educations from './individual_education.js';
import individual_careers from './individual_career.js';
import individual_finances from './individual_finance.js';
import individual_medicals from './individual_medical.js'

const individual = new Schema({
    
    
    individual : {
        individual_details : [individual_details],
        individual_documents : [individual_documents],
        individual_education : [individual_educations],
        individual_career : [individual_careers],
        individual_finance : [individual_finances],
        individual_medical : [individual_medicals],
        Key : String
    },  

});



const individuals = mongoose.model("individual", individual);

export default individuals;