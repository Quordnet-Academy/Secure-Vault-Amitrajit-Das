import { UserCareer } from '../models/career.js';
import bcrypt from "bcrypt";

export const getUserCareer = async (req, res) => {
        
    try {
        const userCareer = await UserCareer.find({});
        res.status(201).json(userCareer);

      } catch (err) {
        res.status(404).json({message: err.message});
      } 
    
};


export const postUserCareer = async (req, res) => {

    try {
        
        const userCareer = new UserCareer(req.body);
        const newUserCareer = await userCareer.save();
        res.status(201).json(newUserCareer);

    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

// to check password

export const postUserCareerById = async (req, res) => {

  const { password } = req.body;

  const userCareer = await UserCareer.findOne({ _id: req.params.id });
  
  if (userCareer) {
    const hashedPassword = userCareer.password;
    const checkCareerPassword = await bcrypt.compare(password, hashedPassword);
    if (checkCareerPassword) {
      res.status(200).json(userCareer);
    } else {
      res.status(401).json({ message: "password does not match" });
    }
  } else {
    res.status(404).json({ message: "user career details does not exist" });
  }
};

export const putUserCareer = async (req, res) => {

  const updates = Object.keys(req.body);

  try {
    const updatedUserCareer = await UserCareer.findById(req.params.id);

    updates.forEach((update) => updatedUserCareer[update] = req.body[update])

    await updatedUserCareer.save();
    
    if(!updatedUserCareer){
        return res.status(404).json({message: err.message})
    }

    res.status(200).json(updatedUserCareer);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};



export const deleteUserCareer = async (req, res) => {
  try {
    const deletedUserCareer = await UserCareer.findByIdAndDelete(req.params.id);

    if(!deletedUserCareer){
        res.status(404).json(deletedUserCareer);
    }
    res.status(200).json(deletedUserCareer);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};