import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const record = new Schema({

    
    record : {
        vaccine_name : Array,
        vaccine_date : Array,
        administered_by : Array,
        administered_at : Array
      }

});


const Record = mongoose.model("record", record);

export default Record;