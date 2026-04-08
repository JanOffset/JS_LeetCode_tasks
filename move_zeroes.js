/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//[1,0,3,0,12]
var moveZeroes = function(nums) {
    let insertPos = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            continue;
        } else {
            nums[insertPos] = nums[i]
            insertPos++
        }
    }

    while (insertPos < nums.length) {
        nums[insertPos] = 0
        insertPos++
    }

    return
};