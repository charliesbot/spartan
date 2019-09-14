const DIRECTION = {
  UP: 1,
  DOWN: 2,
  RIGHT: 3,
  LEFT: 4
};

const updater = (matrix, direction, row, column) => {
  if (matrix[row] && matrix[row][column]) {
    matrix[row][column] = 0;
  }

  if (direction === DIRECTION.UP && matrix[row] !== undefined) {
    updater(matrix, DIRECTION.UP, row - 1, column);
  }

  if (direction === DIRECTION.RIGHT && matrix[row][column] !== undefined) {
    updater(matrix, DIRECTION.RIGHT, row, column + 1);
  }

  if (direction === DIRECTION.DOWN && matrix[row] !== undefined) {
    updater(matrix, DIRECTION.DOWN, row + 1, column);
  }

  if (direction === DIRECTION.LEFT && matrix[row][column] !== undefined) {
    updater(matrix, DIRECTION.LEFT, row, column - 1);
  }
};

const changeMatrix = matrix => {
  const coords = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (matrix[row][column] === 0) {
        coords.push({ row, column });
      }
    }
  }

  for (let i = 0; i < coords.length; i++) {
    const { row, column } = coords[i];
    updater(matrix, DIRECTION.UP, row, column);
    updater(matrix, DIRECTION.RIGHT, row, column);
    updater(matrix, DIRECTION.DOWN, row, column);
    updater(matrix, DIRECTION.LEFT, row, column);
  }

  return matrix;
};

const test = [
  [1, 2, 3, 4],
  [5, 6, 0, 7],
  [0, 8, 9, 10],
  [11, 12, 13, 14],
  [15, 16, 17, 18]
];

console.log(changeMatrix(test));
