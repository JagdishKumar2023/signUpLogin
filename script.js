let handleSignup = (event) => {
  event.preventDefault();

  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  let nameInput = document.getElementById("name");
  let nameValue = nameInput.value;

  let telInput = document.getElementById("tel");
  let telValue = telInput.value;

  let emailInput = document.getElementById("email");
  let emailValue = emailInput.value;

  let passwordInput = document.getElementById("password");
  let passValue = passwordInput.value;

  let confirmPassword = document.getElementById("confirmPassInput");
  let confirmValue = confirmPassword.value;

  let signUpData = {
    name: nameValue,
    phone: telValue,
    eamil: emailValue,
    password: passValue,
    confirmPassword: confirmValue,
  };

  if(
    !nameValue||
    !telValue ||
    !emailValue||
    !passValue ||
    !confirmValue||
  ){
    alert(`Please fill required filed`);
  } else if (passValue !== confirmValue){
     alert(`Password and confirm password does not match`);

  }else {
    userData.push(signUpData);
    localStorage.setItem("userData",JSON.stringify("userData"));

    alert("signed up sucessfull");
    nameInput.value = "";
    telInput.value = "";
    emailInput.value = "";
    passInput.value = "";
    confirmPassInput.value = "";

    nameInput.focus();

  }

};
