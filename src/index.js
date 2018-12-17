import './assets/css/index.sass'
import trivia, { getTriviaQuestions } from './game-carousel'
import gameCarousel from './game-carousel/gameCarousel'
import areYouPreparedModal from './game-carousel/areYouPreparedModal'
import mapColors from './game-carousel/mapColors'
import backgroundAnimation from './background-animation'
import { isMobile } from './helpers'
import gaEvents from './GA-events'

if (PRODUCTION) {
  navigator.serviceWorker.getRegistrations()
    .then(registrations => registrations.forEach(registration => registration.unregister()))

  const runtime = require('offline-plugin/runtime')
  runtime.install({
    onUpdating: () => {
      console.log('SW Event:', 'onUpdating')
    },
    onUpdateReady: () => {
      console.log('SW Event:', 'onUpdateReady')
      // Tells to new SW to take control immediately
      runtime.applyUpdate()
    },
    onUpdated: () => {
      console.log('SW Event:', 'onUpdated')
      // Reload the webpage to load into the new version
      window.location.reload()
    },

    onUpdateFailed: () => {
      console.log('SW Event:', 'onUpdateFailed')
    }
  })
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
} else {
  document.querySelector('video').remove()
}
