const domUpdates = {

  cardUpdates(traveler, buttonId){
    console.log("cardUpdates - traveler", traveler)
    console.log("cardUpdates - btn", buttonId)
    const tripCards = document.querySelector('.card-container');
    console.log(traveler[buttonId])
    tripCards.innerHTML = '';
    let tripInfo = '';
    if (traveler[buttonId].length > 0) {
      traveler[buttonId].forEach(trip => {
        const formattedDate = trip.date;
        tripInfo += `
        <article class="trip-cards">
        <div class="img-wrap">
        <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}>
        </div>
        <h3 class="destination-name">${trip.destination.destination}</h3>
        <p>Trip date: ${formattedDate} <br>
        Travelers: ${trip.travelers} <br>
        Duration: ${trip.duration} <br>
        Status: ${trip.status} <br> </p>
        <a>Request activities from your travel agent!</a>
        </article>
        `;
      })
    } else {
      tripInfo = `
        <h3 class="no-trips">You do not have any ${buttonId} trips </h3>`;
    }

    tripCards.insertAdjacentHTML('beforeend', tripInfo);
  },


  loadDropDownData(destinations) {
    const tripChoice = document.querySelector('#tripChoice');
    console.log("domupdates", destinations);
    let destinationSelection = '';
    destinations.destinations.forEach(destination => {
      destinationSelection += `
      <option value="${destination.destination}" id="${destination.id}">${destination.destination}</option>
      `

    })
    tripChoice.insertAdjacentHTML('beforeend', destinationSelection);
  },

  showModal() {
    const modal = document.querySelector('.modal')
    modal.style.display = 'block';
  },

  hideModal() {
    const modal = document.querySelector('.modal')
    modal.style.display = 'none';
  },

  showHome() {
    const header = document.querySelector('#header')
    const trips = document.querySelector('#trips')
    const login = document.querySelector('#loginPage')

    header.classList.remove('hidden')
    trips.classList.remove('hidden')
    login.classList.add('hidden')
  },

  getFormValues(){
    const startVal = document.querySelector('#start').value;
    const durationVal = document.querySelector('#duration').value;
    const groupVal = document.querySelector('#groupCount').value;
    const destinationVal = document.querySelector('#tripChoice').value;

    const postObj = {
      startDate: startVal,
      duration: durationVal,
      groupCount: groupVal,
      destination: destinationVal
    }

    return postObj
  },

  displayNewTripCost(sum) {
    const tripTotal = document.querySelector('#tripTotal')
    tripTotal.innerText = sum;
  },

  checkLoginFields() {
    event.preventDefault()
    const un = document.querySelector('#usernameField')
    const pw = document.querySelector('#passwordField')
    const errorField = document.querySelector('#invalidLogin')

    if(!un.value || !pw.value){
      return errorField.innerText = 'Username or Password is Incorrect'
    }

    // if(un.value.includes('traveler') && pw.value === 'travel2020')
  },

  removeLoginError() {
    const errorField = document.querySelector('#invalidLogin')

    if(errorField) {
    return errorField.innerText = ''
    }
  },

  checkCredentials() {
    const un = document.querySelector('#usernameField')
    const pw = document.querySelector('#passwordField')
    const errorField = document.querySelector('#invalidLogin')
    let userID

    if(un.value.includes('traveler') && un.value.length <= 10 && pw.value === 'travel2020'){
      userID = un.value.split('traveler')
      console.log(userID[0])
    } else {
      return errorField.innerText = 'Username or Password is Incorrect'
    }

    if(userID[0] > 50){
      return errorField.innerText = 'Username not found, please try again'
    } else {
      this.showHome()
    }


    }
  };

export default domUpdates;
