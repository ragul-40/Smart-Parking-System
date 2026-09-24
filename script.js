body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
}

h1 {
  color: #333;
}

#availableCount {
  font-weight: bold;
}

.parking-lot {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  gap: 10px;
}

.parkingspot {
  width: 100px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.available {
  background-color: green;
}

.occupied {
  background-color: red;
}

button {
  margin-top: 20px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}// Store parking spot statuses
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
