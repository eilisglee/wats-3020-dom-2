function createPersonEl(name, gender, height) {
  let nameEl = document.createElement('li')
  nameEl.innerHTML = `${name}, ${gender}, ${height}`
  return nameEl
}
//URL to fetch data from the swapi.co api
fetch('https://swapi.co/api/people/??page=2')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    let personList = document.querySelector('.person-api-list')
    for (let person of myJson.results) {
      personList.appendChild(createPersonEl(person.name, person.gender, person.height))
    }
  });