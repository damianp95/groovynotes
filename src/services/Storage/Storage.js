
// LOCAL STORAGE
export const getLocalItem = function (key) {
    let item = localStorage.getItem(key);
    item = JSON.parse(item);
    return item;
}

export const setLocalItem = function (key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}

export const removeLocalItem = function (key) {
    localStorage.removeItem(key);
}

// SESSION STORAGE
export const getSessionItem = function (key) {
    let item = sessionStorage.getItem(key);
    item = JSON.parse(item);
    return item;
}

export const setSessionItem = function (key, value) {
    value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
}

export const removeSessionItem = function (key) {
    sessionStorage.removeItem(key);
}
