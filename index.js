// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue > 42) {
    return someValue - 42;
  } else if (someValue < 42){
    return 42 - someValue;
  } else {
    return 0;
  }
}

function distanceFromHqInFeet(someValue) {
  const block = 264;
  return distanceFromHqInBlocks(someValue) * block;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock >= endBlock) {
    return (startBlock - endBlock) * 264;
  } else {
    return (endBlock - startBlock) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distanceTravelled = distanceTravelledInFeet(start, destination)
  if (distanceTravelled <= 400) {
    return 0;
  } else if (distanceTravelled > 400 && distanceTravelled < 2000){
    return (distanceTravelled - 400) * 0.02;
  } else if (distanceTravelled > 2000 && distanceTravelled < 2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
