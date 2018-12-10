import Modal from '../components/custom-modal'

export default function areYouPreparedToPlay() {
  const modal = new Modal()
  const buttons = [].slice.call(document.querySelectorAll('[data-id="prepared-to-play"] .response'))

  buttons.forEach(btn => btn.addEventListener('click', (event) => {
    modal.open('map')

    const { response, question } = event.target.dataset

    // eslint-disable-next-line no-undef
    gtag('event', 'click_final_answer', {
      event_category : question,
      event_label    : response,
      value          : 1
    })
  }))
}
