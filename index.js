// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  let distance = 42 - blocks;
  return Math.abs(distance);
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(point1, point2) {
  let blocks = point1 - point2
  let feet = blocks*264
  return Math.abs(feet)
}

function calculatesFarePrice(point1, point2) {
  const distance = distanceTravelledInFeet(point1, point2);

  if(distance < 400) {
    return 0;
  } else if(distance < 2000) {
    return (distance - 400) * 0.02;
  } else if(distance < 2500 && distance > 2000) {
    return 25.00;
  } else {
    return 'cannot travel that far';
  }
}
