class Solution {
  
    isAnagram(s, t) 
    {
        const sMap = new Map();
        const tMap = new Map();

        if (s.length !== t.length) return false;

        for (let i=0; i<s.length; i++)
        {
            const oldSMapValue = sMap.get(s.substring(i,i+1)) ?? 0;
            sMap.set(s.substring(i,i+1),oldSMapValue+1);
            const oldTMapValue = tMap.get(t.substring(i,i+1)) ?? 0;
            tMap.set(t.substring(i,i+1),oldTMapValue+1);
        }


        if (sMap.size !== tMap.size) return false;

        for (let j=0; j<s.length; j++)
        {
            const getSMapValue = sMap.get(s.substring(j,j+1)) ?? 0;
            const getTMapValue = tMap.get(s.substring(j,j+1)) ?? 0;
            if (getSMapValue !== getTMapValue) return false;
        }

        return true;
    }
}
