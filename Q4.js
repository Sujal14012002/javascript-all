//palindrome question 121

function palindrome(x){
    let copynum=x;
    let reversenum=0;
    while(copynum>0){
        let lastdigit=copynum%10;
        reversenum=reversenum*10+lastdigit;
        copynum=Math.floor(copynum/10);
    }
    return x===reversenum;
}
console.log(palindrome(123))
