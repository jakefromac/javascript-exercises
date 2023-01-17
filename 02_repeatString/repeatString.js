const repeatString = function(whatToRepeat, repeatLength) {
    let repeatedThings = "";
    for (let i = 0; i < repeatLength; i++) {
        repeatedThings += whatToRepeat;
    }
    return repeatedThings;
};

// Do not edit below this line
module.exports = repeatString;
