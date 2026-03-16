var shortestPathBinaryMatrix = function (grid) {
    let pathCount = 1;
    let queue = [];

    let dir = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1],
    ]

    if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) return -1

    queue.push([0, 0]);
    grid[0][0] = 1;

    while (queue.length > 0) {
        let len = queue.length;
        while (len > 0) {
            let [currRow, currCol] = queue.shift()
            if (currRow === grid.length - 1 && currCol === grid[0].length - 1) return pathCount;
            for (const [r, c] of dir) {
                let newRow = currRow + r;
                let newCol = currCol + c;
                if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length && grid[newRow][newCol] === 0) {
                    grid[newRow][newCol] = 1;
                    queue.push([newRow, newCol])
                }
            }
            len--
        }
        pathCount++
    }

    return -1;
};

const testGrid = [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0]
]

console.log(shortestPathBinaryMatrix(testGrid))