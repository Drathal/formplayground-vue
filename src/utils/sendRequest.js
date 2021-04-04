import axios from 'axios'

export default (url, method, data) => 
  axios({
    method: method || 'post',
    url: url || 'https://httpbin.org/post',
    data: data || {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
