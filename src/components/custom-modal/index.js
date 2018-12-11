let instance = false
export default class Modal {
  constructor() {
    if (instance) {
      return instance
    }

    instance = this
    this.modals = {}
    this.isOpen = null
    this.started = false
    this.closeEvent = new Event('modalCloses', { bubbles: true })
  }

  close() {
    if (!this.isOpen) return
    this.isOpen.classList.remove('open')
    if (this.currentModal === 'map') {
      document.dispatchEvent(this.closeEvent)
    }
  }

  updateScore(element, data) {
    const total = element.querySelector('.total')
    const score = element.querySelector('.score')
    total.innerText = data.total
    score.innerText = data.score
  }

  open(modal, data) {
    if (!this.started || !modal) return

    this.close()

    if (!this.modals[modal]) {
      this.modals[modal] = document.querySelector(`[data-id="${modal}"]`)
    }

    this.modals[modal].classList.add('open')
    this.isOpen = this.modals[modal]
    this.currentModal = modal

    if (modal === 'prepared-to-play') {
      this.score = this.score || this.modals[modal].querySelector('.score-title')
      this.updateScore(this.score, data)
    }
  }

  start() {
    if (this.started) return
    this.started = true
    this.closeButtons = [].slice.call(document.querySelectorAll('.close-modal'))
    this.closeButtons.forEach(btn => btn.addEventListener('click', () => this.close()))
  }

  stop() {
    this.started = false
  }
}
