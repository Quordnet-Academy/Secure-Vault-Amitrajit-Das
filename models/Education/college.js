import mongoose from 'mongoose';
const Schema = mongoose.Schema;

import Other_Certificate from './other_certificate.js';


const college = new Schema({

        
        college : {
            degree : String,
            course :String,
            discipline : String,
            semester_sheets : String,
            final_year_projects : String,
            degree_certificate : String,
            other_certificates : [Other_Certificate]
        },

});



const College = mongoose.model("college", college);

export default College;