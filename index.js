// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return someValue > 42 ? someValue - 42 : 42 - someValue;
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return destination > start ? (destination - start) * 264 : (start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distanceCovered = distanceTravelledInFeet(start, destination);
    if (distanceCovered < 400) {
        return 0;
    } else if (distanceCovered >= 400 && distanceCovered <= 2000) {
        return 0.02 * (distanceCovered - 400);
    } else if (distanceCovered > 2000 && distanceCovered <= 2500) {
        return 25;
    } else { return 'cannot travel that far'; }
}