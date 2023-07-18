// // Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  const missionTarget = document.getElementById('missionTarget');

  missionTarget.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
}

function validateInput(testInput) {
  if (testInput === '') {
    return 'Empty';
  } else if (isNaN(testInput)) {
    return 'Not a Number';
  } else {
    return 'Is a Number';
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const pilotStatus = document.getElementById('pilotStatus');
  const copilotStatus = document.getElementById('copilotStatus');
  const fuelStatus = document.getElementById('fuelStatus');
  const cargoStatus = document.getElementById('cargoStatus');
  const faulty = document.getElementById('faultyItems');
  const launchStatus = document.getElementById('launchStatus');

  if (fuelLevel < 10000) {
    faulty.style.visibility = 'visible';
    fuelStatus.innerText = 'Not enough fuel for the journey';
    launchStatus.innerText = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = '#C7254E';
  } else if (cargoLevel > 10000) {
    faulty.style.visibility = 'visible';
    cargoStatus.innerText = 'Too much mass for the shuttle to take off';
    launchStatus.innerText = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = 'rgb(199, 37, 78)';
  } else {
    fuelStatus.innerText = 'Fuel level high enough for launch';
    cargoStatus.innerText = 'Cargo mass low enough for launch';
    launchStatus.style.color = '#419F6A';
    launchStatus.innerText = 'Shuttle Is Ready for Launch';
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    'https://handlers.education.launchcode.org/static/planets.json'
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let randomPlanet = Math.floor(Math.random() * 6);
  return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
