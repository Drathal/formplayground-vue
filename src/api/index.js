export default {
  async postHttpbin(url, data) {
    const defaultUrl = `https://httpbin.org/post`
    const response = await fetch(url || defaultUrl, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        body: JSON.stringify(data)
      }
    })

    const responseData = await response.json()
    if (response.ok) {
      return data
    }

    const error = new Error(responseData.message || 'Failed to post data.')
    error.response = responseData

    throw error
  },
  async getHttpbin(url, data) {
    const urlParams = new URLSearchParams(data)
    const defaultUrl = `https://httpbin.org/get?${urlParams}`
    const response = await fetch(url || defaultUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    })

    const responseData = await response.json()
    if (response.ok) {
      return data
    }

    const error = new Error(responseData.message || 'Failed to get data.')
    error.response = responseData

    throw error
  }
}
