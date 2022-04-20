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

  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!
    deleteCategory(id: ID): Boolean!
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

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    categoryId: ID!
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
  
`;
