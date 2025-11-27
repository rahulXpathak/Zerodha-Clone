const {Shema} = require('mongoose');

const PositionsSchema = new Shema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    day: String,
    net: String,
    isLoss: Boolean,
});
module.exports = PositionsSchema;
