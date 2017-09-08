let pi = Math.PI;

function area(rad) {
  return pi * rad * rad;
}

function circumference(rad) {
  return 2 * pi * rad;
}

// exports.area = area;
// exports.circumference = circumference;

module.exports = {
  area: function(r) {
    return 5;
  },
  circumference: circumference
};