export const productData = () => {
  return fetch("api/data.json")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log('Error fetching productData:', error);
    })
}