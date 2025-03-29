const mongoose = require("mongoose");
// const CowSell = require("../models/cowModel");
// const cowForBreeding = require("./cowData.js");
const Bull = require("../models/bullModel.js");
const bullData = require("./bullData.js");



async function initBullData() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Kaamdhenu");

    // Optional: Clear previous data before inserting fresh ones
    await Bull.deleteMany({});
    await Bull.insertMany(bullData);

    console.log(" Bull data inserted successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error(" Error inserting bull data:", err);
  }
}

initBullData();


// async function initCowData() {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/Kaamdhenu");
  
//       await CowSell.deleteMany(); 
//       await CowSell.insertMany(cowForBreeding);
//       console.log(" Cow data inserted successfully!");
  
//       mongoose.connection.close();
//     } catch (err) {
//       console.error(" Error inserting cow data:", err);
//     }
//   }
  
//   initCowData();

// const sampleUser = {
//   name: "Ravi Sharma",
//   email: "ravi.sharma@example.com",
//   location: "Nagpur, Maharashtra",
//   phone: "9876543210"
// };

// async function initUser() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/Kaamdhenu");
//     await User.deleteMany({});
//     await User.create(sampleUser);
//     console.log("Sample user inserted successfully.");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error("Error inserting user:", err);
//   }
// }

// initUser();


// const initData = require("./data.js");
// const BreedsInfo = require("../models/breedsInfo.js");

// const sellData = require("./cowSellData.js");
// const CowSell = require("../models/cowSell.js");

// //Connect to DB
// const MONGO_URL = "mongodb://127.0.0.1:27017/Kaamdhenu";
// main().then(() => {
//     console.log("Connected to DB");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// const initDb = async () => {
//     await BreedsInfo.insertMany(initData.data);
//     console.log("data was initialized!");
// };


// initDb();