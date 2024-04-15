let formhandleLogin = document.getElementById("handleLogin");

let handleLogin = (e) => {
  e.preventDefault();

  userDataForm = JSON.parse(localStorage.getItem("userDataForm"));

  let nameInput = document.getElementById("name");
  let nameValue = nameInput.value;

  let emailInput = document.getElementById("email");
  let emaiValue = emailInput.value;

  let passInput = document.getElementById("password");
  let passValue = passInput.value;

  let genderInput = document.getElementById("gender");
  let genderValue = genderInput.value;

  let signUpData = {
    name: nameValue,
    email: emaiValue,
    password: passValue,
    gender: genderValue,
  };

  if (!nameValue || !emaiValue || !passValue || !genderValue) {
    alert(`Please filled required filled`);
  } else if (passValue !== confirmedPassword) {
    alert(`Password and confirm password does not match `);
  } else {
    userDataForm.push(signUpData);
    localStorage.setItem("userData", JSON.stringify(signUpData));

    alert("signed up successfull ");
    (nameInput.value = ""),
      (emailInput.value = ""),
      (passInput.value = ""),
      (genderInput.value = ""),
      nameInput.value.focus();
  }
};

let signup_form = document.getElementById("handlesignup");
signup_form.addEventListener("submit", handleLogin);
