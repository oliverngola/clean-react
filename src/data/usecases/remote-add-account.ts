import { AddAccount } from '@/domain/usecases'
import { HttpPostClient } from '@/data/protocols'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccount.Params, AddAccount.Result>
  ) {}

  async add (params: AddAccount.Params): Promise<AddAccount.Result> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    return null
  }
}
