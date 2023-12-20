const { simpleFaker } = require('@faker-js/faker');

function generateTypos(seed, errCount, userData) {
  let { name, address, phone } = userData
  const errorsFuncs = [deleteChar, addChar, swapNearChars];
  const changedFields = [name, address, phone];

  for (let i = 0; i < errCount; i++) {
    const errNum = generateFakeRandomNum({ seed: +`${seed}${i}`, min: 0, max: errorsFuncs.length - 1 });
    const fieldNum = generateFakeRandomNum({ seed: +`${i}${seed}`, min: 0, max: changedFields.length - 1 });
    const err = errorsFuncs[errNum];
    const field = changedFields[fieldNum]

    changedFields[fieldNum] = err(field)
  }
  return ({...userData, name: changedFields[0], address: changedFields[1], phone: changedFields[2]})
}

function deleteChar(text) {
  const charNum = generateFakeRandomNum({ seed: text.length, min: 0, max: text.length - 1 });
  const res = text.slice(0, charNum) + text.slice(charNum+1);
  return res
}

function addChar(text) {
  const taegetCharNum = generateFakeRandomNum({ seed: text.length, min: 0, max: text.length - 1 });
  const charNumTo = generateFakeRandomNum({ seed: text.length - 1, min: 0, max: text.length - 1 });
  const res = text.slice(0, taegetCharNum) + text[charNumTo] + text.slice(taegetCharNum + 1);
  return res
}

function swapNearChars(text) {
  const charNum = generateFakeRandomNum({ seed: text.length, min: 0, max: text.length - 2 });
  const res = text.slice(0, charNum) + text[charNum + 1] + text[charNum] + text.slice(charNum + 2);
  return res
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