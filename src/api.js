export function getData(endpoint) {

  return fetch(`http://localhost:3001/api/v1/${endpoint}`)
    .then(response => {
      checkStatus(response)
      return response.json()
    })
}

const checkStatus = (response) => {
  if(response.status >= 400 && response.status < 500){
    console.log("Please check your inputs")
  } else if (response.status >= 500) {
    console.log("Server is down")
  }
}
