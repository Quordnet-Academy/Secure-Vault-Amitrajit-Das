import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const individual_detail = new Schema({

    individual_detail: {
        name: String,
        address: String,
        phn_no: String,
        email: String,
        key :  String,
        dob :  Date
    },

  

});



const individual_details = mongoose.model("individual_detail", individual_detail);

export default individual_details;