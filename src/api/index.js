export const productData = () => {
  return fetch("api/productData.json")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log('Error fetching productData:', error);
    })
}

export const productTextData = () => {
  return fetch("api/productText.json")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log('Error fetching productText:', error);
    })
}