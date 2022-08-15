function add(a, b) {
  return console.log(`a+b=`, a + b);
}

function sub(a, b) {
  return console.log(`a-b=`, a - b);
}

exports.multiply = (a, b) => {
  return console.log(`a*b=`, a * b);
};
//module.exports = { sub, add };
