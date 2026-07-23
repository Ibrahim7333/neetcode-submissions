class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // maxArea(heights) 
    // {
    //     let max = 0;
    //     for (let i=0; i<heights.length; i++)
    //     {
    //         let tempMax = 0;
    //         for (let j=0; j<heights.length; j++)
    //         {
    //             if (i!==j)
    //             {
    //                 tempMax = (Math.abs(i-j)) * (Math.min(heights[i], heights[j]));
    //                 max = Math.max(max, tempMax);
    //             }
    //         }
    //     }
    //     return max;
    // }

    maxArea(heights) 
    {
        let l = 0;
        let r = heights.length - 1;
        let res = 0;

        while (l < r) 
        {
            const area = Math.min(heights[l], heights[r]) * (r - l);
            res = Math.max(res, area);
            if (heights[l] <= heights[r]) l++;
            else r--;
        }
        return res;
    }
}
