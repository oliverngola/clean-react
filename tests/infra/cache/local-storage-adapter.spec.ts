import { LocalStorageAdapter } from '@/infra/cache'
import faker from 'faker'
import 'jest-localstorage-mock'

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localStorage with correct values', async () => {
    const sut = new LocalStorageAdapter()
    const key = faker.database.column()
    const value = faker.datatype.uuid()
    await sut.set(key, value)
    expect(localStorage.setItem).toBeCalledWith(key,value)
  })
})
