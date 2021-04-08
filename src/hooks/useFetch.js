import { reactive, toRefs } from 'vue'

import API from '../api'

// const cache = new Map()

export default function useFetch() {
  const state = reactive({
    loading: false,
    error: '',
    data: []
  })

  async function fetchData(data, url, method) {
    try {
      state.loading = true
      state.error = ''
      state.data = []

      const send = method === 'POST' ? API.postHttpbin : API.getHttpbin
      const response = await send(url, data)

      state.data = response
    } catch (error) {
      state.error = error.message || 'Error loading posts.'
    } finally {
      state.loading = false
    }
  }

  return { ...toRefs(state), fetchData }
}
