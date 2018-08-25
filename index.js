// Code your solution in this file!
let pickup;

function distanceFromHqInBlocks(pickup) {
  if (pickup > 42) {
    return pickup - 42
    }
  else {
    return 42 - pickup
  }
};

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
};

let trip

function distanceTravelledInFeet(pickup, dropoff) {
  if (pickup > dropoff) {
    trip = pickup - dropoff;
  }
  else {
    trip = dropoff - pickup;
  }
  return trip * 264
}

let tripDistance
let tripDistanceNet

function calculatesFarePrice(pickup, dropoff) {
  tripDistance = distanceTravelledInFeet(pickup, dropoff)
  if (tripDistance < 400) {
    return 0
  };
  if (tripDistance > 2500) {
    return 'cannot travel that far'
  };
  if (tripDistance < 2001) {
    tripDistanceNet = tripDistance - 400
    return tripDistanceNet * .02
  };
  else {
    return 25
  }
};
