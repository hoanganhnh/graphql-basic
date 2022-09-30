const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: () => productsModel.getAllProducts(),
    product: (_, args) => productsModel.getProductById(args.id),
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.minPrice, args.maxPrice);
    },
  },
};
