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


export const putUserDetail = async (req, res) => {
  try {
    const updatedUserDetail = await UserDetail.findOneAndUpdate(req.params.id,req.body, { new : true, runValidators : true});
    
    if(!updatedUserDetail){
        return res.status(404).json({message: err.message})
    }

    res.status(200).json(updatedUserDetail);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteUserDetail = async (req, res) => {
  try {
    const deletedUserDetail = await UserDetail.findByIdAndDelete(req.params.id);

    if(!deletedUserDetail){
        res.status(404).json(deletedUserDetail);
    }
    res.status(200).json(deletedUserDetail);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

