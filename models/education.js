import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const otherCertificate = new Schema({
  academy: String,
  sports: String,
  events: String,
});

// college details
const collegeSchema = Schema({
  degree: String,
  course: String,
  discipline: String,
  semester_sheets: String,
  final_year_projects: Array,
  degree_certificates: Array,
  other_certificate: [otherCertificate],
});

// class 10 and 12 board details
const classRepresentativeBoardsSchema = Schema({
  marks: Number,
  grade: String,
  admit_card: String,
  registration_card: String,
  pass_certificate: String,
  grade_certificate: String,
});

const educationSchema = Schema({
  class_representative_boards: [classRepresentativeBoardsSchema],
  college: [collegeSchema],
  password: {
    type: String,
    required: true,
  },
});

// hashing before saving to DB

educationSchema.pre("save", async function (next) {

  
  if (this.isModified('password')){

    this.password = await bcrypt.hash(this.password, 8);
  }
  
  next();

});

const UserEducation = mongoose.model("Education", educationSchema);
export { educationSchema, UserEducation };