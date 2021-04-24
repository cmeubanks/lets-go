var dayjs = require('dayjs')

class Trip {
  constructor(destinationData, tripData) {
    this.destinationData = destinationData;
    this.tripData = tripData;
  }

  getTravelersTrips(userID) {
    //all of user's trips
    const userTrips = this.tripData.trips.filter(trip => trip.userID === userID)

    return userTrips
  }

  travelerTotalSpentInYear(userID, date){
    //for total amount individual traveler spent on trips this year (with 10% agents fee)

    const allTrips = this.getTravelersTrips(userID)

    const allTripsforYear = allTrips.filter(trip => dayjs(trip.date).isSame(date, 'year'))
    console.log(allTripsforYear)

    const addCostInfo = allTripsforYear.map(trip => ({...trip, 'destinationInfo': this.destinationData.destinations.filter(place => place.id === trip.destinationID)[0]}))

    // console.log(addCostInfo)
    const totalTripsSpend = addCostInfo.reduce((sum, trip) => {
       sum += (trip.travelers * trip.destinationInfo.estimatedFlightCostPerPerson)
       sum += (trip.duration * trip.destinationInfo.estimatedLodgingCostPerDay)
      return sum
    }, 0)

  const agentFee = totalTripsSpend * 0.10
  const tripSpendwithAgentFee = totalTripsSpend + agentFee
  return tripSpendwithAgentFee
  }
}

//get user trip cost


export default Trip;
