import { mockSurvelListModel, mockSurveyResultModel } from '@/tests/domain/mocks'
import { LoadSurveyList, LoadSurveyResult } from '@/domain/usecases'

export class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  survey = mockSurvelListModel()

  async loadAll (): Promise<LoadSurveyList.Model[]> {
    this.callsCount++
    return this.survey
  }
}

export class LoadSurveyResultSpy implements LoadSurveyResult {
  callsCount = 0
  surveyResult = mockSurveyResultModel()

  async load (): Promise<LoadSurveyResult.Model> {
    this.callsCount++
    return this.surveyResult
  }
}
