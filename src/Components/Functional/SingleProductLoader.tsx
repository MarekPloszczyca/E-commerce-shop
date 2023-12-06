// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function productLoader({ params } : any) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const productDetails = await response.json();
  console.log(productDetails);
  return { productDetails };
}
