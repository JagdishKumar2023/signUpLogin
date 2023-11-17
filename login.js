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

  if (user && user.password === passValue) {
    alert("login successfull");
    emailInput.value = "";
    passInput.value = "";
    emailInput.focus();
  } else {
    alert("please check your password");
    passInput.focus();
  }
};

loginForm.addEventListener("submit", handleLogin);
