const removeFromArray = function(awsmArr, ...args) {
    console.log(awsmArr.filter(x => !args.includes(x)));
    return awsmArr.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
