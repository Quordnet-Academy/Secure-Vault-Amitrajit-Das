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

export const postUserCareerPassword = async (req, res) => {

  try {
    const career = await UserCareer.findByCredentials(req.body.password)
    res.send(career);
  } catch (err) {
    res.status(400).json({message: err.message});
  }

};



export const putUserCareer = async (req, res) => {
  try {
    const updatedUserCareer = await UserCareer.findOneAndUpdate(req.params.id,req.body, { new : true, runValidators : true});
    
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