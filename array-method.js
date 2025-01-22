let data = [5,7,8,9];

//console.log(data.push(2));
//pop always remove the last elements
//console.log(data.pop());

//shift methode removes the data from the front 
//console.log(data.shift());

//unshift adds the value infornt of the array 
//console.log(data.unshift(4));

//splice is used to remove the elements from the given index point 
//the first value is the index value in the array and the second value is the number of values you want to remove 

console.log(data.splice(2,1));
console.log(data);