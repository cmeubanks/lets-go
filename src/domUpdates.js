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

  getFormValues(){
    const startVal = document.querySelector('#start').value;
    const durationVal = document.querySelector('#duration').value;
    const groupVal = document.querySelector('#groupCount').value;
    const destinationVal = document.querySelector('#tripChoice').value;

    const destinationID = document.querySelector('#tripChoice').id
    console.log(destinationID)

    const postObj = {
      startDate: startVal,
      duration: durationVal,
      groupCount: groupVal,
      destination: destinationVal
    }

    return postObj
  }

  };

export default domUpdates;
