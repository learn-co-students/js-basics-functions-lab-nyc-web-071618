// Code your solution in this file!
function distanceFromHqInBlocks(location){
    let distance;
    distance = 42 - location;
    return Math.abs(distance);
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(startBlock,endBlock){
    return Math.abs(startBlock-endBlock)*264;
}

function calculatesFarePrice(start,destination){
    let distanceInFeet = distanceTravelledInFeet(start,destination);
    if(distanceInFeet<=400){
        return 0;
    }else if(distanceInFeet>400&&distanceInFeet<=2000){
        return (distanceInFeet-400)*.02
    } else if(distanceInFeet>2000&&distanceInFeet<=2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
}

