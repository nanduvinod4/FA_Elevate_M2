function handlesubmit(){
    const message = document.getElementById('message');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    message.style.display = "none";
    console.log(email);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
        message.innerText = "Please enter a valid E-mail";
        message.style.display = "block";
        return false;
    }
    if (password.length < 8){
        message.innerText = "Incorrect Password";
        message.style.display = "block";
        return false;
    }
    return true;
}