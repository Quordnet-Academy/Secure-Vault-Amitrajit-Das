import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import Record from './record.js';

const vaccination_record = new Schema({

    
    vaccination_record : {
        records : [Record]
    },

});


const Vaccination_Record = mongoose.model("vaccination_record", vaccination_record);

export default Vaccination_Record;