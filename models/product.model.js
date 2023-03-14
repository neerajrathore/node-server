const mongoose = require("mongoose")
const scheme = mongoose.Schema;


// this will include all the code for our database models (which in this case will be Products)
let productSchema = new scheme({
    name: {type: String, required: true, max: 1000},
    price: {type: Number, required: true},
})

module.exports = mongoose.model("Product", productSchema);