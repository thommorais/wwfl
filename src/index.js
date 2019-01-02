import './assets/css/index.sass'
import trivia, { getTriviaQuestions } from './game-carousel'
import gameCarousel from './game-carousel/gameCarousel'
import areYouPreparedModal from './game-carousel/areYouPreparedModal'
import mapColors from './game-carousel/mapColors'
import backgroundAnimation from './background-animation'
import { isMobile } from './helpers'
import gaEvents from './GA-events'

if (PRODUCTION) {
  require('offline-plugin/runtime').install()

  if ('serviceWorker' in navigator) {
    // eslint-disable-next-line max-depth
    if (isMobile.any()) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        // eslint-disable-next-line no-restricted-syntax
        for (const registration of registrations) {
          registration.unregister()
        }
      })
    }
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('Registration succeeded.')
      registration.update()
    })
  }
}

const questionsData = getTriviaQuestions()

import(/* webpackChunkName:"swiper" */ './lib/swiper.esm').then((module) => {
  trivia(gameCarousel(module.default), questionsData)
  areYouPreparedModal()
  mapColors('#2051b5', '#c766ee')
})

gaEvents()

if (!isMobile.any()) {
  backgroundAnimation()
}
