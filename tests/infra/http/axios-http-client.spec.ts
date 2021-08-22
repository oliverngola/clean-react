import { HttpPostClient } from '@/data/protocols'
import { AxiosHttpClient } from '@/infra/http'

import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): {sut: AxiosHttpClient} => {
  const sut = new AxiosHttpClient()
  return { sut }
}

const mockPostRequest = (): HttpPostClient.Params<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and verb', async () => {
    const { sut } = makeSut()
    const request = mockPostRequest()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url)
  })
})
