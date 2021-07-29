const logout = () => {
  localStorage.setItem("hasLogin", false);
  window.location.replace('../login.html');
}

logout();