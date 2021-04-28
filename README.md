# Travel Tracker Project - Let's Go

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Authors](#authors)
* [Technologies](#technologies)

## Description

Let's Go was created for the traveler eager to explore. We take the hassle out of travel planning with a dashboard tracking all existing bookings for a user. Let's Go also tracks the cost of a user's trips and provides cost estimates before a trip is requested so all of our customers are making educated travel budget decisions.


### Notable Features
* GET/POST requests to local API
* SASS broken out into partial files
* Mobile responsiveness
* 100% Accessibility on Lighthouse audit
* Demonstration of array iterator methods to manipulate fetched data
* DOM manipulation separate from functionality logic
* Network request error handling

<img src="https://user-images.githubusercontent.com/73092355/116330372-9ca02b00-a78a-11eb-87e9-1421946dfbbd.png" width="500">

<img width="500" alt="Screen Shot 2021-04-27 at 2 39 12 PM" src="https://user-images.githubusercontent.com/73092355/116330123-12f05d80-a78a-11eb-8b1e-5c0bf0330283.png">

### Login
![](https://media.giphy.com/media/pXLxycjGpWLxkO4AWu/giphy.gif)

### View Trips
![](https://media.giphy.com/media/sQbuTViymvIhZNsJ91/giphy.gif)

### Book A New Trip
![](https://media.giphy.com/media/F28Ov7ZMb7A998WMBZ/giphy.gif)

### Responsive Design
![](https://media.giphy.com/media/nMNVBmPjEelV3BPtSz/giphy.gif)

## Installation
1. Clone the project repository via `git clone git@github.com:cmeubanks/lets-go.git`
2. Clone the API repository: https://github.com/turingschool-examples/travel-tracker-api
3. You will need at least two terminal tabs open
4. To run app:
    - npm install both repositories
    - npm start both repositories
9. In your terminal:
  - remove the old remote git remote remove origin
  - then add a new remote git remote add origin [your new repo url]
10. Go to `http://localhost:8080/` in your browser to view your code running in the browser.


## Walkthrough

1. The user will be prompted to login upon loading the website
2. To login select a user id (1-50), your username will be traveler + the id you choose like this:
      - traveler36
3. Enter the password: travel2020
4. Once you are on the main page, you can view:
    - Past trips
    - Current trips
    - Pending trips
    - Future trips
    - Total spent on trips this year
5. The user has the option to book a new trip, select "Book a New Trip"
6. To book a new trip:
    - Select a Date
    - Input how many people are traveling (1-99)
    - Input the duration of your trip (1-99)
    - Select a destination
    - Submit your trip to the agency or check the trip cost first!
7. Your request trip will now be visible under pending trips

## Authors

- Caroline Eubanks: https://github.com/cmeubanks

## Technologies

- Javascript
- HTML
- CSS
- SASS
- Webpack
- API: local repository API: https://github.com/turingschool-examples/travel-tracker-api
- Testing: Mocha/Chai
- NPM packages: DayJS
