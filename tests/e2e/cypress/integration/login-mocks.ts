import * as Helper from '../support/http-mocks'
import faker from 'faker'

export const mockInvalidCredencialsError = (): void => Helper.mockInvalidCredencialsError(/login/)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/login/, 'POST')
export const mockOk = (): void => Helper.mockOk(/login/, 'POST', { accessToken: faker.random.words() })
export const mockInvalidData = (): void => Helper.mockOk(/login/, 'POST', { invalidProperty: faker.random.words() })
