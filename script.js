function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const dateOfBirth = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const genderMale = document.getElementById('genderMale').checked;
    const genderFemale = document.getElementById('genderFemale').checked;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;

    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namePattern.test(firstName) || firstName.length < 4) {
        alert("First name should contain alphabets and be at least 4 characters long.");
        return false;
    }

    if (!namePattern.test(lastName) || lastName.length < 1) {
        alert("Last name should contain alphabets and be at least 1 character long.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (isNaN(Date.parse(dateOfBirth))) {
        alert("Please enter a valid date of birth.");
        return false;
    }

    if (!/^\d{2}$/.test(age)) {
        alert("Age should be a 2-digit number.");
        return false;
    }

    if (!genderMale && !genderFemale) {
        alert("Please select a gender.");
        return false;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
        alert("Phone number should contain 10 digits.");
        return false;
    }

    if (address.trim() === "") {
        alert("Address should not be empty.");
        return false;
    }

    
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('dateOfBirth', dateOfBirth);
    localStorage.setItem('age', age);
    localStorage.setItem('gender', genderMale ? 'Male' : 'Female');
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('address', address);

 
    window.location.href = 'results.html';

    return false; 
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('results.html')) {
        document.getElementById('resultFirstName').innerText = localStorage.getItem('firstName');
        document.getElementById('resultLastName').innerText = localStorage.getItem('lastName');
        document.getElementById('resultEmail').innerText = localStorage.getItem('email');
        document.getElementById('resultDob').innerText = localStorage.getItem('dateOfBirth');
        document.getElementById('resultAge').innerText = localStorage.getItem('age');
        document.getElementById('resultGender').innerText = localStorage.getItem('gender');
        document.getElementById('resultPhoneNumber').innerText = localStorage.getItem('phoneNumber');
        document.getElementById('resultAddress').innerText = localStorage.getItem('address');
    }
});
