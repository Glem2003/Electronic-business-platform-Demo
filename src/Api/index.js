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

/* iPhone pages product data */
export const iPhoneProductData = () => {
  return new Promise((reslove, reject) => {
    fetch("/api/allProductData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reslove(data.iPhone);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}

/* watch pages product data */
export const watchProductData = () => {
  return new Promise((reslove, reject) => {
    fetch("/api/allProductData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reslove(data.Watch);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}

/* airpod pages product data */
export const airpodProductData = () => {
  return new Promise((reslove, reject) => {
    fetch("/api/allProductData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reslove(data.Airpods);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}

/* Tv and Family pages product data */
export const tvHomeProductData = () => {
  return new Promise((reslove, reject) => {
    fetch("/api/allProductData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reslove(data.TvHome);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}

/* funny pages product data */
export const funnyProductData = () => {
  return new Promise((reslove, reject) => {
    fetch("/api/allProductData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reslove(data.funny);
      })
      .catch((error) => {
        console.log('Error fetching macProductData:', error);
        reject(error);
      })
  })
}