import { apiPaths } from 'modules/defines/paths';
import { httpAPI } from './http';

const api = (() => {
  function APIConstructor() { }

  APIConstructor.prototype = {
    login(data) {
      return new Promise((resolve, reject) => {
        httpAPI('', apiPaths.login, { 
          method: 'POST',
          data
        })
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    },

    order(data) {
      return new Promise((resolve, reject) => {
        httpAPI('', apiPaths.order, { 
          method: 'POST',
          data
        })
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    },

    putItem(data) {
      return new Promise((resolve, reject) => {
        httpAPI('', apiPaths.putItem, { 
          method: 'POST',
          data
        })
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    },

    getItems() {
      return new Promise((resolve, reject) => {
        httpAPI('', apiPaths.getItems)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    },

    searchNeighbor(data) {
      return new Promise((resolve, reject) => {
        httpAPI('', `${apiPaths.searchNeighbor}?zip_code=${data}`)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    },

    getUserInfo(data) {
      return new Promise((resolve, reject) => {
        httpAPI('', `${apiPaths.getUserInfo}?user_id=${data}`)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    },

    getBeforeOrder(data) {
      return new Promise((resolve, reject) => {
        httpAPI('', `${apiPaths.getBeforeOrder}?user_id=${data}`)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    },

    getNowOrder(data) {
      return new Promise((resolve, reject) => {
        httpAPI('', `${apiPaths.getNowOrder}?user_id=${data}`)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    },
  };

  return APIConstructor;
})();

export const API = new api();