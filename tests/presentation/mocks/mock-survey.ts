import { LoadSurveyList } from '@/domain/usecases'
import { mockSurvelListModel } from '@/tests/domain/mocks'

export class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  survey = mockSurvelListModel()

  async loadAll (): Promise<LoadSurveyList.Model[]> {
    this.callsCount++
    return this.survey
  }
}
