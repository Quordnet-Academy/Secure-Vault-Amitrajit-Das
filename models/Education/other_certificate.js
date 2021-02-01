import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const other_certificate = new Schema({

        
        other_certificate : {
            Academy : String,
            Sports : Array ,
            Events : Array 
        },

});



const Other_Certificate = mongoose.model("other_certificate", other_certificate);

export default Other_Certificate;