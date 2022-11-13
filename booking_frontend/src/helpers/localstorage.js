export function getItemFromLocalStorage(type) {
    console.log(localStorage.getItem(type));
        return localStorage.getItem(type)
}

export function setItemToLocalStorage(key, value) {
    localStorage.setItem(key, value)
}