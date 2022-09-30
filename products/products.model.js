const products = [
  { id: "redshoe", description: "My product", price: 12.4, reviews: [] },
  { id: "buleshoe", description: "Blue Shoe", price: 10.2, reviews: [] },
  { id: "blackshoe", description: "Black Shoe", price: 5, reviews: [] },
  { id: "greenshoe", description: "Green Shoe", price: 30.5, reviews: [] },
];

const getAllProducts = () => {
  return products;
};
const getProductById = (id) => {
  const idxProduct = products.findIndex((product) => product.id === id);
  const product = products[idxProduct];
  return product;
};

const getProductsByPrice = (min, max) => {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
};

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
};
/**
 * mutation AddNewProductReview($id: ID!, $rating: Int!, $comment: String!) {
  shoeReview: addNewProductReview(id: $id, rating: $rating, comment: $comment) {
      id,
      description,
      price,
      reviews {
        comment,
        rating
      }
      
  }
}
 * @param {*} id : string
 * @param {*} rating : string
 * @param {*} comment : string
 * @returns product
 */
const addNewProductReview = (id, rating, comment) => {
  const product = getProductById(id);
  product.reviews.push({ rating, comment });

  return product;
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
