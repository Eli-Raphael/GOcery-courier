cons express = require("express");
const router = express.Router();
const Product = require('../models/productModel')

router.get("/getallproducts", async(req, res) =>{

    try {
        const product = await Product.find({})
        res.send(product)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.export = router;