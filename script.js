// Function to calculate age
function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    // Adjust age if birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }
  
  // Event listener for the form submission
  document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const birthdate = document.getElementById('birthdate').value;
    
    if (birthdate) {
      const age = calculateAge(birthdate);
      // Using innerHTML to display the result
      document.getElementById('result').innerHTML = `<p>You are <strong>${age}</strong> years old.</p>`;
    } else {
      document.getElementById('result').innerHTML = `<p style="color:red;">Please enter a valid birthdate.</p>`;
    }
  });
  