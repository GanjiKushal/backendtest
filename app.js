const mongoose = require("mongoose");
const express = require("express")
const app = express();

const product = require("./models/products");
const costmer = require("./models/costmer-table");
const router = require("./router/router");

app.use(router)
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/api_web_tech_assignment", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Connected to DB");
    }
})


app.listen(3000, () => {
    console.log("server is running on port 3000")
});