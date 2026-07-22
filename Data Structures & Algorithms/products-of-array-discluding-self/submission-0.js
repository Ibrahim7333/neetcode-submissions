class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) 
    {
        const products = [];

        for (let i=0; i<nums.length; i++)
        {
            let prod = 1;
            for (let j=0; j<nums.length; j++)
            {
                if (i!==j) { prod *= nums[j]; }
            }
            products.push(prod);
        }
        return products;
    }
}
