exports.sortBy = (array, field, order) => {
  // eslint-disable-next-line no-nested-ternary
  const compare = (x, y) => (x > y ? 1 : x < y ? -1 : 0) * order;
  return array.sort((x, y) => compare(x[field], y[field]));
};
