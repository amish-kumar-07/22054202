const express = require('express');
const { getTopUsers } = require('./users');

const router = express.Router();

router.get('/', getTopUsers);

module.exports = router;