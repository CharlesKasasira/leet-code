/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description Aproach: ONE PASS HASH TABLE
 */


// 1: Using a map as our hashtable
 const twoSum = function(nums, target) {
    const PREV_VALUES = new Map() // store previous values. you could as well use an object.
    const LEN = nums.length // define the length outside the loop
    for(let i = 0; i < LEN; i++){
        let neededValue = target - nums[i]
        if(PREV_VALUES.has(neededValue)){
            return ([ i, PREV_VALUES.get(neededValue)])
        } else{
            PREV_VALUES.set(nums[i], i)
        }
        
    }
};

// 2: Using an object
const twoSum2 = function(nums, target) {
    const PREV_VALUES = {}; // using an object as our hash table
    const LEN = nums.length;
    for(let i=0; i<LEN; i++){
        if(PREV_VALUES[nums[i]]>=0){
            return [ PREV_VALUES[nums[i] ] , i]
        }
        PREV_VALUES[target-nums[i]] = i
    }
};