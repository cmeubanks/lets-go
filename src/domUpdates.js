const domUpdates = {

  cardUpdates(traveler, buttonId){
    const tripCards = document.querySelector('.card-container');
    tripCards.innerHTML = '';
    let tripInfo = '';
    if (traveler[buttonID].length > 0) {
      traveler[buttonID].forEach(trip => {
        const formattedDate = this.formatDate(trip.date);
        tripInfo += `
        <article class="trip-cards">
        <div class="img-wrap">
        <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}>
        </div>
        <h3 class="destination-name">${trip.destination.destination}</h3>
        <p>Trip date: ${formattedDate} <br>
        Travelers: ${trip.travelerCount} <br>
        Duration: ${trip.duration} <br>
        Status: ${trip.status} <br> </p>
        <a>Request activities from your travel agent!</a>
        </article>
        `;
      })
    } else {
      tripInfo = `
        <h3 class="no-trips">You do not have any ${displayType} trips </h3>`;
    }

    tripCards.insertAdjacentHTML('beforeend', tripInfo);
  },

  }

export default domUpdates;
