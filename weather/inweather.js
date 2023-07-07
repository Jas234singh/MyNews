const daytime =document.getElementById('day-time');
  let currentCity ="";

function getDaytime(){
let now =new Date();
hour =now.getHours();
minute =now.getMinutes();
dayy =now.getDay();
let days =[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
hour =hour%12;
if(hour<10){

    hour = "0"+hour;
}
if(minute<10){
    minute ="0"+minute;
}

    let daystring =days[dayy];
    return `${daystring} ,${hour}:${minute}`;
}
daytime.innerText =getDaytime();
setInterval(()=>{
    daytime.innerText =getDaytime();
},1000);

function getPublicIp(){
         fetch("https://geolocation-db.com/json/",{
          method:"GET"
      })
      .then((response) => response.json())
     .then((data) => {
          console.log(data);
          currentCity=data.currentCity;
      });
  }
   getPublicIp();
function getWeatherData(city,unit,hourlyorWeek){
    const apiKey ="SNPU9WB9MWUVNKUWFUS7HD4AY";
    
    fetch(
       `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&Key=${apiKey}&contentType=json`,
       
       {
        method:"GET",
    }
    )
    .then((response) => response.json())
     .then((data) => {
          console.log(data);
    
});
}
