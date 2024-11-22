// routes/reviews/index.js
const express = require('express');
const router = express.Router();
const Reviews = require('../../config/models/Reviews');

router.post('/submit', (req, res) => {
  const { name, textarea } = req.body;
  const review = new Reviews({ name, textarea });
  review.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving review data');
    } else {
      res.send('Review data saved successfully');
    }
  });
});

module.exports = router;