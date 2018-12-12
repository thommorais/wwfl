/* eslint-disable camelcase */
import { toCamelCase, isTheRightOne } from '../helper'

const questionsState = {
  getRight         : 0,
  totalOfQuestions : 0
}

const carouselContainer = document.querySelector('.swiper-container')

export default function handleAnswer({ answerElements, answersData }, modal, carousel, oxfordLink, answersTpl, question) {
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

      if (carousel.isEnd) {
        modal.open('prepared-to-play', { score: questionsState.getRight, total: questionsState.totalOfQuestions })
        questionsState.getRight = 0
        questionsState.totalOfQuestions = 0
      } else {
        carouselContainer.classList.remove('hide-navigation')
      }

      // eslint-disable-next-line no-undef
      gtag('event', 'click_any_answer', {
        event_category : question,
        event_label    : answer,
        value          : 1
      })
    })
  })
}
