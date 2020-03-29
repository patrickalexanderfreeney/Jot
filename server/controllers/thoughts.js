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
    const thought = await Thought.create({
      title: title,
      body: body,
      tags: tags
    });
  } catch (error) {
    res.status(500).json({ msg: err.message });
  }
};
