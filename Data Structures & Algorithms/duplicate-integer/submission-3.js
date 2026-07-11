class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) 
    {
        let unique = 0;
        for (let i=0; i<nums.length; i++)
        {
            // if (nums[i] !== nums[i+1]) unique = nums[i];
            // if (unique === nums[i+1]) return true;

            for (let j=0; j<nums.length; j++)
            {
                if (i !== j && nums[i] === nums[j]) return true;
            }
        }
        return false;
    }
}