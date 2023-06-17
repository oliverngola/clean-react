import { LoadSurveyList } from '@/domain/usecases'
import faker from 'faker'

export const mockSurveyModel = (): LoadSurveyList.Model => ({
  id: faker.datatype.uuid(),
  question: faker.random.words(10),
  date: new Date(),
  didAnswer: faker.datatype.boolean()
})

export const mockSurvelListModel = (): LoadSurveyList.Model[] => ([
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel()
])

export class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  survey = mockSurvelListModel()

  async loadAll (): Promise<LoadSurveyList.Model[]> {
    this.callsCount++
    return this.survey
  }
}
