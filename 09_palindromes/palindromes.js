const palindromes = function(str) {
    const cleanStr = str
        .toLowerCase()
        .split("")
        .filter(char => !/[\s.,!]/.test(char))
        .join("");
    const revStr = cleanStr
        .split("")
        .reverse()
        .join("");

    return cleanStr == revStr;
};

// Do not edit below this line
module.exports = palindromes;
