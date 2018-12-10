/* eslint-disable no-else-return */
export default function fetcher(baseURL, path, offset) {
  if ('fetch' in window) {
    return new Promise((resolve, reject) => {
      fetch(baseURL + path + offset)
        .then((response) => {
          resolve(response.json().then(data => data))
        })
        .catch(() => reject(new Error('something bad happened')))
    })
  } else {
    import(/* webpackChunkName:"axios" */ 'axios').then((module) => {
      const axios = module.default
      const ax = axios.create({ baseURL })
      return async () => {
        const response = await ax.get(path + offset)
        return response
      }
    })
  }

  return false
}
