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

export const postUserFinanceById = async (req, res) => {
  const { password } = req.body;

  const userFinance = await UserFinance.findOne({ _id: req.params.id });
  if (userFinance) {
    const hashedPassword = userFinance.password;
    const isMatched = await bcrypt.compare(password, hashedPassword);
    if (isMatched) {
      res.status(200).json(userFinance);
    } else {
      res.status(401).json({ message: "password didn't match" });
    }
  } else {
    res.status(404).json({ message: "NOT FOUND" });
  }
};

export const putUserFinance = async (req, res) => {
  try {
    const updatedUserFinance = await UserFinance.findOneAndUpdate(req.params.id,req.body, { new : true, runValidators : true});
    
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