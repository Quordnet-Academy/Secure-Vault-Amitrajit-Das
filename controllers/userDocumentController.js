import { UserDocument } from '../models/document.js';
import bcrypt from "bcrypt";

export const getUserDocument = async (req, res) => {
        
    try {
        const userDocument = await UserDocument.find({});
        res.status(201).json(userDocument);

      } catch (err) {
        res.status(404).json({message: err.message});
      } 
    
};

export const postUserDocument = async (req, res) => {

    try {
        
        const userDocument = new UserDocument(req.body);
        const newUserDocument = await userDocument.save();
        res.status(201).json(newUserDocument);

    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

export const postUserDocumentById = async (req, res) => {
  const { password } = req.body;

  const userDocument = await UserDocument.findOne({ _id: req.params.id });
  if (userDocument) {
    const hashedPassword = userDocument.password;
    const isMatched = await bcrypt.compare(password, hashedPassword);
    if (isMatched) {
      res.status(200).json(userDocument);
    } else {
      res.status(401).json({ message: "password didn't match" });
    }
  } else {
    res.status(404).json({ message: "NOT FOUND" });
  }
};

export const putUserDocument = async (req, res) => {
  try {
    const updatedUserDocument = await UserDocument.findOneAndUpdate(req.params.id,req.body, { new : true, runValidators : true});
    
    if(!updatedUserDocument){
        return res.status(404).json({message: err.message})
    }
    res.status(200).json(updatedUserDocument);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteUserDocument = async (req, res) => {
  try {
    const deletedUserDocument = await UserDocument.findByIdAndDelete(req.params.id);

    if(!deletedUserDocument){
        res.status(404).json(deletedUserDocument);
    }
    res.status(200).json(deletedUserDocument);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};