import {UserModel} from "../models/individual.js";

const user_post = (req, res) => {};

const user_get = async (req, res) => {
  const users = await UserModel.find({});
  res.json(users);
};

export { user_get, user_post };