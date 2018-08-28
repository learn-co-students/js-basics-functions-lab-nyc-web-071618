// Code your solution in this file!
//Each block in Manhattan is 264 feet long

function distanceFromHqInBlocks(endpoint) {
  return Math.abs(endpoint - 42);
}

function distanceFromHqInFeet(endpoint) {
  return distanceFromHqInBlocks(endpoint) * 264;
}

function distanceTravelledInFeet(startpoint, endpoint) {
  return Math.abs(endpoint - startpoint) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance < 2000) {
    return ((distance - 400) * 2) / 100;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
