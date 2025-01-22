let nums = [42,51,24,98,65,12]; 

let result = nums.filter(n => n%2===0)
//filter will select values based on certain condition  
    .map( n => n*2)
    .reduce((a,b) => a+b);

    console.log(result);
    

    // .forEach(n => {
    //     console.log(n);
    
    // });