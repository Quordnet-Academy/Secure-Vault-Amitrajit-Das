import mongoose from 'mongoose';

const record = mongoose.Schema({

    //Level 4
    record : {
        vaccine_name : Array,
        vaccine_date : Array,
        administered_by : Array,
        administered_at : Array
      }

});


const records = mongoose.model("record", record);

export default records;