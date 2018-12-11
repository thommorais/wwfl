/* eslint-disable camelcase */
const frames = [{ transform: 'scale3d(0, 1, 1)' }, { transform: 'scale3d(1, 1, 1)' }]

function isTheRightOne(answer, answers) {
  const { isRight } = answers.find(item => item.title === answer)
  return isRight
}

function toCamelCase(str) {
  return str.replace(/(?:^.|[A-Z]|\b.)/g, (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase())).replace(/\s+/g, '')
}

const questionsState = {}

export default function handleAnswer({ answerElements, answersData }, modal, carousel, oxfordLink, answersTpl, question) {
  const timer = oxfordLink.querySelector('.progress')
  const questionCamelized = toCamelCase(question)

  questionsState[questionCamelized] = {
    answered: false
  }

  answerElements.forEach(({ answerWrpTmp }) => {
    const { answer } = answerWrpTmp.dataset

    if (questionsState[questionCamelized]) {
      questionsState[questionCamelized].rightAnswer = isTheRightOne(answer, answersData)
        ? answerWrpTmp
        : questionsState[questionCamelized].rightAnswer
    }

    answerWrpTmp.addEventListener('click', () => {
      if (questionsState[questionCamelized].answered) return
      questionsState[questionCamelized].answered = true
      questionsState[questionCamelized].rightAnswer.classList.add('right')

      if (!isTheRightOne(answer, answersData)) {
        answerWrpTmp.classList.add('wrong')
      }

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
          modal.open('prepared-to-play')
        }
        carousel.slideNext()
      }
    })
  })
}
