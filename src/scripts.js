import {getData} from './api'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)


import './images/turing-logo.png'

/* CLASS IMPORTS */
import Destinations from './Destinations';
import Traveler from './Traveler';
import Trip from './Trip';
import domUpdates from './domUpdates'
import {sendData} from './api'
let destinations, trip, traveler;

let destinationsInfo, tripsInfo, travelerInfo
var dayjs = require('dayjs')

const travelerData = document.querySelector('#travelerData')
const tripButtons = document.querySelectorAll('.trip-btn');
const formBtn = document.querySelector('#formBtn');
const closeWindow = document.querySelector('#closeBtn');
const tripEstimate = document.querySelector('#tripEst')
const submitRequest = document.querySelector('#tripRqst')


window.addEventListener('load', loadData)
tripButtons.forEach(button => button.addEventListener('click', displayTrips))
formBtn.addEventListener('click', loadForm)
closeWindow.addEventListener('click', closeForm)
tripEstimate.addEventListener('click', calculateNewTripCost)
submitRequest.addEventListener('click', requestNewTrip)


function loadData () {
  Promise.all([getData('destinations'), getData('trips'), getData('travelers/2')])
    .then(data => {
      destinations = new Destinations(data[0].destinations)
      trip = new Trip(data[0].destinations, data[1].trips)
      traveler = new Traveler(data[2], trip.getTravelersTrips(2), trip.travelerTotalSpentInYear(2, "2021/01/09"), data[0].destinations)
      showTrips("2021/01/09")
    })


}

function showTrips(date) {
  traveler.showPastTrips(date);
  traveler.showFutureTrips(date);
  traveler.showPresentTrips(date);
}

function displayTrips(event) {
  // event.preventDefault()
  domUpdates.cardUpdates(traveler, event.target.id)
}

function loadForm() {
  domUpdates.loadDropDownData(destinations);
  domUpdates.showModal();
}

function closeForm() {
  domUpdates.hideModal();
}

function calculateNewTripCost(){
  const postObj = domUpdates.getFormValues()
  console.log(postObj)

  const locationObj = destinations.destinations.find(place =>{
    if(postObj.destination === place.destination){
      return place.id
    }
  })
  // console.log("locationObj",locationObj)

  const flightCost = locationObj.estimatedFlightCostPerPerson * postObj.groupCount
  const lodgingCost = locationObj.estimatedLodgingCostPerDay * postObj.duration

  const tripCost = flightCost + lodgingCost;
  const agentFee = tripCost * 0.10
  const tripTotalCost = tripCost + agentFee

  domUpdates.displayNewTripCost(tripTotalCost);
}

function calculateTrip(){


}

function requestNewTrip() {
  const postObj = domUpdates.getFormValues()

  const newID = destinations.destinations.find(destination => {
    if(postObj.destination === destination.destination){
      return destination
    }
  }).id

   const travelerRequest = {
     id: Date.now(),
     userID: traveler.id,
     destinationID: newID,
     travelers: parseInt(postObj.groupCount),
     date: dayjs(postObj.startDate).format('YYYY/MM/DD'),
     duration: parseInt(postObj.duration),
     status: 'pending',
     suggestedActivities: []
    }

    console.log('post Data', travelerRequest)

    sendData('http://localhost:3001/api/v1/trips', travelerRequest)
    .then(response => {
      console.log(response)
      // traveler.pendingTrips.push(response)
      // console.log(traveler.pendingTrips)
      //domUpdates - displayPendingTrips
    })

}
