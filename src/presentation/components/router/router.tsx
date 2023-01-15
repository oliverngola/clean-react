import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SurveyList } from '@/presentation/pages'

type Props = {
  makeLogin: React.FC
  makeSignUp: React.FC
}

const Router: React.FC<Props> = ({ makeLogin,makeSignUp }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeLogin} />
        <Route path="/signup" exact component={makeSignUp} />
        <Route path="/" exact component={SurveyList}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
