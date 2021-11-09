function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a,b) => b-a);
    
    let min = arr.slice(0,arr.length-1).reduce((val,acc)=> val+acc);
    // console.log(min);
    let max= arr.slice(1,arr.length).reduce((val,acc)=> val+acc);
    console.log(max,min);
}
