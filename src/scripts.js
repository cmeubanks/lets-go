import {getData} from './api'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)


import './images/turing-logo.png'

/* CLASS IMPORTS */
import Destinations from './Destinations';
import Traveler from './Traveler';
import Trip from './Trip';
import domUpdates from './domUpdates'
let destinations, trip, traveler;

let destinationsArray = [];

const travelerData = document.querySelector('#travelerData')
const tripButtons = document.querySelectorAll('.trip-btn');


window.addEventListener('load', loadData)
tripButtons.forEach(button => button.addEventListener('click', displayTrips))

function loadData () {
  getData('destinations')
  .then(response => {
    destinations = new Destinations(response.destinations)
    destinationsArray.push(destinations)
  })
  getData('trips')
    .then(response => {
      trip = new Trip(destinations.destinations, response.trips)
      // console.log("trip instance", trip)
    })
      getData('travelers')
      .then(response => travelerData.innerText = response.travelers[0].id)
      .then(response => {
         traveler = new Traveler(response, trip.getTravelersTrips(1), trip.travelerTotalSpentInYear(1,"2021/01/09"))
         // console.log("showPresentTrips", traveler.showPresentTrips("2021/01/09"))
       })

      // const userTrips = trip.getTravelersTrips(44)
      // console.log(userTrips)
      // const tripCostforYear = trip.travelerTotalSpentInYear(44, "2019/12/15")
      // console.log(tripCostforYear)

}

function displayTrips(event) {
  domUpdates.cardUpdates(traveler, event.target.id)
}


function requestNewTrip() {
   const travelerRequest = {
     id: Date.now(),
     userID: traveler.id,
     destinationID: form.value,
     travelers: form.value,
     date: 'YYYY/MM/DD',
     duration: form.value,
     status: 'pending',
     suggestedActivities: []
    }

    sendData('http://localhost:3001/api/v1/trips', travelerRequest)
    .then(response => {
      traveler.pendingTrips.push(response)
      //domUpdates - displayPendingTrips
    })

}
