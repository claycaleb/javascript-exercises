const leapYears = function(year) {
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;
    const isYearDivisibleByFour = year % 4 === 0;

    if (isCentury && !isYearDivisibleByFourHundred) {
        return false;
    } else if (isYearDivisibleByFour) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
