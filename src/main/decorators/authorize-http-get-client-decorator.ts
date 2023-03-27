import { GetStorage, HttpGetClient, HttpResponse } from '@/data/protocols'

export class AuthorizeHttpGetClientDecorator implements HttpGetClient {
  constructor (private readonly getStorage: GetStorage) {}

  async get (params: HttpGetClient.Params): Promise<HttpResponse> {
    this.getStorage.get('account')
    return null
  }
}
