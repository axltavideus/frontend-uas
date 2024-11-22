// routes/home/index.js
const express = require('express');
const router = express.Router();
const Reviews = require('../../config/models/Reviews');

router.post('/submit', (req, res) => {
  try {
    const { name, textarea } = req.body;
    const review = new Reviews({ name, textarea });
    review.save()
      .then(() => {
        res.send('<script>alert("Review data saved successfully!"); window.location.href = "/";</script>');
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error saving review data');
      });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;