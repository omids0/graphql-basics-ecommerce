const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProductsFilterInput): [Product]
    product(id: ID!): Product
    categories: [Category]
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String
    description: String
    quantity: Int
    price: Float
    onSale: Boolean
    image: String
    categoryId: ID
    category: Category
    reviews: [Review]
  }

  type Category {
    name: String
    id: ID
    products: [Product]
  }

  type Review {
    id: ID
    date: String
    title: String
    comment: String
    rating: Int
    productId: ID
  }

  input ProductsFilterInput{
    onSale: Boolean
    avgRating: Int
  }
`;
