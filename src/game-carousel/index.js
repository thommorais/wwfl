import Modal from '../components/custom-modal'
import populateQA from './populateQA'
import fetcher from '../get-data'
import { REST_API, questionPath, offsetOfTriviaData } from '../constants'

export async function getTriviaQuestions() {
  const offset = offsetOfTriviaData[Math.floor(Math.random() * offsetOfTriviaData.length)]
  return fetcher(REST_API, questionPath, offset).then(response => response.sort(() => 0.5 - Math.random()))
}

export default function trivia(gameCarousel, questionsData) {
  const modal = new Modal()

  gameCarousel.init()
  gameCarousel.on('reachEnd', () => modal.start())
  gameCarousel.on('slideChange', () => gameCarousel.$el[0].classList.add('hide-navigation'))

  function start(questionDataPromise) {
    questionDataPromise.then((questions) => {
      const slides = populateQA(questions, gameCarousel) || []
      gameCarousel.appendSlide(slides)
      gameCarousel.update()
      gameCarousel.slideTo(0, 0)
    })
  }

  start(questionsData)

  document.addEventListener('modalCloses', () => {
    gameCarousel.removeAllSlides()
    start(getTriviaQuestions())
  })
}
