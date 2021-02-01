import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import records from './record.js';

const vaccination_record = new Schema({

    
    vaccination_record : {
        records : [records]
    },

});


const vaccination_records = mongoose.model("vaccination_record", vaccination_record);

export default vaccination_records;