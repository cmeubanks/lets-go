import { expect } from 'chai';

import Traveler from '../src/Traveler.js'

describe('Traveler', () => {
  let travelerData, tripData, traveler
  beforeEach(() => {
    travelerData = {'id': 1, 'name': 'Ham Leadbeater', 'travelerType': 'relaxer'},

    tripData = [  {
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
      ]
  })
})
