var dayjs = require('dayjs')

var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

class Traveler {
  constructor(travelerData, tripData, tripCost){
  this.id = travelerData.id;
  this.name = travelerData.name;
  this.travelerType = travelerData.travelerType;
  this.allTrips = tripData;
  this.totalCostofTrips = tripCost;
  this.pendingTrips = [];
  }


  showPastTrips(todaysDate) {
    //needs day.js
    this.allTrips.filter(trip => dayjs(trip.date).isBefore(todaysDate))
  }

  showFutureTrips(todaysDate) {
    this.allTrips.filter(trip => dayjs(trip.date).isAfter(todaysDate))
  }

  showPresentTrips(todaysDate) {
    // console.log(dayjs("2021/02/09").add(8, 'day'))
    // console.log(this.allTrips)

    return this.allTrips.filter(trip => {
      const endDate = dayjs(trip.date).add(trip.duration, 'day')
      return dayjs(todaysDate).isBetween(trip.date, endDate, null, '[]')
    })
    //get a new object with date range
    // this.allTrips.map(trip => {...trip, 'tripDates': })
    //use dayJS to get dates between that check new array
  }
//makeTripRequest


}


export default Traveler;
