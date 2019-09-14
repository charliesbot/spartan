/*
 * Given an array of integers A and let n to be its length.
 *
 * Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:
 *
 * F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].
 *
 * Calculate the maximum value of F(0), F(1), ..., F(n-1).
 *
 * Note:
 * n is guaranteed to be less than 105.
 *
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  if (!A.length) {
    return 0;
  }

  let sum = 0;
  let f = 0;
  let max;
  let { length } = A;

  for (let i = 0; i < length; i++) {
    sum += A[i];
    f += A[i] * i;
  }

  max = f;

  for (let i = length - 1; i >= 1; i--) {
    f = f + sum - length * A[i];
    max = Math.max(max, f);
  }

  return max;
};

console.log("test test ", maxRotateFunction([4, 3, 2, 6]));
