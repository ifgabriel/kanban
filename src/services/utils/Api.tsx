import { HttpResponse } from '../../data/protocols/http'

import { AxiosHttpClient } from '../../infra/http'

type Get = <P, R>(uri: string, params?: P) => Promise<HttpResponse<R>>
type Post = <P, R>(uri: string, data?: P) => Promise<HttpResponse<R>>
type Put = <P, R>(uri: string, data?: P) => Promise<HttpResponse<R>>
type Patch = <P, R>(uri: string, data?: P) => Promise<HttpResponse<R>>
type Delete = <R>(uri: string) => Promise<HttpResponse<R>>

interface AuthHeaderOptions {
  Authorization: string
}

const makeHeader = (): AuthHeaderOptions | null => {
  const token = sessionStorage.getItem('token')

  if (token) {
    return { Authorization: `Bearer ${token}` }
  } else {
    return null
  }
}

function API() {
  const axios = AxiosHttpClient()
  const URL = ''

  const get: Get = (path, params) =>
    axios.request({
      url: `${URL}${path}`,
      body: params,
      headers: { ...makeHeader() },
      method: 'get',
    })

  const put: Put = (path, params) =>
    axios.request({
      url: `${URL}${path}`,
      body: params,
      headers: { ...makeHeader() },
      method: 'put',
    })

  const patch: Patch = (path, params) =>
    axios.request({
      url: `${URL}${path}`,
      body: params,
      headers: { ...makeHeader() },
      method: 'patch',
    })

  const post: Post = (path, params) =>
    axios.request({
      url: `${URL}${path}`,
      body: params,
      headers: { ...makeHeader() },
      method: 'post',
    })

  const del: Delete = (path) =>
    axios.request({
      url: `${URL}${path}`,
      method: 'delete',
      headers: { ...makeHeader() },
    })

  return {
    get,
    put,
    patch,
    post,
    delete: del,
  }
}

export const Api = API()
