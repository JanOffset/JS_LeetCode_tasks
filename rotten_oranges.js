var orangesRotting = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;
    let queue = [];
    let fresh = 0;
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            } else if (grid[i][j] === 2) {
                queue.push([i, j])
            }
        }
    }

    if (fresh === 0) return 0

    while (queue.length > 0 && fresh > 0) {
        let len = queue.length
        while (len > 0) {
            let [currRow, currCol] = queue.shift();
            for (const [r, c] of dirs) {
                let newRow = currRow + r;
                let newCol = currCol + c;
                if (newCol >= 0 && newRow >= 0 && newRow < rows && newCol < cols && grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    queue.push([newRow, newCol])
                    fresh--;
                }
            }
            len--
        }
        count++;
    }

    return fresh === 0 ? count : -1
};