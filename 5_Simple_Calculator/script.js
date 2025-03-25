const firstNum  = document.getElementById('firstNum');

const secondNum = document.getElementById('secondNum');

const element = document.getElementById('result');


function add(x,y){
  return Number(x) + Number(y) ;
}

function divide(x,y){
  if( Number(y) == 0) return "Can't Divide By Zero";
  return Number(x) / Number(y);
}

function subtract(x,y){
  return Number(x) - Number(y);
}

function multiply(x,y){
  return Number(x) * Number(y);
}

document.getElementById('add').addEventListener("click",()=>{
  const result = add(firstNum.value, secondNum.value);
  element.innerText = result;
  
})

document.getElementById('multiply').addEventListener("click",()=>{
  const result = multiply(firstNum.value, secondNum.value);
  element.innerText = result;
  
})

document.getElementById('subtract').addEventListener("click",()=>{
  const result = subtract(firstNum.value, secondNum.value);
  element.innerText = result;
  
})

document.getElementById('divide').addEventListener("click",()=>{

  let result = divide(firstNum.value, secondNum.value);

  if(Number(secondNum.value) == 0) result = "Can't divide by zero";

  else {
    result = Number.isInteger(result) ? result : result.toFixed(2);
  }

  element.innerText = result;
  
})
