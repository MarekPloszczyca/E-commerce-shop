// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function productsLoader({ params } : any) {
  const response = await fetch(
    `https://fakestoreapi.com/${params.category}/${params.id}`
  );
  const productDetails = await response.json();
  return { productDetails };
}
