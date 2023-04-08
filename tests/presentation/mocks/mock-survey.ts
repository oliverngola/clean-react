import { mockSurvelListModel } from '@/tests/domain/mocks'
import { LoadSurveyList } from '@/domain/usecases'

export class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  survey = mockSurvelListModel()

  async loadAll (): Promise<LoadSurveyList.Model[]> {
    this.callsCount++
    return this.survey
  }
}
