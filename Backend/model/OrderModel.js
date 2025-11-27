const {model} = require('mongoose');
const OrderSchema = require('../schemas/OrderSchemas');

const {OrderModel} = new model('Order', OrderSchema);
module.exports = {OrderModel};