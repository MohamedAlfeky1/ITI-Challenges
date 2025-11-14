export async function FetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}
