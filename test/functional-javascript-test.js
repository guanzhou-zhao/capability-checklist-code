var test = require('tape')
var testData = require('./test-data')
var numberArray = testData.numberArray

var arrayUtils = require('../functional-javascript')

test("test map()", function(t) {
  // arrange
  var callback = function(item) {
    return item * 2
  }
  var expected = numberArray.map(callback)
  var actual = arrayUtils.map(numberArray, callback)

  t.deepEqual(actual, expected, "map() => array.map()")
  t.end()
})

test("test find()", function(t) {
  var testingFunctionReturnValue = function(item) {
    return item > 2
  }
  var expected = numberArray.find(testingFunctionReturnValue)
  var actual = arrayUtils.find(numberArray, testingFunctionReturnValue)
  t.equal(actual, expected, "find() => array.find()  return value")

  var testingFunctionReturnUndefined = function(item) {
    return item < 0
  }
  var expected2 = numberArray.find(testingFunctionReturnUndefined)
  var actual2 = arrayUtils.find(numberArray, testingFunctionReturnUndefined)
  t.equal(actual2, expected2, "find() => array.find()  return undefined")
  t.end()
})
test("test filter()", function(t) {
  var callbackReturnNonempty = function(item) {
    return item > 2
  }
  var expected = numberArray.filter(callbackReturnNonempty)
  var actual = arrayUtils.filter(numberArray, callbackReturnNonempty)
  t.deepEqual(actual, expected, "filter() => array.filter()  return non empty array")

  var callbackReturnEmpty = function(item) {
    return item < 0
  }
  var expected2 = numberArray.filter(callbackReturnEmpty)
  var actual2 = arrayUtils.filter(numberArray, callbackReturnEmpty)
  t.deepEqual(actual2, expected2, "filter() => array.filter()  return empty array")
  t.end()
})
test("test reduce()", function(t) {
  var callbackReturnSum = function(preV, curV) {
    return preV + curV
  }
  var expected = numberArray.reduce(callbackReturnSum, 0)
  var actual = arrayUtils.reduce(numberArray, callbackReturnSum, 0)
  t.deepEqual(actual, expected, "reduce() => array.reduce()  with inital value passed in")

  var callbackReturnSum = function(preV, curV) {
    return preV + curV
  }
  var expected2 = numberArray.reduce(callbackReturnSum)
  var actual2 = arrayUtils.reduce(numberArray, callbackReturnSum)
  t.deepEqual(actual2, expected2, "reduce() => array.reduce()  without inital value passed in")

  var callbackReturnObject = function(preV, curV, index) {
    preV[index] = curV
    return preV
  }
  var expected2 = numberArray.reduce(callbackReturnObject, {})
  var actual2 = arrayUtils.reduce(numberArray, callbackReturnObject, {})
  console.log(expected2, actual2)
  t.deepEqual(actual2, expected2, "reduce() => array.reduce()  reduce array to object")

  t.end()
})
