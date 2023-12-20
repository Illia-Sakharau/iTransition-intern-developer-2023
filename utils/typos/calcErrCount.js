const generateFakeRandomNum = require('./generateFakeRandomNum');

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

module.exports = calcErrCount;
