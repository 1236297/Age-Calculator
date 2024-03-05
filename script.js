let dayI =  document.getElementById("dayIn");
let dayO =  document.getElementById("dayOut");
let err = document.getElementById("dayerror");
let monthI =  document.getElementById("monthIn");
let monthO =  document.getElementById("monthOut");
let errm = document.getElementById("montherror");
let yearI =  document.getElementById("yearIn");
let yearO =  document.getElementById("yearOut");
let erry = document.getElementById("yearerror");


function Getday(){
  if (dayI.value > 31){
       err.textContent = 'Must be a valid day';

   } else{
    day = new Date().getDate() - dayI.value;
    dayfinal = day -day -day  +1;
    dayO.textContent = fg ;
  }


}

function Getmonth(){
  if (monthI.value > 12){
      errm.textContent = 'Must be a valid month';

   } else{
    month = new Date().getMonth() - monthI.value + 13
    monthO.textContent = month ;
  }


}
function Getyear(){
  if (yearI.value > 2024){
      erry.textContent = 'Must be a valid year';
 
   } else{
    yearO.textContent = 2024-yearI.value-1;
  }


}