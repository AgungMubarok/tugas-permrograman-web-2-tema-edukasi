var kelasId = localStorage.getItem('kelasID');
var listVideoId = localStorage.getItem("listVideo");

const detailTitle = (event, id) => {
  event.preventDefault();
  localStorage.setItem('listVideo', id);
  window.location.reload();
}

const listStyle = () => {
  if (idList);
  document.getElementById("listClass").classList.add("list-group-item-success");
}

const getVideoByID = async (id) => {
  let endPoint = `https://60f57a3218254c00176dfed0.mockapi.io/kelas/${id}`;
  let response = await fetch(endPoint);
  let result = await response.json();
  console.log(result);
  
  document.getElementById('showKelas').innerHTML = `<h1 class="text-center py-5">${result.name}</h1>`

  result.listVideo.map((e) => {
    if(e.id == listVideoId) {
      document.getElementById('detailVideo').innerHTML += `
        <iframe src=${e.urlYoutube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `
    }
  })

  result.listVideo.map((e) => {
    if(e.id == listVideoId) {
      document.getElementById('detail').innerHTML += `
        <a 
          id="listClass"
          onclick="detailTitle(event, ${e.id})" 
          class="list-group-item list-group-item-action list-group-item-success"
        >
          ${e.detailTitle}
        </a>
      `
    } else {
      document.getElementById('detail').innerHTML += `
        <a 
          id="listClass"
          onclick="detailTitle(event, ${e.id})" 
          class="list-group-item list-group-item-action"
        >
          ${e.detailTitle}
        </a>
      `
    }
  })
}

getVideoByID(kelasId)
classSection("https://60f57a3218254c00176dfed0.mockapi.io/kelas");