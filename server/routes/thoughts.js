const express = require('express');
const router = express.Router();
const thoughtsController = require('../controllers/thoughts');

// get all
router.get('/', thoughtsController.getAllThoughts);
// get one
router.get('/:id', thoughtsController.getOneThought);
// creating one
router.post('/', thoughtsController.createThought);

module.exports = router;
