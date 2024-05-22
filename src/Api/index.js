export const productData = () => {
  return new Promise((reslove, reject) => {
    fetch("api/productData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reslove(data);
      })
      .catch((error) => {
        console.log('Error fetching productData:', error);
        reject(error);
      })
  })

}

export const productTextData = () => {
  return new Promise((reslove, reject) => {
    fetch("api/productText.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reslove(data);
      })
      .catch((error) => {
        console.log('Error fetching productText:', error);
        reject(error);
      })
  })
}

/* mac pages product data */
export const macProductData = () => {
  return new Promise((reslove, reject) => {
    fetch("/api/allProductData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reslove(data.mac);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}

/* ipad pages product data */
export const iPadProductData = () => {
  return new Promise((reslove, reject) => {
    fetch("/api/allProductData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reslove(data.iPad);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}

export const iPhoneProductData = () => {
  return new Promise((reslove, reject) => {
    fetch("/api/allProductData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reslove(data.iPhone);
        console.log(data.iPhone)
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}