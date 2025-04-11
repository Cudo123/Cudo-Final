function showRegistration() {
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('registrationPage').classList.remove('hidden');
  }
  
  function goHome() {
    document.getElementById('registrationPage').classList.add('hidden');
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('registrationForm').reset();
    document.getElementById('doneBtn').classList.add('hidden');
    document.getElementById('registrationForm').classList.remove('hidden');
  }
  
  document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const fields = ['studentId', 'firstName', 'lastName', 'birthdate', 'course', 'mobile', 'username', 'password'];
    const valid = fields.every(id => document.getElementById(id).value.trim() !== '');
  
    if (valid) {
      alert("Registration Successful!");
      document.getElementById('registrationForm').classList.add('hidden');
      document.getElementById('doneBtn').classList.remove('hidden');
    } else {
      alert("Please fill in all fields.");
    }
  });
  