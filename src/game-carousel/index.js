import Modal from '../components/custom-modal'
import populateQA from './populateQA'
import fetcher from '../get-data'
import { REST_API, questionPath } from '../constants'

const carouselOptions = {
  init       : false,
  fadeEffect : {
    crossFade: true
  },
  allowTouchMove : false,
  pagination     : {
    el   : '.fraction',
    type : 'fraction'
  }
}
let gameCarousel = null
const items = [0, 12, 24, 48]

export default function carousel(Swiper) {
  const modal = new Modal()

  function start() {
    const offset = items[Math.floor(Math.random() * items.length)]

    fetcher(REST_API, questionPath, offset).then((response) => {
      const questions = response.sort(() => 0.5 - Math.random())
      // const [one, two] = questions
      gameCarousel = new Swiper('.swiper-container', carouselOptions)
      gameCarousel.appendSlide(populateQA(questions, gameCarousel, modal))
      gameCarousel.on('reachEnd', () => modal.start())
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
