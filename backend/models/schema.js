const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model("wishlist-collection", schema);