import { UserMedical } from '../models/medical.js';

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


