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

/* mac pages product data */
export const macProductData = () => {
  return fetch("/api/allProductData.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.mac;
    })
    .catch((error) => {
      console.log('Error fetching macProductData:', error);
    })
}

/* ipad pages product data */
export const iPadProductData = () => {
  return fetch("/api/allProductData.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.iPad;
    })
    .catch((error) => {
      console.log('Error fetching macProductData:', error);
    })
}

export const iPhoneProductData = () => {
  return fetch("/api/allProductData.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.iPhone;
    })
    .catch((error) => {
      console.log('Error fetching macProductData:', error);
    })
}