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

export const putUserMedical = async (req, res) => {
  try {
    const updatedUserMedical = await UserMedical.findOneAndUpdate(req.params.id,req.body, { new : true, runValidators : true});
    
    if(!updatedUserMedical){
        return res.status(404).json({message: err.message})
    }

    res.status(200).json(updatedUserMedical);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};



export const deleteUserMedical = async (req, res) => {
  try {
    const deletedUserMedical = await UserMedical.findByIdAndDelete(req.params.id);

    if(!deletedUserMedical){
        res.status(404).json(deletedUserMedical);
    }
    res.status(200).json(deletedUserMedical);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
