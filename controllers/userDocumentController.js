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

export const postUserDocumentPassword = async (req, res) => {
  try {
    const document = await UserDocument.findByCredentials(req.body.password)
    res.send(document);
  } catch (err) {
    res.status(400).json({message: err.message});
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