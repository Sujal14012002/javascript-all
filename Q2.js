//Q2.js sum of digit number 1+2+8+7=17


function sumofno(num){
  let sum=0;
  while(num>0){
    
    sum=sum+num%10;
     num=Math.floor(num/10); 

  }
  return sum;
 
}

console.log(sumofno(105));

