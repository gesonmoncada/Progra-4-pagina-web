// backend/controllers/userController.js
const User = require('../modelos/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, 'your_secret_key');
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ error: 'Error registering new user' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, 'your_secret_key');
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
};