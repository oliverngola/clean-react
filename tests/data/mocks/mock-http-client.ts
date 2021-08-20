import { HttpPostClient, HttpResponse, HttpStatusCode } from '@/data/protocols'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent
  }

  async post (params: HttpPostClient.Params): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
