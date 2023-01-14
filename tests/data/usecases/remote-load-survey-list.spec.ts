import { RemoteLoadSurveyList } from '@/data/usecases'
import { LoadSurveyList } from '@/domain/usecases'
import { HttpGetClientSpy } from '@/tests/data/mocks'
import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadSurveyList
  httpGetClientSpy: HttpGetClientSpy<LoadSurveyList.Result>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<LoadSurveyList.Result>()
  const sut = new RemoteLoadSurveyList(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemoteLoadSurveyList', () => {
  test('Should call HttpGetClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.loadAll()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
