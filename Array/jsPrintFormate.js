/** Write a JavaScript program which accept a number as input and insert
 dashes (-) between each two even numbers. For example if you accept 025468
  the output should be 0-254-6-8.
 **/

 function formateOutput(str) {
     str = str.toString();
     empArr = [str[0]];
   for(let i=1; i<str.length; i++)
   {
       // console.log(str[i]);
       if((str[i-1]%2 === 0) && (str[i]%2 === 0)){
           //console.log('inside the cond.');
           empArr.push('-', str[i])
       }
       else
        {
            empArr.push(str[i]);
        }
   }
   console.log(empArr.join(''));
 }

 formateOutput("025469346");