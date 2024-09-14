
// set to local storage
const setToLocalStorage = (key,value) => {
    localStorage.setItem(btoa(key),value);
}

// get from local storage
const getFromLocalStorage = (key) => {
    localStorage.getItem(btoa(key));
}

// remove from local storage
const removeFromLocalStorage = (key) => {
    localStorage.removeItem(btoa(key))    
}

// remove all the data from the localStorage
const removeAllDataFromLocalStorage = () => {
    localStorage.clear();
}
