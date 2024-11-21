// routes/home/index.js
// routes/home/index.js
const express = require('express');
const router = express.Router();
const Form = require('../../config/models/Form');

router.post('/submit', (req, res) => {
    try {
      const { name, textarea } = req.body;
      const form = new Form({ name, textarea });
      form.save()
        .then(() => {
          res.send('<script>alert("Form data saved successfully!"); window.location.href = "/";</script>');
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send('Error saving form data');
        });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
});

module.exports = router;