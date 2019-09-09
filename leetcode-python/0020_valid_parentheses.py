from typing import List
import unittest


class Solution:
    def isValid(self, s: str) -> bool:
        hash = {"(": ")", "{": "}", "[": "]"}
        queue: List[str] = []

        for char in s:
            value = hash.get(char)
            if value:
                queue.append(value)
                continue

            popped = queue.pop() if queue else ""

            if char != popped:
                return False

        return len(queue) == 0


class Test(unittest.TestCase):
    def test(self):
        self.assertTrue(Solution.isValid(self, "()"))
        self.assertFalse(Solution.isValid(self, "(]"))
        self.assertFalse(Solution.isValid(self, "([)]"))
        self.assertFalse(Solution.isValid(self, "]"))


if __name__ == "__main__":
    unittest.main()
