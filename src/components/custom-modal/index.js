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

  open(modal) {
    if (!this.started || !modal) return

    this.close()

    if (!this.modals[modal]) {
      this.modals[modal] = document.querySelector(`[data-id="${modal}"]`)
    }

    this.modals[modal].classList.add('open')
    this.isOpen = this.modals[modal]
    this.currentModal = modal
  }

  start() {
    this.started = true
    this.closeButtons = [].slice.call(document.querySelectorAll('.close-modal'))
    this.closeButtons.forEach(btn => btn.addEventListener('click', () => this.close()))
  }
}
