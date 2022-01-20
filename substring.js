// This is a conversion from 12hour time to  24 military time, methods used substring and charAt 

function timeconversion(s){
debugger;
let amPm = s.charAt(8)
let militaryHour = "";
if(amPm == "A"){
 if(s.substring(0,2)=='12'){
militaryHour = "00"

}
else{
militaryHour = s.substring(0,2)


}


}

else{ //PM

if(s.substring(0,2)=='12'){
militaryHour = s.substring(0,2)

}
else{
militaryHour = parseInt(s.substring(0,2),10)+12

}

}

return militaryHour + (s.substring(2,8))

}
timeconversion('01:01:00AM')
