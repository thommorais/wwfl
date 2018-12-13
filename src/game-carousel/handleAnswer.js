/* eslint-disable camelcase */
import { toCamelCase, isTheRightOne } from '../helpers'
import { sendGaEvents } from '../GA-events'
import Modal from '../components/custom-modal'

const questionsState = {
  getRight         : 0,
  totalOfQuestions : 0
}

export default function handleAnswer({ answerElements, answersData }, oxfordLink, carouselInstance, answersTpl, question) {
  const questionCamelized = toCamelCase(question)
  const modal = new Modal()

  questionsState[questionCamelized] = {
    answered: false
  }

  answerElements.forEach(({ answerWrpTmp }) => {
    const { answer } = answerWrpTmp.dataset

    const thisIsTheRightOne = isTheRightOne(answer, answersData)

    if (questionsState[questionCamelized]) {
      questionsState[questionCamelized].rightAnswer = thisIsTheRightOne ? answerWrpTmp : questionsState[questionCamelized].rightAnswer
    }

    answerWrpTmp.addEventListener('click', () => {
      if (questionsState[questionCamelized].answered) return

      questionsState[questionCamelized].answered = true
      questionsState[questionCamelized].rightAnswer.classList.add('right')

      if (!isTheRightOne(answer, answersData)) {
        answerWrpTmp.classList.add('wrong')
      } else {
        questionsState.getRight += 1
      }

      questionsState.totalOfQuestions += 1

      oxfordLink.classList.add('show')
      answersTpl.classList.add('answered')

      if (carouselInstance.isEnd) {
        // eslint-disable-next-line max-nested-callbacks
        setTimeout(() => {
          modal.open('prepared-to-play', { score: questionsState.getRight, total: questionsState.totalOfQuestions })
          questionsState.getRight = 0
          questionsState.totalOfQuestions = 0
        }, 2000)
      } else {
        carouselInstance.$el[0].classList.remove('hide-navigation')
      }
      sendGaEvents(question, answer, 'click_any_answer')
    })
  })
}
