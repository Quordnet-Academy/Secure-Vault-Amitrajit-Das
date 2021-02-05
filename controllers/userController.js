import { UserModel } from '../models/user.js';

export const userGet = async (req, res) => {
        
    try {
        const UserModel = await UserModel.find();
        return res.json(UserModel);

      } catch (err) {
        res.status(404).send(err);
      } 
    
};

export const userPost = async (req, res) => {

    const Record = new UserModel(req.body);

    try {
        await Record.save();
        res.status(201).json(Record)
    } catch (err) {
        res.status(400).json({message: "Record Not Found"});
    }
};


