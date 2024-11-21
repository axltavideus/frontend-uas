// config/models/Form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  textarea: String
});

const Form = mongoose.model('reviews', formSchema);

module.exports = Form;