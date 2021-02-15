import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const financeSchema = new Schema({
  in_hand: String,
  ctc: String,
  salary_slips: String,
});

const careerInstancesSchema = Schema({
  company_name: String,
  company_post: String,
  finance: [financeSchema],
});

const nonServicesPersuitsSchema = Schema({
  freelancing: String,
  bussiness: String,
  non_profits: String,
});

const careerSchema = Schema({
  resume: String,
  career_instances: [careerInstancesSchema],
  non_service_persuits: [nonServicesPersuitsSchema],
  password: {
    type: String,
    required: true,
  },
});

// password match checker

careerSchema.statics.findByCredentials = async (password) => {
  const career = await UserCareer.findOne({ password })

  if(!career) {
    throw new Error('Password not found!');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) {
    throw new Error('ERROR');
  }

  return career;

}

// hashing before saving to DB

careerSchema.pre("save", async function (next) {

  
  if (this.isModified('password')){

    this.password = await bcrypt.hash(this.password, 8);
  }
  
  next();

});

const UserCareer = mongoose.model("Career", careerSchema);
export { UserCareer, careerSchema };