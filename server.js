const express = require("express");
const Product = require('./models/productModel');
const app = express();
const db = require("./db.js");

const productsRoute = require('./routes/productsRoute')

app.use('/api/products/', productsRoute)

const port = process.env.PORT || 8000;

//app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is working on Port " + port);
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
