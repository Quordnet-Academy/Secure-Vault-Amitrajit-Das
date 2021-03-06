import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

// individual details
const detailsSchema = new Schema({
  name: String,
  address: String,
  phn_no: Number,
  email: String,
  key: String,
  dob: Date,
  password: {
    type: String,
    required: true,
  },
});

// password match checker

detailsSchema.statics.findByCredentials = async (password) => {
  const details = await UserDetail.findOne({ password })

  if(!details) {
    throw new Error('Password not found!');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) {
    throw new Error('ERROR');
  }

  return details;

}



// hashing before saving to DB

detailsSchema.pre("save", async function (next) {

  
  if (this.isModified('password')){

    this.password = await bcrypt.hash(this.password, 8);
  }
  
  next();

});

const UserDetail = mongoose.model("Detail", detailsSchema);
export { UserDetail, detailsSchema };