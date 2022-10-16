import { Authentication } from '@/domain/usecases'
import { mockAccountModel } from '@/tests/domain/mocks'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: Authentication.Params

  async auth (params: Authentication.Params): Promise<Authentication.Result> {
    this.params = params
    return await Promise.resolve(this.account)
  }
}
