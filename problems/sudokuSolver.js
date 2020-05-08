class BoardChecker {
  constructor(board) {
    this.rows = this.buildBoard(9, 10);
    this.cols = this.buildBoard(9, 10);
    this.boxes = this.buildBoard(9, 10);
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[0].length; j += 1) {
        if (board[i][j] !== 0) {
          this.place(i, j, board[i][j]);
        }
      }
    }
  }

  buildBoard(rowCount, colCount) {
    const board = [];
    for (let i = 0; i < rowCount; i += 1) {
      board.push(new Array(colCount).fill(false));
    }
    return board;
  }

  place(i, j, number) {
    if (!this.canPlace(i, j, number)) {
      return false;
    }
    this.rows[i][number] = true;
    this.cols[j][number] = true;
    this.boxes[this.boxNumber(i, j)][number] = true;
    return true;
  }

  canPlace(i, j, number) {
    if (this.rows[i][number]) return false;
    if (this.cols[j][number]) return false;
    if (this.boxes[this.boxNumber(i, j)][number]) return false;
    return true;
  }

  remove(i, j, number) {
    this.rows[i][number] = false;
    this.cols[j][number] = false;
    this.boxes[this.boxNumber(i, j)][number] = false;
  }

  boxNumber(i, j) {
    return Math.floor(i / 3) * 3 + Math.floor(j / 3);
  }
}

function nextSquare(i, j) {
  if (j === 8) {
    return [i + 1, 0];
  }
  return [i, j + 1];
}

function sudokuSolver(board, i, j, checker) {
  if (i === board.length) return true;
  const [x, y] = nextSquare(i, j);
  if (board[i][j] !== 0) {
    return sudokuSolver(board, x, y, checker);
  }
  for (let number = 1; number <= 9; number += 1) {
    if (checker.canPlace(i, j, number)) {
      checker.place(i, j, number);
      board[i][j] = number;
      if (sudokuSolver(board, x, y, checker)) {
        return true;
      }
      checker.remove(i, j, number);
      board[i][j] = 0;
    }
  }
  return false;
}

const board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const checker = new BoardChecker(board);
sudokuSolver(board, 0, 0, checker);
