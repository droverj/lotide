const tail = function(array) {
  if (array.length < 2 || Array.isArray(array) === false) {
    return undefined;
  }
  return array.slice(1);
};

module.exports = tail;