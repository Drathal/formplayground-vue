import axios, { AxiosResponse, Method } from 'axios'

interface ResponseData<T> {
  args: Record<string, unknown>
  data: string
  files: Record<string, unknown>
  form: Record<string, unknown>
  headers: {
    Accept: string
    'Accept-Encoding': string
    'Accept-Language': string
    'Content-Length': string
    'Content-Type': string
    Dnt: string
    Host: string
    Origin: string
    Referer: string
    'Sec-Ch-Ua': string
    'Sec-Ch-Ua-Mobile': string
    'Sec-Fetch-Dest': string
    'Sec-Fetch-Mode': string
    'Sec-Fetch-Site': string
    'User-Agent': string
    'X-Amzn-Trace-Id': string
  }
  json: T
  origin: string
  url: string
}

type HttpResponse<T> = AxiosResponse<ResponseData<T>>

/**
 * Wrapper for axios
 */
export default <T>(
  url: string,
  method: Method,
  data: T
): Promise<AxiosResponse<ResponseData<T>>> =>
  axios({
    method: method || 'post',
    url: url || 'https://jsonplaceholder.typicode.com/posts',
    data: data || {}
  })

export { Method, HttpResponse }
