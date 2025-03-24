// Date And Time Showing

function upadtetime(){

  const date = new Date();

  const dayObject = document.getElementById('day');

  const weekday = date.getDay();

  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

  dayObject.innerText = days[weekday]+ ", " + date.toLocaleDateString();

  const time = document.getElementById('time');

  const min = date.getMinutes() < 10 ? "0"+date.getMinutes(): date.getMinutes();
  
  const hours = date.getHours() > 12 ? "0"+(date.getHours() - 12): (date.getHours() < 10 ? "0"+date.getHours() : date.getHours());
  
  if(date.getHours() === 0){
    hours = 12;
  }
  
  const seconds = date.getSeconds() < 10 ? "0"+ date.getSeconds(): date.getSeconds();
  
  const AmPm = date.getHours() >= 12 ? "PM" : "AM" ;
  
  time.innerText = `${hours}:${min}:${seconds} ${AmPm}`;
}


setInterval(()=>{

upadtetime();

},1000)
