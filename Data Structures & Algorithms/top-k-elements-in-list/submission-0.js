class Solution {
   
    topKFrequent(nums, k) 
    {
        const freqMap = {};
        for (let element of nums) 
        {
            freqMap[element] = (freqMap[element] || 0) + 1;
        }
        const uniqueElements = Object.keys(freqMap);
        
        uniqueElements.sort((a, b) => freqMap[b] - freqMap[a]);
        
        return uniqueElements.slice(0, k).map(Number);
    }
}
