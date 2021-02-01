import mongoose from 'mongoose';

const non_service = new mongoose.Schema({

    
    non_service :{
        freelancing : String,
        bussiness : String,
        non_profits : String
    },

});

const non_services = mongoose.model("non_service", non_service);

export default non_services;