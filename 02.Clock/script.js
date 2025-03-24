// Date And Time Showing

const body = document.querySelector('window');

const dayObject = document.getElementById('day');

const date = new Date().toLocaleDateString();

dayObject.innerText = date;

const time = document.getElementById('time');


function upadtetime(){
  const date = new Date();

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





 
 




