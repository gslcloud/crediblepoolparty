const { validationResult, body } = require('express-validator');
const Prospect = require('../models/prospect');

const createProspect = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, error: errors.array() });
    }

    const { name, email, phone } = req.body;

    const prospect = new Prospect({ name, email, phone });
    await prospect.save();

    res.status(201).json({ success: true, message: 'Prospect created', data: prospect });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to create prospect. Please try again later.' });
  }
};

module.exports = {
  createProspect: [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('phone').notEmpty().withMessage('Phone is required'),
    createProspect
  ],
};