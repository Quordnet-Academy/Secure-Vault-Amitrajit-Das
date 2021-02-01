import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const individual_document = new Schema({

   
    individual_document: {
        adhaar_card_no :  String,
        driver_license : String,
        pan_card :  String,
        voter_card : String,
        passport : String
    },

});



const individual_documents = mongoose.model("individual_document", individual_document);

export default individual_documents;
