/*
 * Given a string, find the length of the longest
 * substring without repeating characters.
*/

const lengthOfLongestSubstring = (s: string): number => {
  const hash = {};
  let maxCount = 0;
  let start = 0;
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    if (hash[current] !== undefined && hash[current] >= start) {
      start = hash[current] + 1;
      length = i - start;
    }

    length++;

    maxCount = Math.max(maxCount, length);
    hash[current] = i;
  }

  return maxCount;
};

console.log(lengthOfLongestSubstring("au"));
