const domUpdates = {

  cardUpdates(traveler, buttonId){
    const tripCards = document.querySelector('.card-container');
    const cardHeader = document.querySelector('#trip-type-section')
    cardHeader.innerHTML = `${buttonId} trips`
    tripCards.innerHTML = '';
    let tripInfo = '';
    if (traveler[buttonId].length > 0) {
      traveler[buttonId].forEach(trip => {
        const formattedDate = trip.date;
        tripInfo += `
        <article class="trip-cards">
        <div class="img-wrapper">
        <h3 class="destination-name">${trip.destination.destination}</h3>
        <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}>
        </div>
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
    const textField = document.querySelector('#tripTotal')
    const modal = document.querySelector('.modal')
    modal.style.display = 'none';
    textField.innerText = ''
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
    let formatter = new Intl.NumberFormat('en-US', {
      style:'currency',
      currency: 'USD'
    })

    greeting.innerText = `Welcome ${name}`
    moneySpent.innerText = `Total Spent this year: ${formatter.format(money)}`
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

    if (!startVal.value.length || !durationVal.value.length || !groupVal.value.length || !destinationVal.value.length) submit.disabled = true
    if(startVal.checkValidity() && durationVal.checkValidity() && groupVal.checkValidity() && destinationVal.value !== 'Trip Choice'){
      submit.disabled = false;
      textField.innerText = 'Check Trip Cost or Submit Request Now!';
    }
  },

  displayNewTripCost(sum) {
    const tripTotal = document.querySelector('#tripTotal')
    let formatter = new Intl.NumberFormat('en-US', {
      style:'currency',
      currency: 'USD'
    })

    tripTotal.innerText = `Trip Cost: ${formatter.format(sum)}`;
  },

  displayPostConfirmationNumber(num) {
    const durationVal = document.querySelector('#duration');
    const groupVal = document.querySelector('#groupCount');
    const submit = document.querySelector('#tripRqst')
    const tripConfirmation = document.querySelector('#tripTotal')
    durationVal.value = ''
    groupVal.value = ''
    submit.disabled = true;
    tripConfirmation.innerText = `Confirmation Number:${num}. Our agency is processing your request`
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
