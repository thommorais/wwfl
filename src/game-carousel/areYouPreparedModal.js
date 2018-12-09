import Modal from '../components/custom-modal'

export default function areYouPreparedToPlay() {
  const modal = new Modal()
  const buttons = [].slice.call(document.querySelectorAll('[data-id="prepared-to-play"] .response'))

  buttons.forEach(btn => btn.addEventListener('click', () => {
    modal.open('map')
  }))
}
