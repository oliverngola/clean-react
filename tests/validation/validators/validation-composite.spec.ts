import { ValidationComposite } from '@/validation/validators'
import { FieldValidationSpy } from '@/tests/validation/mocks'

describe('ValidationComposite', () => {
  test('Should return error if any validaton fails', () => {
    const fieldValidatonSpy = new FieldValidationSpy('any_field')
    const fieldValidatonSpy2 = new FieldValidationSpy('any_field')
    fieldValidatonSpy2.error = new Error('any_error_message')
    const sut = new ValidationComposite([
      fieldValidatonSpy, fieldValidatonSpy2
    ])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('any_error_message')
  })
})
