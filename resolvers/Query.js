exports.Query = {
  hello: () => {
    return "hello world";
  },
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }

      if([1,2,3,4,5].includes(filter.avgRating)){
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0
          let numberOfReviews = 0
          reviews.forEach((review) => {
            if(review.productId === product.id){
              sumRating += review.rating
              numberOfReviews++
            }
          })
          let avrageOfReviews = sumRating/numberOfReviews
          return avrageOfReviews >= filter.avgRating
        })
      }
    }

    return filteredProducts;
  },
  product: (parent, args, { products }) => {
    const product = products.find((product) => product.id === args.id);
    if (!product) {
      return null;
    }
    return product;
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) => {
    const category = categories.find((category) => category.id === args.id);
    if (!category) {
      return null;
    }
    return category;
  },
};
