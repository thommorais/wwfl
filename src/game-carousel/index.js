import Modal from '../components/custom-modal'
import populateQA from './populateQA'
import fetcher from '../get-data'
import { REST_API, questionPath } from '../constants'

export default function carousel(Swiper) {
  const modal = new Modal()

  const game = new Swiper('.swiper-container', {
    init       : false,
    fadeEffect : {
      crossFade: true
    },
    allowTouchMove : false,
    pagination     : {
      el   : '.fraction',
      type : 'fraction'
    }
  })

  const items = [0, 12, 24, 48]

  function start() {
    const offset = items[Math.floor(Math.random() * items.length)]

    fetcher(REST_API, questionPath, offset).then((response) => {
      const questions = response.sort(() => 0.5 - Math.random())
      game.appendSlide(populateQA(questions, game, modal))
      game.init()
    })
  }

  start()
  game.on('reachEnd', () => modal.start())

  document.addEventListener('modalCloses', () => {
    game.destroy(false, true)
    game.removeAllSlides()
    start()
  })
}
