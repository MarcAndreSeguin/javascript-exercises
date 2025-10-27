const reverseString = function(str) {
    returnString = ''

    for (let i = str.length-1; i >= 0; i--) {
        returnString += str[i]
    }

    return returnString

    //solution simply was:
    // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
