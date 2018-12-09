import Modal from '../components/custom-modal'
import populateQA from './populateQA'

const defaultState = {
  questions: [
    {
      id         : 1,
      answered   : false,
      question   : 'This is a sample two line question just for testing purposes?',
      oxfordLink : 'http://www.ox.ac.uk/',
      answers    : [
        {
          isRight : true,
          answer  : 'Eloquacious',
          count   : '5,315,234'
        },
        {
          isRight : false,
          answer  : 'Spaghettification',
          count   : '11,315,234'
        },
        {
          isRight : false,
          answer  : 'Widdershins',
          count   : '915,234'
        }
      ]
    },
    {
      id         : 1,
      answered   : false,
      question   : 'This is a sample two line question just for testing purposes?',
      oxfordLink : 'http://www.ox.ac.uk/',
      answers    : [
        {
          isRight : true,
          answer  : 'Eloquacious',
          count   : '5,315,234'
        },
        {
          isRight : false,
          answer  : 'Spaghettification',
          count   : '11,315,234'
        },
        {
          isRight : false,
          answer  : 'Widdershins',
          count   : '915,234'
        }
      ]
    }
  ],
  selectedQuestions : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  currentQuestion   : 1,
  finished          : false
}

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

  const { questions } = defaultState

  const slides = populateQA(questions, game, modal)

  game.appendSlide(slides)
  game.on('reachEnd', () => modal.start())
  game.init()
}
