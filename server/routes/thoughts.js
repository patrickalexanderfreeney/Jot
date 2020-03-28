const express = require('express');
const router = express.Router();
const db = require('../db/db');
const Thought = require('../models/Thought');

// get all
router.get('/', (req, res) => Thought.findall());

module.exports = router;
