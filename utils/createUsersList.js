const createUser = require('./user/createUser');
const { generateTypos } = require('./typos/typos');
const calcErrCount = require('./typos/calcErrCount');


function createUsersList({seed, ln, page, size, errNum}) {
  const fromIndex = (size * (page - 1)) + 1;
  const toIndex = size * page;
  const usersList = [];
  const errCount = calcErrCount(errNum, +seed);

  for( let i = fromIndex; i <= toIndex; i++) {
    const userSeed = +`${i}${seed}${i}`;
    const user = createUser(userSeed, i, ln);
    const userWithTypes = generateTypos(userSeed, errCount, user);
    usersList.push(userWithTypes);
  }

  return (usersList)
}

module.exports = createUsersList;