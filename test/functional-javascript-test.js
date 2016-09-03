var test = require('tape')
var testData = require('./test-data')
var numberArray = testData.numberArray

var arrayUtils = require('../functional-javascript')

test('test map()', function (t) {
  // arrange
  var callback = function (item) {
    return item * 2
  }
  var expected = numberArray.map(callback)
  var actual = arrayUtils.map(numberArray, callback)

  t.deepEqual(actual, expected, 'map() => array.map()')
  t.end()
})

test('test find()', function (t) {
  var testingFunctionReturnValue = function (item) {
    return item > 2
  }
  var expected = numberArray.find(testingFunctionReturnValue)
  var actual = arrayUtils.find(numberArray, testingFunctionReturnValue)
  t.equal(actual, expected, 'find() => array.find()  return value')

  var testingFunctionReturnUndefined = function (item) {
    return item < 0
  }
  var expected2 = numberArray.find(testingFunctionReturnUndefined)
  var actual2 = arrayUtils.find(numberArray, testingFunctionReturnUndefined)
  t.equal(actual2, expected2, 'find() => array.find()  return undefined')
  t.end()
})
test('test filter()', function (t) {
  var callbackReturnNonempty = function (item) {
    return item > 2
  }
  var expected = numberArray.filter(callbackReturnNonempty)
  var actual = arrayUtils.filter(numberArray, callbackReturnNonempty)
  t.deepEqual(actual, expected, 'filter() => array.filter()  return non empty array')

  var callbackReturnEmpty = function (item) {
    return item < 0
  }
  var expected2 = numberArray.filter(callbackReturnEmpty)
  var actual2 = arrayUtils.filter(numberArray, callbackReturnEmpty)
  t.deepEqual(actual2, expected2, 'filter() => array.filter()  return empty array')
  t.end()
})
test('test reduce()', function (t) {
  var callbackReturnSum = function (preV, curV) {
    return preV + curV
  }
  var expected = numberArray.reduce(callbackReturnSum, 0)
  var actual = arrayUtils.reduce(numberArray, callbackReturnSum, 0)
  t.deepEqual(actual, expected, 'reduce() => array.reduce()  with inital value passed in')

  var expected2 = numberArray.reduce(callbackReturnSum)
  var actual2 = arrayUtils.reduce(numberArray, callbackReturnSum)
  t.deepEqual(actual2, expected2, 'reduce() => array.reduce()  without inital value passed in')

  var callbackReturnObject = function (preV, curV, index) {
    preV[index] = curV
    return preV
  }
  var expected3 = numberArray.reduce(callbackReturnObject, {})
  var actual3 = arrayUtils.reduce(numberArray, callbackReturnObject, {})
  t.deepEqual(actual3, expected3, 'reduce() => array.reduce()  reduce array to object')

  t.end()
})

test('test any()', function (t) {
  var callbackAllPass = function (item) {
    return item > 0
  }
  var callbackPartPass = function (item) {
    return item > 2
  }
  var callbackAllFail = function (item) {
    return item < 0
  }

  t.equal(arrayUtils.any(numberArray, callbackAllPass), true, 'any() all pass')
  t.equal(arrayUtils.any(numberArray, callbackPartPass), false, 'any() part pass')
  t.equal(arrayUtils.any(numberArray, callbackAllFail), false, 'any() all fail')
  t.end()
})

test('test sum()', function (t) {
  var expectedSum = numberArray.reduce(function (preV, curV) { return preV + curV })
  var actualSum = arrayUtils.sum(numberArray)

  t.equal(actualSum, expectedSum, 'sum()')

  // t.throws(arrayUtils.sum(["sss"]), /sum() is only for number array/, "sum() throw error if called on not number array")
  t.end()
})

test('test maximum()', function (t) {
  var expectedMaximum = numberArray.reduce(function (preV, curV) { return preV > curV ? preV : curV })
  var actualMaximum = arrayUtils.maximum(numberArray)

  t.equal(actualMaximum, expectedMaximum, 'maximum()')

  // t.throws(arrayUtils.sum(["sss"]), /sum() is only for number array/, "sum() throw error if called on not number array")
  t.end()
})

test('test concat()', function (t) {
  var s = 'haha'
  var obj = {name: 'ben'}
  var iAmNull
  var arr = ['a', 'b', 'c']

  var expected = numberArray.concat(s, obj, iAmNull, arr)
  var actual = arrayUtils.concat(numberArray, s, obj, iAmNull, arr)

  t.deepEqual(actual, expected, 'concat()')

  t.end()
})
