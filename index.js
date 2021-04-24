
// Get movies made by Davids using imdb api
async function getDavids() {
    let response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=0280dba172ca6d48aca63dc2fd6df2be/person?query=david');
    let data = await response.json()
    return data;
}

getDavids().then(data => console.log(data));

// Cool background color change and emoji for *aesthetics*
var i = 0;

function updateBackground() {
  let doc = document.getElementById("background");
  let color = ["#faf884", "powderblue", "#f8b88b", "#baed91", "white"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}

function updateImage() {
    let img = document.getElementById("home-image");
    let images = ["./assets/movie_camera.png", "./assets/camera.png", "./assets/flash_camera.png", "./assets/popcorn.png", "./assets/magnifying_glass.png"];
    img.src = images[i];
    i = (i + 1) % color.length;
}

setInterval(updateBackground, 1000);
setInterval(updateImage, 1000);