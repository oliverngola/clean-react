import { AccountModel } from '@/domain/models'
import faker from 'faker'

export const mockAccountModel = (): AccountModel => ({
  name: faker.name.findName(),
  accessToken: faker.datatype.uuid()
})
