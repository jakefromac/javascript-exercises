const leapYears = function(year) {
    return isLeapYear(year);
};

function isLeapYear(year) {
    if (!isInteger(year)) { return "ERROR"; }

    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function isInteger(checkNumber) {
    return typeof(checkNumber) === 'number' &&
            isFinite(checkNumber) &&
            Math.round(checkNumber) === checkNumber;
}

// Do not edit below this line
module.exports = leapYears;
