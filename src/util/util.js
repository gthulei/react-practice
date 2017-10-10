
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

export function isMobile(value) {
  return /^(13|14|15|17|18)\d{9}$/i.test(value);
}
export function isSms(value, leng) {
  var v = leng || 6;
  if (+v == 6) {
    return /^\d{6}$/.test(value);
  } else if (+v == 4) {
    return /^\d{4}$/.test(value);
  }
}
