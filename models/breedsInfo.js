const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const breedsInfoSchema = new Schema({
    name: String,
    origin: String,
    milk_yield: String,
    features: String,
    purpose: String,
    image: String,
}); 

const BreedsInfo = mongoose.model("BreedsInfo", breedsInfoSchema);
module.exports = BreedsInfo;