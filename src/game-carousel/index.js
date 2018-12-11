import Modal from '../components/custom-modal'
import populateQA from './populateQA'
import fetcher from '../get-data'
import { REST_API, questionPath } from '../constants'

const carouselOptions = {
  autoHeight : true,
  init       : false,
  fadeEffect : {
    crossFade: true
  },
  allowTouchMove : false,
  pagination     : {
    el   : '.fraction',
    type : 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next'
  }
}

let gameCarousel = null
const items = [0, 12, 24, 48]

export default function carousel(Swiper) {
  const modal = new Modal()
  const carouselContainer = document.querySelector('.swiper-container')

  function start() {
    const offset = items[Math.floor(Math.random() * items.length)]

    fetcher(REST_API, questionPath, offset).then((response) => {
      gameCarousel = new Swiper(carouselContainer, carouselOptions)
      const questions = response.sort(() => 0.5 - Math.random())
      gameCarousel.appendSlide(populateQA(questions, gameCarousel, modal))
      gameCarousel.on('reachEnd', () => modal.start())
      gameCarousel.on('slideChange', () => carouselContainer.classList.add('hide-navigation'))
      gameCarousel.init()
    })
  }

  start()

  document.addEventListener('modalCloses', () => {
    gameCarousel.removeAllSlides()
    gameCarousel.destroy(true, true)
    start()
  })
}
