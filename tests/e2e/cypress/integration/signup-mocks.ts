import * as http from '../support/http-mocks'
import faker from 'faker'

export const mockEmailInUseError = (): void => { http.mockForbbidenError(/signup/, 'POST') }
export const mockUnexpectedError = (): void => { http.mockServerError(/signup/, 'POST') }
export const mockOk = (): void => { http.mockOk(/signup/, 'POST', { accessToken: faker.random.words(), name: faker.name.findName() }) }
