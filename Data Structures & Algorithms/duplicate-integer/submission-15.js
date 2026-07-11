class Solution {
    
    // O(n2) 

    // hasDuplicate(nums) 
    // {
    //     for (let i=0; i<nums.length; i++)
    //     {
    //         for (let j=0; j<nums.length; j++)
    //         {
    //             if (i !== j && nums[i] === nums[j]) return true;
    //         }
    //     }
    //     return false;
    // }


    // O(n) - 1
    
    // hasDuplicate(nums) 
    // {
    //     const numsSet = new Set();

    //     for (let i=0; i<nums.length; i++)
    //     {
    //         numsSet.add(nums[i]);
    //         if (numsSet.size !== (i+1)) return true;
    //     }
    //     return false;
    // }


    // O(n) - 2

    hasDuplicate(nums) 
    {
        const numsMap = new Map();

        for (let i=0; i<nums.length; i++)
        {
            const oldValue = numsMap.get(nums[i]) ?? 0;
            if (oldValue !== 0) return true;
            numsMap.set(nums[i],(oldValue+1));
        }
        return false;
    }
}