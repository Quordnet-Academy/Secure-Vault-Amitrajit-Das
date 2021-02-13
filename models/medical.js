import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const recordsSchema = new Schema({
  vaccine_name: String,
  vaccine_date: Date,
  administered_by: String,
  administered_at: Date,
});

const vaccinationRecords = Schema({
  records: [recordsSchema],
});

const medicalSchema = Schema({
  vaccination_records: [vaccinationRecords],
  medical_illness_long_term: String,
  password: {
    type: String,
    required: true,
  },
});

// hashing before saving to DB

medicalSchema.pre("save", async function (next) {

  
  if (this.isModified('password')){

    this.password = await bcrypt.hash(this.password, 8);
  }
  
  next();

});


const UserMedical = mongoose.model("Medical", medicalSchema);
export { medicalSchema, UserMedical };