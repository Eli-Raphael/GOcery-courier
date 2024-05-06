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

<<<<<<< HEAD
=======
app.get("/getproduct" , async (req, res) => {
    try {
        const docs = await Product.find({});
        res.send(docs);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

const port = process.env.PORT || 5000;

>>>>>>> parent of edb14e0 (5.5.24)
app.listen(port, () => {
    console.log("Server is running on port " + port);
});
