document.getElementById('decider-btn').addEventListener('click', function() {
  document.getElementById('result').textContent = 'test';
});


const takeawayOptions = ['Burgers', 'Fish and Chips', 'Fried Chicken', 'Grilled Chicken', 'Kebab', 'Curry', 'Sushi', 'Pasta', 'Pizza', 'Salad'];

// takeaway randomiser
// const randomTakeaway = () => {
//   return Math.floor(Math.random() * takeawayOptions.length);
// };

function random(takeaway) {
  return takeaway[Math.floor(Math.random() * takeawayOptions.length)];
  
}
console.log(random(takeaway));
