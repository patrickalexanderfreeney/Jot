const express = require('express');
const router = express.Router();
const db = require('../db/db');
const Thought = require('../models/Thought');
const thoughtsController = require('../controllers/thoughts');

// get all
router.get('/', thoughtsController.getAllThoughts);
// get one
router.get('/:id', thoughtsController.getOneThought);
// creating one
router.post('/', thoughtsController.createThought);

module.exports = router;
