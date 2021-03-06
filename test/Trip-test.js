import { expect } from 'chai';

import Trip from '../src/Trip.js';
import destinationTestData from '../test/test-data/destinationData';
import tripTestData from '../test/test-data/tripData';

describe('Trip', () => {
  let trip;

  beforeEach(() => {

      trip = new Trip(destinationTestData.destinations, tripTestData.trips);

  })

  it('should be a function', () => {

    expect(Trip).to.be.a('function');
  })

  it('should contain a property that holds all destination data', () => {

    expect(trip.destinationData).to.deep.equal([
           {
               "id": 14,
               "destination": "Lima, Peru",
               "estimatedLodgingCostPerDay": 70,
               "estimatedFlightCostPerPerson": 400,
               "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
               "alt": "overview of city buildings with a clear sky"
           },
           {
               "id": 28,
               "destination": "Stockholm, Sweden",
               "estimatedLodgingCostPerDay": 100,
               "estimatedFlightCostPerPerson": 780,
               "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
               "alt": "city with boats on the water during the day time"
           },
           {
               "id": 3,
               "destination": "Sydney, Austrailia",
               "estimatedLodgingCostPerDay": 130,
               "estimatedFlightCostPerPerson": 950,
               "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
               "alt": "opera house and city buildings on the water with boats"
           },
           {
               "id": 13,
               "destination": "Cartagena, Colombia",
               "estimatedLodgingCostPerDay": 65,
               "estimatedFlightCostPerPerson": 350,
               "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
               "alt": "boats at a dock during the day time"
           },
           {
               "id": 5,
               "destination": "Madrid, Spain",
               "estimatedLodgingCostPerDay": 150,
               "estimatedFlightCostPerPerson": 650,
               "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
               "alt": "city with clear skys and a road in the day time"
           },
           {
               "id": 6,
               "destination": "Jakarta, Indonesia",
               "estimatedLodgingCostPerDay": 70,
               "estimatedFlightCostPerPerson": 890,
               "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
               "alt": "lit up city at night"
           },
         ]);
       });

       it('should contain a property to hold all trip data', () => {

       expect(trip.tripData).to.deep.equal([  {
               "id": 117,
               "userID": 1,
               "destinationID": 28,
               "travelers": 3,
               "date": "2021/01/09",
               "duration": 15,
               "status": "approved",
               "suggestedActivities": []
           },
           {
             "id": 118,
             "userID": 1,
             "destinationID": 13,
             "travelers": 2,
             "date": "2021/02/09",
             "duration": 7,
             "status": "approved",
             "suggestedActivities": []
         },
         {
            "id": 119,
            "userID": 1,
            "destinationID": 5,
            "travelers": 4,
            "date": "2021/10/09",
            "duration": 4,
            "status": "pending",
            "suggestedActivities": []
        },
        {
           "id": 120,
           "userID": 1,
           "destinationID": 28,
           "travelers": 1,
           "date": "2020/01/09",
           "duration": 10,
           "status": "approved",
           "suggestedActivities": []
       },
       {
          "id": 121,
          "userID": 1,
          "destinationID": 14,
          "travelers": 3,
          "date": "2020/11/09",
          "duration": 6,
          "status": "approved",
          "suggestedActivities": []
       },
     ]);
   });

   it('should return a specified travelers trips', () => {

     const allTrips = trip.getTravelersTrips(1)

     expect(allTrips).to.deep.equal([{
             "id": 117,
             "userID": 1,
             "destinationID": 28,
             "travelers": 3,
             "date": "2021/01/09",
             "duration": 15,
             "status": "approved",
             "suggestedActivities": []
         },
         {
           "id": 118,
           "userID": 1,
           "destinationID": 13,
           "travelers": 2,
           "date": "2021/02/09",
           "duration": 7,
           "status": "approved",
           "suggestedActivities": []
       },
       {
          "id": 119,
          "userID": 1,
          "destinationID": 5,
          "travelers": 4,
          "date": "2021/10/09",
          "duration": 4,
          "status": "pending",
          "suggestedActivities": []
      },
      {
         "id": 120,
         "userID": 1,
         "destinationID": 28,
         "travelers": 1,
         "date": "2020/01/09",
         "duration": 10,
         "status": "approved",
         "suggestedActivities": []
     },
     {
        "id": 121,
        "userID": 1,
        "destinationID": 14,
        "travelers": 3,
        "date": "2020/11/09",
        "duration": 6,
        "status": "approved",
        "suggestedActivities": []
     },
   ]);
 });

 it('should return the total money spent on trips, plus agent fee, for the current year', () => {

    const moneySpent = trip.travelerTotalSpentInYear(1, '2020/02/09')
   expect(moneySpent).to.equal(3740)
 });
});
