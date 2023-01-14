import { HttpResponse } from './http-response'

export interface HttpPostClient<R = any> {
  post: (params: HttpPostClient.Params) => Promise<HttpResponse<R>>
}

export namespace HttpPostClient {
  export type Params = {
    url: string
    body?: any
  }
}
