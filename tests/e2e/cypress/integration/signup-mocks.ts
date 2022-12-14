import * as Helper from '../support/http-mocks'
import faker from 'faker'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(/signup/)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/signup/, 'POST')
export const mockOk = (): void => Helper.mockOk(/signup/, 'POST', { accessToken: faker.random.words() })
export const mockInvalidData = (): void => Helper.mockOk(/signup/, 'POST', { invalidProperty: faker.random.words() })
