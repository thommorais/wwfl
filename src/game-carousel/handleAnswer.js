/* eslint-disable camelcase */
const frames = [{ transform: 'scale3d(0, 1, 1)' }, { transform: 'scale3d(1, 1, 1)' }]

export default function handleAnswer({
  answerWrpTmp, is_right, question, answer
}, modal, carousel, oxfordLink, answers, theRightOne) {
  const timer = oxfordLink.querySelector('.progress')

  answerWrpTmp.addEventListener('click', () => {
    if (!is_right) {
      answerWrpTmp.classList.add('wrong')
    }

    theRightOne.classList.add('right')

    answers.classList.add('answered')

    // eslint-disable-next-line no-undef
    gtag('event', 'click_any_answer', {
      event_category : question,
      event_label    : answer,
      value          : 1
    })

    const progressButton = timer.animate(frames, { duration: 1000, easing: 'cubic-bezier(0.5, 0, 0.5, 1)' })

    progressButton.onfinish = () => {
      if (carousel.isEnd) {
        modal.open('prepared-to-play')
      }
      carousel.slideNext()
    }
  })
}
