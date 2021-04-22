window.addEventListener('load', loadData)

const loadData = () => {
  const travelerData = document.querySelector('#travelerData')
  getData('travelers')
  .then(response => travelerData.innerText = response)
}
