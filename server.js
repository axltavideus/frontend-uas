// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const homeRouter = require('./routes/home/index');
const formRouter = require('./routes/form');

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/uas-frontend");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}

connectToDatabase();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRouter);
app.use('/form', formRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});