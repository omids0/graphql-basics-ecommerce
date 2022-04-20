const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    categories.push(newCategory);
    return newCategory;
  },

  addProduct: (parent, { input }, { products }) => {
    const { name, description, quantity, price, onSale, image, categoryId } =
      input;
    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      onSale,
      image,
      categoryId,
    };
    products.push(newProduct);
    return newProduct;
  },

  addReview: (parent, { input }, { reviews }) => {
    const { date, title, comment, rating, productId } = input;
    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };
    reviews.push(newReview);
    return newReview;
  },

  deleteCategory: (parent,{id}, { categories }) => {
        categories = categories.filter(category => category.id !== id)
        console.log(categories);
        return true
  }
};
