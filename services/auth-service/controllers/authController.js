const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

exports.login = (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (email !== user.email) {
    return res.status(401).json({ message: 'Invalid email.' });
  }

  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid password.' });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });

  return res.json({
    message: 'Login successful.',
    token
  });
};
