export default function handleAnswer(answer, carousel, modal) {
  answer.addEventListener('click', (event) => {
    setTimeout(() => {
      carousel.slideNext()
    }, 300)

    modal.open('prepared-to-play')

    event.preventDefault()
  })
}
