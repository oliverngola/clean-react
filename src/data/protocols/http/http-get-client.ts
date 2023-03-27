import { HttpResponse } from './http-response'

export interface HttpGetClient<R = any> {
  get: (params: HttpGetClient.Params) => Promise<HttpResponse<R>>
}

export namespace HttpGetClient {
  export type Params = {
    url: string
    headers?: any
  }
}
