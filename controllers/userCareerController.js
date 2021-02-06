import { UserCareer } from '../models/career.js';

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


