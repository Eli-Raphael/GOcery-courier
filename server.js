const express = require("express");
const Product = require('./models/productModel');
const app = express();
const db = require("./db.js");

const port = process.env.PORT || 5000;

//app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is working on Port " + port);
});

app.get("/getproducts" , async (req, res) => {
    try {
        const docs = await Product.find({});
        res.send(docs);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
