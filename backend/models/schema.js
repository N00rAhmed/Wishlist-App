const mongoose = require("mongoose");

const schema = mongoose.Schema({
    _id: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model("wishlist-collection", schema);