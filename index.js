function distanceFromHqInBlocks(num1) {
    if (num1 >= 42){
        return num1 - 42
    } else {
        return 42 - num1
    }
}



function distanceFromHqInFeet(num1){
    return distanceFromHqInBlocks(num1) * 264
}

function distanceTravelledInFeet(start, destination){
    if (start >= destination){
        return (start - destination)*264
    } else {
        return (destination-start) * 264
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0
    } else if (distance <= 2000){
        return (distance - 400) * .02
    } else if (distance <= 2500){
        return 25
    } else if (distance > 2500){
        return 'cannot travel that far'
    }
}