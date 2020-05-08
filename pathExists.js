function pathExists(maze, memo, x, y) {
  if (outOfBound(maze, x, y) || maze[x][y] === 1) return false;
  if (memo[x][y] === "path_not_found" || memo[x][y] === "visiting")
    return false;
  if (x === maze.length - 1 && y === maze[0].length - 1) return true;
  memo[x][y] = "visiting";
  const directions = [
    [x + 1, y],
    [x, y + 1],
    [x - 1, y],
    [x, y - 1],
  ];
  for (let [row, col] of directions) {
    if (pathExists(maze, memo, row, col)) {
      return true;
    }
  }
  memo[x][y] = "path_not_found";
  return false;
}

function outOfBound(maze, x, y) {
  return x < 0 || x >= maze.length || y < 0 || y >= maze[0].length;
}

const maze = [
  [0, 1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1],
  [0, 0, 0, 1, 0, 0],
];

const memo = [
  new Array(maze[0].length).fill("unvisited"),
  new Array(maze[0].length).fill("unvisited"),
  new Array(maze[0].length).fill("unvisited"),
  new Array(maze[0].length).fill("unvisited"),
  new Array(maze[0].length).fill("unvisited"),
];

console.log(pathExists(maze, memo, 0, 0));
