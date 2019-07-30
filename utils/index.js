exports.isObject = variable => variable instanceof Object;

/*
 * Deep copy of source object into tarjet object.
 * It does not overwrite properties.
 */
exports.assignObject = (target, source) => {
  if (target && exports.isObject(target) && source && exports.isObject(source)) {
    Object.keys(source).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(target, key) || target[key] === undefined) {
        target[key] = source[key];
      } else {
        exports.assignObject(target[key], source[key]);
      }
    });
  }
  return target;
};
