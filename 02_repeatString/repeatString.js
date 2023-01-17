const repeatString = function(whatToRepeat, repeatLength) {
    let repeatedThings = "";

    if (repeatLength >= 0) {
        for (let i = 0; i < repeatLength; i++) {
            repeatedThings += whatToRepeat;
        }
    }
    else { repeatedThings = "ERROR"; }
    
    return repeatedThings;
};

// Do not edit below this line
module.exports = repeatString;
