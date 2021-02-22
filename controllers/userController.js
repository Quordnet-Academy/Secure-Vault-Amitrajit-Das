import { User } from '../models/user.js';



export const userSignup = async (req, res) => {

    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err)
    }
};


export const userLogin = async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken();
        res.send({ user, token });
        res.send(user);
    } catch (err) {
        res.status(400).send(err)
    }
};
