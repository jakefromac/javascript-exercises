const reverseString = function(str) {
    var strSplit = str.split('');
    strSplit.reverse();
    let strReversed = strSplit.join('');
    return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
