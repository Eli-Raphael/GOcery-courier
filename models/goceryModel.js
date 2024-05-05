const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    variants: [{ type: String, required: true }],
    prices: [{ type: Number, required: true }],
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModelModel;