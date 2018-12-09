import './assets/css/index.sass'
import carousel from './game-carousel'
import areYouPreparedModal from './game-carousel/areYouPreparedModal'
import mapColors from './game-carousel/mapColors'

if (PRODUCTION) {
  require('offline-plugin/runtime').install()
}

import(/* webpackChunkName:"swiper" */ './lib/swiper.esm').then((module) => {
  carousel(module.default)
  areYouPreparedModal()
})

mapColors('#2051b5', '#c766ee')
