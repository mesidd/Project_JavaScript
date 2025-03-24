
const button = document.getElementById('start');

const restart = document.getElementById('restart')

button.addEventListener("click",()=>{

const show = document.getElementById('show');
const value = document.getElementById('time').value;

document.getElementById('time').value ="Timer Started";
document.getElementById('time').style.backgroundColor = "hotpink"

let i = value;

if ( i ===""){
  return;
}

const timeout = setInterval(()=>{
  
show.innerText = `Time Remainig : ${i < 10 ? "0"+ i: i} seconds`;
  
if ( i === 0) 
  {
    clearInterval(timeout);
    show.innerHTML = "Time Up !!!";
    show.style.color = "red";
    restart.style.display = "inline";
    button.style.display = "none";
    time.style.display = "none";
    // button.disabled = true;
    // time.disable = true;
  }

  i--;

},1000);

})

restart.addEventListener("click",()=> {
  location.reload();
  
})


 
