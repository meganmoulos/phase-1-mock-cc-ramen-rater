// write your code here

// Globals
const url = 'http://localhost:3000/ramens'
let selectedRamen

// DOM selectors
const ramenMenu = document.querySelector('#ramen-menu')
const ramenDetails = document.querySelector('#ramen-detail')
const ramenDetailImage = document.querySelector('.detail-image')
const ramenName = document.querySelector('.name')
const ramenRestaurant = document.querySelector('.restaurant')
const ratingDisplay = document.querySelector('#rating-display')
const commentDisplay = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')
const edit = document.querySelector('#edit-ramen')

// Event Listeners
form.addEventListener('submit', getFormInfo)
// edit.addEventListener('submit', handleEdit)

// Fetchers
function getAllRamen(url) {
    return fetch(url)
    .then(res => res.json())
}

// Render Functions
function renderMenuItem(item){
    const div = document.createElement('div')
    const btn = document.createElement('button')
    const ramenMenuImage = document.createElement('img')
    btn.textContent = 'DELETE'
    btn.style.backgroundColor = 'red'
    btn.style.color = 'white'
    ramenMenuImage.src = item.image 
    ramenMenu.appendChild(ramenMenuImage)
    ramenMenuImage.addEventListener('click', () => renderARamen(item))
    btn.addEventListener('click', () => div.remove())
    div.append(ramenMenuImage, btn)
    ramenMenu.append(div)
}

function renderTopMenu(data){
    data.forEach(renderMenuItem)
}

function renderARamen(item){
    selectedRamen = item
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
        name,
        restaurant,
        image,
        rating,
        comment
    }
    renderMenuItem(newRamen)
}

// fix this
// function handleEdit(e) {
//     e.preventDefault()
//     selectedRamen.rating.textContent = e.target.rating.value
//     selectedRamen.comment.textContent = e.target['new-comment'].value
//     renderARamen(selectedRamen)
//     edit.reset()
// }

// Advanced Deliverable - delete button
// Problem - it deletes all of the info, even if you switch ramens


function deleteRamen() {
    // Problem
    // I only want to remove THAT ramen's info
}

// Call Functions
getAllRamen(url).then(data => {
    renderARamen(data[0])
    renderTopMenu(data) 
})

