//Fetch the data and use it for dynamically size the bars on the chart,
//Highlight the current day 
const date = new Date();

let day;

fetch('./data.json')
.then(response => response.json())
.then(data => {
  
  data.forEach(element => {
    document.getElementById(element.day)
    .style.height = String(element.amount * 3) + "px";
  });

  day = data[date.getDay() - 1].day;

  document.getElementById(day).style.backgroundColor = "hsl(186, 34%, 60%)";
});


//Mouseover the charts shows price tag

let monday = document.getElementById("mon");
let tuesday = document.getElementById("tue");
let wednesday = document.getElementById("wed");
let thursday = document.getElementById("thu");
let friday = document.getElementById("fri");
let saturday = document.getElementById("sat");
let sunday = document.getElementById("sun");

let mondayTag = document.getElementById("mon_price");
let tuesdayTag = document.getElementById("tue_price");
let wednesdayTag = document.getElementById("wed_price");
let thursdayTag = document.getElementById("thu_price");
let fridayTag = document.getElementById("fri_price");
let saturdayTag = document.getElementById("sat_price");
let sundayTag = document.getElementById("sun_price");



monday.onmouseover = () => {
  mondayTag.style.backgroundColor = "hsl(25, 47%, 15%)";
  if(day === 'mon'){
    monday.style.backgroundColor = "hsl(186, 100%, 81%)";
  }else{
    monday.style.backgroundColor = "hsl(10, 100%, 75%)";
  }
}
tuesday.onmouseover = () => {
  tuesdayTag.style.backgroundColor = "hsl(25, 47%, 15%)";
  if(day === 'tue'){
    tuesday.style.backgroundColor = "hsl(186, 100%, 81%)";
  }else{
    tuesday.style.backgroundColor = "hsl(10, 100%, 75%)";
  }
}
wednesday.onmouseover = () => {
  wednesdayTag.style.backgroundColor = "hsl(25, 47%, 15%)";
  if(day === 'wed'){
    wednesday.style.backgroundColor = "hsl(186, 100%, 81%)";
  }else{
    wednesday.style.backgroundColor = "hsl(10, 100%, 75%)";
  }
}
thursday.onmouseover = () => {
  thursdayTag.style.backgroundColor = "hsl(25, 47%, 15%)";
  if(day === 'thu'){
    thursday.style.backgroundColor = "hsl(186, 100%, 81%)";
  }else{
    thursday.style.backgroundColor = "hsl(10, 100%, 75%)";
  }
}
friday.onmouseover = () => {
  fridayTag.style.backgroundColor = "hsl(25, 47%, 15%)";
  if(day === 'fri'){
    friday.style.backgroundColor = "hsl(186, 100%, 81%)";
  }else{
    friday.style.backgroundColor = "hsl(10, 100%, 75%)";
  }
}
saturday.onmouseover = () => {
  saturdayTag.style.backgroundColor = "hsl(25, 47%, 15%)";
  if(day === 'sat'){
    saturday.style.backgroundColor = "hsl(186, 100%, 81%)";
  }else{
    saturday.style.backgroundColor = "hsl(10, 100%, 75%)";
  }
}
sunday.onmouseover = () => {
  sundayTag.style.backgroundColor = "hsl(25, 47%, 15%)";
  if(day === 'sun'){
    sunday.style.backgroundColor = "hsl(186, 100%, 81%)";
  }else{
    sunday.style.backgroundColor = "hsl(10, 100%, 75%)";
  }
}
monday.onmouseleave = () => {
  mondayTag.style.backgroundColor = "white";
  if(day === 'mon'){
    monday.style.backgroundColor = "hsl(186, 34%, 60%)";
  }else{
    monday.style.backgroundColor = "hsl(10, 79%, 65%)";
  }
}
tuesday.onmouseleave = () => {
  tuesdayTag.style.backgroundColor = "white";
  if(day === 'tue'){
    tuesday.style.backgroundColor = "hsl(186, 34%, 60%)";
  }else{
    tuesday.style.backgroundColor = "hsl(10, 79%, 65%)";
  }
}
wednesday.onmouseleave = () => {
  wednesdayTag.style.backgroundColor = "white";
  if(day === 'wed'){
    wednesday.style.backgroundColor = "hsl(186, 34%, 60%)";
  }else{
    wednesday.style.backgroundColor = "hsl(10, 79%, 65%)";
  }
}
thursday.onmouseleave = () => {
  thursdayTag.style.backgroundColor = "white";
  if(day === 'thu'){
    thursday.style.backgroundColor = "hsl(186, 34%, 60%)";
  }else{
    thursday.style.backgroundColor = "hsl(10, 79%, 65%)";
  }
}
friday.onmouseleave = () => {
  fridayTag.style.backgroundColor = "white";
  if(day === 'fri'){
    friday.style.backgroundColor = "hsl(186, 34%, 60%)";
  }else{
    friday.style.backgroundColor = "hsl(10, 79%, 65%)";
  }
}
saturday.onmouseleave = () => {
  saturdayTag.style.backgroundColor = "white";
  if(day === 'sat'){
    saturday.style.backgroundColor = "hsl(186, 34%, 60%)";
  }else{
    saturday.style.backgroundColor = "hsl(10, 79%, 65%)";
  }
}
sunday.onmouseleave = () => {
  sundayTag.style.backgroundColor = "white";
  if(day === 'sun'){
    sunday.style.backgroundColor = "hsl(186, 34%, 60%)";
  }else{
    sunday.style.backgroundColor = "hsl(10, 79%, 65%)";
  }
}



