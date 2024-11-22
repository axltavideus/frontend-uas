// config/models/Reviews.js
const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  name: String,
  textarea: String
});

const Reviews = mongoose.model('reviews', reviewsSchema);

module.exports = Reviews;