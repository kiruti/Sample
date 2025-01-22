//factorial of 5

let num  = 5; 

function factorial(num)
{
    if(num == 0)
        return 1;
    else
        return num * factorial(num-1);
    
}

let result = factorial(num);

console.log(result);

