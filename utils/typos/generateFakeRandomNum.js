const { simpleFaker } = require('@faker-js/faker');

function generateFakeRandomNum({ seed, min, max }) {
  simpleFaker.seed(seed);
  const num = simpleFaker.number.int({ min, max })
  return num
}

module.exports = generateFakeRandomNum;
