function createAddress(faker) {
  const city = faker.location.city();
  const street = faker.location.streetAddress();
  const address = `${city}, ${street}`;

  return address
}

module.exports = createAddress;