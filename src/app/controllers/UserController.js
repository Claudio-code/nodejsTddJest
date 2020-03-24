import User from '../models/User';
import { where } from 'sequelize';

class UserController {
  async store(req, res) {
    const { email } = req.body;
    const checkEmail = await User.findOne({ where: { email } });

    if (checkEmail) {
      return res.status(400).json({ error: 'duplicate email from user' });
    }


    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
