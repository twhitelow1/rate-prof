import { Op } from 'sequelize';
import model from '../models';

const { User } = model;
// Adding Authentication later
export default {
  async signUp(req, res) {
    const { email, password, name } = req.body;
    try {
      const user = await User.findOne({ where: { [Op.or]: [{ email }] } });
      if (user) {
        return res.status(422)
          .send({ message: 'User with that email already exists' });
      }

      await User.create({
        name,
        email,
        password,
      });
      return res.status(201).send({ message: 'Account created successfully' });
    } catch (e) {
      console.log(e);
      return res.status(500)
        .send(
          { message: 'Could not perform operation at this time, kindly try again later.' });
    }
  }
}
