import handleAnswer from './handleAnswer'
import Modal from '../components/custom-modal'

export default function carousel(Swiper) {
  const modal = new Modal()
  const game = new Swiper('.swiper-container', {
    allowTouchMove : false,
    pagination     : {
      el   : '.fraction',
      type : 'fraction'
    }
  })

  const answers = [].slice.call(document.querySelectorAll('.answer'))

  answers.forEach(answer => handleAnswer(answer, game, modal))
  game.on('reachEnd', () => modal.start())
}
