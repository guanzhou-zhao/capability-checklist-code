var map = function (arr, callback) {
  var result = []
  arr.forEach(function (item) {
    result.push(callback(item))
  })
  return result
}
function find (arr, callback) {
  var isFound = false
  var result
  for (var i = 0; i < arr.length && !isFound; i++) {
    isFound = callback(arr[i])
    result = arr[i]
  }
  return isFound ? result : undefined
}
function filter (arr, callback) {
  var result = []
  arr.forEach(function (item) {
    if (callback(item)) {
      result.push(item)
    }
  })
  return result
}
function reduce (arr, callback, initValue) {
  var result
  var i = 0
  if (typeof initValue !== 'undefined') {
    result = initValue
  } else {
    if (arr.length) {
      result = arr[0]
      i++
    } else {
      throw new Error('Reduce of empty array without inital value')
    }
  }

  for (; i < arr.length; i++) {
    result = callback(result, arr[i], i)
  }

  return result
}
function any (arr, callback) {
  return reduce(arr, function (preV, curV) {
    return preV && callback(curV)
  }, true)
}
function all () {
}
function sum (arr) {
  if (any(arr, function (item) { return typeof item === 'number' })) {
    return reduce(arr, function (preV, curV) { return preV + curV })
  } else {
    throw new Error('sum() is only for number array')
  }
}
function product () {
}
function maximum (arr) {
  return reduce(arr, function (max, curV) {
    return max > curV ? max : curV
  })
}
function minimum () {
  // same as above
}
function concat () {
  var result = []
  for (var i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      arguments[i].forEach(function (item) {
        result.push(item)
      })
    } else {
      result.push(arguments[i])
    }
  }
  return result
}
function merge () {
}
module.exports = {
  map: map,
  find: find,
  filter: filter,
  reduce: reduce,
  any: any,
  all: all,
  sum: sum,
  product: product,
  maximum: maximum,
  minimum: minimum,
  concat: concat,
  merge: merge
}
