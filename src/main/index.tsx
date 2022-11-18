import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import { makeLogin,makeSignUp } from '@/main/factories'
import '@/presentation/styles/global.scss'

ReactDOM.render(
  <Router
    makeLogin={makeLogin}
    makeSignUp={makeSignUp}
  />,
  document.getElementById('main')
)
