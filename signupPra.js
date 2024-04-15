let formData = JSON.parse(localStorage.getItem("formData")) || [];
function handleSubmit(event) {
  event.preventDefault();
  let name = document.getElementById("name");
  let nameValue = name.ariaValueMax;

  let email = document.getElementById("email");
  let emailValue = email.value;

  let password = document.getElementById("passwrod");
  let passValue = password.value;

  let confirmPassword = document.getElementById("confirmPassword");
  let confirmPasswordValue = confirmPassword.value;

  let gender = document.getElementById("gender");
  let genderInput = gender.value;

  let sigupData = {
    name: nameValue,
    email: emailValue,
    password: passValue,
    password: confirmPasswordValue,
    gender: genderInput,
  };

  if (
    !nameValue ||
    !emailValue ||
    !passValue ||
    !genderInput ||
    !confirmPasswordValue
  ) {
    alert("This required field is empty save");
  } else if (password !== confirmPasswordValue) {
    alert("This password does not match");
  }
  formData.push(sigupData);
  localStorage.setItem("formData", JSON.stringify(formData));

  alert("Your are successfull signup");

  nameValue = "";
  emailValue = "";
  passValue = "";
  genderValue = "";
}
let signup_form = document.getElementById("handleSubmit");
signup_form.addEventListener("submit", handleSubmit);
