import { UserDetail } from '../models/detail.js';

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


