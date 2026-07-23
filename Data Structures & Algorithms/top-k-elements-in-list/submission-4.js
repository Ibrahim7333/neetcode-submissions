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

    // topKFrequent(nums, k) 
    // {
    //     const freqMap = {};
    //     const freqArr = new Array(nums.length + 1);
        
    //     for (let element of nums) 
    //     {
    //         freqMap[element] = (freqMap[element] || 0) + 1;
    //     }
        
    //     for (const keys in freqMap)
    //     {
    //         if (!freqArr[freqMap[keys]])
    //         {
    //             freqArr[freqMap[keys]] = [];
    //         }
    //         freqArr[freqMap[keys]].push(keys);
    //     }

        
    //     const outputArr = [];
        
    //     for (let i=freqArr.length-1; i >= 0; i--)
    //     {
    //         if (!freqArr[i]) { continue; }
            
    //         for (let j=freqArr[i].length-1; j >= 0; j--)
    //         {
    //             if (outputArr.length < k)
    //             {
    //                 outputArr.push(freqArr[i][j]);
    //             }
    //             else { break; }
    //         }
    //         if (outputArr.length === k) { break; }
    //     }
        
    //     return outputArr;
    // }
}
