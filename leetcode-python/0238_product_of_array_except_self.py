from typing import List
import unittest


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = []
        temp = 1

        for num in nums:
            result.append(temp)
            temp = temp * num

        temp = 1

        for index in reversed(range(0, len(nums))):
            result[index] = result[index] * temp
            temp = temp * nums[index]
        return result


class Test(unittest.TestCase):
    def test(self):
        input = [1, 2, 3, 4]
        solution = Solution()
        self.assertEqual(solution.productExceptSelf(input), [24, 12, 8, 6])


if __name__ == "__main__":
    unittest.main()
