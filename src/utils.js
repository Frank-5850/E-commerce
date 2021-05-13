export const getProducts = async () => {
  try {
    const results = await fetch("https://fakestoreapi.com/products");
    const data = await results.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  return [];
};
