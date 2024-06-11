export function setToken(token) {
  localStorage.setItem('token', JSON.stringify(token))
}

export function deleteToken() {
  localStorage.removeItem('token')
}

export function getToken() {
  return JSON.parse(localStorage.getItem('token'))
}

export function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getUser() {
  return JSON.parse(localStorage.getItem('user'))
}