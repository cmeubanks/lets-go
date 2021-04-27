import { expect } from 'chai';

import Traveler from '../src/Traveler.js'
import Trip from '../src/Trip.js';
import destinationTestData from '../test/test-data/destinationData';
import tripTestData from '../test/test-data/tripData';

describe('Traveler', () => {
  let travelerData, tripData, trip, traveler

  beforeEach(() => {
    travelerData = {'id': 1, 'name': 'Ham Leadbeater', 'travelerType': 'relaxer'},

    trip = new Trip(destinationTestData.destinations, tripTestData.trips);

    traveler = new Traveler(travelerData, trip.getTravelersTrips(1), trip.travelerTotalSpentInYear(1,'2020/02/09'), destinationTestData.destinations)

    // console.log(traveler)
  })

  it('should be a function', () => {

    expect(Traveler).to.be.a('function');
  })

  it('should contain the travelers id', () => {

    expect(traveler).to.have.property('id');
    expect(traveler.id).to.equal(1);
  })

  it('should contain the travelers name', () => {

    expect(traveler).to.have.property('name');
    expect(traveler.name).to.equal('Ham Leadbeater');
  })

  it('should contain the travelers travel style', () => {

    expect(traveler).to.have.property('travelerType');
    expect(traveler.travelerType).to.equal('relaxer');
  })

  it('should contain all of the travelers trips', () => {

    expect(traveler).to.have.property('allTrips');
    expect(traveler.allTrips).to.deep.equal([
  {
    id: 117,
    userID: 1,
    destinationID: 28,
    travelers: 3,
    date: '2021/01/09',
    duration: 15,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 118,
    userID: 1,
    destinationID: 13,
    travelers: 2,
    date: '2021/02/09',
    duration: 7,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 119,
    userID: 1,
    destinationID: 5,
    travelers: 4,
    date: '2021/10/09',
    duration: 4,
    status: 'pending',
    suggestedActivities: []
  },
  {
    id: 120,
    userID: 1,
    destinationID: 28,
    travelers: 1,
    date: '2020/01/09',
    duration: 10,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 121,
    userID: 1,
    destinationID: 14,
    travelers: 3,
    date: '2020/11/09',
    duration: 6,
    status: 'approved',
    suggestedActivities: []
  }
  ]);
  })
})
