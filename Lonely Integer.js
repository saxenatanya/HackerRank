// Given an array of integers, where all elements but one occur twice, ﬁnd the unique element.

// Example
// a=[1,1,2,4,3,2,3]
// The unique element is 4 .

// Function Description

// Complete the lonelyinteger function in the editor below. lonelyinteger has the following parameter(s):
// int a[n]: an array of integers

// Returns

// int: the element that occurs only once

// Input Format

// The ﬁrst line contains a single integer,n	, the number of integers in the array.
// The second line contains n	space-separated integers that describe the values in  a.

// Constraints
// 1 <n <100
// It is guaranteed that	is an odd number and that there is one unique element.
// 0<=a[i]<=100 , where	0<i<n.


function lonelyinteger(a) {
    // Write your code here
    let obj={};
    for(let i of a){
        if(obj[i]){
            obj[i]++
        }else{
            obj[i]=1;
        }
    }
    for(let j in obj){
        if(obj[j] === 1){
            return j;
        }
    }
}
//0 0 1 2 1
//1 1 2
//1
