const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: () => productsModel.getAllProducts(),
    product: (_, args) => productsModel.getProductById(args.id),
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.minPrice, args.maxPrice);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return productsModel.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
  },
};
