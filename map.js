let map = new Map(); 

map.set("Navin", "Java");
map.set("Kiran", "Android");
map.set("Chirag", "ML");
map.set("Navin","Blockchain")

//console.log(map.keys());

//console.log(map.has("Chirag"));
//console.log(map.get("Chirag"));
for(let [k,v] of map)
{
    console.log(k, ":", v);
}