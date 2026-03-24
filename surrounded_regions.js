/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const DFS = (board, row, col) => {
    if (row < 0 || col < 0 || row >= board.length || col >= board[row].length) return
    if (board[row][col] !== 'O') return

    if (board[row][col] === 'O') {
        board[row][col] = 'S'

        DFS(board, row + 1, col)
        DFS(board, row - 1, col)
        DFS(board, row, col + 1)
        DFS(board, row, col - 1)
    }

    return
}
var solve = function (board) {
    for (let row = 0; row < board.length; row++) {
        if (board[row][0] === 'O') {
            DFS(board, row, 0)
        }
        if (board[row][board[row].length - 1] === 'O') {
            DFS(board, row, board[row].length - 1)
        }
    }
    for (let col = 0; col < board[0].length; col++) {
        if (board[0][col] === 'O') {
            DFS(board, 0, col)
        }
        if (board[board.length - 1][col] === 'O') {
            DFS(board, board.length - 1, col)
        }

    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
            else if (board[i][j] === 'S') {
                board[i][j] = 'O'
            }
        }
    }
    return board
};

const testBoard = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]
console.log('Before test: \n' + testBoard)
console.log(solve(testBoard))