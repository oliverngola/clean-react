import { LoadSurveyList } from '@/domain/usecases'
import { HttpGetClient } from '@/data//protocols'

export class RemoteLoadSurveyList implements LoadSurveyList {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async loadAll (): Promise<LoadSurveyList.Result> {
    await this.httpGetClient.get({
      url: this.url
    })
    return null
  }
}
