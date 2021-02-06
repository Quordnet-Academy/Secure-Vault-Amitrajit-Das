import { UserDocument } from '../models/document.js';

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


