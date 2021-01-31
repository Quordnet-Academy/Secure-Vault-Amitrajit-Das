import mongoose from 'mongoose';
const individual_document = mongoose.Schema({

    //Level 2
    individual_document: {
        adhaar_card_no :  Int32Array,
        driver_license : String,
        pan_card :  String,
        voter_card : String,
        passport : String
    },

});



const individual_documents = mongoose.model("individual_document", individual_document);

export default individual_documents;