const apiHost = 'http://ec2-3-37-66-240.ap-northeast-2.compute.amazonaws.com:8080';

export const pagePaths = {
  home: '/',
  user: '/user',
  cart: '/cart'
};

export const apiPaths = {
  login: `${apiHost}/api/v1/login`, // POST
  order: `${apiHost}/api/v1/order`, // POST
  putItem: `${apiHost}/api/v1/putItem`, // POST
  getItems: `${apiHost}/api/v1/getItems`,
  searchNeighbor: `${apiHost}/api/v1/searchNeighbor`,
  getUserInfo: `${apiHost}/api/v1/getUserInfo`,
  getBeforeOrder: `${apiHost}/api/v1/getBeforeOrder`,
  getNowOrder: `${apiHost}/api/v1/getNowOrder`,
};