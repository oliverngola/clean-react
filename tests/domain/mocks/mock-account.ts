import { AddAccount, Authentication } from '@/domain/usecases'

import faker from 'faker'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAddAccount = (): AddAccount.Params => {
  const password = faker.internet.password()
  return {
    name: faker.random.word(),
    email: faker.internet.email(),
    password: password,
    passwordConfirmation: password
  }
}

export const mockAccountModel = (): Authentication.Result => ({
  name: faker.name.findName(),
  accessToken: faker.datatype.uuid()
})
