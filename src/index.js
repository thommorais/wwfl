import './assets/css/index.sass'
import carousel from './game-carousel'
import areYouPreparedModal from './game-carousel/areYouPreparedModal'
import mapColors from './game-carousel/mapColors'
// import backgroundAnimation from './background-animation'
// import titlAnimation from './background-animation/tilt'

if (PRODUCTION) {
  require('offline-plugin/runtime').install()
}

// backgroundAnimation()
// titlAnimation()

import(/* webpackChunkName:"swiper" */ './lib/swiper.esm').then((module) => {
  carousel(module.default)
  areYouPreparedModal()
})

mapColors('#2051b5', '#c766ee')
