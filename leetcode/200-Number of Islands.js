/*
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 *
 * You may assume all four edges of the grid are all surrounded by water.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
  let result = 0;
  const transformIslands = (y, x) => {
    if (
      y < 0 ||
      x < 0 ||
      y >= grid.length ||
      x >= grid[y].length ||
      grid[y][x] === "0"
    ) {
      return;
    }

    grid[y][x] = "0";

    transformIslands(y, x + 1);
    transformIslands(y, x - 1);
    transformIslands(y + 1, x);
    transformIslands(y - 1, x);
  };

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === "1") {
        result++;
      }
      transformIslands(row, column);
    }
  }

  return result;
};
