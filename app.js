// UI Elements 

// INPUTS
const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const form = document.querySelector('#loan-form')

// RESULTS
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');



form.addEventListener('submit', function(e){

  // Hide Results
  document.getElementById('results').style.display = 'none';

  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults (){
// CONVERT ALL OF THEM TO FLOAT
const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedYears = parseFloat(years.value) * 12;

// CALCULATIONS

// Monthly payments
const anVar = Math.pow(1 + calculatedInterest, calculatedYears); 
const monthlyCalculated = (principal * calculatedInterest* anVar) / (anVar - 1);

if(isFinite(monthlyCalculated)){
  monthlyPayment.value = monthlyCalculated.toFixed(2);
  totalPayment.value = (monthlyCalculated * calculatedYears).toFixed(2);
  totalInterest.value = ((monthlyCalculated * calculatedYears) - principal).toFixed(2);

  // Hide loading 
  document.getElementById('loading').style.display = 'none';

  // show Results
  document.getElementById('results').style.display = 'block';
} else {
  showError('Please check your numbers')
};
}


function showError(error){

   // Hide Results
 document.getElementById('results').style.display = 'none';

 // Hide loader
 document.getElementById('loading').style.display = 'none'; 

  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add a class name
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);


// Clear error after 3 seconds 
  setTimeout(clearError, 3000);

}

// Clear error
function clearError(){ 
  document.querySelector('.alert').remove();
};
