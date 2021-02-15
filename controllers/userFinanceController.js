import { UserFinance } from '../models/finance.js';
import bcrypt from "bcrypt";

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

export const postUserFinancePassword = async (req, res) => {
  try {
    const finance = await UserFinance.findByCredentials(req.body.password)
    res.send(finance);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

export const putUserFinance = async (req, res) => {
 const updates = Object.keys(req.body);

  try {
    const updatedUserFinance = await UserFinance.findById(req.params.id);

    updates.forEach((update) => updatedUserFinance[update] = req.body[update])

    await updatedUserFinance.save();

    if(!updatedUserFinance){
        return res.status(404).json({message: err.message})
    }

    res.status(200).json(updatedUserFinance);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteUserFinance = async (req, res) => {
  try {
    const deletedUserFinance = await UserFinance.findByIdAndDelete(req.params.id);

    if(!deletedUserFinance){
        res.status(404).json(deletedUserFinance);
    }
    res.status(200).json(deletedUserFinance);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};