// 1. Select all the elements
const modal = document.querySelector('#modal')
const overlay = document.querySelector('#overlay')
const button = document.querySelector('#modal-btn')

// 2. Add Click Event

button.addEventListener('click', () => {
  overlay.classList.add('open')
  modal.classList.add('open')

  modal.addEventListener('click', () => {
    modal.classList.remove('open')
    overlay.classList.remove('open')
  })

  overlay.addEventListener('click', () => {
    modal.classList.remove('open')
    overlay.classList.remove('open')
  })
})
