const setCookies = (key, value) => {
  window.localStorage.setItem(key, value)
}
const getCookies = (key) => {
  return window.localStorage.getItem(key)
}
const deleteCookies = (key) => {
  window.localStorage.deleteItem(key)
}
export {
  setCookies,
  getCookies,
  deleteCookies
}
