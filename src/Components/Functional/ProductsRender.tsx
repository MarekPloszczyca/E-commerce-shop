/* eslint-disable @typescript-eslint/no-explicit-any */
import Product from "../Product";

export default function ProductsRender(array: [], state: any) {
  const products = array.map(
    (product: {
      id: number;
      image: string;
      title: string;
      price: string;
      rating: { rate: string };
      category: string;
    }) => {
      return (
        <Product
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          rating={product.rating.rate}
          category={product.category}
        />
      );
    }
  );
  state(products);
}
