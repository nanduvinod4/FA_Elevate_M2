function handlesubmit(){
    const message = document.getElementById('message');
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    message.style.display = "none";
    if (firstname.length == 0){
        message.innerText = "Please Enter Your Full Name";
        message.style.display = "block";
        return false;
    }
    if (lastname.length == 0){
        message.innerText = "Please Enter Your Full Name";
        message.style.display = "block";
        return false;
    }
    if (/^\+?([0-9]{3})\)?[ -]?([0-9]{3})[ -]?([0-9]{4})$/.test(number) == false){
        message.innerText = "Please enter a valid Mobile Number";
        message.style.display = "block";
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
        message.innerText = "Please enter a valid E-mail";
        message.style.display = "block";
        return false;
    }
    if (password.length < 8){
        message.innerText = "Password must be contain 8 characters";
        message.style.display = "block";
        return false;
    }
    if (password2 != password){
        message.innerText = "Those passwords didn’t match. Try again.";
        message.style.display = "block";
        return false;
    }
    return true
}