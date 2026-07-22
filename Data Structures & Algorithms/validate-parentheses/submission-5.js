class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) 
    {
        const arr = [];
        for (let i=0; i<s.length; i++)
        {
            if (s[i] === '(' || s[i] === '[' || s[i] === '{')
            {
                arr.push(s[i]);
            }
            else if (s[i] === ')' || s[i] === ']' || s[i] === '}')
            {
                if (arr.length > 0 && (s.charCodeAt(i) - arr[arr.length-1].charCodeAt(0) === 2 || s.charCodeAt(i) - arr[arr.length-1].charCodeAt(0) === 1))
                {
                    arr.pop();
                }
                else
                {
                    return false;
                }
            }
        }
        
        if (arr.length === 0) return true;
        return false;
    }
}
