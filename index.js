function sumItems(array) {
  // base case is simple reduce
  const result = array.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc + sumItems(item);
    }
    return acc + item;
  }, 0);
  return result;

}

module.exports = sumItems;
