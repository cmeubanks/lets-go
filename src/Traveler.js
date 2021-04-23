class Traveler {
  constructor(travelerData, tripData, tripCost){
  this.id = travelerData.id;
  this.name = travelerData.name;
  this.travelerType = travelerData.travelerType;
  this.allTrips = this.tripData;
  this.totalCostofTrips = tripCost;
  this.pendingTrips = [];
  }


  showPastTrips(todaysdate) {
    //needs day.js
    this.allTrips.filter(trip => trip.date < todaysdate)
  }

  showFutureTrips(todaysdate) {
    this.allTrips.filter(trip => trip.date > todaysdate)
  }

  showPresentTrips(todaysdate) {
    // const date = todaysdate.split('/')
    // const endDate = date[1] +
  }
//makeTripRequest


}


export default Traveler;
