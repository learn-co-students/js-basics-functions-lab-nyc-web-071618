// Code your solution in this file!

const distanceFromHqInBlocks = (street) => {
  return (street > 42 ? street - 42 : 42 - street);
}

const distanceFromHqInFeet = (street) => {
  return (distanceFromHqInBlocks(street) * 264);
}

const distanceTravelledInFeet = (street1, street2) => {
  return Math.abs(street1 - street2) * 264;
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
