import {getData} from './api'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)


import './images/turing-logo.png'

/* CLASS IMPORTS */
import Destinations from './Destinations';
import Traveler from './Traveler';
import Trip from './Trip';
import domUpdates from './domUpdates'
let destinations, trip, traveler;

let destinationsInfo, tripsInfo, travelerInfo

const travelerData = document.querySelector('#travelerData')
const tripButtons = document.querySelectorAll('.trip-btn');
const formBtn = document.querySelector('#formBtn');
const closeWindow = document.querySelector('#close-btn');


window.addEventListener('load', loadData)
tripButtons.forEach(button => button.addEventListener('click', displayTrips))
formBtn.addEventListener('click', loadForm)


function loadData () {
  getData('destinations')
    .then(response => destinationsInfo = response)
  getData('trips')
    .then(response => tripsInfo = response)
  getData('travelers/1')
    .then(response => travelerInfo = response)
    .then(response => {
      console.log("array holder", destinationsInfo)
      destinations = new Destinations(destinationsInfo.destinations)
      console.log("destination class", destinations) })
    .then(response => {
      trip = new Trip(destinationsInfo.destinations, tripsInfo.trips)
      traveler = new Traveler(travelerInfo, trip.getTravelersTrips(2), trip.travelerTotalSpentInYear(2,"2021/01/09"), destinationsInfo.destinations)
      traveler.showPastTrips("2021/01/09");
      traveler.showFutureTrips("2021/01/09");
      traveler.showPresentTrips("2021/01/09");
    })
  }


function displayTrips(event) {
  // event.preventDefault()
  domUpdates.cardUpdates(traveler, event.target.id)
}

function loadForm() {
  domUpdates.loadDropDownData(destinations);
  domUpdates.showModal();
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
