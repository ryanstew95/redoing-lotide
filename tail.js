const assertEqual = function (actual, expected) {
  if (actual === expected) {
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
  }
  };

  const tail = function(array) {
return array.slice(1);
  };

//   const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); 
// assertEqual(result[0], "Lighthouse"); 
// assertEqual(result[1], "Labs"); 

// const result1 = tail(["Hello"]);
// assertEqual(result1.length, 0);

// const result2 = tail([]);
// assertEqual(result2.length, 0);

// Helper function to check if two arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Assertion function for arrays
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// TESTS
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail(["Hello"]), []);
assertArraysEqual(tail([]), []);
