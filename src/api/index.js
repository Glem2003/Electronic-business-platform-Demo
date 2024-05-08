import React from 'react';

const ApiData = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("api/data.json")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

}

export default ApiData;