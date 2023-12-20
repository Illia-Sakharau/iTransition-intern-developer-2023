const en_US = require('@faker-js/faker/locale/en_US');
const ru = require('@faker-js/faker/locale/ru');
const ka_GE = require('@faker-js/faker/locale/ka_GE');

function customFaker(seed, locale) {
  const lFakers = {"en": en_US, "ru": ru, "ge": ka_GE}
  const lFaker = lFakers[locale].faker;

  lFaker.seed(seed);

  return (lFaker)
}

module.exports = customFaker;