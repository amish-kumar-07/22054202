const express = require('express');
const router = express.Router();
const { fetchUsers } = require('./api'); 

// GET route for users
router.get('/', async (req, res) => {
  try {
    const users = await fetchUsers();
    const userMap = {};

    users.forEach(user => {
      userMap[user.id] = user.name;
    });

    res.json({ users: userMap });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

module.exports = router;