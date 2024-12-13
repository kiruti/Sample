//function 
// local variable and global variable 


//User is a globla variable 
let user = 'Davise'; 


function greet(u)
{
    //u is a local variable to the function
    let num = 5; 
    console.log(num);
    return `Hello ${u}`;
    
}

let str = greet(user);
console.log(str);
