const cityName = document.getElementById('cityName');

const button = document.getElementById('getData');

const placeName = document.getElementById('place');
const temperature = document.getElementById('temp');
const localtime  = document.getElementById('time');

button.addEventListener("click",()=>{
  const city = cityName.value;
  getData(city);
})

async function getData(city){
  
  let result = await fetch(`ApiKeyUsedHere`);
  result = await result.json();
  
  placeName.innerText = `${result.location.name}, ${result.location.country}`;
  temperature.innerText = `Currrent Temperature : ${result.current.temp_c}°C`;
  localtime.innerText = `Local Time : ${result.location.localtime}`;
  
}
