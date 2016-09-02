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
module.exports = {
  map: map,
  find: find
}
