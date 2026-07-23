class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) 
    {
        let maxProfit = 0;
        for (let i=0; i<prices.length; i++)
        {
            let tempProfit = 0;
            for (let j=i+1; j<prices.length; j++)
            {
                if (prices[j] > prices[i])
                {
                    tempProfit = prices[j] - prices[i];
                    maxProfit = Math.max(maxProfit, tempProfit);
                }
            }
        }
        return maxProfit;
    }
}
