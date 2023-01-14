import { LoadSurveyList } from '@/domain/usecases'
import { HttpGetClient, HttpStatusCode } from '@/data/protocols'
import { UnexpectedError } from '@/domain/errors'

export class RemoteLoadSurveyList implements LoadSurveyList {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<LoadSurveyList.Result>
  ) {}

  async loadAll (): Promise<LoadSurveyList.Result> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}
