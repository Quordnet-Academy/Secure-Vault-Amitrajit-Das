import mongoose from 'mongoose';
import records from './record.js';
const vaccination_record = new mongoose.Schema({

    
    vaccination_record : {
        records : [records]
    },

});


const vaccination_records = mongoose.model("vaccine", vaccine);

export default vaccination_records;