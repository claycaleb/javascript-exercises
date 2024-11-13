const removeFromArray = function(arr, ...args) {
    
    for (const value of args) {
        arr = arr.filter(item => item !== value);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
