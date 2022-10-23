import { ValidationComposite } from '@/validation/validators'
import { FieldValidationSpy } from '@/tests/validation/mocks'

describe('ValidationComposite', () => {
  test('Should return error if any validaton fails', () => {
    const fieldValidatonSpy = new FieldValidationSpy('any_field')
    fieldValidatonSpy.error = new Error('first_error_message')
    const fieldValidatonSpy2 = new FieldValidationSpy('any_field')
    fieldValidatonSpy2.error = new Error('second_error_message')
    const sut = new ValidationComposite([
      fieldValidatonSpy, fieldValidatonSpy2
    ])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_error_message')
  })
})
