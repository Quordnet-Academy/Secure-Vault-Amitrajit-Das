import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const non_service = new Schema({

    
    non_service :{
        freelancing : String,
        bussiness : String,
        non_profits : String
    },

});

const Non_Services = mongoose.model("non_service", non_service);

export default Non_Services;