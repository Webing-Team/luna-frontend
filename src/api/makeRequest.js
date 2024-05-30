export default async function makeRequest(url, method = 'GET', body = null) {
  const options = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }
  return await (await fetch(import.meta.env.VITE_API_KEY + url, options)).json();
}