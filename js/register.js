function register(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;

  let password = document.getElementById("password").value;

  let username = document.getElementById("nama").value;

  if ( email && password && username ) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("nama", username);
      localStorage.setItem("hasLogin", true);
      window.location.replace('../index.html');
  } else {
      swal("Peringatan!", "Data tidak boleh kosong!", "warning");
  }
}

const checkLogin = () => {
  let hasLogin = localStorage.getItem('hasLogin');
  if(hasLogin == "true") {
      window.location.replace('../index.html');
  }
}

checkLogin();