const bill = document.getElementById('bill');

const tip = document.getElementById('tip');

const num = document.getElementById('num');

document
.getElementById('calculate')
.addEventListener("click",() => {

  billValue = Number(bill.value);

  tipValue = ( Number(tip.value) / 100);

  const noOfPeople = Number(num.value);

  const totalTip = Number((billValue * tipValue).toFixed(2));

  const perPerson = ( totalTip / noOfPeople ).toFixed(2);

  document.getElementById('r1').innerText = `$${totalTip}`;

  document.getElementById('r2').innerText =  `$${perPerson}`;

})
