// Code your solution in this file!
function distanceFromHqInBlocks(dist){
  if (dist>=42) {
  return dist - 42
} else {
    return 42 - dist
  }
};

function distanceFromHqInFeet(dist) {
  return distanceFromHqInBlocks(dist)*264
};

function distanceTravelledInFeet(start, finish){
  if(start < finish) {
  return (finish - start) * 264
} else {
  return (start - finish) * 264
  }
};

function calculatesFarePrice(start, finish) {
  if(distanceTravelledInFeet(start,finish) <= 400) {
    return 0
  } else if
  (distanceTravelledInFeet(start,finish) > 400 && distanceTravelledInFeet(start,finish) < 2000) {
    return (distanceTravelledInFeet(start,finish) - 400) * .02
  } else if
  (distanceTravelledInFeet(start,finish) > 2000 && distanceTravelledInFeet(start,finish) < 2500) {
    return 25
  } else {return 'cannot travel that far'}
};
