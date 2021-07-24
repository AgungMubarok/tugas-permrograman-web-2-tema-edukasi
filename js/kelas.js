var haslogin = localStorage.getItem('hasLogin');

const cekLogin = () =>{
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

const detail = (event, id) => {
  event.preventDefault();
  localStorage.setItem('kelasID', id);
  // if(haslogin === true){
    window.location.replace('../detail-kelas.html');
  // } else {
  //   swal("Gagal", "Anda harus login terlebih dahulu!", "error")
  //   .then(() => {
  //     window.location.replace('../index.html')
  //   });
  // }
}

const classSection = async(url) => {
  let response = await fetch(url, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  });
  let data = await response.json();
  data.map((element) => {
      document.getElementById('kelas').innerHTML += 
      `
      <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
          <a onclick="detail(event, ${element.id})" style="text-decoration: none; color: black;">
            <img src=${element.urlImage} class="card-img-top" width=100 height=230 style="object-fit: cover;" alt=${element.name}>
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <div class="d-flex justify-content-between">
                <p>Total Kelas</p>
                <p>${element.totalPelajaran} Materi</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      `
    }
  );
};

cekLogin();
classSection("https://60f57a3218254c00176dfed0.mockapi.io/kelas");