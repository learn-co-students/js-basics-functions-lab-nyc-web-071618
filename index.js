// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
   if (blocks > 42) {
    return blocks - 42
   } else {
     return 42 - blocks
   }
}

function distanceFromHqInFeet(feet) {
return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(beginning, end) {
  if (beginning < end) {
    return (end - beginning) * 264
  } else {
    return (beginning - end) * 264
  }
}

function calculatesFarePrice(beginning, end) {
  let distance = distanceTravelledInFeet(beginning, end)
  if (distance <= 400 ) {
    return 0
  } else if (distance > 400 && distance < 2000){
     return (distance - 400) * .02
  } else if(distance > 2000 && distance < 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
