class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // productExceptSelf(nums) 
    // {
    //     const products = [];

    //     for (let i=0; i<nums.length; i++)
    //     {
    //         let prod = 1;
    //         for (let j=0; j<nums.length; j++)
    //         {
    //             if (i!==j) { prod *= nums[j]; }
    //         }
    //         products.push(prod);
    //     }
    //     return products;
    // }

    productExceptSelf(nums) 
    {
        let map = {};
        let prefixProd = 1, suffixProd = 1;
        
        for (let i=0; i<nums.length; i++)
        {
            map[i] = (map[i] ?? 1) * prefixProd;
            map[nums.length-1 -i] = (map[nums.length-1 -i] ?? 1) * suffixProd;
            prefixProd *=  nums[i];
            suffixProd *=  nums[nums.length-1 -i];
        }
        return Object.values(map);
    }
}
