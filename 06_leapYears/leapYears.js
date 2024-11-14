const leapYears = function(year) {
    if (year % 100 === 0 && !(year % 400 === 0)) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

//divisible by 4 = true
// divisible by 100 and not divisible by 400 = false

// Do not edit below this line
module.exports = leapYears;
