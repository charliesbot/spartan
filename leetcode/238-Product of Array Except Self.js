/*
 * Given an array nums of n integers where n > 1,
 * return an array output such that output[i] is
 * equal to the product of all the elements of nums except nums[i].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const dfs = (currentIndex, exceptionIndex, acum) => {
    currentIndex = currentIndex >= nums.length ? 0 : currentIndex;
    if (currentIndex === exceptionIndex) {
      return acum;
    }
    acum *= nums[currentIndex];
    return dfs(currentIndex + 1, exceptionIndex, acum);
  };

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(dfs(i + 1, i, 1));
  }

  return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));
