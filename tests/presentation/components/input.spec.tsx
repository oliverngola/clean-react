import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { Input } from '@/presentation/components'
import { FormContext } from '@/presentation/contexts'

const makeSut = (): RenderResult => {
  return render(
    <FormContext.Provider value={{ state: {} }}>
      <Input name='field' />
    </FormContext.Provider>
  )
}

describe('Input Component', () => {
  test('Should begin with readonly', () => {
    const sut = makeSut()
    const input = sut.getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
