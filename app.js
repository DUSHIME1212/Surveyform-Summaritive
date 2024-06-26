document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('Lastname').value;
    const firstnameError = document.getElementById('firstnameError');
    const lastnameError = document.getElementById('LastnameError');

    if (!/^[a-zA-Z0-9_]{3,16}$/.test(firstname)) {
        firstnameError.textContent = 'Username must be 3-16 characters long and contain only letters, numbers, and underscores.';
        firstnameError.style.visibility = 'visible';
        isValid = false;
    } else {
        firstnameError.style.visibility = 'hidden';
    }

    if (!/^[a-zA-Z0-9_]{3,16}$/.test(lastname)) {
        lastnameError.textContent = 'Username must be 3-16 characters long and contain only letters, numbers, and underscores.';
        lastnameError.style.visibility = 'visible';
        isValid = false;
    } else {
        lastnameError.style.visibility = 'hidden';
    }

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        emailError.textContent = 'Invalid email format.';
        emailError.style.visibility = 'visible';
        isValid = false;
    } else {
        emailError.style.visibility = 'hidden';
    }

    const textarea = document.getElementById('textarea').value;
    const textareaError = document.getElementById('textareaError');
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{30,}$/.test(password)) {
        textareaError.textContent = 'Password must be at least 30 characters long and contain at least one letter and one number.';
        textareaError.style.visibility = 'visible';
        isValid = false;
    } else {
        passwordError.style.visibility = 'hidden';
    }

    if (isValid) {
        document.getElementById('successMessage').textContent = 'Registration successful!';
        document.getElementById('successMessage').style.visibility = 'visible';
    } else {
        document.getElementById('successMessage').style.visibility = 'hidden';
    }
});
