/* eslint-disable camelcase */
import handleAnswer from './handleAnswer'
import { getTotalEvents, percentage } from '../helpers'

export default function populateQA(arr, carouselInstance) {
  const questionTpl = document.querySelector('#question')
  const answerTpl = document.querySelector('#answer')
  const linkTpl = document.querySelector('#oxford-link')

  // eslint-disable-next-line max-statements
  return arr.map(({ title, zynga_question_options, dictionary_link }) => {
    const cloneQuestion = document.importNode(questionTpl.content, true)
    const titleQuestion = cloneQuestion.querySelector('.question')
    const answersTpl = cloneQuestion.querySelector('.answers')
    const question = title.rendered
    titleQuestion.innerText = question

    const cloneLink = document.importNode(linkTpl.content, true)
    const a = cloneLink.querySelector('.oxford-explains-btn')
    a.href = dictionary_link

    const answersData = zynga_question_options.map(data => ({
      isRight : data.is_right,
      events  : data.total_events,
      title   : data.title
    }))

    const answerElements = zynga_question_options.map((data) => {
      const cloneAnswer = document.importNode(answerTpl.content, true)
      const answerWrpTmp = cloneAnswer.querySelector('.answer')

      const width = percentage(data.total_events + 1, getTotalEvents(answersData) + 3)
      answerWrpTmp.style.setProperty('--size', `${width}%`)

      const titleAnswerTmp = cloneAnswer.querySelector('h6')
      const countAnswerTmp = cloneAnswer.querySelector('.count')
      const answer = data.title
      titleAnswerTmp.innerText = answer
      answerWrpTmp.dataset.answer = answer
      countAnswerTmp.innerText = parseInt(data.total_events, 10) + 1
      return {
        answerWrpTmp,
        cloneAnswer
      }
    })

    answerElements.forEach(element => answersTpl.appendChild(element.cloneAnswer))

    handleAnswer({ answerElements, answersData }, a, carouselInstance, answersTpl, question)

    answersTpl.appendChild(cloneLink)

    return cloneQuestion
  })
}
