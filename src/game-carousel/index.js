import Modal from '../components/custom-modal'
import populateQA from './populateQA'
import fetcher from '../get-data'
import { REST_API, questionPath } from '../constants'

export default function carousel(Swiper) {
  const modal = new Modal()

  const game = new Swiper('.swiper-container', {
    allowTouchMove : false,
    init           : false,
    pagination     : {
      el   : '.fraction',
      type : 'fraction'
    }
  })

  game.on('reachEnd', () => modal.start())

  const data = fetcher(REST_API, questionPath)
  data.then((response) => {
    game.appendSlide(populateQA(response, game, modal))
    game.init()
  })
}
