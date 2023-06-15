import { mockAccountModel } from '@/tests/domain/mocks'
import { SurveyResult } from '@/presentation/pages'
import { ApiContext } from '@/presentation/contexts'
import React from 'react'
import { render, screen } from '@testing-library/react'

const makeSut = (): void => {
  const setCurrentAccountMock = jest.fn()
  render(
    <ApiContext.Provider value={{ setCurrentAccount: setCurrentAccountMock, getCurrentAccount: () => mockAccountModel() }}>
      <SurveyResult />
    </ApiContext.Provider>
  )
}

describe('SurveyResult Component', () => {
  test('Should present correct initial state', async () => {
    makeSut()
    const surveyResult = screen.getByTestId('survey-result')
    expect(surveyResult.childElementCount).toBe(0)
    expect(surveyResult.querySelector('error')).not.toBeInTheDocument()
    expect(surveyResult.querySelector('loading')).not.toBeInTheDocument()
  })
})
