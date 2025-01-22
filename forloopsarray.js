let nums = [];

nums[0] = 5;
nums[99] = 9; 

console.log(nums);
//in arrays we have for of loop 

// for(let n of nums)
// {
//     console.log(n);
// }

//for in loop is used to print the key for the values 
for(let key in  nums)
{
    console.log(nums[key]);
}