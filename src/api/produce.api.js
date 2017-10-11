import {get} from './fetch'

const getProduceList = function (page,city,category,keyword) {
  return get(`/api/search/${page}/${city}/${category}/${keyword}`);
}

export {
  getProduceList
}