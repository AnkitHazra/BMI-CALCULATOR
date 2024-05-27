console.log("sscript is running")
document.querySelector('button').addEventListener('click', function() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      document.getElementById('results').innerText = 'Please enter valid height and weight.';
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
  
    if (bmi < 18.6) {
      category = 'Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = 'Normal Range';
    } else {
      category = 'Overweight';
    }
  
    document.getElementById('results').innerText = `Your BMI is ${bmi}. Category: ${category}.`;
  });  
