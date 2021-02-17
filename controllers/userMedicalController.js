import { UserMedical } from '../models/medical.js';
import bcrypt from "bcrypt";

export const getUserMedical = async (req, res) => {
        
    try {
        const userMedical = await UserMedical.find({});
        res.status(201).json(userMedical);

      } catch (err) {
        res.status(404).json({message: err.message});
      } 
    
};

export const postUserMedical = async (req, res) => {

    try {
        
        const userMedical = new UserMedical(req.body);
        const newUserMedical = await userMedical.save();
        res.status(201).json(newUserMedical);

    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

export const postUserMedicalById = async (req, res) => {
 const { password } = req.body;

  const userMedical = await UserMedical.findOne({ _id: req.params.id });
  if (userMedical) {
    const hashedPassword = userMedical.password;
    const checkMedicalPassword = await bcrypt.compare(password, hashedPassword);
    if (checkMedicalPassword) {
      res.status(200).json(userMedical);
    } else {
      res.status(401).json({ message: "password does not match" });
    }
  } else {
    res.status(404).json({ message: "user medical details does not exist" });
  }
};



export const putUserMedical = async (req, res) => {
  const updates = Object.keys(req.body);

  try {
    const updatedUserMedical = await UserMedical.findById(req.params.id);

    updates.forEach((update) => updatedUserMedical[update] = req.body[update])

    await updatedUserMedical.save();

    if(!updatedUserMedical){
        return res.status(404).json({message: err.message})
    }

    res.status(200).json(updatedUserMedical);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};



export const deleteUserMedical = async (req, res) => {
  try {
    const deletedUserMedical = await UserMedical.findByIdAndDelete(req.params.id);

    if(!deletedUserMedical){
        res.status(404).json(deletedUserMedical);
    }
    res.status(200).json(deletedUserMedical);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
