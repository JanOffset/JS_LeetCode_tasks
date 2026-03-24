const DFS = (heights, row, col, ocean, currHeight) => {
    if (row < 0 || col < 0 || row >= heights.length || col >= heights[row].length) return
    if (currHeight > heights[row][col]) return
    if (ocean[row][col] === true) return

    ocean[row][col] = true;
    currHeight = heights[row][col]
    DFS(heights, row + 1, col, ocean, currHeight)
    DFS(heights, row - 1, col, ocean, currHeight)
    DFS(heights, row, col + 1, ocean, currHeight)
    DFS(heights, row, col - 1, ocean, currHeight)
}

var pacificAtlantic = function(heights) {
    let pacific = heights.map(row => row.map(col => col = false));
    let atlatic = heights.map(row => row.map(col => col = false));
    let finalArr = [];

    for (let row = 0; row < heights.length; row++) {
       DFS(heights, row, 0, pacific, 0)     
    }

    for (let col = 0; col < heights[0].length; col++) {
        DFS(heights, 0, col, pacific, 0)
    }

    //atlantic
    for (let row = heights.length - 1; 0 <= row; row--) {
        DFS(heights, row, heights[row].length - 1, atlatic, 0)
    }

    for (let col = 0; col < heights[0].length; col++) {
        DFS(heights, heights.length - 1, col, atlatic, 0)
    }


    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[i].length; j++) {
            if (atlatic[i][j] === true && pacific[i][j] === true) {
                finalArr.push([i, j])
            }
        }
        
    }
    return finalArr
};

const test = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
console.log(pacificAtlantic(test))