import 'whatwg-fetch'

const get = function (url) {
  return fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*'
    }
  }).then(response => {
    return response.json();
  });
}
const post = function (url,obj) {
  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(obj)
  }).then(response => {
    return response.json();
  });
}

export {get, post}