import handleAnswer from './handleAnswer'

export default function carousel(Swiper) {
  const game = new Swiper('.swiper-container', {
    allowTouchMove : false,
    pagination     : {
      el   : '.fraction',
      type : 'fraction'
    }
  })

  const answers = [].slice.call(document.querySelectorAll('.answer'))

  answers.forEach(answer => handleAnswer(answer, game))

  game.on('reachEnd', () => console.log('teste'))
}
