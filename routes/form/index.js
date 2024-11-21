// routes/form/index.js
const express = require('express');
const router = express.Router();
const Form = require('../../config/models/Form');

router.post('/submit', (req, res) => {
  const { name, textarea } = req.body;
  const form = new Form({ name, textarea });
  form.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving form data');
    } else {
      res.send('Form data saved successfully');
    }
  });
});

module.exports = router;