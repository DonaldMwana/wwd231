const apiKey="YOUR_API_KEY";
const city="Johannesburg";

const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather(){
const response=await fetch(url);
const data=await response.json();

document.getElementById("temp").textContent=
data.list[0].main.temp.toFixed(1);

document.getElementById("description").textContent=
data.list[0].weather[0].description;

const forecast=document.getElementById("forecast");
forecast.innerHTML="";

[8,16,24].forEach(i=>{
const p=document.createElement("p");
p.textContent=`${data.list[i].dt_txt.split(" ")[0]} :
${data.list[i].main.temp.toFixed(1)}°C`;
forecast.appendChild(p);
});
}

getWeather();