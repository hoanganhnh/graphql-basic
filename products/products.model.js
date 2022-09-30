const products = [
  { id: "redshoe", description: "My product", price: 12.4 },
  { id: "buleshoe", description: "Blue Shoe", price: 10.2 },
  { id: "blackshoe", description: "Black Shoe", price: 5 },
  { id: "greenshoe", description: "Green Shoe", price: 30.5 },
];

const getAllProducts = () => {
  return products;
};
const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

const getProductsByPrice = (min, max) => {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
};
