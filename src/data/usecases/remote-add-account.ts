import { HttpPostClient, HttpStatusCode } from '@/data/protocols'
import { AddAccount } from '@/domain/usecases'
import { EmailInUseError } from '@/domain/errors'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccount.Params, AddAccount.Result>
  ) {}

  async add (params: AddAccount.Params): Promise<AddAccount.Result> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.forbidden: throw new EmailInUseError()
      default: return null
    }
  }
}
