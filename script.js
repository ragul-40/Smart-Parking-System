// Store parking spot statuses
const spots = {
  1: 'available',
  2: 'occupied',
  3: 'available'
};

// Function to toggle spot status
function toggleSpot(spotNumber) {
  const status = spots[spotNumber];
  const element = document.getElementById(`spot${spotNumber}`);

  if (status === 'available') {
    spots[spotNumber] = 'occupied';
    element.innerText = `Spot ${spotNumber} occupied`;
    element.style.backgroundColor = 'red';
  } else {
    spots[spotNumber] = 'available';
    element.innerText = `Spot ${spotNumber} available`;
    element.style.backgroundColor = 'green';
  }
}
