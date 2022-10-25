import React from 'react'
import { Login } from '@/presentation/pages'
import { RemoteAuthentication } from '@/data/usecases'
import { AxiosHttpClient } from '@/infra/http'
import { ValidationBuilder, ValidationComposite } from '@/validation/validators'

export const makeLogin: React.FC = () => {
  const url = 'https://fordevs.herokuapp.com/api/login'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  const validation = new ValidationComposite([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])
  return (
    <Login
      authentication={remoteAuthentication}
      validation={validation}
    />
  )
}
