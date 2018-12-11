/* eslint-disable camelcase */
import { toCamelCase, isTheRightOne } from '../helper'

const questionsState = {
  getRight         : 0,
  totalOfQuestions : 0
}

const carouselContainer = document.querySelector('.swiper-container')
const frames = [{ transform: 'scale3d(0, 1, 1)' }, { transform: 'scale3d(1, 1, 1)' }]

export default function handleAnswer({ answerElements, answersData }, modal, carousel, oxfordLink, answersTpl, question) {
  const timer = oxfordLink.querySelector('.progress')
  const questionCamelized = toCamelCase(question)

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

      // eslint-disable-next-line no-undef
      gtag('event', 'click_any_answer', {
        event_category : question,
        event_label    : answer,
        value          : 1
      })

      const progressButton = timer.animate(frames, { duration: 3000, easing: 'cubic-bezier(0.5, 0, 0.5, 1)' })

      progressButton.onfinish = () => {
        if (carousel.isEnd) {
          const { getRight, totalOfQuestions } = questionsState
          modal.open('prepared-to-play', { score: getRight, total: totalOfQuestions })
          questionsState.getRight = 0
          questionsState.totalOfQuestions = 0
        } else {
          carouselContainer.classList.remove('hide-navigation')
        }
      }
    })
  })
}
