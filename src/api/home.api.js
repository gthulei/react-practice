import {get} from './fetch'

const getAdvertising = function () {
  return get('/api/homead');
}

export {getAdvertising}