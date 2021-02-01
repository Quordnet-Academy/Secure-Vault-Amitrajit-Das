import mongoose from 'mongoose';
const Schema = mongoose.Schema;

import other_certificates from './other_certificate.js';


const college = new Schema({

        
        college : {
            degree : String,
            course :String,
            discipline : String,
            semester_sheets : String,
            final_year_projects : String,
            degree_certificate : String,
            other_certificates : [other_certificates]
        },

});



const colleges = mongoose.model("college", college);

export default colleges;