import domUpdates from './domUpdates'

export function getData(endpoint) {

  return fetch(`http://localhost:3001/api/v1/${endpoint}`)
    .then(response => {
      console.log("response", response.ok)
      checkStatus(response)
      return response.json()
    })
    .catch(err => domUpdates.catchErrors('Something went wrong with our server, please try again later'))
}

export function sendData(url, data) {
  return fetch(url, {
    method:'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    checkStatus(response)
    return response.json()
  })
  .catch(err => domUpdates.catchErrors('Something went wrong with our server, please try again later'))
}

const checkStatus = (response) => {
  if(response.status >= 400 && response.status < 500){
    domUpdates.catchErrors('Please check your inputs')
  } else if (response.status >= 500) {
    domUpdates.catchErrors('Our server is down, please try again later')
  }
}
