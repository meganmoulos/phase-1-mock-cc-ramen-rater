// write your code here

// Globals
const url = 'http://localhost:3000/ramens'

// DOM selectors
const ramenMenu = document.querySelector('#ramen-menu')
const ramenDetails = document.querySelector('#ramen-detail')
const ramenDetailImage = document.querySelector('.detail-image')
const ramenName = document.querySelector('.name')

// Event Listeners

// Fetchers
function getAllRamen(url) {
    return fetch(url)
    .then(res => res.json())
    .then(data => {
        renderTopMenu(data)
    })
}

// Render Functions
function renderMenuItem(item){
    const ramenMenuImage = document.createElement('img')
    ramenMenuImage.src = item.image 
    ramenMenu.appendChild(ramenMenuImage)
}

function renderTopMenu(data){
    data.forEach(data => renderMenuItem(data))
}

getAllRamen(url)


// Click on an image from the #ramen-menu div and see all the info about that
// ramen displayed inside the #ramen-detail div and where it says
// insert comment here and insert rating here.

// Create a new ramen after submitting the new-ramen form. The new ramen should
// be added to the#ramen-menu div. The new ramen does not need to persist; in
// other words, if you refresh the page, it's okay that the new ramen is no
// longer on the page.