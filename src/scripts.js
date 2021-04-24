import {getData} from './api'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)


import './images/turing-logo.png'

/* CLASS IMPORTS */
import Destinations from './Destinations';
import Traveler from './Traveler';
import Trip from './Trip';
let destinations, trip;

let destinationsArray = [];

const travelerData = document.querySelector('#travelerData')

window.addEventListener('load', loadData)

function loadData () {
  // getData('travelers')
  // .then(response => travelerData.innerText = response.travelers[0].id)
  getData('destinations')
  .then(response => {
    destinations = new Destinations(response.destinations)
    destinationsArray.push(destinations)
  })
  getData('trips')
    .then(response => {
      trip = new Trip(destinationsArray, response)
      // console.log(trip)
      // const userTrips = trip.getTravelersTrips(44)
      // console.log(userTrips)
      // const tripCostforYear = trip.travelerTotalSpentInYear(44, "2019/12/15")
      // console.log(tripCostforYear)
    })

}
