// Add your functions here
const map = (arr, callback) => {
  let newArr = [];
  arr.forEach( e => newArr.push(callback(e)));
  return newArr;
}

const reduce = (arrat, reducer, initialValue = arrat[0]) => {
  let value = initialValue;
}
