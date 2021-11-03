function weekdayText(weekdays) {
    //Implement your code here
return function(num){
    console.log(num,'num');
         if(num <0 || num> 6 || num === 'undefined'){
                throw new Error('Invalid weekday number')
            } if(num === 0){
                return weekdays[0];
            }
             if(num === 1){
                return weekdays[1];
            }
            else if(num === 2){
                return weekdays[2];
            }
            else if(num === 3){
                return weekdays[3];
            }
            else if(num === 4){
                return weekdays[4];
            }
            else if(num === 5){
                return weekdays[5];
            }
            else if(num === 6){
                return weekdays[6];
            }
     }
}
const getText = weekdayText(['Mon','Tue','wed','thus']);
const value = getText(3);
console.log(value);
