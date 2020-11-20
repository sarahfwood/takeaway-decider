// Takeaway Options
const takeawayOptions = ['Burgers', 'Fish and Chips', 'Fried Chicken', 'Grilled Chicken', 'Kebab', 'Curry', 'Sushi', 'Pasta', 'Pizza', 'Salad'];

// Event listener to genrate random item from takeaway options array
document.getElementById('decider-btn').addEventListener('click', function() {
  document.getElementById('result').textContent = randomTakeaway(takeawayOptions);
});

// Function to randomise item from takeaway options
const randomTakeaway = (takeawayOptions) => {
  return takeawayOptions[Math.floor(Math.random() * takeawayOptions.length)];
};
