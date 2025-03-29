const mongoose = require("mongoose");

const bullSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  health_condition: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contact_number: {
    type: String,
    required: true
  },
  temperament: {
    type: String,
    required: true
  },
  body_conformation: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Bull = mongoose.model("Bull", bullSchema);

module.exports = Bull;
