document.getElementById('decider-btn').addEventListener('click', function() {
  document.getElementById('result').textContent = randomTakeaway;
});


const takeawayOptions = ['Burgers', 'Fish and Chips', 'Fried Chicken', 'Grilled Chicken', 'Kebab', 'Curry', 'Sushi', 'Pasta', 'Pizza', 'Salad'];

// takeaway randomiser
const randomTakeaway = () => {
  return Math.floor(Math.random(takeawayOptions)) * 10;
}