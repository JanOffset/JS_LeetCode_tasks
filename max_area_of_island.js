const DFS = (i, j, rows, cols, grid) => {
    if (i < 0 || j < 0 || i >= rows || j >= cols  || grid[i][j] === 0) return 0;
    grid[i][j] = 0;
    let size = 1;
    
    size += DFS(i + 1, j, rows, cols, grid )
    size += DFS(i - 1, j, rows, cols, grid )
    size += DFS(i, j + 1, rows, cols, grid )
    size += DFS(i, j - 1, rows, cols, grid )

    return size;
}

//const testGrid = [[0,0,0,0,0,0,0,0]]

var maxAreaOfIsland = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const islands = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                islands.push(DFS(i, j, rows, cols, grid))   
            }
        }        
    }

   // console.log(islands)
    if (islands.length === 0) return 0
    return islands.sort((a, b) => b - a)[0]
};

console.log(maxAreaOfIsland(testGrid))