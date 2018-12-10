/* eslint-disable camelcase */
import handleAnswer from './handleAnswer'

let questionTpl = null
let answerTpl = null
let linkTpl = null

export default function populateQA(arr, game, modal) {
  questionTpl = questionTpl || document.querySelector('#question')
  answerTpl = answerTpl || document.querySelector('#answer')
  linkTpl = linkTpl || document.querySelector('#oxford-link')

  return arr.map(({ title, zynga_question_options, dictionary_link }) => {
    const cloneQuestion = document.importNode(questionTpl.content, true)
    const titleQuestion = cloneQuestion.querySelector('.question')
    const answersTpl = cloneQuestion.querySelector('.answers')
    titleQuestion.innerText = title.rendered

    const cloneLink = document.importNode(linkTpl.content, true)
    const a = cloneLink.querySelector('.oxford-explains-btn')
    a.href = dictionary_link

    zynga_question_options.forEach((data) => {
      const { is_right } = data
      const cloneAnswer = document.importNode(answerTpl.content, true)
      const answerWrpTmp = cloneAnswer.querySelector('.answer')

      answerWrpTmp.style.setProperty('--size', `${Math.floor(Math.random() * 99) + 1}%`)

      if (is_right) {
        answerWrpTmp.classList.add('right')
      }

      const titleAnswerTmp = cloneAnswer.querySelector('h6')
      const countAnswerTmp = cloneAnswer.querySelector('.count')
      titleAnswerTmp.innerText = data.title
      countAnswerTmp.innerText = 0
      answersTpl.appendChild(cloneAnswer)
      handleAnswer({ answerWrpTmp, is_right }, modal, game, a, answersTpl)
    })

    answersTpl.appendChild(cloneLink)

    return cloneQuestion
  })
}
