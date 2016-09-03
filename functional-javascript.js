function map(arr, callback) {
  var result = []
  arr.forEach(function(item) {
    result.push(callback(item))
  })
  return result
}
function find(arr, callback) {
  var isFound = false;
  var result
  for (var i = 0; i < arr.length && !isFound; i++) {
    isFound = callback(arr[i])
    result = arr[i]
  }
  return isFound ? result : undefined
}
function filter(arr, callback) {
  var result = []
  arr.forEach(function(item) {
    if (callback(item)) {
      result.push(item)
    }
  })
  return result
}
function reduce(arr, callback, initValue) {
  var result
  var i = 0
  if (typeof initValue !== "undefined") {
    result = initValue
  } else {
    if (arr.length) {
      result = arr[0]
      i++
    } else {
      throw new Error("Reduce of empty array without inital value")
    }
  }

  for(; i < arr.length; i++) {
    result = callback(result, arr[i], i)
  }

  return result
}
function any(arr) {

}
function sum(arr) {

}
function product() {

}
function maximum() {

}
function minimum() {

}
function concat() {

}
function merge() {

}
module.exports = {
  map: map,
  find: find,
  filter: filter,
  reduce: reduce,
  any: any,
  sum: sum,
  product: product,
  maximum: maximum,
  minimum: minimum,
  concat: concat,
  merge: merge
}
