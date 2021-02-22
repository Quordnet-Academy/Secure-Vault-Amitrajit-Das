import { User } from '../models/user.js';

export const postUser = async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    } catch (e) {
        res.status(400).send()
    }
};
