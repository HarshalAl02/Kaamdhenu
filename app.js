const express = require("express");
// const axios = require('axios');
// const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const multer = require("multer");
const BreedsInfo = require("./models/breedsInfo.js");
const CowSell = require("./models/cowModel.js");
const Bull = require("./models/bullModel");
const User = require("./models/userModel.js");
const upload = require("./utils/multerConfig.js");
require('dotenv').config();


const app = express();

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connection to DB
// const MONGO_URL = "mongodb://127.0.0.1:27017/Kaamdhenu";
// mongoose.connect(MONGO_URL).then(() => console.log("Connected to DB"))
//     .catch((err) => console.log(err));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB Atlas Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }


// Bull form page
app.get("/bull-form", (req, res) => {
    res.render("profile/bullForm.ejs");
});
// POST route for Bull form data
app.post("/viewData", upload.single("image"), async (req, res) => {
    try {
        const bullData = req.body;
        bullData.image = req.file.filename;

        const newBull = new Bull(bullData);
        await newBull.save();

        res.redirect("profile/viewData");
    } catch (err) {
        console.error("Error saving the bull data:", err);
        res.status(500).send("Error saving bull data");
    }
});


//Cow form page 
app.get("/cow-form", (req, res) => {
    res.render("profile/cowForm.ejs");
});
//Post route for form data
app.post("/viewData",upload.single("image"), async (req, res) => {
    try {
        const cowData = req.body;
        cowData.image = req.file.filename;

        const newCow = new CowSell(cowData);
        await newCow.save();

        res.redirect("profile/viewData");
    } catch (err) {
        console.error("Error saving the data", err);
        res.status(500).send("Error saving cow data");
    }
});


//View Uploded Data page
app.get("/profile/viewData",async (req, res) => {
    try {
        const cowData = await CowSell.find({});
        res.render("profile/viewData.ejs", { cowData });
    } catch (err) {
        console.log("Error catching the data", err);
        res.status(500).send("Internal server error");
    }
    
});

//Profile page 
app.get("/home/profile", async (req, res) => {
    try {
        const allData = await User.find({});
        res.render("profile/main page.ejs", { user: allData[0] });  
    } catch (err) {
        console.error("Error fetching cow data:", err);
        res.status(500).send("Internal Server Error");
    }
});


//breeding program insight page
app.get("/breeding/ai-insights", (req, res) => {
    res.render("breedingProgram/ai-insights.ejs"); 
});

//Indigenous Breeding Programs page
app.get("/breeding/info", (req, res) => {
    res.render("breedingProgram/info.ejs"); 
});

//Breeding program page 
app.get("/home/breeding", (req, res) => {
    res.render("breedingProgram/breedingProgram.ejs");
});

//marketplace:- Nearby Cows
app.get("/marketplace/nearbyCow", (req, res) => {
    res.render("./marketplace/nearbyCow.ejs");
});

//marketplace:- Dairy products page
app.get("/marketplace/dairyProducts", (req, res) => {
    res.render("./marketplace/dairyProducts.ejs");
});

//marketplace: BuySell page
app.get("/marketplace/buySell", (req, res) => {
    res.render("./marketplace/buySell.ejs");
});

//marketplace:- main page
app.get("/home/marketplace", (req, res) => {
    res.render("marketplace/marketplace.ejs");
});


//Landing page route
app.get("/landingPage", async (req, res) => {
    try {
        const allinfo = await BreedsInfo.find({});
        res.render("home/landingPage.ejs", { allinfo });  
    } catch (err) {
        console.error("Error fetching cow data:", err);
        res.status(500).send("Internal Server Error");
    }
});

//login
app.get("/loginPage", (req, res) => {
    res.render("loginSignUp/loginPage.ejs");
});

app.get("/signUpPage", (req, res) => {
    res.render("loginSignUp/signUpPage.ejs");
});


//root route 
app.get("/" , (req, res) => {
    res.send("Hi i am root");
});

//setting up the server 
app.listen(8080, () => {
    console.log("App listening on port 8080!");
});

// // chatbotApp.listen(3000, () => {
// //     console.log("Chatbot Server running on port 3000!");
// // });


// // Start both servers on different ports
// const mainServer = app.listen(8080, () => {
//     console.log("Main App running on port 8080");
// });

// const chatbotServer = chatbotApp.listen(3000, () => {
//     console.log("Chatbot Server running on port 3000");
// });


