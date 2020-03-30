const Thought = require('../models/Thought');

exports.getAllThoughts = async (req, res, next) => {
  try {
    const thoughts = await Thought.findAll();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getOneThought = async (req, res, next) => {
  try {
    const thought = await Thought.findById(req.params.id);
    res.send(thought);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.createThought = async (req, res, next) => {
  const { title, body, tags } = req.body;

  try {
    const newThought = await Thought.create({
      title: title,
      body: body,
      tags: tags
    });
    res.status(201).json(newThought);

  } catch (error) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateOneThought = async (req, res, next) => {
    const thought = await thought.findById(req.params.id)

    const updatedThought = await 
}

exports.deleteOneThought = async (req, res, next) => {
    const thought = await thought.findById(req.params.id)

    const thought = await thought.destroy?
}
