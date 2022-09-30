const ordersModel = require("./orders/orders.model");
const productsModel = require("./products/products.model");

module.exports = {
  Query: {
    products: () => productsModel,
    orders: () => ordersModel,
  },
};
