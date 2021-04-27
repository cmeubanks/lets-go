import {getData} from './api'

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
const modal = document.querySelector('#modalContent');
const closeWindow = document.querySelector('#closeBtn');
const tripEstimate = document.querySelector('#tripEst')
const submitRequest = document.querySelector('#tripRqst')
const login = document.querySelector('#loginSubmit')
const loginField = document.querySelectorAll('.login-form-field')
const logout = document.querySelector('#logout');


// window.addEventListener('load', loadData)
tripButtons.forEach(button => button.addEventListener('click', displayTrips))
formBtn.addEventListener('click', loadForm)
closeWindow.addEventListener('click', closeForm)
tripEstimate.addEventListener('click', calculateNewTripCost)
modal.addEventListener('keyup', checkModalValidity)
submitRequest.addEventListener('click', requestNewTrip)
// login.addEventListener('click', verifyLogin)
loginField.forEach(field => field.addEventListener('keyup', checkLoginFields))
logout.addEventListener('click', logoutOfApp)

function checkLoginFields() {
  // event.preventDefault()
  const id = domUpdates.checkCredentials()

  if(login.disabled === false){
  return id
}
  // domUpdates.removeLoginError()
}

function verifyLogin() {
  event.preventDefault()
  // domUpdates.checkLoginFields()
  const userID = checkLoginFields()

  if(userID){
    const id = parseInt(userID)
    loadData(id)
  }
}

function loadData(id) {

  Promise.all([getData('destinations'), getData('trips'), getData(`travelers/${id}`)])
    .then(data => {
      destinations = new Destinations(data[0].destinations)
      trip = new Trip(data[0].destinations, data[1].trips)
      traveler = new Traveler(data[2], trip.getTravelersTrips(id), trip.travelerTotalSpentInYear(id, "2020/01/09"), data[0].destinations)
      showTrips("2020/01/09")
      domUpdates.greetUser(traveler.name, traveler.totalCostofTrips)
      domUpdates.showHome()
    })


}

function showTrips(date) {
  traveler.showPastTrips(date);
  traveler.showFutureTrips(date);
  traveler.showPresentTrips(date);
  //traveler.showPendingTrips(date);
}

function displayTrips(event) {
  // event.preventDefault()
  domUpdates.cardUpdates(traveler, event.target.id)
}

function loadForm() {
  domUpdates.loadDropDownData(destinations);
  domUpdates.showModal();
}

function checkModalValidity() {
  //event listener on whole form (event targetting), keyup
  domUpdates.checkModalFields()
}

function closeForm() {
  domUpdates.hideModal();
}

function calculateNewTripCost(){
  const postObj = domUpdates.getFormValues()

  const locationObj = destinations.destinations.find(place =>{
    if(postObj.destination === place.destination){
      return place.id
    }
  })

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

    sendData('http://localhost:3001/api/v1/trips', travelerRequest)
    .then(response => {
      console.log(response.message)
      const destObj = destinations.destinations.find(place => {
        if(response.newTrip.destinationID === place.id){
          return place
        }
      })
      response.newTrip.destination = destObj
      traveler.pending.push(response.newTrip)
    })
}

function logoutOfApp() {
  domUpdates.hideHome();
}
