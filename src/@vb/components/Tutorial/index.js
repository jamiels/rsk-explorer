import React, { useState } from 'react'
import Tour from 'reactour'
import store from 'store'
import style from './style.module.scss'

const steps = [

]

const TutorialComponent = () => {
  // prevent in iframe live peview
  const isInIframe = () => {
    try {
      return window.self !== window.top
    } catch (e) {
      return true
    }
  }

  // prevent in visual-builder
  const isVb = process.env.REACT_APP_VB

  // prevent if touched
  const hidden = store.get(`app.settings.tutorialTouched`) || isInIframe() || isVb
  const [isTourOpen, setIsTourOpen] = useState(!hidden)

  const closeTour = () => {
    store.set(`app.settings.tutorialTouched`, true)
    setIsTourOpen(false)
  }

  return (
    <Tour
      rounded={10}
      className={style.helper}
      maskClassName={style.mask}
      steps={steps}
      isOpen={isTourOpen}
      onRequestClose={() => closeTour()}
    />
  )
}

export default TutorialComponent
