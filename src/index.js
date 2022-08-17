// write your code here

// Globals
const url = 'http://localhost:3000/ramens'

// DOM selectors
const ramenMenu = document.querySelector('#ramen-menu')
const ramenDetails = document.querySelector('#ramen-detail')
const ramenDetailImage = document.querySelector('.detail-image')
const ramenName = document.querySelector('.name')
const ramenRestaurant = document.querySelector('.restaurant')
const ratingDisplay = document.querySelector('#rating-display')
const commentDisplay = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')

// Event Listeners
form.addEventListener('submit', getFormInfo)

// Fetchers
function getAllRamen(url) {
    return fetch(url)
    .then(res => res.json())
    .then(data => {
        renderARamen(data[0])
        renderTopMenu(data) 
    })
}

// Render Functions
function renderMenuItem(item){
    const ramenMenuImage = document.createElement('img')
    ramenMenuImage.src = item.image 
    ramenMenu.appendChild(ramenMenuImage)
    ramenMenuImage.addEventListener('click', () => renderARamen(item))
}

function renderTopMenu(data){
    data.forEach(data => renderMenuItem(data))
}

function renderARamen(item){
    ramenDetailImage.src = item.image
    ramenName.textContent = item.name
    ramenRestaurant.textContent = item.restaurant
    ratingDisplay.textContent = item.rating
    commentDisplay.textContent = item.comment
}

function getFormInfo(e){
    e.preventDefault()
    let name = e.target['new-name'].value
    let restaurant = e.target['new-restaurant'].value
    let image = e.target['new-image'].value
    let rating = e.target['new-rating'].value
    let comment = e.target['new-comment'].value

    let newRamen = {
        name: `${name}`,
        restaurant: `${restaurant}`,
        image: `${image}`,
        rating: `${rating}`,
        comment: `${comment}`
    }
    renderMenuItem(newRamen)
}

// Call Functions
getAllRamen(url)


// Update the rating and comment for a ramen by submitting a form. Changes should
// be reflected on the frontend. No need to persist. You can add this HTML to the
// index.html file to create the edit form:
