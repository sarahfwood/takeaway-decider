// Takeaway Options
const takeawayOptions = ['McDonalds', 'KFC', 'Domino\'s Pizza', 'Pizza Hut', 'Chinese', 'Indian', 'Italian', 'Burger King', 'Kebab', 'Turkish', 'Carribean', 'African', 'Thai', 'Nando\'s', 'Subway'];

// Event listener to genrate random item from takeaway options array
document.getElementById('decider-btn').addEventListener('click', function() {
  let result = document.getElementById('result');
  result.classList.add('loading');
  setTimeout(() => {
    result.classList.remove('loading');
    result.textContent = 'You have chosen: ' + randomTakeaway(takeawayOptions);
  }, 1000);
});

// Function to randomise item from takeaway options
const randomTakeaway = (takeawayOptions) => {
  return takeawayOptions[Math.floor(Math.random() * takeawayOptions.length)];
};

// Add loading, and stop user from multiple clicks
