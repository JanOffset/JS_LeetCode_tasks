const dfs = (i, j, grid, Rows, Cols) => {
    if (i >= Rows || j >= Cols || i < 0 || j < 0 || grid[i][j] === `0`) return;

    grid[i][j] = '0';
    dfs(i + 1, j, grid, Rows, Cols)
    dfs(i - 1, j, grid, Rows, Cols)
    dfs(i, j + 1, grid, Rows, Cols)
    dfs(i, j -1, grid, Rows, Cols)
}

var numIslands = function(grid) {
    const Rows = grid.length;
    const Cols = grid[0].length;
    let numberOfIslands = 0;
    for (let i = 0; i < Rows; i++) {
        for (let j = 0; j < Cols; j++) {
            if (grid[i][j] === '1') {
                numberOfIslands++;
                dfs(i, j, grid, Rows, Cols)
            }
        }
    }

    return numberOfIslands
}