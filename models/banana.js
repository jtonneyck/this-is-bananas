const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bananaSchema = new Schema({
    path: String,
})

module.exports = mongoose.model("bananas", bananaSchema, "bananas");