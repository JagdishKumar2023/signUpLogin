let loginForm = document.getElementById("handleLogin");

let handleLogin = (event) => {
  event.preventDefault();

  //   getting data from localStorage:-
  let userSingupdata = JSON.parse(localStorage.getItem("userSignupData"));

  let emailInput = document.getElementById("email");
  let emailValue = emailInput.value;

  let passInput = document.getElementById("password");
  let passValue = passInput.value;

  //   console.log(emailValue, passValue);

  let user = userSingupdata.find((ele) => {
    if (ele.email === emailValue) {
      return ele;
    }
  });

  if (!user) {
    alert("user does not exist");
  } else if (user.password !== passValue) {
    alert("password does not match");
    passInput.focus();
  } else {
    alert("login successful");
    emailInput.value = "";
    passInput.value = "";
    emailInput.focus();
  }
};

loginForm.addEventListener("submit", handleLogin);
