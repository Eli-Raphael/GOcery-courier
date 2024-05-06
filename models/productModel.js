const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
    name: { type: String, required: true },
    variants: [{ type: String, required: true }],
    prices: [{ type: Number, required: true }],
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true
});

const groceryModel = mongoose.model('Product', grocerySchema);

<<<<<<< HEAD:models/productModel.js
module.exports = productModel;
=======
module.exports = groceryModel;
>>>>>>> parent of edb14e0 (5.5.24):models/goceryModel.js
