import { LoadSurveyList } from '@/domain/usecases'

export class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  async loadAll (): Promise<LoadSurveyList.Result> {
    this.callsCount++
    return []
  }
}
