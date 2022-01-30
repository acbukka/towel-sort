
// You should implement your task here.

module.exports = function towelSort(arr) {
  let newArr = [];
  if (arr === undefined || arr.length == 0) {
    return newArr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      newArr.push(arr[i].reverse());
    } else if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  let sortedArr = newArr.reduce((a, b) => {
    return a.concat(b);
  });
  return sortedArr;
};
