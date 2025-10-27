const repeatString = function(word, frequency) {
    if (frequency < 0) return "ERROR";
    returnString = ''
    for (let i = 0; i < frequency; i ++) {
        returnString += word
    }
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
