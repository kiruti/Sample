//Use of this key word 

let laptop = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',

    getConfig:  function(){

        console.log("The cpu number is:",this.cpu);
    }
}


laptop.getConfig();