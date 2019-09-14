from typing import List
import unittest


class Solution:
    def dfs(self, grid: List[List[str]], row_index: int, column_index: int):
        if row_index < 0 or column_index < 0:
            return

        if row_index >= len(grid) or column_index >= len(grid[row_index]):
            return

        if grid[row_index][column_index] == "0":
            return

        grid[row_index][column_index] = "0"

        self.dfs(grid, row_index + 1, column_index)
        self.dfs(grid, row_index - 1, column_index)
        self.dfs(grid, row_index, column_index + 1)
        self.dfs(grid, row_index, column_index - 1)

    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        for row_index, row in enumerate(grid):
            for column_index, column in enumerate(row):
                if column == "1":
                    islands += 1
                    self.dfs(grid, row_index, column_index)

        return islands


class Test(unittest.TestCase):
    def test1(self):
        solution = Solution()
        input = [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"],
        ]
        self.assertEqual(solution.numIslands(input), 1)

    def test2(self):
        solution = Solution()
        input = [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"],
        ]
        self.assertEqual(solution.numIslands(input), 3)

    def test3(self):
        solution = Solution()
        input = [["1", "0", "1", "1", "0", "1", "1"]]
        self.assertEqual(solution.numIslands(input), 3)


if __name__ == "__main__":
    unittest.main()
