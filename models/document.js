import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

//@ pan card details
const panCard = new Schema({
  pan_card: String,
});

const documentsSchema = Schema({
  adhaar_card_no: Number,
  driver_license: String,
  panCard: [panCard],
  voter_auth: String,
  passport: String,
  password: {
    type: String,
    required: true,
  },
});


// password match checker

documentsSchema.statics.findByCredentials = async (password) => {
  const document = await UserDocument.findOne({ password })

  if(!document) {
    throw new Error('Password not found!');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) {
    throw new Error('ERROR');
  }

  return document;

}

// hashing before saving to DB

documentsSchema.pre("save", async function (next) {

  
  if (this.isModified('password')){

    this.password = await bcrypt.hash(this.password, 8);
  }
  
  next();

});


const UserDocument = mongoose.model("Document", documentsSchema);
export { documentsSchema, UserDocument };