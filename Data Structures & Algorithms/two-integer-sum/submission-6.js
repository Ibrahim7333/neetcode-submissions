class Solution {

    // O(n^2) -> Brute force approach

    // twoSum(nums, target) 
    // {
    //     for (let i=0; i<nums.length; i++)
    //     {
    //         for (let j=0; j<nums.length; j++)
    //         {
    //             if (i!==j && nums[i]+nums[j]===target)
    //             {
    //                 let arr = [];
    //                 if (i<j) { arr=[i,j] }
    //                 else { arr=[j,i] }
    //                 return arr;
    //             }
    //         }
    //     }
    // }

    twoSum(nums, target)
    {
        let seen = new Map();

        for (let i = 0; i < nums.length; i++) 
        {                     
            const complement = target - nums[i];
            if (seen.has(complement)) return [seen.get(complement), i];
            seen.set(nums[i], i);
        }
    }

}
