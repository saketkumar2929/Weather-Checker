const apiKey = "261caf33f2ec401b80d155038261306";

const cityInput =
document.getElementById("city");

const searchBtn =
document.getElementById("searchBtn");

searchBtn.addEventListener(
"click",
getWeather
);

async function getWeather(){

const city = cityInput.value;

if(city === ""){
alert("Enter city name");
return;
}

try{

const response =
await fetch(
`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
);

const data =
await response.json();

document.getElementById(
"cityName"
).innerText =
`${data.location.name}, ${data.location.country}`;

document.getElementById(
"temp"
).innerText =
`${data.current.temp_c}°C`;

document.getElementById(
"condition"
).innerText =
data.current.condition.text;

document.getElementById(
"humidity"
).innerText =
`${data.current.humidity}%`;

document.getElementById(
"wind"
).innerText =
`${data.current.wind_kph} km/h`;

document.getElementById(
"weatherIcon"
).src =
"https:" + data.current.condition.icon;

changeBackground(
data.current.condition.text
);

}
catch(error){

alert("City not found");

}

}

function changeBackground(condition){

condition =
condition.toLowerCase();

if(condition.includes("sun")){
document.body.style.background =
"linear-gradient(135deg,#f7971e,#ffd200)";
}
else if(condition.includes("rain")){
document.body.style.background =
"linear-gradient(135deg,#4facfe,#00f2fe)";
}
else if(condition.includes("cloud")){
document.body.style.background =
"linear-gradient(135deg,#757f9a,#d7dde8)";
}
else{
document.body.style.background =
"linear-gradient(135deg,#4facfe,#00f2fe)";
}

}