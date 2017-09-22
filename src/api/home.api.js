import {get} from './fetch'

const getAdvertising = function () {
  return get('/api/homead');
}

const getHomeList = function (city,page) {
  return get(`/api/homelist/${city}/${page}`);
}

export {
  getAdvertising,
  getHomeList
}