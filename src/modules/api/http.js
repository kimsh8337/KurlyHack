import axios from 'axios';

const defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const httpAPI = function (host, path, callOptions) {
  const options = { ...defaultOptions, ...callOptions };
  
  return new Promise((resolve, reject) => {
    axios(host + path, options)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => reject(error));
  });
};
