import {getToken} from "../composable/auth/index.js";

export default async function makeRequest(url, method = 'GET', body = null, refresh = false) {

  const options = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const token = getToken()
  if (token && refresh === true) {
    options.headers.Authorization = `Luna ${token}`
  }
  if (body) {
    options.body = JSON.stringify(body);
  }
  return await (await fetch(import.meta.env.VITE_API_KEY + url, options)).json();
}