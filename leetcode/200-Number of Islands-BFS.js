const bfs = (row, column, grid) => {
  const queue = [{ row, column }];
  while (queue.length > 0) {
    const { row, column } = queue.pop();
    if (grid[row] && grid[row][column] === 1) {
      grid[row][column] = 0;
      queue.push({ row: row + 1, column });
      queue.push({ row: row, column: column + 1 });
      queue.push({ row: row - 1, column });
      queue.push({ row: row, column: column - 1 });
    }
  }
};

var numIslands = function(grid) {
  let islands = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === 1) {
        islands++;
        bfs(row, column, grid);
      }
    }
  }

  return islands;
};

const input1 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

const input2 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
];

console.log(numIslands(input2));
