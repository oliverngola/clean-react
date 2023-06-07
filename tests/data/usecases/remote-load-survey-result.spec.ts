import { HttpGetClientSpy } from '@/tests/data/mocks'
import { RemoteLoadSurveyResult } from '@/data/usecases'
import faker from 'faker'

describe('RemoteLoadSurveyResult', () => {
  test('Should call HttpGetClient with correct URl', async () => {
    const url = faker.internet.url()
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new RemoteLoadSurveyResult(url, httpGetClientSpy)
    await sut.load()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
