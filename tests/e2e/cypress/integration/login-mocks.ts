import * as http from '../support/http-mocks'
import faker from 'faker'

export const mockInvalidCredencialsError = (): void => { http.mockUnauthorizedError(/login/) }
export const mockUnexpectedError = (): void => { http.mockServerError(/login/, 'POST') }
export const mockOk = (): void => { http.mockOk(/login/, 'POST', { accessToken: faker.random.words(), name: faker.name.findName() }) }
