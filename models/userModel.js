const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        trim: true
    },

    email: {
        type: String,
        requierd: true,
    },

    location: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true,
        match: [/^[6-9]\d{9}$/, "Please enter a valid phone number"]
    }
      
});

const User = mongoose.model("User", userSchema);
module.exports = User;
