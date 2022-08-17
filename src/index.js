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
    console.log(e.target)
    let name = e.target['new-name'].value
    let restaurant = e.target['new-restaurant'].value
    let image = e.target['new-image'].value
    // let rating = e.target
    let comment = e.target.['new-comment'].value
}

// Call Functions
getAllRamen(url)


// Create a new ramen after submitting the new-ramen form. The new ramen should
// be added to the#ramen-menu div. The new ramen does not need to persist; in
// other words, if you refresh the page, it's okay that the new ramen is no
// longer on the page.