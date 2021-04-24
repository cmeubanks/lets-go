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

  }

export default domUpdates;
