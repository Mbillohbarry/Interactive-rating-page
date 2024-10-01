
let selectedRating = 0
const ratingButtons = document.querySelectorAll('.rating-button')
const submit = document.getElementById('submit')
const displayRating = document.getElementById('displayRating')
const message = document.querySelector('.message')
const paragraph = document.querySelector('.para')

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        // remove selected class from all buttons
        ratingButtons.forEach(btn => {btn.classList.remove('selected')})
        // add selected class to the clicked button
        button.classList.add('selected')
        selectedRating = button.getAttribute('data-rating')
    })
})
submit.addEventListener('click', () => {
  if(selectedRating > 0) {
    displayRating.style.display = 'block'
    displayRating.textContent = `You selected ${selectedRating} out of 5`
    submit.style.display = 'none'

    // message
    document.querySelector('.thank-you-img').style.display = 'block'
    message.textContent = 'Thank you!'
    paragraph.textContent = 'We appreciate you takig the time to give a rating.if you ever need more support, don\'t\' hesitate to get in touch!'

    // hide element
    document.querySelector('.first-img').style.display = 'none'
    document.querySelector('p').style.display = 'none'
    document.querySelector('.heading').style.display = 'none'

    // Hide all the rating-buttons
    ratingButtons.forEach(btn => {
    btn.style.display = 'none'
    })
  }
})