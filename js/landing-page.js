const cekLogin = () =>{
  let haslogin = localStorage.getItem('hasLogin');
  
  if (haslogin == "true") {
    return document.getElementById('hasLog').innerHTML = 
    `
      <div class="d-grid gap-3 d-md-flex justify-content-md-end">
        <div class="dropdown">
          <a href="#" class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/asset/icons/icon-user.svg" />
          </a>
          <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton1">
            <li><span class="dropdown-item">Nama Lengkap</span></li>
            <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    `
  } else if (haslogin == "false" || haslogin ==  null){
    return document.getElementById('hasLog').innerHTML = 
    ` 
      <a class="btn btn-success" href="#" role="button">Login</a>
      <a class="btn btn-outline-success" href="#" role="button">Daftar</a>
    `
  }
}

const classSection = async(url) => {
  let response = await fetch(url, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  });
  let data = await response.json();
  console.log(data.length);
  data.slice(0, 3).map((element) => {
      document.getElementById('kelas').innerHTML += 
      `
        <div class="card m-2" style="width: 18rem;">
          <a href="#" style="text-decoration: none; color: black;">
            <img src=${element.urlImage} class="card-img-top" width=100 height=230 style="object-fit: cover;" alt=${element.name}>
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <div class="d-flex justify-content-lg-between">
                <p>Total Kelas</p>
                <p>${element.totalPelajaran}</p>
              </div>
            </div>
          </a>
        </div>
      `
    }
  );
}

cekLogin();
classSection("https://60f57a3218254c00176dfed0.mockapi.io/kelas");