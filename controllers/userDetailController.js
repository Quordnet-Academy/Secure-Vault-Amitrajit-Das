import { UserDetail } from '../models/detail.js';
import bcrypt from "bcrypt";

export const getUserDetail = async (req, res) => {
        
    try {
        const userDetail = await UserDetail.find({});
        res.status(201).json(userDetail);

      } catch (err) {
        res.status(404).json({message: err.message});
      } 
    
};

export const postUserDetail = async (req, res) => {

    try {
        
        const userDetail = new UserDetail(req.body);
        const newUserDetail = await userDetail.save();
        res.status(201).json(newUserDetail);

    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

export const postUserDetailById = async (req, res) => {

  const { password } = req.body;

  const userDetails = await UserDetail.findOne({ _id: req.params.id });
  if (userDetails) {
    const hashedPassword = userDetails.password;
    const checkDetailsPassword = await bcrypt.compare(password, hashedPassword);
    if (checkDetailsPassword) {
      res.status(200).json(userDetails);
    } else {
      res.status(401).json({ message: "password does not match" });
    }
  } else {
    res.status(404).json({ message: "user details does not exist" });
  }
};


export const putUserDetail = async (req, res) => {
  const updates = Object.keys(req.body);

  try {
    const updatedUserDetail = await UserDetail.findById(req.params.id);

    updates.forEach((update) => updatedUserDetail[update] = req.body[update])

    await updatedUserDetail.save();
    
    
    if(!updatedUserDetail){
        return res.status(404).json({message: err.message})
    }

    res.status(200).json(updatedUserDetail);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteUserDetail = async (req, res) => {
  try {
    const deletedUserDetail = await UserDetail.findByIdAndDelete(req.params.id);

    if(!deletedUserDetail){
        res.status(404).json(deletedUserDetail);
    }
    res.status(200).json(deletedUserDetail);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

