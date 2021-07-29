function login(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let email2 = localStorage.getItem("email");

  let password = document.getElementById("password").value;
  let password2 = localStorage.getItem("password");

  if ( (email && password) == (email2 && password2) ) {
    localStorage.setItem("hasLogin", true);
    window.location.replace('../index.html');
  } else {
    return swal("Peringatan!", "Password atau Email Salah atau tidak terdaftar!", "warning");
  }
}

const checkLogin = () => {
  let hasLogin = localStorage.getItem('hasLogin');
  if(hasLogin == "true") {
    window.location.replace('../index.html');
  }
}

checkLogin();
