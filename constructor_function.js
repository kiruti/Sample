function  Alice(Name, tech)
{
     this.Name = Name;
     this.tech = tech;
    
     this.work = function(){
        console.log("we cry on our knees")
     }
}
 

let Alice1 = new Alice('Marry', 'Flutter');

let Alice2 = new Alice('John', 'Java');

console.log(Alice2);

Alice2.work();

