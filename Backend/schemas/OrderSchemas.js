const {Shema} = require('mongoose');

const OrderSchema = new Shema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,

});
module.exports = OrderSchema;