const DFS = (word, board, row, col) => {
    let found;
    if (word === '') return true
    if (row < 0 || col < 0 || row >= board.length || col >= board[row].length || board[row][col] === '#') return false
    if (board[row][col] !== word[0]) return false
        board[row][col] = '#'
        found = 
            DFS(word.slice(1), board, row + 1, col) ||
            DFS(word.slice(1), board, row - 1, col) ||
            DFS(word.slice(1), board, row, col + 1) ||
            DFS(word.slice(1), board, row, col - 1)
    
    board[row][col] = word[0]
    return found
}

var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0]) {
               if (DFS(word, board, i, j)) return true
            }
        }
    }

    return false
};
let testBoard = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], testWord = "ABCCED"
console.log(exist(testBoard, testWord))
