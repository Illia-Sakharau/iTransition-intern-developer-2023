const customFaker = require('./customFaker');
const createAddress = require('./createAddress');

function createUser(seed, index, locale) {
  const preparedSeed = +`${index}${seed}${index}`;
  const faker = customFaker(preparedSeed, locale);

  return ({
    index,
    uuid: faker.string.uuid(),
    name: faker.person.fullName(),
    address: createAddress(faker),
    phone: faker.phone.number(),
  })
}

module.exports = createUser;
