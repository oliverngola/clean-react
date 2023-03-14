import { SurveyModel } from '@/domain/models'
import faker from 'faker'

export const mockSurveyModel = (): SurveyModel => ({
  id: faker.datatype.uuid(),
  question: faker.random.words(10),
  answers: [{
    image: faker.internet.url(),
    answer: faker.random.words(4)
  },{
    image: faker.internet.url(),
    answer: faker.random.words(4)
  }],
  date: new Date(),
  didAnswer: faker.datatype.boolean()
})

export const mockSurvelListModel = (): SurveyModel[] => ([
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel()
])
