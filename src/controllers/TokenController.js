// eslint-disable-next-line no-unused-vars
import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  // eslint-disable-next-line consistent-return
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Invalid Request'],
      });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        errors: ['User not exist'],
      });
    }
    if (!(await user.validatePassword(password))) {
      return res.status(401).json({
        errors: ['Invalid password'],
      });
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    res.json({ token });
  }
}

export default new TokenController();
