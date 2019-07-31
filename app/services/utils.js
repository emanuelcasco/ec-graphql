exports.parseToCompare = value =>
  String(value)
    .toLowerCase()
    .trim();

exports.like = (value, reference) => {
  // eslint-disable-next-line prettier/prettier
  const regexp = new RegExp(exports.parseToCompare(value));
  return !!exports.parseToCompare(reference).match(regexp, 'i');
};

exports.sortBy = (array, field, order) => {
  // eslint-disable-next-line no-nested-ternary
  const compare = (x, y) => (x > y ? 1 : x < y ? -1 : 0) * order;
  return array.sort((x, y) => compare(x[field], y[field]));
};

exports.filterBy = (array, field, value) => {
  return array.filter(elem => exports.like(value, elem[field]));
};
