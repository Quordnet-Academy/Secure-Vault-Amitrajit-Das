import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import Individual_Detail from './individual_detail.js';
import Individual_Document from './individual_document.js';
import Individual_Education from './individual_education.js';
import Individual_Career from './individual_career.js';
import Individual_Finance from './individual_finance.js';
import Individual_Medical from './individual_medical.js'

const individual = new Schema({
    
    
    individual : {
        Individual_details : [Individual_Detail],
        Individual_documents : [Individual_Document],
        Individual_education : [Individual_Education],
        Individual_career : [Individual_Career],
        Individual_finance : [Individual_Finance],
        Individual_medical : [Individual_Medical],
        Key : String
    },  

});



const Individual = mongoose.model("individual", individual);

export default Individual;