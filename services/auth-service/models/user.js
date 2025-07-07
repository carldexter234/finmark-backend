const bcrypt = require('bcryptjs');

const dummyUser = {
  email: 'test@finmark.com',
  password: bcrypt.hashSync('test123', 10)
};

module.exports = dummyUser;
