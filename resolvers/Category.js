exports.Category = {
      products: (parent, args, {products}) => {
        const categoryId = parent.id;
        const product = products.filter(
          (product) => product.categoryId === categoryId
        );
        if (!product) {
          return null;
        }
        return product;
      },
    }