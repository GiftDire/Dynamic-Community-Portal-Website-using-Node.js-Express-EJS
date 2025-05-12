// app.js

const express = require("express");
const path = require("path");
const mongoose = require("mongoose")
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const port = process.env.port || 3000;
const Host = process.env.Host;

//this is our connection to mongoDB

mongoose.connect('',{
  useNewUrlParser: true,  
  useUnifiedTopology: true
})
.then(() =>
console.log('Database connected')
)
.catch(err => console.log('Dabase not connected'));


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http:${Host+port}`);
});
