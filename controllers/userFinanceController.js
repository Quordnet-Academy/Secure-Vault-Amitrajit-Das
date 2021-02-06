import { UserFinance } from '../models/finance.js';

export const getUserFinance = async (req, res) => {
        
    try {
        const userFinance = await UserFinance.find({});
        res.status(201).json(userFinance);

      } catch (err) {
        res.status(404).json({message: err.message});
      } 
    
};

export const postUserFinance = async (req, res) => {

    try {
        
        const userFinance = new UserFinance(req.body);
        const newUserFinance = await userFinance.save();
        res.status(201).json(newUserFinance);

    } catch (err) {
        res.status(400).json({message: err.message});
    }
};


