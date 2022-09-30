const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    id: ID!
    description: String! # non-nullable
    price: Float!
    reviews: [Review]
  }

  type Review {
    rating: Int!
    comment: String!
  }

  type OrderItem {
    product: Product
    quantity: Int!
  }

  type Order {
    date: String!
    subtotal: Float!
    items: [OrderItem]
  }

  type Query {
    products: [Product]
    orders: [Order]
  }
`;

module.exports = typeDefs;
