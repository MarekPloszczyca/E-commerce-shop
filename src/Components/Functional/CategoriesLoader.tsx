// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function CategoriesLoader({ params }: any) {
  try{
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${params.id}`
  );
  const categoriesDetails = await response.json();
  return { categoriesDetails };}
  catch(error){
    return console.log(error)
  }
}
