import handleAnswer from './handleAnswer'

let questionTpl = null
let answerTpl = null
let linkTpl = null

export default function populateQA(arr, game, modal) {
  questionTpl = questionTpl || document.querySelector('#question')
  answerTpl = answerTpl || document.querySelector('#answer')
  linkTpl = linkTpl || document.querySelector('#oxford-link')

  return arr.map(({ question, answers, oxfordLink }) => {
    const cloneQuestion = document.importNode(questionTpl.content, true)
    const titleQuestion = cloneQuestion.querySelector('.question')
    const answersTpl = cloneQuestion.querySelector('.answers')
    titleQuestion.innerText = question

    const cloneLink = document.importNode(linkTpl.content, true)
    const a = cloneLink.querySelector('.oxford-explains-btn')
    // a.insertAdjacentText('beforeend', oxfordLink)
    a.href = oxfordLink

    answers.forEach(({ count, answer, isRight }) => {
      const cloneAnswer = document.importNode(answerTpl.content, true)
      const answerWrpTmp = cloneAnswer.querySelector('.answer')

      answerWrpTmp.style.setProperty('--size', `${Math.floor(Math.random() * 99) + 1}%`)

      if (isRight) {
        answerWrpTmp.classList.add('right')
      }

      const titleAnswerTmp = cloneAnswer.querySelector('h6')
      const countAnswerTmp = cloneAnswer.querySelector('.count')
      titleAnswerTmp.innerText = answer
      countAnswerTmp.innerText = count
      answersTpl.appendChild(cloneAnswer)
      handleAnswer({ answerWrpTmp, isRight }, modal, game, a, answersTpl)
    })

    answersTpl.appendChild(cloneLink)

    return cloneQuestion
  })
}
