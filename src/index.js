// write your code here

// Globals
const url = 'http://localhost:3000/ramens'

// DOM selectors
const ramenMenu = document.querySelector('#ramen-menu')

// Event Listeners

// Fetchers
function getAllRamen(url) {
    return fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

// Render Functions


getAllRamen(url)

// See all ramen images in the div with the id of ramen-menu. When the page
// loads, request the data from the server to get all the ramen objects. Then,
// display the image for each of the ramen using an img tag inside the
// #ramen-menu div.

// Click on an image from the #ramen-menu div and see all the info about that
// ramen displayed inside the #ramen-detail div and where it says
// insert comment here and insert rating here.

// Create a new ramen after submitting the new-ramen form. The new ramen should
// be added to the#ramen-menu div. The new ramen does not need to persist; in
// other words, if you refresh the page, it's okay that the new ramen is no
// longer on the page.