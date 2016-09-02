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
