


export function addStudentItemToStorage(key, val) {
    
    val= JSON.stringify(val);
    window.localStorage.setItem(key, val);
}
export function removeStudentItemToStorage(key) {
    window.localStorage.removeItem(key);
}
export function getStudentItemToStorage(key) {

    return JSON.parse(window.localStorage.getItem(key));
}