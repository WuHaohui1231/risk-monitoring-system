const { Position } = require('../models');

exports.getPositions = async (req, res) => {
  try {
    const clientId = req.params.clientId;
    const positions = await Position.findAll({ where: { client_id: clientId } });
    res.json(positions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPosition = async (req, res) => {
  try {
    const { client_id, symbol, quantity, cost_basis } = req.body;
    const newPos = await Position.create({ client_id, symbol, quantity, cost_basis });
    res.status(201).json(newPos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};