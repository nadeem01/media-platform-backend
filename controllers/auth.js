const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { MESSAGES } = require('../constants/messages');
const {
  RESPONSE_STATUS,
  STATUS_CODE,
} = require('../constants/response-status');
const db = require('../database/models');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User = db.User;

    let user;
    if (email) {
      user = await User.findOne({ where: { email } });
    }
    if (!user) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json(MESSAGES.AUTH.USER_NOT_FOUND);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(STATUS_CODE.ERROR)
        .json(MESSAGES.AUTH.PASSWORD_NOT_MATCH);
    }

    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
    const token = jwt.sign(payload, 'secret', {
      expiresIn: '30d',
    });

    return res
      .status(STATUS_CODE.SUCCESS)
      .json({ MESSAGES: MESSAGES.AUTH.LOGIN_SUCCESS, data: token });
  } catch (err) {
    console.log(err);
  }
};
exports.signup = async (req, res) => {
  try {
    const { email } = req.body;
    const User = db.User;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(STATUS_CODE.ERROR).json(MESSAGES.AUTH.EMAIL_EXISTS);
    }
    const user = await User.create(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    let newUser = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      id: user.id,
    };

    return res.status(STATUS_CODE.SUCCESS).json(newUser);
  } catch (err) {
    console.log(err);
  }
};
