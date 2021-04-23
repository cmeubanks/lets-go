class Trip {
  constructor(destinationdata, tripData) {
    this.destinationdata = destinationdata;
    this.tripData = tripData;
  }

  getTravelersTrips(userID) {
    //all of user's trips
    const userTrips = this.tripData.filter(trip => trip.userID === userID)
    return userTrips
  }

  travelerTotalSpentInYear(userID, date){
    //for total amount individual traveler spent on trips this year (with 10% agents fee)
    //use dayjs to convert date to year
    const allTrips = this.getTravelersTrips(userID)
    //dayjs filter by year
    const allTripsforYear = allTrips.filter(trip => trip.date === date)
    allTripsforYear.
  }
}

//get user trip cost


export default Trip;
