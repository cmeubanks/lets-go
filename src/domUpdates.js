const domUpdates = {

  cardUpdates(traveler, buttonId){
    console.log("cardUpdates - traveler", traveler)
    console.log("cardUpdates - btn", buttonId)
    const tripCards = document.querySelector('.card-container');
    const cardHeader = document.querySelector('#trip-type-section')
    cardHeader.innerHTML = `${buttonId} trips`
    console.log(traveler[buttonId])
    tripCards.innerHTML = '';
    let tripInfo = '';
    if (traveler[buttonId].length > 0) {
      traveler[buttonId].forEach(trip => {
        const formattedDate = trip.date;
        tripInfo += `
        <article class="trip-cards">
        <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}>
        <h3 class="destination-name">${trip.destination.destination}</h3>
        <p>Trip date: ${formattedDate} <br>
        Travelers: ${trip.travelers} <br>
        Duration: ${trip.duration} <br>
        Status: ${trip.status} <br> </p>
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
    const main = document.querySelector('#main')

    header.classList.remove('hidden')
    main.classList.remove('hidden')
    trips.classList.remove('hidden')
    login.classList.add('hidden')
  },

  greetUser(name, money) {
    const greeting = document.querySelector('#greeting')
    const moneySpent = document.querySelector('#spending')

    greeting.innerText = `Welcome ${name}`
    moneySpent.innerText = `Total Spent this year: $${money}.00`
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

  // checkLoginFields() {
  //   event.preventDefault()
  //   const un = document.querySelector('#usernameField')
  //   const pw = document.querySelector('#passwordField')
  //   const errorField = document.querySelector('#invalidLogin')
  //
  //   if(!un.value || !pw.value){
  //     return errorField.innerText = 'Username or Password is Incorrect'
  //   }

    // if(un.value.includes('traveler') && pw.value === 'travel2020')
  // },

  removeLoginError() {
    const errorField = document.querySelector('#invalidLogin')

    if(errorField) {
    return errorField.innerText = ''
    }
  },

  checkCredentials() {
    debugger
    const un = document.querySelector('#usernameField')
    const pw = document.querySelector('#passwordField')
    const loginBtn = document.querySelector('#loginSubmit')
    const errorField = document.querySelector('#invalidLogin')
    let userArr, id

    if(un.checkValidity() && pw.checkValidity() && un.value.includes('traveler') && pw.value === 'travel2020'){
      userArr = un.value.split('traveler');
      id = userArr[1];
    } else {
      return false
    }

    if(id > 0 && id <= 50) {
      loginBtn.disabled = false;
      return id
    } else {
      errorField.style.color = 'red';
      errorField.innerText = 'Username not found'
        setTimeout(() => {
          errorField.style.color = 'black';
          errorField.innerText = 'Enter Username and Password'
        }, 3000)
    }

    // console.log(id)
  //   } else if(!un.checkValidity() && !pw.checkValidity() && un.length){
  //   errorField.style.color = 'red';
  //   errorField.innerText = 'Username or Password is Incorrect'
  // }

  },

  // getInputValues() {
  //   const un = document.querySelector('#usernameField')
  //   const pw = document.querySelector('#passwordField')
  //   const loginBtn = document.querySelector('#loginSubmit')
  //   let userID
  //
  //   userID = un.value.split('traveler')
  // } else {
  //   un.value = '';
  //   pw.value = '';
  //   return errorField.innerText = 'Username or Password is Incorrect'
  // }
//
//   if(userID[1] > 50){
//     un.value = '';
//     pw.value = '';
//     return errorField.innerText = 'Username not found, please try again'
//   } else {
//
//     return userID[1]
//   }
// };
};
export default domUpdates;
