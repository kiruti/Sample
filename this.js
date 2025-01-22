//Use of this key word 


// function getFastLaptop(laptop1, laptop2){

//     if(laptop1.cpu > laptop2.cpu){
//         console.log(laptop1);
//     }
//     else{
//         console.log(laptop2);
//     }
// }




let laptop1 = {
    cpu: 'i5',
    ram: 16,
    brand: 'HP',
    compare: function(other){
        if(this.cpu > other.cpu){
            console.log(this);
        }
        else{
            console.log(other);
        }
    },

    getConfig:  function(){

        console.log("The cpu number is:",this.cpu);
    }
}


let laptop2 = {
    cpu: 'i7',
    ram: 32,
    brand: 'Apple',

    getConfig:  function(){

        console.log("The cpu number is:",this.cpu);
    }
}

//getFastLaptop(laptop1, laptop2);

laptop1.compare(laptop2);