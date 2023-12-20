const createUser = require('./createUser');

function createUsersList(seed, ln, page, size) {
  const fromIndex = (size * (page - 1)) + 1;
  const toIndex = size * page;
  const usersList = [];

  for( let i = fromIndex; i <= toIndex; i++) {
    user = createUser(seed, i, ln);
    usersList.push(user)
  }

  return (usersList)
}

module.exports = createUsersList;