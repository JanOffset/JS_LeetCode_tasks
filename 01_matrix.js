var updateMatrix = function(mat) {
    let dist = mat.map((row) => row.map((col) => col = 0))
    let queue = [];
    let dir = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                dist[i][j] = 0;
                queue.push([i, j])
            } else if (mat[i][j] === 1) {
                dist[i][j] = -1;
            }
        }
    }

    while (queue.length > 0) {
        let [currRow, currCol] = queue.shift()
        for (const [r, c] of dir) {
            let newCol = currCol + c;
            let newRow = currRow + r;
            if (newRow >= 0 && newCol >= 0 && newRow < mat.length && newCol < mat[0].length && dist[newRow][newCol] === -1) {
                dist[newRow][newCol] = dist[currRow][currCol] + 1;
                queue.push([newRow, newCol])
            }
        }
    }
    return dist
};

const testMat = [[1,0,0],[1,1,1],[1,1,1]]

console.log(updateMatrix(testMat))