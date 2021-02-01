import mongoose from 'mongoose';


const other_certificate = new mongoose.Schema({

        
        other_certificate : {
            Academy : String,
            Sports : Array ,
            Events : Array 
        },

});



const other_certificates = mongoose.model("other_certificate", other_certificate);

export default other_certificates;