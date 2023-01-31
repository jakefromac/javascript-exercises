const sumAll = function(firstNum, secondNum) {
    if (firstNum < 0 || secondNum < 0) { return "ERROR";}
    if (!isInteger(firstNum) || !isInteger(secondNum)) { return "ERROR"; }

    let sumNum = 0;
    let startPoint = 0;
    let endPoint = 0;

    if (firstNum > secondNum) {
        startPoint = secondNum;
        endPoint = firstNum;
    }
    else {
        startPoint = firstNum;
        endPoint = secondNum;
    }

    for (let i = startPoint; i <= endPoint; i++) {
        console.log(i);
        sumNum += i;
    }

    console.log(sumNum);
    return sumNum;
};

const isInteger = function(checkNumber) {
    return typeof(checkNumber) === 'number' &&
            isFinite(checkNumber) &&
            Math.round(checkNumber) === checkNumber;
}

// Do not edit below this line
module.exports = sumAll;
