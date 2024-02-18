const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { default: mongoose } = require("mongoose");
const tasksRoute = require("./routes/tasks");
const contactRoute = require("./routes/contact");
const transictionRoute= require("./routes/Transiction");
const userRoute = require("./routes/visits");
const app = express();
// let allowlist = ['https://dashboard-magic.vercel.app/', 'https://dashboard-magic.vercel.app']
app.use(cors())
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin','*')
//     res.header('Access-Control-Allow-Methods','POST, GET, OPTIONS, PUT, DELETE')
//     // res.header('Access-Control-Allow-Credentials', true);
//     next();
//   });
  
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
dotenv.config();

const connectDB = () => {
  mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
    },
    () => {
      app.listen(8800, () => {
        console.log("Backend server is running!");
      });
    }
  );
};


app.use(express.json());

/* -------------- PASSPORT AUTHENTICATION ----------------*/

app.use("/api/tasks", tasksRoute);
app.use("/api/contact", contactRoute);
app.use("/api/transiction", transictionRoute);
app.use("/api/user", userRoute);
connectDB();