const productModel = require("./products.model");

const getAllProducts = async () => {
  const products = await productModel.find();
  return products;
};

const getProductById = async (id) => {
  const product = await productModel.findById(id);
  return product;
};

const addNewProduct = async (description, price) => {
  const product = await productModel.create({ description, price });
  return product;
};

const getProductsByPrice = async (min, max) => {
  const products = await productModel.find({
    $and: [{ price: { $gte: min } }, { price: { $lte: max } }],
  });

  return products;
};

const addNewProductReview = async (id, rating, comment) => {
  const product = await productModel.findOneAndUpdate(
    { _id: id },
    {
      $push: {
        reviews: {
          rating,
          comment,
        },
      },
    },
    {
      new: true,
    }
  );
  return product;
};

const deleteProductById = async (id) => {
  const prouduct = await productModel.findByIdAndUpdate(id);

  if (!prouduct) {
    return "Delete Project fail!";
  }

  return "Delete Project successfull!";
};

const deleteProductReviewByProductId = async (id, comment) => {
  const prouduct = await productModel.findByIdAndUpdate(
    { _id: id },
    {
      $pull: {
        reviews: {
          comment,
        },
      },
    },
    {
      new: true,
    }
  );
  return prouduct;
};

module.exports = {
  getAllProducts,
  addNewProduct,
  getProductById,
  getProductsByPrice,
  addNewProductReview,
  deleteProductById,
  deleteProductReviewByProductId,
};
