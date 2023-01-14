import { HttpGetClient, HttpPostClient, HttpResponse, HttpStatusCode } from '@/data/protocols'

import faker from 'faker'

export const mockPostRequest = (): HttpPostClient.Params => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

export class HttpPostClientSpy<R> implements HttpPostClient<R> {
  url?: string
  body?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostClient.Params): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}

export class HttpGetClientSpy<R> implements HttpGetClient<R> {
  url?: string
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async get (params: HttpPostClient.Params): Promise<HttpResponse<R>> {
    this.url = params.url
    return await Promise.resolve(this.response)
  }
}
