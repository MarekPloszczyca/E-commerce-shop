// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function CategoriesLoader({ params }: any) {
  try {
    if (params.id === "clothing") {
      const [men, women] = await Promise.all([
        fetch(`https://fakestoreapi.com/products/category/men's clothing`).then(
          (value) => value.json()
        ),
        fetch(
          `https://fakestoreapi.com/products/category/women's clothing`
        ).then((value) => value.json()),
      ]);
      const categoriesDetails = men.concat(women);
      return { categoriesDetails };
    }
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${params.id}`
    );
    const categoriesDetails = await response.json();
    return { categoriesDetails };
  } catch (error) {
    return console.log(error);
  }
}
