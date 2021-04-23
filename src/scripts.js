import {getData} from './api'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

const travelerData = document.querySelector('#travelerData')

window.addEventListener('load', loadData)

function loadData () {
  getData('travelers')
  .then(response => travelerData.innerText = response.travelers[0].id)
}
