// Mon - 7 am 
// Tue - Thurs - 4 am 
// Fri - 9am 
// Sat - Sun - 8 am 

//let day = "Tue";
//let result;


  //  if(day === "Monday")
     //   result = "7 am"; 
    //else 
      //  if(day === "Tue" || "Thur" )
        //result = "4 am"; 
    //else 
      //  if(day === "Fri")
        //result = "9 am";
    //else 
      //  if(day === "Sat " || "Sun")
        //result = "8 am";
        
    
    
//console.log(result);

let day = "Holiday"; 


switch(day){
  case 'Monday':
    console.log("8 am");
    break;
  case 'Tuesday':
    console.log("4 am");
    break;
  case 'Wednesday':
    console.log("4 am");
    break;
  case 'Thursday':
    console.log("4 am");
    break;
  case 'Friday':
    console.log("9 am");
    break;
  case 'Saturday':
    console.log("8 am");
    break;
  case 'Sunday':
    console.log("8 am");
    break;
  default:
    console.log("7 am - Watch Telusko videos")
}
