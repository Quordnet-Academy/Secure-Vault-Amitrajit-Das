import mongoose from 'mongoose';


const other_certificate = mongoose.Schema({

        //Lvl 4
        other_certificate : {
            Academy : String,
            Sports : Array ,
            Events : Array 
        },

});



const other_certificates = mongoose.model("other_certificate", other_certificate);

export default other_certificates;