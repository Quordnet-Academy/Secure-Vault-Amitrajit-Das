import { UserEducation } from '../models/education.js';

export const getUserEducation = async (req, res) => {
        
    try {
        const userEducation = await UserEducation.find({});
        res.status(201).json(userEducation);

      } catch (err) {
        res.status(404).json({message: err.message});
      } 
    
};

export const postUserEducation = async (req, res) => {

    try {
        
        const userEducation = new UserEducation(req.body);
        const newUserEducation = await userEducation.save();
        res.status(201).json(newUserEducation);

    } catch (err) {
        res.status(400).json({message: err.message});
    }
};


