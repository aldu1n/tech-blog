const { User } = require('../models');

const userData =
[
  {
    "username": "user1",
    "password": "password123"
  },
  {
    "username": "user2",
    "password": "password123"
  },
  {
    "username": "user3",
    "password": "password123"
  },
  {
    "username": "user4",
    "password": "password123"
  },
  {
    "username": "user5",
    "password": "password123"
  }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;