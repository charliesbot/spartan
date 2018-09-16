/*
 * In order to win the prize for most cookies sold,
 * my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
 *
 * Each order is represented by an "order id" (an integer).
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
*/

function mergeArrays(array1, array2) {
  let index1 = 0;
  let index2 = 0;
  const merged = [];

  while (merged.length < array1.length + array2.length) {
    const value1 = array1[index1];
    const value2 = array2[index2];
    const index1HasValue = value1 !== undefined;
    const index2HasValue = value2 !== undefined;

    if ((index1HasValue && !index2HasValue) || value1 < value2) {
      merged.push(value1);
      index1++;
    } else {
      merged.push(value2);
      index2++;
    }
  }

  return merged;
}

var myArray = [3, 4, 6, 10, 11, 15, 20, 40, 50, 100];
var alicesArray = [1, 5, 8, 12, 14, 19, 20, 23];

console.log(mergeArrays(myArray, alicesArray));
