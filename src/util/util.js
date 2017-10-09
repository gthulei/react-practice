
export function isType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

export function localStorageSet(k, v) {
  let data = v;
  if (isType(v) == 'Object') {
    v = JSON.stringify(v);
  }
  localStorage.setItem(k, v);
}

export function localStorageGet(k) {
  try {
    var v = JSON.parse(localStorage.getItem(k));
  } catch(error) {
    return localStorage.getItem(k);
  }
  return v;
}