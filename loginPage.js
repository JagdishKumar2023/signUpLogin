let loginForm = document.getElementById("handleLogin");

let handleLogin = (event) => {
  event.preventDefault();

  let userSingupdata = JSON.parse(localStorage.getItem("userSinghupData"));

  let emailInput = document.getElementById("email");

  let passInput = document.getElementById("password");
  let passValue = passInput.value;

  let user = userSingupdata.find((ele) => {
    if (ele.email === emailValue) {
      return ele;
    }
  });

  if (!user) {
    alert("User does not exist");
  } else if (user.password !== passValue) {
    alert("Pasword does not match");
    (emailInput.value = ""), (passInput.value = ""), emailInput.focus();
  }
};
