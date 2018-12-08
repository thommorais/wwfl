import './assets/css/index.sass'
import carousel from './game-carousel'

if (PRODUCTION) {
  require('offline-plugin/runtime').install()
}

import(/* webpackChunkName:"swiper" */ './lib/swiper.esm').then(module => carousel(module.default))
