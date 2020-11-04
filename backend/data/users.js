const bcryptjs = require('bcryptjs');

const users = [
  {
    name: 'Admin',
    email: 'admin@easybuy.com',
    password: bcryptjs.hashSync('12345667', 10),
    isAdmin: true,
  },
  {
    name: 'Suraj',
    email: 'Suraj@easybuy.com',
    password: bcryptjs.hashSync('12345667', 10),
  },
  {
    name: 'Amit',
    email: 'amit@easybuy.com',
    password: bcryptjs.hashSync('12345667', 10),
  },
];

module.exports = users;
