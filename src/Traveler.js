var dayjs = require('dayjs')

var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

class Traveler {
  constructor(travelerData, tripData, tripCost, destinationsData){
  this.id = travelerData.id;
  this.name = travelerData.name;
  this.travelerType = travelerData.travelerType;
  this.allTrips = tripData;
  this.totalCostofTrips = tripCost;
  this.destinations = destinationsData;
  this.past = [];
  this.present = [];
  this.future = [];
  this.pending = [];
  }


  showPastTrips(todaysDate) {
    const pastTrips = this.allTrips.filter(trip => dayjs(trip.date).isBefore(todaysDate))

    const result = pastTrips.map(trip => ({...trip, 'destination': this.destinations.filter(place => trip.destinationID === place.id)[0]}))

    result.forEach(trip => this.past.push(trip))
  }

  showFutureTrips(todaysDate) {
    const futureTrips = this.allTrips.filter(trip => dayjs(trip.date).isAfter(todaysDate))

    const result = futureTrips.map(trip => ({...trip, 'destination': this.destinations.filter(place => trip.destinationID === place.id)[0]}))

    result.forEach(trip => this.future.push(trip))
  }

  showPresentTrips(todaysDate) {

    const presentTrips = this.allTrips.filter(trip => {
      const endDate = dayjs(trip.date).add(trip.duration, 'day')
      return dayjs(todaysDate).isBetween(trip.date, endDate, null, '[]')
    })

    const result = presentTrips.map(trip => ({...trip, 'destination': this.destinations.filter(place => trip.destinationID === place.id)[0]}))

    result.forEach(trip => this.present.push(trip))
  }



}


export default Traveler;
