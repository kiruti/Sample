// Diffrence betwen while and for loop 
let result; 
// for(let i=1; i<=100; i++)
// {
//     result=i%3;
//     if (result === 0)
//         console.log(i);

// }

let num = 5464784;

while(num>0)
{
    console.log(num%10);
    num = parseInt(num/10)
}