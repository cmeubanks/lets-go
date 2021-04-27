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

  hideHome() {
    const header = document.querySelector('#header')
    const trips = document.querySelector('#trips')
    const login = document.querySelector('#loginPage')
    const main = document.querySelector('#main')

    header.classList.add('hidden')
    main.classList.add('hidden')
    trips.classList.add('hidden')
    login.classList.remove('hidden')
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

  checkModalFields() {

    const startVal = document.querySelector('#start');
    const durationVal = document.querySelector('#duration');
    const groupVal = document.querySelector('#groupCount');
    const destinationVal = document.querySelector('#tripChoice');
    const textField = document.querySelector('#tripTotal')
    const submit = document.querySelector('#tripRqst')
    let formObj = this.getFormValues()

    // if(formObj.groupCount <= 0 || formObj.duration <= 0 || fromObj.groupCount > 99 || formObj.duration > 99){
    //   textField.style.color = 'red';
    //   textField.innerText = 'Group Count & Duration must be between 1-99';
    //   setTimeout(() => {
    //     textField.style.color = 'black';
    //     textField.innerText = ''
    //   }, 3000)
    // }

    if(startVal.checkValidity() && durationVal.checkValidity() && groupVal.checkValidity() && destinationVal.value !== 'Trip Choice'){
      submit.disabled = false;
      textField.innerText = 'Check Trip Cost or Submit Request Now!';
    }
  },

  displayNewTripCost(sum) {
    const tripTotal = document.querySelector('#tripTotal')
    tripTotal.innerText = sum;
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
  },

  catchErrors(text){
    let field = document.querySelector('.error-container');
    let errorInput = document.querySelector('#errorText')
    field.classList.remove('hidden');
    errorInput.innerText = `${text}`
  },

};
export default domUpdates;
