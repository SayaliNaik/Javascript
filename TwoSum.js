/*
Given an array of intergers 'nums' and integer 'target', return incides of the 2 numbers such that they add upto target
Input: nums = [2,7,10,15], target = 12
Output: [0,2]
*/

function twoSum(nums,target){
  let indexes = [];

  for(let i = 0; i < nums.length ; i++){
    for(let j = i+1;j < nums.length; j++){
      if(nums[i]+ nums[j] === target){
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return indexes;
}

console.log(twoSum([2,4,6,8], 8));
