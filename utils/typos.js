const { simpleFaker } = require('@faker-js/faker');

function generateTypos(seed, errCount, userData) {
  
  return (userData)
}

function calcErrCount(errNum, seed) {
  const [int, decimal] = errNum.split('.');
  let errCount = +int;

  if (decimal) {
    const decimalNum = +decimal.concat('0').slice(0, 2);
    const fakeRandom = generateFakeRandomNum({ min: 0, max: 100, seed })
    errCount = fakeRandom <= decimalNum ? ++errCount : errCount;
  }

  return errCount
}

function generateFakeRandomNum({ seed, min, max }) {
  simpleFaker.seed(seed);
  const num = simpleFaker.number.int({ min, max })
  return num
}



module.exports = { generateTypos, calcErrCount };