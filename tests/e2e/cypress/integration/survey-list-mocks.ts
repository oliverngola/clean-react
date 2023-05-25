import * as http from '../support/http-mocks'

export const mockUnexpectedError = (): void => { http.mockServerError(/surveys/, 'GET') }
