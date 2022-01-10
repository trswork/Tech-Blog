const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alex_test',
    email: 'alextest@test.com',
    password: 'password123'
  },
  {
    username: 'john_test',
    email: 'johntest@test.com',
    password: 'password123'
  },
  {
    username: 'bob_test',
    email: 'bobtest@test.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
