from typing import List, Dict
import unittest


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash: Dict[int, int] = {}

        for index, num in enumerate(nums):
            diff = target - num
            if num in hash:
                savedIndex = hash.get(num, -1)
                return [savedIndex, index]
            hash[diff] = index

        return []


class Test(unittest.TestCase):
    def test(self):
        self.assertEqual(Solution.twoSum(self, [2, 7, 11, 15], 9), [0, 1])
        self.assertEqual(Solution.twoSum(self, [3, 2, 4], 6), [1, 2])


if __name__ == "__main__":
    unittest.main()
