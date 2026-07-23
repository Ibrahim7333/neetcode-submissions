class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) 
    {
        let max = 0;
        for (let i=0; i<heights.length; i++)
        {
            let tempMax = 0;
            for (let j=0; j<heights.length; j++)
            {
                if (i!==j)
                {
                    tempMax = (Math.abs(i-j)) * (Math.min(heights[i], heights[j]));
                    max = Math.max(max, tempMax);
                }
            }
        }
        return max;
    }
}
