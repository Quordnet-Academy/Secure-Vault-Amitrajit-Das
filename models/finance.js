import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

//@ pan card details
const panCard = new Schema({
  panCard: String,
});

// assets details
const assetsSchema = Schema({
  commodities: String,
  cryptocurrencies: String,
  stocks: String,
  mutual_funds: String,
  ipos: String,
});

// user finance details
const financeSchema = Schema({
  panCard: [panCard],
  itr_forms: String,
  bank_transaction: String,
  assets: [assetsSchema],
  password: {
    type: String,
    required: true,
  },
});

// password match checker

financeSchema.statics.findByCredentials = async (password) => {
  const finance= await UserFinance.findOne({ password })

  if(!finance) {
    throw new Error('Password not found!');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) {
    throw new Error('ERROR');
  }

  return finance;

}

// hashing before saving to DB

financeSchema.pre("save", async function (next) {

  
  if (this.isModified('password')){

    this.password = await bcrypt.hash(this.password, 8);
  }
  
  next();

});


const UserFinance = mongoose.model("Finance", financeSchema);
export { financeSchema, UserFinance };