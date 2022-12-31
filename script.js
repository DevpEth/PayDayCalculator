function validateInput(event) {
    // Get the input element that triggered the event
    const inputElement = event.target;
  
    // Get the minimum and maximum allowed values for the input element
    const min = parseInt(inputElement.getAttribute('min'));
    const max = parseInt(inputElement.getAttribute('max'));
  
    // Get the current value of the input element
    const value = parseInt(inputElement.value);
  
    // If the value is outside the allowed range, set it to the minimum or maximum allowed value
    if (value < min) {
      inputElement.value = min;
    } else if (value > max) {
      inputElement.value = max;
    }
  }
  


  function calculateTotalHours() {
    // Initialize variables to store the total hours and minutes worked
    let totalHours = 0;
    let totalMinutes = 0;
  
    // Loop through each day of the week
    for (let day of ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']) {
      // Get the values of the input fields for hours and minutes worked for the current day
      const hoursInput = document.getElementById(`${day}-hours`);
      const minutesInput = document.getElementById(`${day}-minutes`);
      let hours = parseInt(hoursInput.value);
      let minutes = parseInt(minutesInput.value);
  
      // If the input fields are empty, set the values to 0
      if (isNaN(hours)) {
        hours = 0;
      }
      if (isNaN(minutes)) {
        minutes = 0;
      }
  
      // Add the hours and minutes worked for the current day to the total
      totalHours += hours;
      totalMinutes += minutes;
    }
  
    // Calculate the total time worked in hours and minutes by adding the total minutes to the total hours
    // and rounding down to the nearest whole hour
    const totalTimeWorkedInHours = Math.floor(totalHours + totalMinutes / 60);
    let totalTimeWorkedInMinutes = totalMinutes % 60;
  
    // Get the hourly wage and calculate the total pay
    const wageInput = document.getElementById('wage');
    let wage = parseInt(wageInput.value);
  
    // If the hourly wage input is empty, set the value to 0
    if (isNaN(wage)) {
      wage = 0;
    }
  
    let totalPay = totalTimeWorkedInHours * wage;
  
    // If the total time worked in minutes is 30 or greater, round up to the nearest hour and add it to the pay
    if (totalTimeWorkedInMinutes >= 30) {
      totalPay += wage;
    }
  
    
    // Get the element to display the result
    const resultElement = document.getElementById('result');
    const resultsElement = document.getElementById('results');
  
    // Update the result element with the total time worked in hours and minutes and the total pay
    resultElement.textContent = `${totalTimeWorkedInHours} hrs & ${totalTimeWorkedInMinutes} mins`;
    resultsElement.textContent = `You Made $${totalPay.toFixed(2)}`;
  }





  
  // Get the calculate button and the modal
const calculateButton = document.getElementById('calculate-button');
const resultsModal = document.getElementById('results-modal');
// Get the close button
const closeButton = resultsModal.querySelector('.close-button');

// Add a click event listener to the calculate button
calculateButton.addEventListener('click', () => {
  // Calculate the total hours and pay
  calculateTotalHours();

  // Display the modal window and add the class "modal-open" to the body element
  resultsModal.style.display = 'flex';
  document.body.classList.add('modal-open');
});

// Add a click event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the modal window and remove the class "modal-open" from the body element
  resultsModal.style.display = 'none';
  document.body.classList.remove('modal-open');
});



