import mongoose from 'mongoose';
import records from './record.js';
const vaccination_record = mongoose.Schema({

    //Level 3
    vaccination_record : {
        records : [records] //child
    },

});


const vaccination_records = mongoose.model("vaccine", vaccine);

export default vaccination_records;