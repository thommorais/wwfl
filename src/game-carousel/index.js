import Modal from '../components/custom-modal'
import populateQA from './populateQA'
import fetcher from '../get-data'
import { REST_API, questionPath } from '../constants'

export default function carousel(Swiper) {
  const modal = new Modal()

  const game = new Swiper('.swiper-container', {
    fadeEffect: {
      crossFade: true
    },
    allowTouchMove : false,
    init           : false,
    pagination     : {
      el   : '.fraction',
      type : 'fraction'
    }
  })

  game.on('reachEnd', () => modal.start())

  const items = [0, 12, 24, 48]

  function start() {
    const offset = items[Math.floor(Math.random() * items.length)]

    fetcher(REST_API, questionPath, offset).then((response) => {
      const [one, two] = response
      console.log(one)
      game.appendSlide(populateQA([one, two], game, modal))
      game.init()
    })
  }

  start()

  document.addEventListener('modalCloses', () => {
    game.removeAllSlides()
    start()
  })
}
