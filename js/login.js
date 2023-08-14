document.getElementById('btn-submit').addEventListener('click', function(){

    const emailField = document.getElementById('email-field');
    const yourEmail = emailField.value;

    const passwordField = document.getElementById('password-field');
    const yourPassword = passwordField.value;

    if(yourEmail === 'alif@gmail.com' && yourPassword === '1856923505'){
        window.location.href = "http://127.0.0.1:5500/bank.html"
    }
    else{
        alert('Invalid Password')
    }
})