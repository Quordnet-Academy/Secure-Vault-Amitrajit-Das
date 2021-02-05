import { UserModel } from '../models/user.js';

export const userGet = async (req, res) => {

    const newRecord = new UserModel(req.body);

    try {
        await newRecord.save();
        res.status(201).send(newRecord)
    } catch (err) {
        res.status(400).send(err);
    }
};

export const userPost = async (req, res) => {

    try {
        const UserModels = await UserModel.find();
        return res.json(UserModels);

      } catch (err) {
        res.status(404).send(err);
      }
};

