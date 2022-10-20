import { RequiredFieldValidation } from '@/validation/validators'
import { RequiredFieldError } from '@/validation/errors'
import faker from 'faker'

describe('RequiredFieldValidation', () => {
  test('Should return error if field value is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field value is not empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
