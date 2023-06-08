import React from 'react'
import FlipMove from 'react-flip-move'
import Styles from './survey-result-styles.scss'
import { Footer, Header, Spinner } from '@/presentation/components'

const SurveyResult: React.FC = () => {
  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
        <div className={Styles.contentWrap}>
          <h2>Qual seu framework favorito?</h2>
          <FlipMove className={Styles.answersList}>
            <li>
              <img src="http://localhost:5050/static/img/logo-php.png" />
              <span className={Styles.answer}>PHP</span>
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
              <span className={Styles.percent}>25%</span>
            </li>
          </FlipMove>
          <button>Voltar</button>
          <div className={Styles.loadingWrap}>
            <div className={Styles.loading}>
              <span>Aguarde...</span>
              <Spinner isNegative />
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default SurveyResult
