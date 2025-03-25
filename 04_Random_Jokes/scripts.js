
const jokes = [
  "Why don't skeletons fight each other? Because they don’t have the guts!",
  "Why did the chicken join a band? Because it had the drumsticks!",
  "Why did the computer go to therapy? It had too many bugs!",
  "Why do cows wear bells? Because their horns don’t work!",
  "Why did the scarecrow become a motivational speaker? Because he was outstanding in his field!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why did the smartphone need glasses? Because it lost its contacts!",
  "How do you catch a squirrel? Climb a tree and act like a nut!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "What do you call an alligator in a vest? An investigator!",
  "Why do ducks make great detectives? They always quack the case!",
  "Why did the music teacher go to jail? Because she got caught with a sharp!",
  "What’s brown and sticky? A stick!",
  "Why did the cookie cry? Because his mom was a wafer so long!",
  "Why did the coffee file a police report? It got mugged!",
  "What do you call a fish with no eyes? Fsh!",
  "Why was the math book sad? Because it had too many problems!",
  "Why did the grape stop in the middle of the road? Because it ran out of juice!",
  "What do you call cheese that isn’t yours? Nacho cheese!",
  "Why don’t oysters share their pearls? Because they’re shellfish!",
  "How does a snowman get around? By riding an ‘icicle’!",
  "Why did the orange stop rolling down the hill? Because it ran out of juice!",
  "What do you call a can opener that doesn’t work? A can’t opener!",
  "Why don’t eggs tell jokes? Because they might crack up!",
  "What’s the best way to watch a fly-fishing tournament? Live stream!"
];

const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
  "#33FFF5", "#FFC300", "#FF5733", "#C70039", "#900C3F",
  "#581845", "#1ABC9C", "#2ECC71", "#3498DB", "#9B59B6",
  "#E74C3C", "#F39C12", "#D35400", "#7F8C8D", "#16A085",
  "#27AE60", "#2980B9", "#8E44AD", "#2C3E50", "#FF4500"
];


const element = document.querySelector('p');

document.getElementById('start').addEventListener("click",()=>{

  let index = Math.random()*25;

  index = Math.floor(index);

  element.innerText = jokes[index];

  document.body.style.backgroundColor = colors[index];

})




