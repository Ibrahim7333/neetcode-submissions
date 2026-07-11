class Solution {
  
    isAnagram(s, t) 
    {
        const map = new Map();

        if (s.length !== t.length) return false;

        for (let i=0; i<s.length; i++)
        {
            const oldSMapValue = map.get(s[i]) ?? 0;
            map.set(s[i],oldSMapValue+1);
            const oldTMapValue = map.get(t[i]) ?? 0;
            map.set(t[i],oldTMapValue-1);
        }

        for (let j=0; j<map.size; j++)
        {
            const getMapValue = map.get(s[j]) ?? 0;
            if (getMapValue !== 0) return false;
        }

        return true;
    }
}
