
// set to local storage
const setToLocalStorage = (key,value) => {
    localStorage.setItem(btoa(key),value);
}

// get from local storage
const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(btoa(key));
    return value ? value : null;
}

// remove from local storage
const removeFromLocalStorage = (key) => {
    localStorage.removeItem(btoa(key))    
}

// remove all the data from the localStorage
const removeAllDataFromLocalStorage = () => {
    localStorage.clear();
}

export {setToLocalStorage, getFromLocalStorage, removeFromLocalStorage, removeAllDataFromLocalStorage};
