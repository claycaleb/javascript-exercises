const sumAll = function(first, second) {
    sum = 0;
    
    if (!Number.isInteger(first) || first < 0) return 'ERROR';
    if (!Number.isInteger(second) || second < 0) return 'ERROR';

    if (first < second) {
        start = first;
        end = second;
    } else {
        start = second;
        end = first;
    }
    
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
