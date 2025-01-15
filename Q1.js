//Q1 sum of all natural no from 0 to n

function naturalnumber(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum=sum+i;
    }
    return sum;
}

console.log(naturalnumber(5))