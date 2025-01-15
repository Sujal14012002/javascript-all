//count the digit 1045644


function num(num){
    num=Math.abs(num);
    let count =0;

    do{
        count++;
        num=Math.floor(num/10);

    }while(num>0);
    return  count;
}

console.log(num(122))

