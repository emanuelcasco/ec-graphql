exports.parseToCompare = value => `${value}`.toLowerCase().trim();

exports.like = (value, reference) => {
  const regexp = new RegExp(exports.parseToCompare(value));
  return !!exports.parseToCompare(reference).match(regexp, 'i');
};

exports.sortBy = (array, field, order) => {
  const compare = (x, y) => (x >= y ? 1 : -1) * order;
  return array.sort((x, y) => compare(x[field], y[field]));
};

exports.filterBy = (array, field, value) => {
  return array.filter(elem => exports.like(value, elem[field]));
};
