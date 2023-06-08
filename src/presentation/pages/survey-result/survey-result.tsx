import React from 'react'
import FlipMove from 'react-flip-move'
import Styles from './survey-result-styles.scss'
import { Calendar, Footer, Header, Loading } from '@/presentation/components'

const SurveyResult: React.FC = () => {
  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
        <div className={Styles.contentWrap}>
          { true &&
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
              {false && <Loading />}
            </>
          }
        </div>
      <Footer />
    </div>
  )
}

export default SurveyResult
