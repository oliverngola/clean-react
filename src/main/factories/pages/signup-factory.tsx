import React from 'react'
import { SignUp } from '@/presentation/pages'
import { makeLocalSaveAccessToken, makeRemoteAddAccount } from '@/main/factories/usecases'
import { makeSignUpValidation } from './signup-validation-factory'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignUpValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
