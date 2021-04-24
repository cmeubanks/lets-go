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

    const result = pastTrips.map(trip => ({...trip, 'destination': this.destinations.filter(place => trip.destinationID === place.id)}))

    result.forEach(trip => this.past.push(trip))
  }

  showFutureTrips(todaysDate) {
    const futureTrips = this.allTrips.filter(trip => dayjs(trip.date).isAfter(todaysDate))
    this.future.push(futureTrips)
  }

  showPresentTrips(todaysDate) {
    // console.log(dayjs("2021/02/09").add(8, 'day'))
    // console.log(this.allTrips)

    const presentTrips = this.allTrips.filter(trip => {
      const endDate = dayjs(trip.date).add(trip.duration, 'day')
      return dayjs(todaysDate).isBetween(trip.date, endDate, null, '[]')
    })
    console.log("present trip", presentTrips)
    this.present.push(presentTrips)
    //get a new object with date range
    // this.allTrips.map(trip => {...trip, 'tripDates': })
    //use dayJS to get dates between that check new array
  }
//makeTripRequest


}


export default Traveler;
