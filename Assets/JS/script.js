document.addEventListener('DOMContentLoaded', function() {
    const toggleSignupButton = document.getElementById('toggle-signup');
    const toggleLoginButton = document.getElementById('toggle-login');
    const loginCard = document.querySelector('.login-card');
    const signupCard = document.querySelector('.signup-card');
    const receiptCard = document.querySelector('.receipt-card');

    toggleSignupButton.addEventListener('click', function() {
        loginCard.classList.add('hidden');
        signupCard.classList.remove('hidden');
        receiptCard.classList.add('hidden');
    });

    toggleLoginButton.addEventListener('click', function() {
        loginCard.classList.remove('hidden');
        signupCard.classList.add('hidden');
        receiptCard.classList.add('hidden');
    });

    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        showReceipt(username, password);
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const firstName = document.getElementById('signup-firstname').value;
        const lastName = document.getElementById('signup-lastname').value;
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        showReceipt(firstName, lastName, username, password);
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const firstName = document.getElementById('signup-firstname').value;
        const lastName = document.getElementById('signup-lastname').value;
        const password = document.getElementById('signup-password').value;
        showReceipt(username, firstName, lastName, password);
    });
    
    function showReceipt(username, firstName, lastName, password) {
        const receiptWelcome = document.getElementById('receipt-welcome');
        const receiptUsername = document.getElementById('receipt-username');
        const receiptFirstName = document.getElementById('receipt-firstname');
        const receiptLastName = document.getElementById('receipt-lastname');
        const receiptPassword = document.getElementById('receipt-password');
    
        receiptWelcome.textContent = `Welcome, ${firstName} ${lastName}!`;
        receiptUsername.textContent = username;
        receiptFirstName.textContent = firstName;
        receiptLastName.textContent = lastName;
        receiptPassword.textContent = password;
    
        loginCard.classList.add('hidden');
        signupCard.classList.add('hidden');
        receiptCard.classList.remove('hidden');
    }   
    const goBackButton = document.getElementById('go-back');

    goBackButton.addEventListener('click', function() {
        loginCard.classList.remove('hidden');
        signupCard.classList.add('hidden');
        receiptCard.classList.add('hidden');
});
 
});
