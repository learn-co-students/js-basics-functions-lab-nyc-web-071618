// Code your solution in this file!

function distanceFromHqInBlocks (blocks) {
   const hq = 42;
   if (blocks > 42) {
     return blocks - hq;
   }
   else if (blocks < 42) {
     return hq - blocks;
   }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(block1, block2){
  var feet = (block1 - block2) * 264;
  return Math.abs(feet);
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    return 0;
  }
  else if (distance >= 400 && distance <= 2000){
    return (distance - 400) * 0.02;
  }
  else if (distance > 2000 && distance <= 2500) {
    return 25;
  }
  else if (distance > 2500) {
    return "cannot travel that far";
  }
}
