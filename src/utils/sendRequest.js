import axios from 'axios'

/**
 * Wrapper for axios
 *
 * @param {string} url - url for request
 * @param {string} method - method to use (get, post, etc)
 * @param {object} data - Json data to send
 * @return {axios} unwrapped axios response
 */
export default (url, method, data) =>
  axios({
    method: method || 'post',
    url: url || 'https://httpbin.org/post',
    data: data || {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
