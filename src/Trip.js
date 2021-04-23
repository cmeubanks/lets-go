class Trip {
  constructor(destinationData, tripData) {
    this.destinationData = destinationData;
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
    const allTripsforYear = allTrips.filter(trip => trip.date >= date)
    // const costInfo = allTripsforYear.reduce((arr, trip) => { const obj = {'destinationInfo': this.destinationData.filter(place => place.id === trip.destinationID),
    // 'tripLength': trip.duration,
    // 'travelers': trip.travelers}
    //   arr.push(obj)
    //   return arr
    // }, [])
    const addCostInfo = allTripsforYear.map(trip => ({...trip, 'destinationInfo': this.destinationData.filter(place => place.id === trip.destinationID)[0]}))

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
