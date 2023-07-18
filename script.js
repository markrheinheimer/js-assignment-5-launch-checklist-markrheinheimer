// Write your JavaScript code here!

window.addEventListener('load', function () {
  const form = document.querySelector('form');
  const list = document.getElementsByTagName('ol');
  // list.style.visibilty = 'hidden';

  form.addEventListener('submit', (e) => {
    const pilot = document.querySelector('input[name=pilotName]').value;
    const copilot = document.querySelector('input[name=copilotName]').value;
    const fuel = document.querySelector('input[name=fuelLevel]').value;
    const cargo = document.querySelector('input[name=cargoMass]').value;

    if (
      validateInput(pilot) === 'Empty' ||
      validateInput(copilot) === 'Empty' ||
      validateInput(fuel) === 'Empty' ||
      validateInput(cargo) === 'Empty'
    ) {
      alert('All fields must be filled out');
      e.preventDefault();
    } else if (
      validateInput(pilot) !== 'Not a Number' ||
      validateInput(copilot) !== 'Not a Number'
    ) {
      alert('Pilot and copilot values must be strings');
      e.preventDefault();
    } else if (
      validateInput(fuel) !== 'Is a Number' ||
      validateInput(cargo) !== 'Is a Number'
    ) {
      alert('Fuel and Cargo values must be numbers');
      e.preventDefault();
    } else {
      e.preventDefault();
      pilotStatus.innerText = `Pilot ${pilot} is ready for launch`;
      copilotStatus.innerText = `Co-pilot ${copilot} is ready for launch`;
      formSubmission(document, list, pilot, copilot, fuel, cargo);
    }
  });

  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanets;
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      let planet = pickPlanet(listedPlanets);

      addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image
      );
    });
});
