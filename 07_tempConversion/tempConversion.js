const convertToCelsius = function(temp) {
  const tempInCelsius = (temp - 32) / 1.8;
  return Math.round(tempInCelsius);
}

const convertToFahrenheit = function(temp) {
  const tempInFahrenheit = (temp * 1.8) + 32;
  return Math.round(tempInFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
