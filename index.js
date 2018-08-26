// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const scuberLocation = 42;
  return Math.abs(pickupLocation - scuberLocation);
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  let distanceTravelled = distanceTravelledInFeet(start, destination);
  let cost = 0
  if (distanceTravelled < 400) {
    return cost;
  }
  else if (distanceTravelled >= 400 && distanceTravelled <= 2000) {
    cost += (distanceTravelled - 400) * .02
    return cost;
  }
  else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
    cost += 25;
    return cost;
  }
  else {
    return 'cannot travel that far';
  }
}
