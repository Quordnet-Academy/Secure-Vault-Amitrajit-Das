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

export const putUserEducation = async (req, res) => {
  try {
    const updatedUserEducation = await UserEducation.findOneAndUpdate(req.params.id,req.body, { new : true, runValidators : true});
    
    if(!updatedUserEducation){
        return res.status(404).json({message: err.message})
    }

    res.status(200).json(updatedUserEducation);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteUserEducation = async (req, res) => {
  try {
    const deletedUserEducation = await UserEducation.findByIdAndDelete(req.params.id);

    if(!deletedUserEducation){
        res.status(404).json(deletedUserEducation);
    }
    res.status(200).json(deletedUserEducation);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};