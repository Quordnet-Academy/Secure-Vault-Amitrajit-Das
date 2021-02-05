import mongoose from "mongoose";

import { detailsSchema } from "./detail.js";
import { documentsSchema } from "./document.js";
import { educationSchema } from "./education.js";
import { careerSchema } from "./career.js";
import { financeSchema } from "./finance.js";
import { medicalSchema } from "./medicine.js";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userDetails: {detailsSchema },
  userDocuments: { documentsSchema },
  userEducation: { educationSchema },
  userCareer: { careerSchema },
  userFinance: { financeSchema },
  userMedical: { medicalSchema },
});


const UserModel = mongoose.model("User", userSchema);
export { UserModel, userSchema };