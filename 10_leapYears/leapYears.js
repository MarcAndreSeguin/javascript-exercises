const leapYears = function(year) {
    divisibleByFour = year % 4 === 0;
    isCentury = year % 100 === 0;
    divisibleByFourHundred = year % 400 === 0;

    if (divisibleByFour && (!isCentury || divisibleByFourHundred)) return true;

    return false;
};

// Do not edit below this line
module.exports = leapYears;
