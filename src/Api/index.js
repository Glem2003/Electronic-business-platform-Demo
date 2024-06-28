export const productData = () => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.PUBLIC_URL}/api/productData.json`)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        // Dynamically replace image paths and display data
        const updatedData = data.map(item => ({
          ...item,
          src: `${process.env.PUBLIC_URL}${item.src}`
        }));
        resolve(updatedData);
      })
      .catch((error) => {
        console.log('Error fetching productData:', error);
        reject(error);
      })
  })
}

export const productTextData = () => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.PUBLIC_URL}/api/productText.json`)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        // Dynamically replace image paths and display data
        const updatedData = data.map(item => ({
          ...item,
          src: `${process.env.PUBLIC_URL}${item.src}`
        }));
        resolve(updatedData);
      })
      .catch((error) => {
        console.log('Error fetching productText:', error);
        reject(error);
      })
  })
}

/* mac pages product data */
export const macProductData = () => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.PUBLIC_URL}/api/allProductData.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.mac);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}

/* ipad pages product data */
export const iPadProductData = () => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.PUBLIC_URL}/api/allProductData.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.iPad);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}

/* iPhone pages product data */
export const iPhoneProductData = () => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.PUBLIC_URL}/api/allProductData.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.iPhone);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}

/* watch pages product data */
export const watchProductData = () => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.PUBLIC_URL}/api/allProductData.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.Watch);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}

/* airpod pages product data */
export const airpodProductData = () => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.PUBLIC_URL}/api/allProductData.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.Airpods);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}

/* Tv and Family pages product data */
export const tvHomeProductData = () => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.PUBLIC_URL}/api/allProductData.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.TvHome);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}

/* funny pages product data */
export const funnyProductData = () => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.PUBLIC_URL}/api/allProductData.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data.funny);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}