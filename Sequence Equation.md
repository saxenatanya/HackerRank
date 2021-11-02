![image](https://user-images.githubusercontent.com/82470912/139908578-e9faf289-0ae3-4be4-a8eb-a02ef10e03d4.png)


function permutationEquation(p) {
    // Write your code here
    let result=[];
    for(var i = 1; i <= p.length; i++) {
            result.push(p.indexOf(p.indexOf(i) + 1) + 1);
    }
    return result;
}
