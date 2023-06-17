import { AddAccount } from '@/domain/usecases'
import faker from 'faker'
import { mockAccountModel } from './mock-account'

export const mockAddAccount = (): AddAccount.Params => {
  const password = faker.internet.password()
  return {
    name: faker.random.word(),
    email: faker.internet.email(),
    password,
    passwordConfirmation: password
  }
}

export class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params: AddAccount.Params
  callsCount = 0

  async add (params: AddAccount.Params): Promise<AddAccount.Model> {
    this.params = params
    this.callsCount++
    return await Promise.resolve(this.account)
  }
}
