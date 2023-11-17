let handleSignup = (event) => {
  event.preventDefault();

  let signupData = JSON.parse(localStorage.getItem("signupData"));

  let nameInput = document.getElementById("name");
  let nameValue = nameInput.value;

  let numberInput = document.getElementById("tel");
  let numberValue = numberInput.value;

  let eamilInput = document.getElementById("eamil");
  let eamilValue = eamilInput.value;

  let passInput = document.getElementById("password");
  let passValue = passInput.value;

  let confirmPassInput = document.getElementById("confirmPassInput");
  let confirmValue = confirmPassInput.value;

  let sigupData = {
    name: nameValue,
    number: numberValue,
    email: eamilValue,
    password: passValue,
    confirmPass: confirmValue,
  };

  if (
    !nameValue ||
    !numberValue ||
    !eamilValue ||
    !passValue ||
    !confirmValue
  ) {
    alert(`please fill the required value`);
  } else if (passValue !== confirmValue) {
    alert(`please enter valied password`);
  } else {
    signupData.push(sigupData);
  }

  localStorage.setItem("userSignupData", JSON.stringify(signupData));

  nameInput.value = "";
  telInput.value = "";
  eamilInput.value = "";
  passValue.value = "";
  confirmValue.value = "";

  nameInput.focus();
};

let sigup_form = document.getElementById("handleSignup");
sigup_form.addEventListener("submit", handleSignup);
