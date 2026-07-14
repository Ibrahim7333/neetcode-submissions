class Solution {
  
    isPalindrome(s) 
    {
        let pointerStart = 0, pointerEnd = s.length-1;
        while(pointerStart < pointerEnd)
        {
            let startCode = s.charCodeAt(pointerStart);
            if (startCode >= 65 &&  startCode <= 90) startCode += 32;
            
            let endCode = s.charCodeAt(pointerEnd);
            if (endCode >= 65 &&  endCode <= 90) endCode += 32;
            
            const validRangeS = (startCode >= 48 && startCode <= 57) ||  (startCode >= 97 && startCode <=122);
            const validRangeE = (endCode >= 48 && endCode <= 57) ||  (endCode >= 97 && endCode <=122);
            
            if (!validRangeS)
            {
                pointerStart ++;
                continue;
            }
            
            if (!validRangeE)
            {
                pointerEnd --;
                continue;
            }
            
            if (startCode !== endCode) return false;
            
            pointerStart ++;
            pointerEnd --;
        }
        return true;
        
    }
}
