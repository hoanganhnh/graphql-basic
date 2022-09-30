const productsController = require("./products.controller");

module.exports = {
  Query: {
    products: () => productsController.getAllProducts(),
    product: (_, args) => productsController.getProductById(args.id),
    productsByPrice: (_, args) => {
      return productsController.getProductsByPrice(
        args.minPrice,
        args.maxPrice
      );
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsController.addNewProduct(args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return productsController.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
    deleteProductById: (_, args) => {
      return productsController.deleteProductById(args.id);
    },
    deleteProductReviewByProductId: async (_, args) => {
      return await productsController.deleteProductReviewByProductId(
        args.id,
        args.comment
      );
    },
  },
};
