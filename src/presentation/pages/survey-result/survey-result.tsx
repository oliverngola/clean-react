import React, { useEffect, useState } from 'react'
import FlipMove from 'react-flip-move'
import Styles from './survey-result-styles.scss'
import { Calendar, Footer, Header, Loading, Error } from '@/presentation/components'
import { LoadSurveyResult } from '@/domain/usecases'

type Props = {
  loadSurveyResult: LoadSurveyResult
}

const SurveyResult: React.FC<Props> = ({ loadSurveyResult }: Props) => {
  const [state] = useState({
    isLoading: false,
    error: '',
    surveyResult: null as LoadSurveyResult.Model
  })

  useEffect(() => {
    loadSurveyResult.load()
      .then()
      .catch()
  }, [])

  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
        <div data-testid="survey-result" className={Styles.contentWrap}>
          { state.surveyResult &&
            <>
              <hgroup>
                <Calendar className={Styles.calendarWrap} date={new Date()} />
                <h2>Qual seu framework favorito?</h2>
              </hgroup>
              <FlipMove className={Styles.answersList}>
                <li>
                  <img src="http://localhost:5050/static/img/logo-vue.png" />
                  <span className={Styles.answer}>Vue</span>
                  <span className={Styles.percent}>56%</span>
                </li>
                <li className={Styles.active}>
                  <img src="http://localhost:5050/static/img/logo-react.png" />
                  <span className={Styles.answer}>React</span>
                  <span className={Styles.percent}>10%</span>
                </li>
                <li>
                  <img src="http://localhost:5050/static/img/logo-angular.png" />
                  <span className={Styles.answer}>Angular</span>
                  <span className={Styles.percent}>34%</span>
                </li>
              </FlipMove>
              <button>Voltar</button>
              {state.isLoading && <Loading />}
              {state.error && <Error error={state.error} reload={() => { }} />}
            </>
          }
        </div>
      <Footer />
    </div>
  )
}

export default SurveyResult
