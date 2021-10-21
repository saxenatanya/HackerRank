function alternate(s) {
    // Write your code here
    let brk;
    let uniqueLetter = [...new Set(s)];
    let max =0;
    for(let i =0;i<uniqueLetter.length;i++){
        for(let j =i+1;j<uniqueLetter.length;j++){
            brk = [...s].filter((val)=> val == uniqueLetter[i] 
            || val == uniqueLetter[j]);
            if(brk.every((val,ind) => {
                return ind % 2 ? val == brk[1] : val == brk[0];
            })
            ){
                max = Math.max(brk.length,max);
            }
            
        }
    }
    
return max;
}
